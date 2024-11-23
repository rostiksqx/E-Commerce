import { defineArrayMember, defineField, defineType } from "sanity";
import { ShirtIcon } from "lucide-react";

export const clothesType = defineType({
  name: "clothes",
  title: "Clothes",
  type: "document",
  icon: ShirtIcon,
  fields: [
    defineField({
      name: "title",
      title: "Clothes Title",
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
              validation: (Rule) => Rule.required(),
            },
            {
              name: "userId",
              title: "User ID",
              type: "string",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "smallDescription",
      title: "smallDescription",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.min(0).max(100),
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
      validation: (Rule) => Rule.required(),
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
              { title: "XX-Small", value: "XXS" },
              { title: "X-Small", value: "XS" },
              { title: "Small", value: "S" },
              { title: "Medium", value: "M" },
              { title: "Large", value: "L" },
              { title: "X-Large", value: "XL" },
              { title: "XX-Large", value: "XXL" },
              { title: "3X-Large", value: "3XL" },
              { title: "4X-Large", value: "4XL" },
            ],
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brand" }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dressStyle",
      title: "Dress Style",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "dressStyle" } }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gender",
      title: "Gender",
      type: "string",
      options: {
        list: [
          { title: "Men", value: "men" },
          { title: "Women", value: "women" },
          { title: "Kid", value: "kid" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "salesCount",
      title: "Sales Count",
      type: "number",
      readOnly: true,
      validation: (Rule) => Rule.min(0),
      initialValue: 0,
    }),
  ],
});
