import React from "react";

export type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div
      style={{
        padding: "1rem 0.8rem",
        margin: "2rem",
        background: "#909090",
        borderRadius: "1rem",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "12rem",
      }}
    >
      {children}
    </div>
  );
}
