import * as React from "react";
import * as Scrivito from "scrivito";

import "./ShawnTest.scss";

Scrivito.provideComponent("ShawnTest", ({ page }) => (
  <Scrivito.ContentTag
    tag="div"
    className="shawn-test"
    content={page}
    attribute="body"
  />
));
