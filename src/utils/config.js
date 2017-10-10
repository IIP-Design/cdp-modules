
const defaultImage =  {
  shape: 'rectangle',           // rectangle or circle
  width: '220px',
  borderWidth: 0,             
  borderColor: 'transparent'    
}

const defaultUI = {
  direction: 'row',               // row or column
  layout: 'default',              // default or blog 
  divider: 'transparent',         // border style
  image: defaultImage
}

const getImageUI = ( imageConfig ) => {
  if( !imageConfig ) {
    return defaultImage;
  } else {
    const image = {
      shape: imageConfig.shape || 'rectangle',          
      width: imageConfig.width || '220px',
      borderWidth: imageConfig.borderWidth || 0,             
      borderColor: getImageBorderColor( imageConfig ),
      borderStyle: imageConfig.borderStyle || 'solid'
    }
    return image
  }
}

const getImageBorderColor = ( imageConfig ) => {
  let borderColor = 'transparent';
  if( imageConfig.borderWidth ) {
     borderColor = imageConfig.borderColor || '#ddd' 
  }
  return borderColor;
}

export const getDefaultConfig = () => {
  return {
    sites: '', 
    ids: '',
    size: '3', 
    types: '', 
    langs: '',
    tags: '',
    categories: '',
    meta: ''
  }
};

export const getUIConfig = ( config ) => {
  if( !config.ui ) {
    return defaultUI;
  } else {
    const ui = {
      layout: config.ui.layout || 'default',
      direction: config.ui.direction || 'row',
      divider: config.ui.divider || 'transparent',
      image: getImageUI( config.ui.image )
    }
    return ui;
  }
}