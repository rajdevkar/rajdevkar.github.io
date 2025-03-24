import Header from "@/components/header";
import WorkCard from "@/components/work-card";
import workItems from "@/data/work";

export default function Work() {
  return (
    <main className="">
      <Header />
      <div className="grid w-full grid-flow-dense grid-cols-30 gap-2 bg-gray-950/5 p-2 dark:bg-white/10">
        {workItems.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
    </main>
  );
}
