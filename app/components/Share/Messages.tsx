import { Message } from "./Message";

type Props = {
  messages: {
    id: number;
    name: string;
    message: string;
    images: string[];
    isBot: boolean;
  }[];
};

export const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <div className="flex flex-col mt-8 gap-2 items-start justify-start">
      {messages.map((message) => (
        <Message
          key={message.id}
          name={message.name}
          message={message.message}
          images={message.images}
          isBot={message.isBot}
        />
      ))}
      
    </div>
  );
};
