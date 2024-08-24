import JobCard from "@/components/shared/JobCard";
import Container from "@/components/shared/Container";
import { Suspense } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { fetchAllJobs } from "@/apis/fetchAllJobs";

const Filters = dynamic(() => import("@/components/template/Filters"), {
  ssr: false,
});

type Props = {
  searchParams: {
    itemQuery?: string;
    page?: string;
  };
  params: Record<string, string>;
};

export default async function Home({ searchParams }: Readonly<Props>) {
  const itemQuery = searchParams?.itemQuery ?? "";
  const page = Number(searchParams?.page) - 1 || 0;
  const { results } = await fetchAllJobs({
    itemQuery,
    page,
  });
  return (
    <Suspense fallback={<Loading />}>
      <main className="min-h-screen ">
        <Container className="space-y-4">
          <Filters />
          <div className="flex flex-wrap gap-4">
            {results?.jobs?.map(
              ({ uri, title, location, career_level, is_top }) => (
                <JobCard
                  key={uri}
                  title={title}
                  city={location?.city ?? location?.country}
                  careerLevel={career_level}
                  isTop={is_top}
                  uri={uri}
                />
              )
            )}
          </div>
          <Suspense key={itemQuery + page} fallback={<></>}>
            <Pagination>
              <PaginationContent>
                {Array.from({ length: Number(results?.pages) }).map(
                  (_, idx) => (
                    <PaginationItem key={idx * 1}>
                      <PaginationLink
                        isActive={page === idx}
                        href={{
                          search: `page=${idx + 1}`,
                        }}
                      >
                        {idx + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
              </PaginationContent>
            </Pagination>
          </Suspense>
        </Container>
      </main>
    </Suspense>
  );
}
