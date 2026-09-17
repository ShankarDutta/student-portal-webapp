import TopBar from "@/components/Header/Student-Zone/TopBar";
import { LayoutProps } from "@/lib/types";

const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="">
        <TopBar />
      </header>

      {children}
    </>
  );
};

export default PublicLayout;
