import placeholderImage from '../assets/image.png';

// @todo add size param to pull other sizes
export const getImage = ( article  ) => {
  let image;
  if( article.featured_image && 
      article.featured_image.sizes && 
      article.featured_image.sizes.medium ) {
          image = article.featured_image.sizes.medium.url;
      } else {
          image = placeholderImage;
      }
  return image;
}
