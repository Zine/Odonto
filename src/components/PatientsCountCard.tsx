"use client";

import { trpc } from "@/app/_trpc/client";
import Skeleton from "react-loading-skeleton";

const PatientsCountCard = () => {
  const { data, isLoading } = trpc.getPatientsCounts.useQuery();

  if (isLoading) {
    return <Skeleton count={2} width={200} />;
  }

  return (
    <div className="p-4 border border-gray-200 rounded-xl w-[200px] text-center shadow">
      <p className="text-lg font-semibold">{data}</p>
      <p className="text-sm">Patients</p>
    </div>
  );
};

export default PatientsCountCard;
