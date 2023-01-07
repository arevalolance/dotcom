import { useState } from "react";
import LinkButton from "components/LinkButton";
import { email } from "lib/info";
import CardContainer from "components/CardContainer";

const MailCard = (props: { className?: string }) => {
  const [message, setMessage] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);

  return (
    <CardContainer
      className={`mx-auto h-[260px] w-11/12 px-6 py-6 md:w-[700px] lg:w-[650px] ${props.className}`}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-y-2 text-text-primary">
          <span className={`font-chubbo text-2xl  font-bold leading-none `}>
            Contact Me
          </span>
          <p className="text-md font-supreme">
            Have a question for me? Send your message down below and I&apos;ll
            get to it as soon as I can.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <input
            className={`text-md w-full border-b-2 border-border-surface bg-transparent font-supreme text-text-primary placeholder:text-text-secondary focus:outline-none`}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How's it going?"
          />

          <div className="flex flex-row items-center justify-between">
            <LinkButton
              onClick={() => setIsSent(true)}
              label={"Email me"}
              link={`mailto:${email}?&subject=Let's chat!&body=${message}`}
            />
            {isSent && (
              <div
                className={`flex flex-row gap-x-2 font-supreme text-sm text-gray-400`}
              >
                <span>Have a nice day ahead!</span>{" "}
                <div className="animate-bounce">🌞</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default MailCard;
