import * as queryFns from "@/lib/query/fns";
import * as queryKeys from "@/lib/query/keys";

const Queries = {
  getImageUrl: (query: string) => ({
    key: queryKeys.queryKeys.image(query),
    fn: () => queryFns.getImageUrl(query),
  }),
}

export default Queries;
