import Markdown from "../Common/Markdown";

type Props = {
  name: string;
  message: string;
  images: string[];
  isBot: boolean;
};

export const Message: React.FC<Props> = (props) => {
  return (
    <div className="group w-full text-gray-800 dark:text-gray-100 mb-6">
      <div className="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl flex lg:px-0 m-auto w-full">
        <div className="flex flex-row gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl m-auto w-full">
          <div className="w-8 flex flex-col relative items-end">
            <div className="relative h-7 w-7 p-1 rounded-sm text-white flex items-center justify-center  text-opacity-100r">
              {props.isBot ? (
                <div className="absolute h-8 w-8 rounded-full bg-gradient-to-r from-green-300 to-purple-400"></div>
              ) : (
                <div className="absolute h-8 w-8 rounded-full from-blue-400 to-blue-600 bg-gradient-to-r"></div>
              )}
            </div>
          </div>
          <div className="flex w-[calc(100%-50px)] flex-col gap-3 lg:w-[calc(100%-115px)]">
            <span className="text-xs font-bold text-gray-800 dark:text-white">
              {props.name}
            </span>

            <div className="flex flex-grow flex-col">
              <Markdown message={props.message} />
            </div>
            {/* source if aviable */}
            {props.images && props.images.length > 0 && (
              <div className="flex md:max-w-2xl lg:max-w-xl xl:max-w-3xl  m-auto w-full">
                {props.images
                  .filter((image) => image.length > 0)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="Uploaded Image"
                      width={180}
                      className="rounded-md relative"
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
