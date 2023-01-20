import { Icon } from "@iconify/react";
import fetcher from "lib/fetcher";
import { Form, FormState, Subscribers } from "lib/types";
import { useRef, useState } from "react";
import useSWR from "swr";

const Subscribe = () => {
  const inputEl = useRef(null);
  const [form, setForm] = useState<FormState>({ state: Form.Initial });

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const email = inputEl.current.value;
    const res = await fetch(`/api/subscribe?email=${email}`, {
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list.`,
    });
  };

  return (
    <div
      className="mx-auto mb-4 mt-10 flex
      w-[290px] flex-col flex-wrap
      items-center justify-center gap-4
      rounded-3xl
      border-[1px]
      border-border-surface
    bg-background-surface
      px-4 py-10 text-center
      mobile-s:w-[320px] mobile-m:w-[375px] mobile:w-[390px] md:w-[768px]"
    >
      <h2 className="font-chubbo text-4xl font-bold text-text-primary">
        Subscribe while it&apos;s early
      </h2>
      <p className="font-supreme text-text-secondary">
        Read stories from me directly in your inbox. Join my newsletter, and
        don&apos;t miss out.
      </p>
      <form className="flex w-9/12 flex-col gap-y-4" onSubmit={subscribe}>
        <input
          aria-label="Email for newsletter"
          ref={inputEl}
          className={`mx-auto w-full rounded-md
          border-[1px] border-border-surface bg-background-surface p-2
          text-text-primary placeholder:text-text-secondary
          focus:border-border-button focus:outline-none`}
          type={"email"}
          autoComplete="email"
          required
          placeholder="tim@apple.com"
        />
        <button
          type="submit"
          className="h-[40px] rounded-md bg-blue-600 py-2 text-base text-white hover:bg-blue-700 active:bg-blue-800"
        >
          {form.state === Form.Loading ? (
            <Icon className="mx-auto p-0 text-xl" icon="eos-icons:loading" />
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
      <span className="font-chubbo text-white">{form.message}</span>
    </div>
  );
};

export default Subscribe;
