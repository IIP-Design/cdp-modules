import React from 'react';
import PreloaderIcon, { ICON_TYPE } from 'react-preloader-icon';

const style = {
  color: '#999',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  fontSize: '13px'
}

const ListLoader = () => (
  <div style={ style }>
    <PreloaderIcon
        type={ ICON_TYPE.PUFF }
        size= { 40 }
        strokeWidth={8}
        strokeColor="#ccc"
        duration={1500}
        style={{ margin: '5px auto'}}
      />
      Loading...
  </div>
);

export default ListLoader;
