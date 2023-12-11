"use client";

import { trpc } from "@/app/_trpc/client";
import Skeleton from "react-loading-skeleton";

const AppointmentsCountCard = () => {
  const { data, isLoading } = trpc.getAppointmentsCounts.useQuery();

  if (isLoading) {
    return <Skeleton count={2} width={200} />;
  }

  return (
    <div className="p-4 border rounded-xl w-[200px] text-center">
      <p className="text-lg font-semibold">{data}</p>
      <p className="text-sm">Appointments</p>
    </div>
  );
};

export default AppointmentsCountCard;
