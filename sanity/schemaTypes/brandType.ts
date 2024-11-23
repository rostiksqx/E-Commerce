import { defineField, defineType } from "sanity";

export const brandType = defineType({
  name: "brand",
  title: "Brands",
  type: "document",
  icon: () => `🏷️`,
  fields: [
    defineField({
      name: "title",
      title: "Brand Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clothes",
      title: "Clothes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "clothes" }],
        },
      ],
    }),
  ],
});
