
import DateForm from "@/components/DateForm";

export default function Home() {


  return (
    <main className="flex  flex-col items-center justify-between">
      <section className=" backdrop-blur-[4px] p-32 rounded-md shadow-md">
      <DateForm />
      </section>
 
    </main>
  );
}
