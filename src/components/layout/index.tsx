import Navigation from "./navigation";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
