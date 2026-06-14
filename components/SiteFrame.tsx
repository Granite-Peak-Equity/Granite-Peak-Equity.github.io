import Nav from "./Nav";
import Footer from "./Footer";

/** Wraps every page with the sticky nav and footer. */
export default function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
