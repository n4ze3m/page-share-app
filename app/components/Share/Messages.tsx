import { ShareMessage } from "./ShareMessage";
type WebSearch = {
  search_engine: string
  search_url: string
  search_query: string
  search_results: {
    title: string
    link: string
  }[]
}
export type Message = {
  isBot: boolean
  name: string
  message: string
  sources: any[]
  images?: string[]
  search?: WebSearch
  reasoning_time_taken?: number
  id?: string
  messageType?: string
  modelName?: string
  modelImage?: string
  documents?: any
}
type Props = {
  messages:Message[];
};

export const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <div className="flex flex-col mt-8 gap-2">
      {messages.map((message, index) => (
        <ShareMessage
          key={message.id || `message-${index}`}
          name={message.name}
          message={message.message}
          images={message.images}
          isBot={message.isBot}
          modelImage={message.modelImage}
          modelName={message.modelName}
          reasoningTimeTaken={message.reasoning_time_taken}
          sources={message.sources}
        />
      ))}
    </div>
  );
};
