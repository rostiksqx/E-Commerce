import StarRating from "@/components/ui/stars-rating";
import { cn } from "@/lib/utils";

export default function FeedBackCard({
  feedback,
  className,
}: {
  feedback: any;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border border-[#000000]/10 rounded-[20px] px-8 py-7 space-y-[15px]",
        className,
      )}
    >
      <StarRating rating={5} isVisibleText={false} iconSize={24} />
      <div className="space-y-3">
        <h1 className="font-bold text-xl">FeedBack Customer</h1>
        <p className="text-black/60 w-full leading-[22px]">
          ”
          {
            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
          }
          ”
        </p>
      </div>
    </div>
  );
}
