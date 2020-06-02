import * as React from "react";
import * as Scrivito from "scrivito";

import "./ShawnsWidget.scss";

Scrivito.provideComponent("ShawnsWidget", ({ widget }) => (
  <Scrivito.ContentTag
    className="shawns-widget"
    content={widget}
    attribute="headline"
  />
));
