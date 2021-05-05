import React, {useState} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {useHistory} from 'react-router-dom';
import { toast, snackbar } from 'tailwind-toast';
import Layout from './Layout';
import Loading from '../components/Loading';
import ButtonUpload from '../components/ButtonUpload';
import PrevImage from '../components/PrevImage';
import {getThumbnails} from './../actions/thumbnail';
import {useThumbnailDispatch} from './../context/ThumbnailContext';

const HomePage = () => {
  const {isLoading} = useAuth0();
  const history = useHistory();
  const [file, setFile] = useState(null);

  const thumbnailDispatch = useThumbnailDispatch();

  const handleUpload = file => {
    const formData = new FormData();
    formData.append('image', file);
    getThumbnails(thumbnailDispatch, {formData});
    history.push('/thumbnails');
  };

  const handleDelete = () => {
    setFile(null);
  };

  const handleOnChange = e => {

    const file = e.target.files[0];
    const types = ['image/png', 'image/jpeg', 'image/gif'];

    if (types.every(type => file.type !== type)) {
      toast().danger('Image Error', `'${file.type}' is not a supported format`).show()
      return;      
    }

    if (file.size > 150000) {
      toast().danger('Image Error', `'${file.name}' is too large, please pick a smaller file`).show()
      return;
    }

    setFile(file);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Layout>
      <ButtonUpload onChange={handleOnChange} />
      {file && (
        <PrevImage
          file={file}
          onDelete={handleDelete}
          onUpload={handleUpload}
        />
      )}
    </Layout>
  );
};

export default HomePage;
