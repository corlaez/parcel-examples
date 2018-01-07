import React from "react";
import Say from "./modules/say/components/say";

const App = ({ more = "" }) => {
  return (
    <React.Fragment>
      {"Hello from React" + more} <Say />
    </React.Fragment>
  );
};

export default App;
