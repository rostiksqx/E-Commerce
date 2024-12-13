/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Sales = {
  _id: string;
  _type: "sales";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  discountPercentage?: number;
  promoCode?: string;
  validFrom?: string;
  validUntil?: string;
  isActive?: boolean;
};

export type Order = {
  _id: string;
  _type: "order";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  stripeCheckoutSessionId?: string;
  stripeCustomerId?: string;
  customerName?: string;
  customerEmail?: string;
  userId?: string;
  stripePaymentIntentId?: string;
  items?: Array<{
    clothes?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "clothes";
    };
    quantity?: number;
    _key: string;
  }>;
  totalAmount?: number;
  currency?: string;
  amountDiscounted?: number;
  status?: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  orderDate?: string;
  shippingAddress?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
};

export type DressStyle = {
  _id: string;
  _type: "dressStyle";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Clothes = {
  _id: string;
  _type: "clothes";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  reviews?: Array<{
    rate?: number;
    comment?: string;
    userId?: string;
    _key: string;
  }>;
  rating?: number;
  smallDescription?: string;
  productDetails?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  price?: number;
  discount?: number;
  imagesAndColors?: Array<{
    colorCode?: string;
    images?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
      _key: string;
    }>;
    _key: string;
  }>;
  sizes?: Array<"XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL" | "3XL" | "4XL">;
  brand?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "brand";
  };
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  dressStyle?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "dressStyle";
  }>;
  gender?: "men" | "women" | "kid" | "unisex";
  createdAt?: string;
  salesCount?: number;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
};

export type Brand = {
  _id: string;
  _type: "brand";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  brandLogo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Sales | Order | DressStyle | Clothes | Category | Brand | Slug | BlockContent | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/brands/brands.ts
// Variable: FIRST_BRANDS
// Query: *[_type == "brand"][0...15] {    "id": _id,    "title": title,    "logoUrl": brandLogo.asset->url  }
export type FIRST_BRANDSResult = Array<{
  id: string;
  title: string | null;
  logoUrl: string | null;
}>;

// Source: ./sanity/lib/dressStyles/dressStyles.ts
// Variable: FIRST_DRESS_STYLES
// Query: *[_type == "dressStyle"][0...4] {    "id": _id,    "imageUrl": image.asset->url,    title,  }
export type FIRST_DRESS_STYLESResult = Array<{
  id: string;
  imageUrl: string | null;
  title: string | null;
}>;

// Source: ./sanity/lib/clothes/clothes.ts
// Variable: FIRST_NEW_CLOTHES
// Query: *[_type == "clothes"] | order(createdAt desc)[0...4] {    "id": _id,    "imageUrl": imagesAndColors[0].images[0].asset->url,    "slug": slug.current,    discount,    title,    rating,    price  }
export type FIRST_NEW_CLOTHESResult = Array<{
  id: string;
  imageUrl: string | null;
  slug: string | null;
  discount: number | null;
  title: string | null;
  rating: number | null;
  price: number | null;
}>;
// Variable: TOP_SELLING_CLOTHES
// Query: *[_type == "clothes"] | order(salesCount desc)[0...4] {    "id": _id,    "imageUrl": imagesAndColors[0].images[0].asset->url,    "slug": slug.current,    discount,    title,    rating,    price  }
export type TOP_SELLING_CLOTHESResult = Array<{
  id: string;
  imageUrl: string | null;
  slug: string | null;
  discount: number | null;
  title: string | null;
  rating: number | null;
  price: number | null;
}>;
// Variable: CLOTHES_BY_QUERY
// Query: *[_type == "clothes" && title match $searchQuery] {        "id": _id,        "imageUrl": imagesAndColors[0].images[0].asset->url,        "slug": slug.current,        title,        rating,        price    }
export type CLOTHES_BY_QUERYResult = Array<{
  id: string;
  imageUrl: string | null;
  slug: string | null;
  title: string | null;
  rating: number | null;
  price: number | null;
}>;
// Variable: GET_PAGINATED_DATA
// Query: {    "total": count(*[_type == "clothes" ]),    "items": *[_type == "clothes" ] [$start...$end] {      "id": _id,      "imageUrl": imagesAndColors[0].images[0].asset->url,      "slug": slug.current,      discount,      title,      rating,      price    }  }
export type GET_PAGINATED_DATAResult = {
  total: number;
  items: Array<{
    id: string;
    imageUrl: string | null;
    slug: string | null;
    discount: number | null;
    title: string | null;
    rating: number | null;
    price: number | null;
  }>;
};

// Source: ./sanity/lib/filters/filter.ts
// Variable: GET_FILTERS
// Query: {    "category": *[_type == "category"]{    "id": _id,    title,    "slug": slug.current,  },    "dressStyle": *[_type == "dressStyle"] {    "id": _id,    title,    "slug": slug.current,    },  }
export type GET_FILTERSResult = {
  category: Array<{
    id: string;
    title: string | null;
    slug: string | null;
  }>;
  dressStyle: Array<{
    id: string;
    title: string | null;
    slug: string | null;
  }>;
};

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n    *[_type == \"brand\"][0...15] {\n    \"id\": _id,\n    \"title\": title,\n    \"logoUrl\": brandLogo.asset->url\n  }": FIRST_BRANDSResult;
    "\n    *[_type == \"dressStyle\"][0...4] {\n    \"id\": _id,\n    \"imageUrl\": image.asset->url,\n    title,\n  }": FIRST_DRESS_STYLESResult;
    "\n    *[_type == \"clothes\"] | order(createdAt desc)[0...4] {\n    \"id\": _id,\n    \"imageUrl\": imagesAndColors[0].images[0].asset->url,\n    \"slug\": slug.current,\n    discount,\n    title,\n    rating,\n    price\n  }": FIRST_NEW_CLOTHESResult;
    "\n    *[_type == \"clothes\"] | order(salesCount desc)[0...4] {\n    \"id\": _id,\n    \"imageUrl\": imagesAndColors[0].images[0].asset->url,\n    \"slug\": slug.current,\n    discount,\n    title,\n    rating,\n    price\n  }": TOP_SELLING_CLOTHESResult;
    "\n        *[_type == \"clothes\" && title match $searchQuery] {\n        \"id\": _id,\n        \"imageUrl\": imagesAndColors[0].images[0].asset->url,\n        \"slug\": slug.current,\n        title,\n        rating,\n        price\n    }": CLOTHES_BY_QUERYResult;
    "{\n    \"total\": count(*[_type == \"clothes\" ]),\n    \"items\": *[_type == \"clothes\" ] [$start...$end] {\n      \"id\": _id,\n      \"imageUrl\": imagesAndColors[0].images[0].asset->url,\n      \"slug\": slug.current,\n      discount,\n      title,\n      rating,\n      price\n    }\n  }": GET_PAGINATED_DATAResult;
    "\n    {\n    \"category\": *[_type == \"category\"]{\n    \"id\": _id,\n    title,\n    \"slug\": slug.current,\n  },\n    \"dressStyle\": *[_type == \"dressStyle\"] {\n    \"id\": _id,\n    title,\n    \"slug\": slug.current,\n    },\n  }": GET_FILTERSResult;
  }
}
