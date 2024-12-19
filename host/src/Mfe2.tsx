import React, { Suspense } from "react";

const Mfe2Module = React.lazy(
  // @ts-expect-error ts(2306)
  () => import("Mfe2/Mfe2")
);

export const Mfe2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Mfe2Module />
  </Suspense>
);
