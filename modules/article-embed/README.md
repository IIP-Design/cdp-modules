# Widget: Single Article

## Description

The Single Article widget is a React component that pulls and displays a single embedded article from the Content Distribution Platform (CDP) using the CDP public API.

## Configuration

Set the environmental variables in an `.env` file at the root of the project.

The variables used in the app are as follows:

```
CDP_PUBLIC_API=
CDP_MODULES_URL=
GA_ID_SHARE=
GA_ID_YALI=
GA_ID_YLAI=
```

CDP_PUBLIC_API identifies the URL of the API fom which content will be pulled (allows for the use of multiple environments - i.e. dev, stage, prod).

CDP_MODULES_URL identifies the URL of the S3 bucket in which the build will be saved. (Again, to allow for multiple environments).

The three GA_ID variables allow for the addition of Google Analytics so that content creators can track views of embedded content.

## Usage

In order to pull in the correct article and display it, and embed requires the following configurations:

| Option   | Description                                      |
| -------- | ------------------------------------------------ |
| selector | DOM element that component will attach itself to |
| sites    | Elastic search index to pull the article from    |
| ids      | The post ID of the selected article              |

For example:

```
CDP.widgets.Article.new( {
  selector: '#cdp-article-embed',
  site: 'share.america.gov',
  id: '615621'
} ).render();
```

The article embed JS and CSS file should also be pulled before the article embed widget is initialized. A [loader file](./src/cdp-module-loader.js) is included which does all this.
