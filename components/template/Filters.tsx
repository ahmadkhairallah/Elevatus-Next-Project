"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import InputWithLabel from "../shared/InputWithLabel";
import { useDebouncedCallback } from "use-debounce";
const Filters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set("itemQuery", value);
      } else {
        params.delete("itemQuery");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300
  );

  return (
    <div>
      <InputWithLabel
        label="Search by title"
        onChange={handleSearchChange}
        defaultValue={searchParams.get("itemQuery")?.toString()}
      />
    </div>
  );
};

export default Filters;
