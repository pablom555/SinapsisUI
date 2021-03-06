import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons';

const ButtonUpload = ({onChange}) => {
  return (
    <>
      <div className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 mr-6">
        <label htmlFor="single">
          <FontAwesomeIcon
            icon={faImage}
            color="#ec4899"
            size="10x"
            className="cursor-pointer"
          />
        </label>
        <input
          type="file"
          id="single"
          accept="image/*"
          className="invisible absolute"
          onChange={onChange}
          onClick={e => (e.target.value = null)}
        />
        <span className="text-gray-900 absolute top-6 left-20 z-10 text-lg font-bold">Upload</span>
      </div>
    </>
  );
};

export default ButtonUpload;
