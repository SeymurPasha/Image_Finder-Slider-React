import { SET_CURRENT } from './currentTypes'

export const setCurrent = (id) => {
  return {
    type: SET_CURRENT,
    payload:id
  }
}