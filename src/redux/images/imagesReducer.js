import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './imagesTypes'

const initialState = {
  loading: false,
  images: []
}

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        images: action.payload
      }
    default: return state
  }
}


export default imagesReducer