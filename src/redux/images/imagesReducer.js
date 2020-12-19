import { SET_IMAGES } from './imagesReducer'

const initialState = {
  images: []
}

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES: return {
      ...state,
      category: state.images
    }

    default: return state
  }
}

export default imagesReducer