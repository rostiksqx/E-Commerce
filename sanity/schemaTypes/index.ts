import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { clothesType } from "./clothesType";
import { brandType } from "./brandType";
import { dressStyleType } from "./dressStyleType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    brandType,
    categoryType,
    clothesType,
    dressStyleType,
  ],
};
