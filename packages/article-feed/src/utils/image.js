import placeholderImageArticle from '../assets/placeholder_article.jpg';
import placeholderImageCourses from '../assets/placeholder_courses.jpg';
import placeholderImagePodcast from '../assets/placeholder_podcast.jpg';
import placeholderImageVideo from '../assets/placeholder_video.jpg';

const placeholderImages = {
  post: placeholderImageArticle,
  page: placeholderImageArticle,
  courses: placeholderImageCourses,
  podcast: placeholderImagePodcast,
  video: placeholderImageVideo,
};

export const getImage = ( article, minHeight = 0 ) => {
  let image;
  const { thumbnail } = article || {};
  const tn = thumbnail && thumbnail.sizes ? thumbnail.sizes : thumbnail;

  if ( tn ) {
    image = getImageSize( tn, minHeight );
  }
  if ( !image ) {
    image = getPlaceHolderImage( article );
  }

  return image;
};

/**
 * If a featured image does not exist, return a content
 * specific placeholde rimage
 * {object} article Elastic search document
 */
export const getPlaceHolderImage = article => {
  let image;

  if ( article.type === 'post' || article.type === 'page' ) {
    image = checkForAdditionalContentType( article );
  } else {
    image = placeholderImages[article.type];
  }

  return image || placeholderImageArticle;
};

/**
 * Generic pages and posts may have an additional 'content_type' taxonomy
 * attached.  If present return the custom type, esle generic article
 * placeholder
 * @param {object} article Elastic search document
 */
export const checkForAdditionalContentType = article => {
  if ( article.custom_taxonomies && article.custom_taxonomies.content_type ) {
    const type = article.custom_taxonomies.content_type;

    if ( Array.isArray( type ) && type.length && type[0].slug ) {
      return placeholderImages[article.custom_taxonomies.content_type[0].slug];
    }
  }

  return placeholderImageArticle;
};


/**
 * Return url of size prop that is >= minHeight and has smallest width
 * @param {object} sizes      object that contains size props (i.e. full, medium, etc.)
 * @param {number} minHeight  minHeight requested
 */
function getImageSize( sizes, minHeight ) {
  const a = [];

  // loop over object props and get obj with height shortest height greater than minHeight
  for ( const size in sizes ) {
    const s = sizes[size];

    if ( s && s.height >= minHeight ) {
      a.push( s );
    }
  }

  // now loop over to get shortest width
  a.sort( ( a, b ) => +a.width - +b.width );

  return a[0] && a[0].url ? a[0].url : null;
}
