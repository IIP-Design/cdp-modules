
const defaultImage =  {
  shape: 'rectangle',           // rectangle or circle
  width: '220px',
  borderWidth: 0,             
  borderColor: 'transparent'    
}

const defaultUI = {
  direction: 'row',               // row or column
  layout: 'default',              // default or blog 
  textAlignment: 'left',          // left, center, right
  divider: 'transparent',         // border style
  image: defaultImage
}

const formatWidth = ( width ) => {
  if( !width ) return;
  return ( ~width.indexOf( 'px') ? width : width + 'px' )
}

const getImageUI = ( imageConfig ) => {
  if( !imageConfig ) {
    return defaultImage;
  } else {
    const image = {
      shape: imageConfig.shape || 'rectangle',          
      width: formatWidth(imageConfig.width) || '220px',
      borderWidth: formatWidth(imageConfig.borderWidth) || 0,             
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
    from: 0,
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
      openLinkInNewWin: (config.ui.openLinkInNewWin === "no" ) ? "_self" : "_blank",
      direction: config.ui.direction || 'row',
      textAlignment: config.ui.textAlignment || 'left',
      divider: config.ui.divider || 'transparent',
      image: getImageUI( config.ui.image )
    }
    return ui;
  }
}