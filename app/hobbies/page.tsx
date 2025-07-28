import PageHeader from "@/components/page-header";

export default async function Hobbies() {
  return (
    <div className="flex min-h-full w-full flex-col justify-between gap-6">
      <PageHeader
        title={"Hobbies"}
        description={"I tend to spend my time watching movies, playing video games, and reading books. Sometimes I travel."}
      />
    </div>
  )
}
