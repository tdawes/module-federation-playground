import React from "react";
import { Mfe1 } from "./Mfe1";
import { Mfe2 } from "./Mfe2";

export const App = () => {
  const [showV2, setShowV2] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setShowV2(true), 10000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <Mfe1 />
      {showV2 && <Mfe2 />}
    </div>
  );
};
