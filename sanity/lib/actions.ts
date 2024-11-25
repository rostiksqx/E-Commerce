import { SanityDocument, useDocumentOperation } from "sanity";

interface Review {
  rate: number;
  comment?: string;
  userId?: string;
}

interface ClothesDocument extends SanityDocument {
  reviews?: Review[];
  rating?: number;
}

export default function CalculateAverageRating({
  id,
  type,
  draft,
  published,
}: {
  id: string;
  type: string;
  draft: ClothesDocument | null;
  published: ClothesDocument | null;
}) {
  const { patch, publish } = useDocumentOperation(id, type);

  return {
    label: "Publish and calculate rating",
    onHandle: async () => {
      if (type === "clothes") {
        const reviews = draft?.reviews || published?.reviews || [];

        const totalReviews = Array.isArray(reviews) ? reviews.length : 0;
        const totalRate = reviews.reduce(
          (sum, review) => sum + (review.rate || 0),
          0,
        );
        const rawAverageRating =
          totalReviews > 0 ? totalRate / totalReviews : 0;

        const roundToNearestHalf = (num: number) => Math.round(num * 2) / 2;

        const roundedRating = roundToNearestHalf(rawAverageRating);

        patch.execute([{ set: { rating: roundedRating } }]);
      }

      publish.execute();
    },
  };
}
