import { CURRENT_XVALUE } from './transformTypes'

export const setXvalue = (current) => {
  return {
    type: CURRENT_XVALUE,
    payload:current
  }
}