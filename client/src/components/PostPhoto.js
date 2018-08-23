import React, { Component } from 'react'
import { postPhoto } from '../actions/albumActions'

class PostPhoto extends Component {
	state = {
		albumId: '',
		name: '',
		url: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		postPhoto({
			albumId: this.props.match.params.id,
			name: this.state.name,
			url: this.state.url
		})
	}

 	render() {
   	return (
 			<div>
 				<form onSubmit={this.handleSubmit}>
 					<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
 					<input type="url" name="url" value={this.state.url} onChange={this.handleChange} />
 					<input type="submit" />
 				</form>
 			</div>
   	)
 	}
}

export default PostPhoto