import React from "react";

const DisplayRemote = React.lazy(
  //@ts-ignore
  () => import("Display/components/Display")
);

export function Display() {
  return (
    <React.Suspense fallback="Carregando...">
      <DisplayRemote />
    </React.Suspense>
  );
}
