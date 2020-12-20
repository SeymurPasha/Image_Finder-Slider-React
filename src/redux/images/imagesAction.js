import axios from 'axios'

import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from './imagesTypes'


export const fetchImages = (category) => {
  return (dispatch) => {
    dispatch(fetchImagesRequest())
    axios
      .get(`https://pixabay.com/api/?key=17244600-fbf402d1996aa90a6382bacde&q=${category}&image_type=photo&per_page=15&min_width=800&min_height=500`)
      .then(response => {
        const images = response.data.hits
        dispatch(fetchImagesSuccess(images))
      })
  }
}

export const fetchImagesRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchImagesSuccess = images => {
  
  return {
    type: FETCH_USERS_SUCCESS,
    payload: images
  }
}
