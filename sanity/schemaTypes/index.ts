import { type SchemaTypeDefinition } from "sanity";

import { salesType } from "@/sanity/schemaTypes/salesType";
import { blockContentType } from "@/sanity/schemaTypes/blockContentType";
import { brandType } from "@/sanity/schemaTypes/brandType";
import { categoryType } from "@/sanity/schemaTypes/categoryType";
import { clothesType } from "@/sanity/schemaTypes/clothesType";
import { dressStyleType } from "@/sanity/schemaTypes/dressStyleType";
import { orderType } from "@/sanity/schemaTypes/orderType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    brandType,
    categoryType,
    clothesType,
    dressStyleType,
    orderType,
    salesType,
  ],
};
