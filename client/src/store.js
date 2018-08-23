import { createStore } from 'redux'

import albumReducers from './reducers/albumReducers'

const store = createStore(albumReducers)

export default store