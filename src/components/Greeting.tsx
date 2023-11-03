import { useState } from "preact/hooks";

export type GreetingProps = {
  messages: string[];
};

export const Greeting = (props: GreetingProps) => {
  const { messages } = props;
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <>
      <div>
        <h3>{greeting}! Thank you for visiting!</h3>
        <button onClick={() => setGreeting(randomMessage())}>
          New Greeting
        </button>
      </div>
    </>
  );
};

export default Greeting;
