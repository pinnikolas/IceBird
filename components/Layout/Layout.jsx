import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

const Layout = ({ children }) => {
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
