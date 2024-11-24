import { cn } from "@/lib/utils";

export default function WhiteButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "font-medium text-ms px-[54px] py-4 w-full max-w-[218px] h-[52px] rounded-[62px] border border-gray-200",
        className,
      )}
    >
      {text}
    </button>
  );
}
