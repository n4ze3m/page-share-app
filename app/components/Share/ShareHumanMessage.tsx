import { useState } from "react";
import Markdown from "../Common/Markdown";

type Props = {
  message: string;
  images?: string[];
};

const MAX_MESSAGE_LENGTH = 500;

export const ShareHumanMessage = ({ message, images }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = message.length > MAX_MESSAGE_LENGTH;

  return (
    <div className="group relative flex w-full flex-col pb-2 md:px-4 text-gray-800 dark:text-gray-100 items-end">
      <div className="flex flex-col gap-2 my-2">
        <div className=" ] bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl px-5 py-3.5 border border-gray-100 dark:border-gray-700/50">
          {shouldTruncate && !isExpanded ? (
            <>
              <div className="relative">
                <div  >
                  <Markdown className=" prose dark:prose-invert prose-sm max-w-none" message={message.slice(0, MAX_MESSAGE_LENGTH) + "..."} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 dark:from-[#2a2a2a] to-transparent pointer-events-none" />
              </div>
              <button
                onClick={() => setIsExpanded(true)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs mt-3 block font-medium hover:underline transition-all">
                Show more
              </button>
            </>
          ) : (
            <>
              <div >
                <Markdown className=""  message={message} />
              </div>
              {shouldTruncate && isExpanded && (
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs mt-3 block font-medium hover:underline transition-all">
                  Show less
                </button>
              )}
            </>
          )}
        </div>

        {/* Images if available */}
        {images && images.filter((img) => img.length > 0).length > 0 && (
          <div className="flex flex-wrap gap-2">
            {images
              .filter((image) => image.length > 0)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-[180px] h-auto rounded-md object-cover"
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
