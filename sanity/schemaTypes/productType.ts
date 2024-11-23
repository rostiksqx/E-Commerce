import { defineArrayMember, defineField, defineType } from "sanity";
import { ShirtIcon } from "lucide-react";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: ShirtIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "rate",
              title: "Rate",
              type: "number",
              validation: (Rule) => Rule.required().min(0).max(5),
            },
            {
              name: "comment",
              title: "Comment",
              type: "string",
            },
            {
              name: "user",
              title: "User",
              type: "reference",
              to: { type: "user" },
              validation: (Rule) => Rule.required(),
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      readOnly: true,
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [defineArrayMember({ type: "image" })],
    }),
    defineField({
      name: "smallDescription",
      title: "smallDescription",
      type: "string",
    }),
    defineField({
      name: "productDetails",
      title: "Product Details",
      type: "blockContent",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: "colors",
      title: "Colors",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
          validation: (Rule) =>
            Rule.required().custom((color) => {
              if (typeof color === "string" && color.startsWith("#")) {
                return true;
              }
              return "Color must begin with #";
            }),
        }),
      ],
    }),
    defineField({
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
          options: {
            list: [
              { title: "Small", value: "S" },
              { title: "Medium", value: "M" },
              { title: "Large", value: "L" },
              { title: "X-Large", value: "XL" },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
  ],
});
