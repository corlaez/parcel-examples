# React Redux Parcel example

React and Redux with hot module replacement made simple thanks to Parcel.

You can uncomment a redux logger on src/store/index.js if you want visibility over changes on the console.

## Features

[Parcel](https://parceljs.org/), [Hot module replacement](https://parceljs.org/hmr.html), [React](https://reactjs.org/), [Redux](https://redux.js.org/), [Jack Tsu inspired redux pattern](https://jaysoo.ca/2016/02/28/organizing-redux-application/)

## Use it:

* Run with `yarn start`
* Go to `https://localhost:1234`

## Tutorial on how to build this:

1. [See react example instructions](https://github.com/lrn2prgrm/parcel-examples/tree/master/react) and then

2. Add redux dependencies `yarn add redux react-redux`

3. Divide index.js creating Root for top level library integrations and App for top level Application code.

4. On root wrap App with the Provider passing the store as a prop

5. On store folder we have the config of the store on index, initial state and root reducer.

6. Create the modules folder and the say feature folder. The say folder will include a components folder, and the proper redux files.

7. We fill the files with proper redux code, for this simple example is over complicating things but the idea is to show the pattern.

## Known issues

I have had troubles to add Hot Module Loader to Parcel (namely it spitted a console error and didn't provide any additional feature). So it is not included.

As a consecuence this project doesn't include the feature of re run every past action against the new reducers, reducers get replaced but only future actions will run through the new reducers.

This project does hot reload redux code and relies on keeping the redux store on window global. I am not sure if this could cause problems in more complex apps.
