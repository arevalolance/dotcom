import { Icon } from "@iconify/react";
import fetcher from "lib/fetcher";
import { Views } from "lib/types";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ViewCounter = (props: { slug: string; count: boolean }) => {
  const { data } = useSWR<Views>(`/api/views/${props.slug}`, fetcher);
  const views = new Number(data?.views);

  useEffect(() => {
    if (props.count) {
      const registerView = () =>
        fetch(`/api/views/${props.slug}`, {
          method: "POST",
        });

      registerView();
    }
  }, [props.count, props.slug]);

  return (
    <div className="flex flex-row items-center gap-x-1">
      <Icon
        className="text-sm font-medium text-text-secondary"
        icon="ic:outline-remove-red-eye"
      />
      <span className={`font-supreme font-medium text-text-secondary`}>{`${
        views.valueOf() > 0 ? views.toLocaleString() : "–––"
      } views`}</span>
    </div>
  );
};

export default ViewCounter;
