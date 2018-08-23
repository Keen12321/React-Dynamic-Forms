import React, { Component } from 'react'
import { getPhoto } from '../actions/albumActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class SinglePhoto extends Component {

	componentDidMount() {
		getPhoto(this.props.match.params.id)
	}

 	render() {
   	return (
 			<div>
 				<Link to={`/album/${this.props.currentPhoto.album.id}`} className="secondBackButton">Back</Link>
				<div className="bigPictureContainer">
					<div className="bigPictureName">{this.props.currentPhoto.name}</div>
					<img className="bigPicture" src={this.props.currentPhoto.url} alt="" />
				</div>
 			</div>
  	)
 	}
}

function mapStateToProps(appState) {
	return {
		currentPhoto: appState.currentPhoto
	}
}

export default connect(mapStateToProps)(SinglePhoto)