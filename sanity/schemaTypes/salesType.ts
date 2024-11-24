import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sales",
  title: "Sales",
  type: "document",
  icon: () => "💸",
  fields: [
    defineField({
      name: "title",
      title: "Promotion Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: "promoCode",
      title: "Promo Code",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "validFrom",
      title: "Valid From",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "validUntil",
      title: "Valid Until",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      validation: (Rule) => Rule.required(),
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      discountPercentage: "discountPercentage",
      promoCode: "promoCode",
      isActive: "isActive",
    },
    prepare({ title, discountPercentage, promoCode, isActive }) {
      return {
        title: title,
        subtitle: `${discountPercentage}% off - Code ${promoCode} - ${
          isActive ? "Active" : "Inactive"
        }`,
      };
    },
  },
});
