const initialState = {
  thumbnails: [],
  loading: false,
  error: false,
};

const  thumbnailReducer = (state, action) => {
  switch (action.type) {
    case 'THUMBNAIL_REQUEST': {
      return { ...state, loading: true, error: false };
    }
    case 'THUMBNAIL_SUCCESS': {
      return { ...state, thumbnails: action.data, loading: false, error: false };
    }
    case 'THUMBNAIL_ERROR': {
      return { ...state, loading: false, error: true };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export { thumbnailReducer, initialState };