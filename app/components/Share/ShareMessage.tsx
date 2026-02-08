import Markdown from "../Common/Markdown";
import { Collapse } from "../Common/Collapse";
import { removeModelSuffix } from "~/utils/removeModelSuffix";
import { humanizeMilliseconds } from "~/utils/humanize-milliseconds";
import { parseReasoning } from "~/lib/reasoning";
import { useState } from "react";

type Props = {
  message: string;
  message_type?: string;
  isBot: boolean;
  name: string;
  images?: string[];
  reasoningTimeTaken?: number;
  openReasoning?: boolean;
  modelImage?: string;
  modelName?: string;
  sources?: any[];
};

const MAX_MESSAGE_LENGTH = 500;

export const ShareMessage = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group relative flex w-full flex-col pb-2 md:px-4 text-gray-800 dark:text-gray-100 ${!props.isBot ? 'items-end' : 'items-start'}`}>
      <div className={`flex flex-row gap-4 md:gap-6 my-2 ${props.isBot ? 'w-full' : ''}`}>
        {props.isBot && (
          <div className="w-8 flex flex-col relative items-end">
            {!props.modelImage ? (
              <div className="relative h-7 w-7 p-1 rounded-sm text-white flex items-center justify-center text-opacity-100">
                <div className="absolute h-8 w-8 rounded-full bg-gradient-to-r from-green-300 to-purple-400"></div>
              </div>
            ) : (
              <img
                src={props.modelImage}
                alt={props.name}
                className="h-8 w-8 rounded-full object-cover"
              />
            )}
          </div>
        )}

        <div className={`flex flex-col gap-2 ${props.isBot ? 'w-[calc(100%-50px)] lg:w-[calc(100%-115px)]' : ''}`}>
          {props.isBot && (
            <span className="text-xs font-bold text-gray-800 dark:text-white">
              {props.name === "chrome::gemini-nano::page-assist"
                ? "Gemini Nano"
                : removeModelSuffix(
                    `${props?.modelName || props?.name}`?.replaceAll(
                      /accounts\/[^\/]+\/models\//g,
                      "",
                    ),
                  )}
            </span>
          )}

          <div className={`flex flex-col ${props.isBot ? 'flex-grow' : 'items-end'}`}>
            {props.isBot ? (
              <>
                {parseReasoning(props.message).map((e: any, i: any) => {
                  if (e.type === "reasoning") {
                    return (
                      <Collapse
                        key={i}
                        className="border-none text-gray-500 dark:text-gray-400 !mb-3"
                        defaultActiveKey={
                          props?.openReasoning ? "reasoning" : undefined
                        }
                        items={[
                          {
                            key: "reasoning",
                            label: `Thought for ${humanizeMilliseconds(
                              props.reasoningTimeTaken || 0,
                            )}`,
                            children: <Markdown message={e.content} />,
                          },
                        ]}
                      />
                    );
                  }

                  return <Markdown key={i} message={e.content} />;
                })}
              </>
            ) : (
              <div className="block max-w-[70%] bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl px-5 py-3.5 border border-gray-100 dark:border-gray-700/50">
                {props.message.length > MAX_MESSAGE_LENGTH && !isExpanded ? (
                  <>
                    <div className="relative">
                      <div className="text-sm">
                        <Markdown message={props.message.slice(0, MAX_MESSAGE_LENGTH) + "..."} />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 dark:from-[#2a2a2a] to-transparent pointer-events-none" />
                    </div>
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs mt-3 block font-medium hover:underline transition-all"
                    >
                      Show more
                    </button>
                  </>
                ) : (
                  <>
                    <div className="text-sm">
                      <Markdown message={props.message} />
                    </div>
                    {props.message.length > MAX_MESSAGE_LENGTH && isExpanded && (
                      <button
                        onClick={() => setIsExpanded(false)}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs mt-3 block font-medium hover:underline transition-all"
                      >
                        Show less
                      </button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Images if available */}
          {props.images &&
            props.images.filter((img) => img.length > 0).length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {props.images
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

          {/* Sources if available */}
          {props.isBot && props?.sources && props?.sources.length > 0 && (
            <div className="mt-6">
              <Collapse
                items={[
                  {
                    key: "sources",
                    label: "Sources",
                    children: (
                      <div className="mb-3 flex flex-wrap gap-2">
                        {props.sources.map((source, index) => (
                          <div
                            key={index}
                            className="inline-flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <span className="font-medium text-xs">
                              [{index + 1}]
                            </span>
                            {source.url ? (
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline truncate max-w-xs"
                              >
                                {source.title || source.url}
                              </a>
                            ) : (
                              <span className="truncate max-w-xs">
                                {source.title || "Source"}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
