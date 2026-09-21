const Footer = () => {
  return (
    <footer className="items-center justify-between space-y-2 border-t-2 px-6 py-4 text-center lg:flex lg:space-y-0">
      <h2 className="text-foreground text-sm">
        MARS ACADEMY - Computer Training & Carrer Development Institute
      </h2>
      <div className="text-balance">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} all Rights Resvered By{" "}
          <a
            href="https://marsacademy.in/"
            className="hover:text-blue-600">
            {" "}
            Mars Academy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
