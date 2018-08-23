import axios from 'axios'
import store from '../store'

export function getAlbums() {
	axios.get('http://localhost:3001/albums').then(resp => {
		store.dispatch({
			type: 'GET_ALBUMS',
			payload: resp.data
		})
	})
}

export function getAlbum(id) {
	axios.get(`http://localhost:3001/albums/${id}?_embed=photos`).then(resp => {
		store.dispatch({
			type: 'GET_ALBUM',
			payload: resp.data
		})
	})
}

export function getPhoto(id) {
	axios.get(`http://localhost:3001/photos/${id}?_expand=album`).then(resp => {
		store.dispatch({
			type: 'GET_PHOTO',
			payload: resp.data
		})
	})
}

export function postAlbum(post) {
	axios.post(`http://localhost:3001/albums`, post).then(resp => {
	})
}

export function postPhoto(id, post) {
	axios.post(`http://localhost:3001/photos/${id}`, post).then(resp => {
	})
}