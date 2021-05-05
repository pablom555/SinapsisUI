import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const PrevImage = ({file, onDelete, onUpload}) => {
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    setFileUrl(URL.createObjectURL(file));
  }, [file]);

  return (
    <div className="img-container">
      <button onClick={() => onDelete()} className="delete">
        <FontAwesomeIcon
          color="#ec4899"
          icon={faTimesCircle}
          size="2x"
          className="bg-gray-900"
        />
      </button>
      <div className="p-3 rounded-md border-solid border-2 border-pink-500">
        <input
          type="image"
          src={fileUrl}
          alt=""
          className="opacity-50 hover:opacity-100 focus:opacity-100 bg-gray-900 rounded-md border-solid border-2 border-pink-500 transition duration-500 transform hover:-translate-y-3 hover:scale-125 cursor-pointer"
          onClick={()=> onUpload(file)}
          onKeyPress={e => {
            if (e.key === 13) {
              onUpload(file);
            }
          }}
        />
      </div>
    </div>
  );
};

export default PrevImage;
