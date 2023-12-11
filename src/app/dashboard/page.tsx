import AppointmentsCountCard from "@/components/AppointmentsCountCard";
import HistoriesCountCard from "@/components/HistoriesCountCard";
import PatientsCountCard from "@/components/PatientsCountCard";

const Page = () => {
  return (
    <article className="flex flex-col gap-8 overflow-x-auto">
      <section>
        <h2 className="text-4xl">Dashboard</h2>
      </section>
      <section>
        <div className="flex justify-between">
          <PatientsCountCard />
          <HistoriesCountCard />
          <AppointmentsCountCard />
        </div>
      </section>
      <section>
        <h2 className="text-4xl">Week</h2>
      </section>
    </article>
  );
};

export default Page;
