import React, { Component } from 'react'
import { getAlbums } from '../actions/albumActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component {

	componentDidMount() {
		getAlbums()
	}

 render() {
   return (
 			<div className="homeContainer">
 				<Link to={"/postAlbum"}> Post New Album </Link>
				<div className='title'>Austin's Photo Albums</div>
					<div className='albumsContainer'>
					{this.props.albums.map((data, i) => (
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

function mapStateToProps(appState) {
	return {
		albums: appState.albums
	}
}

export default connect(mapStateToProps)(Home)