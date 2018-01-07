import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
const fromSrc = require.context("../src", true, /.stories.js$/);
const fromStories = require.context("../stories", true, /.stories.js$/);

function loadStories() {
  fromSrc.keys().forEach(filename => fromSrc(filename));
  fromStories.keys().forEach(filename => fromStories(filename));
}

configure(loadStories, module);
