import React from "react";
import { Buttons } from "../comnponents/ButtonsRemote";

//@ts-ignore
import useCountStore from "Container/stores/useCountStore";
import { Display } from "../comnponents/DisplayRemote";
import { Card } from "../comnponents/Card";

export function Home() {
  const value = useCountStore((state) => state.value);
  return (
    <>
      <p>{value}</p>
      <Card>
        <h1 style={{ color: "#ededed" }}>Contador</h1>
        <Display />

        <Buttons />
      </Card>
    </>
  );
}
