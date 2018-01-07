import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome/sub", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with color red", () => (
    <Button style={{ color: "red" }} onClick={action("clicked")}>
      Hello Button
    </Button>
  ))
  .add("with bgColor red", () => (
    <Button style={{ backgroundColor: "red" }} onClick={action("clicked")}>
      Hello Button
    </Button>
  ))
  .add("with some emojis", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ))
  .add("with one emoji", () => <Button onClick={action("clicked")}>👍</Button>);
