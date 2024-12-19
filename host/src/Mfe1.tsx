import React, { Suspense } from "react";

const Mfe1Module = React.lazy(
  // @ts-expect-error ts(2306)
  () => import("Mfe1/Mfe1")
);

export const Mfe1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Mfe1Module />
  </Suspense>
);
