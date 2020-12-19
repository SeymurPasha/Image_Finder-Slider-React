import { SET_MODAL } from './modalTypes'

const initialState = {
  displayModal: true
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL: return {
      ...state,
      displayModal: state.displayModal
    }

    default: return state
  }
}

export default modalReducer