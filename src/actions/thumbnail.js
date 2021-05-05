const getThumbnails = async (dispatch, {formData}) => {

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

    // Simulacion llamada API
    const {data, problem} = await new Promise((resolve, reject) => {
      setTimeout(() => resolve(mockThumbnail), 2000);
    });

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
};

export {getThumbnails, cleanThumbnails};
