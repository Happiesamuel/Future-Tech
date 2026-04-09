"use client";
import React from "react";
import { Providers } from "./Provider";

export default function App({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
