# Change Log
##### All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.0.3

**Features Added:**
- Change function that fetches featured image to work with new API schema
- Add alt-text and captions to the article featured image

**Bug Fixes:**
- Add right-to-left support for article content
- Define image figures to a maximum width of 100% to prevent them from overflowing the embed container

## 1.0.2

**Features Added:**
- Add message to display when API response is empty

## 1.0.1

**Features Added:**
- Report domain of host site Google Analytics

## 1.0.0

**Features Added:**
- Add version bump package

**Bug Fixes:**
- Attach custom tracker name to Google Analytics events so data sent to correct property

## Initial Release

**Features Added:**

- Embed an article from the CDP into another site
- Includes a module loader file to provide entry point for the embedded article
- Google Analytics to track views of embedded articles