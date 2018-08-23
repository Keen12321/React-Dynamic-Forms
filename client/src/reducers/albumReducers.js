const initialState = {
	albums: [],
	currentAlbum: {
		photos: [],
		name: ''
	},
	currentPhoto: {
		url: '',
		name: '',
		album: {
			id: ''
		}
	}
}

export default function (state = initialState, action) {
	switch(action.type) {
		case 'GET_ALBUMS':
			return {...state, albums: action.payload}
		case 'GET_ALBUM':
			return {...state, currentAlbum: action.payload}
		case 'GET_PHOTO':
			return {...state, currentPhoto: action.payload}
		default:
			return state
	}
}