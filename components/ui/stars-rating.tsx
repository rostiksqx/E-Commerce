﻿import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  fontSize: 12 | 14 | 16;
  className?: string;
  showText?: boolean;
}

export default function StarRating({
  rating,
  fontSize,
  className,
  showText = true,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const fontSizeClasses = {
    12: "text-[12px]",
    14: "text-[14px]",
    16: "text-[16px]",
  };

  const starSizes = {
    12: { width: 15, height: 15 },
    14: { width: 18, height: 18 },
    16: { width: 24, height: 24 },
  };

  const { width, height } = starSizes[fontSize];

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative">
            <svg
              width={width}
              height={height}
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                fill="currentColor"
              />
            </svg>
            {index < fullStars && (
              <div className="absolute inset-0">
                <svg
                  width={width}
                  height={height}
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                    fill="#FFC633"
                  />
                </svg>
              </div>
            )}
            {hasHalfStar && index === fullStars && (
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <svg
                  width={width}
                  height={height}
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                    fill="#FFC633"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      {showText && (
        <p
          className={cn("ml-1", fontSizeClasses[fontSize], {
            "order-last mr-1 ml-0": rating < 2,
          })}
        >
          {rating}/<span className="text-black/60">5</span>
        </p>
      )}
    </div>
  );
}