import NavBar from "@/components/Header/Student-Zone/NavBar";
import TopBar from "@/components/Header/Student-Zone/TopBar";
import { LayoutProps } from "@/lib/types";

const StudentZoneLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <TopBar />
        <NavBar />
      </header>

      {children}
    </>
  );
};

export default StudentZoneLayout;
