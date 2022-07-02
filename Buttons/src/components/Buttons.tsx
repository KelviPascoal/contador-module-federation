import React from "react";
//@ts-ignore
import useCountStore from "Container/stores/useCountStore";

export default function Buttons() {
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  return (
    <div style={{ display: "flex", gap: "0.8rem", marginTop: "2rem" }}>
      <button
        onClick={decrement}
        style={{
          width: "3rem",
          padding: "0.4rem",
          fontSize: "2rem",
          color: "#fff",
          backgroundColor: "#339345",
          border: 0,
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        -
      </button>
      <button
        onClick={increment}
        style={{
          width: "3rem",
          padding: "0.4rem",
          fontSize: "2rem",
          color: "#fff",
          backgroundColor: "#339345",
          border: 0,
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </div>
  );
}
