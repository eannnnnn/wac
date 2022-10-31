import { PropsWithChildren } from "react";
import Footer from "~/components/layout/footer/Footer";
import Header from "~/components/layout/header/Header";
import RootLayout from "~/components/layout/RootLayout";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <RootLayout>
      <Header />
      {children}
      <Footer />
    </RootLayout>
  );
}
