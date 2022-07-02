import React from "react";

const ButtonsRemote = React.lazy(
  //@ts-ignore
  () => import("Buttons/components/Buttons")
);

export function Buttons() {
  return (
    <React.Suspense fallback="Carregando...">
      <ButtonsRemote />
    </React.Suspense>
  );
}
