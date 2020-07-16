const loadModule = () => {
  const existingScript = document.getElementById( 'cdpArticleFeed' );

  const { sites, size, types } = existingScript.dataset;

  if ( existingScript ) {
    const isDev = process.env.NODE_ENV === 'development';
    const prefix = isDev ? 'dev-' : 'gpalab-';

    const css = document.createElement( 'link' );

    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', `${process.env.CDP_MODULES_URL}${prefix}articleFeed${isDev ? '.' : '.min.'}css` );
    document.head.appendChild( css );

    const script = document.createElement( 'script' );

    script.src = `${process.env.CDP_MODULES_URL}${prefix}articleFeed${isDev ? '.' : '.min.'}js`;
    script.defer = true;
    document.body.appendChild( script );

    script.onload = () => {
      if ( CDP?.widgets?.ArticleFeed ) { // eslint-disable-line no-undef
        CDP.widgets.ArticleFeed.new( { // eslint-disable-line no-undef
          selector: '#cdp-article-feed',
          sites,
          size: Number( size ),
          types,
        } ).render();
      }
    };
  }
};

loadModule();
