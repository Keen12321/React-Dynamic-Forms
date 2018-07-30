import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
	state = {
		albums: [],
		id: '',
		name: '',
		cover: ''
	}

	componentDidMount() {
		axios.get('http://localhost:3001/albums').then(resp => {
		console.log(resp.data)
			this.setState({
				albums: resp.data,
				id: resp.data.id,
				name: resp.data.name,
				cover: resp.data.cover
			})
		})
	}

 render() {
   return (
 			<div>
				<div className='title'>Austin's Photo Albums</div>
					<div className='homeContainer'>
					{this.state.albums.map((data, i) => (
						<Link to={`/album/${data.id}`}>
							<div className='albumContainer'>
								<img className='albumCovers' src={data.cover} alt=''/>
								<div className='albumTitles'>{data.name}</div>
							</div>
						</Link>
					))}
					</div>
 			</div>
   	)
 	}
}

export default Home