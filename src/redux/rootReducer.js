import { combineReducers } from 'redux'
import imagesReducer from './images/imagesReducer'
import categoryReducer from './category/categoryReducer'
import currentReducer from './current/currentReducer'
import modalReducer from './modal/modalReducer'
import transformReducer from './transform/transformReducer'


const rootReducer = combineReducers({
  images:imagesReducer,
  category: categoryReducer,
  modal: modalReducer,
  current: currentReducer,
  xValue:transformReducer,
})

export default rootReducer