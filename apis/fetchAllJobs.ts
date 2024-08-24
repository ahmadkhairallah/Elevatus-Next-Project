import { IResponse, JobsResults } from "@/app/types";
import { BASEURL, URLPARAMS } from "@/constants";

export const fetchAllJobs = async (
  params?: Record<string, string | number>
) => {
  const _url = new URL(BASEURL);
  _url.searchParams.append(
    "language_profile_uuid",
    URLPARAMS.language_profile_uuid
  );
  _url.searchParams.append("limit", URLPARAMS.limit);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        _url.searchParams.append(key, String(value));
      }
    });
  }
  try {
    const res = await fetch(_url.toString(), {
      headers: {
        "Accept-Account": process.env
          .NEXT_PUBLIC_ACCEPT_ACCOUNT_HEADER as string,
        "Accept-Company": process.env
          .NEXT_PUBLIC_ACCEPT_COMPANY_HEADER as string,
      },
    });
    const response: IResponse<JobsResults> = await res.json();

    return response;
  } catch (err) {
    throw new Error(err as string);
  }
};
