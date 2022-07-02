import React from "react";

//@ts-ignore
import useCountStore from "Container/stores/useCountStore";

export default function Display() {
  const value = useCountStore((state) => state.value);
  return (
    <div
      style={{
        background: "#303030",
        color: "#fff",
        padding: "1rem",
        width: "4rem",
        borderRadius: "1rem",
      }}
    >
      {value}
    </div>
  );
}
