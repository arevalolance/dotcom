import PageHeader from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WatchList from "@/components/watch-list";

export default async function Hobbies() {
  return (
    <div className="flex min-h-full w-full flex-col gap-6">
      <PageHeader
        title={"Hobbies"}
        description={"I tend to spend my time watching movies, playing video games, and reading books. Sometimes I travel."}
      />

      <Separator />

      <Tabs defaultValue="watching">
        <TabsList>
          <TabsTrigger value="watching">Watching</TabsTrigger>
          <TabsTrigger value="reading">Reading</TabsTrigger>
          <TabsTrigger value="travel">Travel</TabsTrigger>
        </TabsList>
        <TabsContent value="watching">
          <WatchList />
        </TabsContent>
        <TabsContent value="reading">
          password
        </TabsContent>
        <TabsContent value="travel">
          password
        </TabsContent>
      </Tabs>
    </div>
  )
}
