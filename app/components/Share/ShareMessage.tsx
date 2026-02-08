import Markdown from "../Common/Markdown";
import { Collapse } from "../Common/Collapse";
import { removeModelSuffix } from "~/utils/removeModelSuffix";
import { humanizeMilliseconds } from "~/utils/humanize-milliseconds";
import { parseReasoning } from "~/lib/reasoning";
import { ShareHumanMessage } from "./ShareHumanMessage";

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

export const ShareMessage = (props: Props) => {
  if (!props.isBot) {
    return <ShareHumanMessage message={props.message} images={props.images} />;
  }

  return (
    <div className="group relative flex w-full flex-col pb-2 md:px-4 text-gray-800 dark:text-gray-100 items-start">
      <div className="flex flex-row gap-4 md:gap-6 my-2 w-full">
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

        <div className="flex flex-col gap-2 w-[calc(100%-50px)] lg:w-[calc(100%-115px)]">
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

          <div className="flex flex-col flex-grow">
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
          </div>

          {/* Sources if available */}
          {props?.sources && props?.sources.length > 0 && (
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
