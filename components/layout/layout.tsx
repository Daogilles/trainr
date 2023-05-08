import { Inter } from "next/font/google";
import Navigation from "./navigation";

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <Navigation />
      <main className={`mx-auto max-w-7xl block ${inter.className}`}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
