import { notFound } from "next/navigation";

import { JobCardDetailView } from "@/components/job-card/job-card-detail-view";
import { getJobCardById, jobCards } from "@/data/crm";

export function generateStaticParams() {
  return jobCards.map((jobCard) => ({
    id: String(jobCard.id),
  }));
}

export default async function JobCardDetailsPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;
  const jobCard = getJobCardById(Number(id));

  if (!jobCard) {
    notFound();
  }

  return <JobCardDetailView initialJobCard={jobCard} />;
}
