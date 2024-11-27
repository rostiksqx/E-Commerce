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
        "border border-[#000000]/10 rounded-[20px] p-6 space-y-3",
        className,
      )}
    >
      <StarRating rating={5} isVisibleText={false} iconSize="w-5 h-5" />
      <div className="space-y-2">
        <h1 className="font-bold text-[16px]">FeedBack Customer</h1>
        <p className="text-black/60 w-full leading-5 text-sm">
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
