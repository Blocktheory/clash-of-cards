import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battle of Cards",
  description: "Battle of Cards",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
