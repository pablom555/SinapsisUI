const getThumbnails = (dispatch, {formData}) => {
  // Lo pongo aca para que cada vez que se llama esta funcion se genere
  // un ID diferente y mute el objeto
  const mockThumbnail = {
    problem: false,
    data: [
      {id: 1, thumbSize: 500, url: '/thumb/thumb-16.jpg'},
      {id: 2, thumbSize: 500, url: '/thumb/thumb-17.jpg'},
      {id: 3, thumbSize: 500, url: '/thumb/thumb-18.jpg'},
    ],
  };

  try {
    dispatch({type: 'THUMBNAIL_REQUEST'});

    /*
      Aca Podria ir llamado a API thumbnail-generator-api
      enviando formData con la imagen
    */

    const {data, problem} = mockThumbnail;

    if (problem) {
      dispatch({type: 'THUMBNAIL_ERROR', problem});
    } else {
      dispatch({type: 'THUMBNAIL_SUCCESS', data});
    }
  } catch (error) {
    dispatch({type: 'THUMBNAIL_ERROR', error});
  }
};



const cleanThumbnails = dispatch => {
  const data = [];
  dispatch({type: 'THUMBNAIL_SUCCESS', data});
}

export {getThumbnails, cleanThumbnails};
