import { SET_CURRENT } from './currentTypes'

const initialState = {
  current: 0
}

const currentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT: return {
      ...state,
      current: action.payload
    }

    default: return state
  }
}

export default currentReducer