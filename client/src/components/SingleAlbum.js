import React, { Component } from 'react'
import { getAlbum, getAlbums } from '../actions/albumActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class SingleAlbum extends Component {

	componentDidMount() {
		getAlbums()
		getAlbum(this.props.match.params.id)
	}
	
	componentWillReceiveProps(newProps) {
		if ( this.props.match.params.id !== newProps.match.params.id)  {
			getAlbum(newProps.match.params.id)
		}
	}

 	render() {
   	return (
   		<div className="singleAlbumContainer">
   			<Link to="/" className="firstBackButton">Back</Link>
   			<Link to="/postPhoto">Post New Photo</Link>
	 			<div className="sidebarContainer">
	 				{this.props.albums.map(data => (
	 					<div className="sidebarName">
							<Link to={`/album/${data.id}`}>{data.name}</Link>
						</div>
	 				))}
				</div>
	 			<div className="homeContainer">
	   			<div className="albumName">{this.props.albumName.name}</div>
		 			<div className='homeImageContainer'>
		 				{this.props.currentAlbum.map((data, i) => (
		 					<div className='albumPhotoContainer'>
		 						<Link to={`/photo/${data.id}`}>
			 						<img className='albumCovers' src={data.url} alt=''/>
				 					<div className='albumTitles'>{data.name}</div>
				 				</Link>
			 				</div>
		 				))}
		 			</div>
	 			</div>
	 		</div>
   	)
 	}
}

function mapStateToProps(appState) {
	return {
		currentAlbum: appState.currentAlbum.photos,
		albums: appState.albums,
		albumName: appState.currentAlbum
	}
}

export default connect(mapStateToProps)(SingleAlbum)