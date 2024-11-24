import { defineArrayMember, defineField, defineType } from "sanity";
import { BasketIcon } from "@sanity/icons";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripeCheckoutSessionId",
      title: "Stripe Checkout Session ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "userId",
      title: "User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "clothes",
              title: "Clothes Bought",
              type: "reference",
              to: [{ type: "clothes" }],
            }),
            defineField({
              name: "quantity",
              title: "Quantity Purchased",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              clothes: "clothes.title",
              quantity: "quantity",
              images: "clothes.images",
              price: "clothes.price",
              currency: "clothes.currency",
            },
            prepare(select) {
              return {
                title: `${select.clothes} x ${select.quantity}`,
                subtitle: `${select.price * select.quantity}`,
                media: select.images[0],
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
      readOnly: true,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amountDiscounted",
      title: "Amount Discounted",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "shippingAddress",
      title: "Shipping Address",
      type: "object",
      fields: [
        defineField({
          name: "street",
          title: "Street",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "city",
          title: "City",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({ name: "state", title: "State", type: "string" }),
        defineField({
          name: "zip",
          title: "ZIP Code",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "country",
          title: "Country",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "customerName",
      amount: "totalAmount",
      currency: "currency",
      orderId: "orderNumber",
      email: "customerEmail",
    },
    prepare(select) {
      const orderIdSnippet = `${select.orderId.slice(5)}...${select.orderId.slice(-5)}`;
      return {
        title: `${select.title} (${orderIdSnippet})`,
        subtitle: `${select.amount} ${select.currency} (${select.email})`,
        media: BasketIcon,
      };
    },
  },
});
