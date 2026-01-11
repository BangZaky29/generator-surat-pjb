const PageA4 = ({ children, pageNumber }) => {
  return (
    <div className="a4-wrapper">
      <div className="a4-paper print-root">
        {children}
      </div>
      <div className="page-number print:hidden">
        Halaman {pageNumber}
      </div>
    </div>
  );
};

export default PageA4;
