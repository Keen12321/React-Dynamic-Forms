import React, { Component } from 'react'
import axios from 'axios'

class PhotoView extends Component {
	state = {
		name: '',
		url: ''
	}

	componentDidMount() {
		axios.get(`http://localhost:3001/images/${this.props.match.params.id}`).then(resp => {
			
		console.log(resp.data)
			this.setState ({
				name: resp.data.name,
				url: resp.data.url
			})
		})
	}

 	render() {
   	return (
 			<div>
					<div className="bigPictureContainer">
						<div className="bigPictureName">{this.state.name}</div>
						<img className="bigPicture" src={this.state.url} alt="" />
					</div>
 			</div>
  	)
 	}
}

export default PhotoView