# React Storybook Parcel example

React Storybook example. Built on top of [react example](https://github.com/lrn2prgrm/parcel-examples/tree/master/react). It features [storybook for react](https://github.com/storybooks/storybook/tree/master/app/react) thanks to [storybook](https://storybook.js.org/).

Storybook makes it quite to detect (react) and generate code for the react storybook but for the lazy folks (includes me) here it is.

## Features

[Parcel](https://parceljs.org/), [Hot module replacement](https://parceljs.org/hmr.html), [React](https://reactjs.org/), [Storybook](https://storybook.js.org/)

## Use it:

* Run with `yarn start`
  * Go to `https://localhost:1234`
* Run storybook with `yarn storybook`
  * Go to `https://localhost:6006`

## Tutorial on how to build this:

1. [See react example instructions](https://github.com/lrn2prgrm/parcel-examples/tree/master/react) and then

2. Get storybook cli to help you: `yarn add --dev @storybook/cli`

3. Use the cli to detect react and generate code `yarn getstorybook`

4. Edit as .storybook/config.js so you can also create stories inside src folder.

5. Remove the helper client `yarn remove @storybook/cli`
