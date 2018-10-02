# Change Log
##### All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1]

**Features Added:**
- Added alt text to feed images

**Fixed**
- Rolled back webpack dev server to prevent dependency conflict

## [1.0.0](https://github.com/IIP-Design/cdp-widget-article-feed/tree/1.0.0)

**Features Added:**

- Changed id to post_id where referenced.
- Changed taxonomies to custom_taxonomies to match new schema.
- Changed article.featured_image to article.thumbnail to match new schema.
- Augmented appendQry to react differently when given an array of fields (ORs them together now).
- Augmented reduceQry to parenthesize groupings.
- Updated getTags to use tag as a string instead of an object with id and name properties (since we no longer use that schema).
- Added uuid to the tag key when no tag.id is present.

## Initial Release

**Features Added:**

- Initialize widget with query body
- Display content organized into cards