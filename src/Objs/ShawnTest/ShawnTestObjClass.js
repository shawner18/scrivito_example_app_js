import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";

const ShawnTest = Scrivito.provideObjClass("ShawnTest", {
  attributes: {
    title: "string",
    body: ["widgetlist", { only: "SectionWidget" }],
    ...metadataAttributes,
  },
  extractTextAttributes: ["body"],
});

export default ShawnTest;
