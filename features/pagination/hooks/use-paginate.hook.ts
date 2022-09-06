import { useRouter } from "next/router";
import { useState } from "react";

interface PaginateParams {
  [anyProp: string]: any;
}

export function usePaginate() {
  const [page, setPage] = useState(1);
  // const router = useRouter()
  // const page = Number(router.query.page || 1)

  const handleChange = (event: any) => {
    setPage(event.selected + 1);

    // router.push({
    //     pathname: router.asPath.split('?')[0],
    //     query: {
    //         ...query,
    //         page: event.selected + 1
    //     },
    // });
  };

  return [page, handleChange] as const;
}
