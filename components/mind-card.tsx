export default function MindCard({
  topic,
  title,
  publishedAt,
  summary,
  image
}: {
  topic?: string
  title: string
  summary?: string
  publishedAt?: string
  image: string
}) {
  return (
    <div className="group flex h-[300px] flex-col justify-between rounded-lg border-[1px] border-transparent bg-stone-50/50 p-4 duration-100 ease-in focus-within:bg-stone-100/60 hover:border-stone-200 hover:bg-stone-100/60">
      <div className="h-fit w-fit text-sm text-gray-500">
        {topic} · Blog
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1">
          <span className="text-xl font-medium decoration-1">
            {title}
          </span>
          <span className="text-sm text-gray-500">
            {publishedAt}
          </span>
        </div>
        <span className="line-clamp-3 text-justify text-sm text-gray-500">
          {summary}
        </span>
      </div>
    </div>
  )
}