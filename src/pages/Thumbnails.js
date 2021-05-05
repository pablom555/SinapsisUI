import React, {useEffect} from 'react';
import {
  useThumbnailState,
  useThumbnailDispatch,
} from './../context/ThumbnailContext';
import {cleanThumbnails} from './../actions/thumbnail';
import Layout from './Layout';
import Loading from '../components/Loading';
import ThumbnailsContainer from '../components/ThumbnailsContainer';

const Thumbnails = () => {
  const thumbnailDispatch = useThumbnailDispatch();
  const {thumbnails, loading} = useThumbnailState();

  useEffect(() => {
    console.log('loading', loading);
    console.log('thumbnails', thumbnails);

    return () => {
      console.log('se desmonta');
      cleanThumbnails(thumbnailDispatch);
    };
  }, [thumbnails, loading, thumbnailDispatch]);

  return loading || !thumbnails.length  ? (
    <Loading />
  ) : (
    <Layout>
      <ThumbnailsContainer/>
    </Layout>
  );
};

export default Thumbnails;
