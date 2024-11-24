import { defineField, defineType } from "sanity";

export const dressStyleType = defineType({
  name: "dressStyle",
  title: "Dress Styles",
  type: "document",
  icon: () => "👗",
  fields: [
    defineField({
      name: "title",
      title: "Dress Style Title",
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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
