import placeholderImage from '../assets/image.png';

export const getImage = ( article, minHeight = 0 ) => {
  let image;
  if ( article.featured_image && article.featured_image.sizes ) {
    image = getImageSize( article.featured_image.sizes, minHeight );
  }
  if( !image ) {
    image = placeholderImage;
  }
  return image;
};

/**
 * Return url of size prop that is >= minHeight and has smallest width
 * @param {object} sizes      object that contains size props (i.e. full, medium, etc.)
 * @param {number} minHeight  minHeight requested
 */
function getImageSize( sizes, minHeight ) {
  let a = [];
  // loop over object props and get obj with height shortest height greater than minHeight
  for ( let size in sizes ) { 
    let s = sizes[size];
    if ( s.height >= minHeight ) {
      a.push(s);
    }
  }

  // now loop over to get shortest width
  a.sort( function(a, b) {
    return +a.width - +b.width;
  } );

  return a[0].url;
}
