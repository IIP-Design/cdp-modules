import React from 'react';
import { Preloader, Puff } from 'react-preloader-icon';

const style = {
  color: '#999',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  fontSize: '13px',
};

const Loader = () => (
  <div style={ style }>
    <Preloader
      duration={ 1500 }
      size={ 40 }
      strokeColor="#ccc"
      strokeWidth={ 8 }
      style={ { margin: '5px auto' } }
      use={ Puff }
    />
    Loading...
  </div>
);

export default Loader;
