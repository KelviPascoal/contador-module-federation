import React from "react";

const CardRemote = React.lazy(
  //@ts-ignore
  () => import("Display/components/Card")
);

type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <React.Suspense fallback="Carregando...">
      <CardRemote>{children}</CardRemote>
    </React.Suspense>
  );
}
