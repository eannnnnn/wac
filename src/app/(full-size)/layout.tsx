import { PropsWithChildren } from "react";
import RootLayout from "~/components/layout/RootLayout";
import "~/styles/global.css";

export default function MainLayout({ children }: PropsWithChildren) {
  return <RootLayout>{children}</RootLayout>;
}
