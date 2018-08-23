import React, { Component } from 'react'
import { postAlbum } from '../actions/albumActions'

class PostAlbum extends Component {
	state = {
		name: '',
		cover: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		postAlbum({
			name: this.state.name,
			cover: this.state.cover
		})
	}

 	render() {
   	return (
 			<div>
 				<form onSubmit={this.handleSubmit}>
 					<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
 					<input type="url" name="cover" value={this.state.cover} onChange={this.handleChange} />
 					<input type="submit" />
 				</form>
 			</div>
   	)
 	}
}

export default PostAlbum