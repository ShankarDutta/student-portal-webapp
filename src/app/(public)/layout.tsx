import Footer from "@/components/Footer/Footer";
import { LayoutProps } from "@/lib/types";

const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}

      <Footer />
    </>
  );
};

export default PublicLayout;
