const GridClothesSkeleton = ({ count }: { count: number }) => {
  return (
    <div className="mb-6 grid grid-cols-2 md:grid-cols-[repeat(2,_300px)] justify-center lg:grid-cols-[repeat(3,_300px)] gap-2 items-start xl:gap-x-5 xl:gap-y-9">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="space-y-4 w-full">
          <div className="rounded-[30px] bg-gray-200 animate-pulse w-full h-[200px] sm:h-[298px]" />
          <div className="space-y-2">
            <div className="h-6 bg-gray-200 rounded-full animate-pulse w-3/4" />
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-200 rounded-full animate-pulse"
                />
              ))}
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="h-8 bg-gray-200 rounded-full animate-pulse w-20" />
              <div className="h-8 bg-gray-200 rounded-full animate-pulse w-16" />
              <div className="h-6 bg-gray-200 rounded-[62px] animate-pulse w-12" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridClothesSkeleton;
