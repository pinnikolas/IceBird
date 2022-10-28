import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { FC, ReactNode } from "react";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container container-main">
          <SideBar />
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
