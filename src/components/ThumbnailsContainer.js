import React, {useEffect} from 'react';
import {useThumbnailState} from './../context/ThumbnailContext';
import Thumbnail from './Thumbnail';

const ThumbnailsContainer = () => {
  const {thumbnails} = useThumbnailState();

  return (
    <div className="p-3 w-11/12 flex flex-wrap justify-center items-center">
      {thumbnails.length &&
        thumbnails.map(thumb => <Thumbnail key={thumb.id} thumbnail={thumb} />)}
    </div>
  );
};

export default ThumbnailsContainer;
