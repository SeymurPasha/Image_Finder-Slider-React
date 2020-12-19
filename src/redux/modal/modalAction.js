import { SET_MODAL } from './modalTypes'

export const setModal = (number = 1) => {
  return {
    type: SET_MODAL,
    payload: number
  }
}