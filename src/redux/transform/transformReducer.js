import { CURRENT_XVALUE } from './transformTypes'
import { LEFT_ACTION } from './transformTypes'
import { RIGHT_ACTION } from './transformTypes'

const initialState = {
  xValue: 0
}

const transformReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_XVALUE: return {
      ...state,
      xValue: action.payload * (-800)
    }
    case LEFT_ACTION: return {
      ...state,
      xValue: state.xValue + 800
    }
    case RIGHT_ACTION: return {
      ...state,
      xValue: state.xValue - 800
    }

    default: return state
  }
}

export default transformReducer