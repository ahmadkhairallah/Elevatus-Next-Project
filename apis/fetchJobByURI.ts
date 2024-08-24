import { IJob, IResponse } from "@/app/types";
import { BASEURL } from "@/constants";

export const fetchJobByURI = async (uri: string) => {
  try {
    const url = BASEURL + `/uri?uri=${uri}`;
    const res = await fetch(url, {
      headers: {
        "Accept-Account": process.env
          .NEXT_PUBLIC_ACCEPT_ACCOUNT_HEADER as string,
        "Accept-Company": process.env
          .NEXT_PUBLIC_ACCEPT_COMPANY_HEADER as string,
      },
    });
    const response: IResponse<IJob> = await res.json();
    if (response.statusCode !== 200) {
      throw new Error(JSON.stringify(response));
    }
    return response;
  } catch (err) {
    throw new Error(err as string);
  }
};
