import React from 'react';
import './preview.css';

const PageA4 = ({ children, pageNumber }) => {
  return (
    <div className="a4-wrapper">
      <div className="a4-paper">
        {children}
      </div>

      {/* Nomor halaman hanya untuk preview */}
      <div className="page-number print:hidden">
        Halaman {pageNumber}
      </div>
    </div>
  );
};

export default PageA4;
