import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class AlbumView extends Component {
	state = {
		pictures: [],
		id: '',
		name: '',
		url: ''
	}

	componentDidMount() {
		axios.get(`http://localhost:3001/albums/${this.props.match.params.id}?_embed=images`).then(resp => {
			
		console.log(resp.data)
			this.setState ({
				pictures: resp.data.images,
				id: resp.data.images.id,
				name: resp.data.images.name,
				url: resp.data.images.url
			})
		})
	}

 	render() {
   	return (
 			<div className='homeContainer'>
 				{this.state.pictures.map((data, i) => (
 					<div className='albumPhotoContainer'>
 						<Link to={`/photo/${data.id}`}>
	 						<img className='albumCovers' src={data.url} alt=''/>
		 					<div className='albumTitles'>{data.name}</div>
		 				</Link>
	 				</div>
 				))}
 			</div>
   	)
 	}
}

export default AlbumView