import * as Scrivito from "scrivito";

const ShawnsWidget = Scrivito.provideWidgetClass("ShawnsWidget", {
  attributes: {
    headline: "string",
  },
  extractTextAttributes: ["headline"],
});

export default ShawnsWidget;
