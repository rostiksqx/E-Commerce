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
        "font-medium sm:text-ms text-sm px-[54px] py-4 mx-4 sm:mx-0 w-full sm:max-w-[218px] h-[52px] rounded-[62px] border border-gray-200 hover:bg-gray-200/20 transition-colors ease-in-out",
        className,
      )}
    >
      {text}
    </button>
  );
}
