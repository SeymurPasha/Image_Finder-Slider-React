import { SET_CATEGORY } from './categoryTypes'

export const setCategory = (name) => {
  return {
    type: SET_CATEGORY,
    payload : name
  }
}