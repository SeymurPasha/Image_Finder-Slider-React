import { SET_XVALUE } from './transformTypes'

const initialState = {
  xValue: 0
}

const transformReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_XVALUE: return {
      ...state,
      xValue: action.payload
    }

    default: return state
  }
}

export default transformReducer