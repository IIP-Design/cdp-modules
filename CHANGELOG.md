# Change Log
##### All notable changes to this project will be documented in this file.

## [1.0.0](https://github.com/IIP-Design/cdp-widget-article-feed/tree/1.0.0)

**Features:**

- Changed id to post_id where referenced.
- Changed taxonomies to custom_taxonomies to match new schema.
- Changed article.featured_image to article.thumbnail to match new schema.
- Augmented appendQry to react differently when given an array of fields (ORs them together now).
- Augmented reduceQry to parenthesize groupings.
- Updated getTags to use tag as a string instead of an object with id and name properties (since we no longer use that schema).
- Added uuid to the tag key when no tag.id is present.

## Unreleased

**Features:**

- Initialize widget with query body
- Display content organized into cards