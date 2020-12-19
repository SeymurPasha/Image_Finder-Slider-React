import { SET_XVALUE } from './transformTypes'

export const setXvalue = (value) => {
  return {
    type: SET_XVALUE,
    payload: value
  }
}