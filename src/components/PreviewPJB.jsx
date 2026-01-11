import { useState } from 'react';
import './PreviewPJB.css';
import DocumentContent from './DocumentContent';

export default function PreviewPJB({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 6;

  return (
    <div className="preview-wrapper">

      {/* ===== SCREEN ONLY PAGINATION ===== */}
      <div className="page-controls print:hidden">
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`page-btn ${currentPage === page ? 'active' : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            Page {page}
          </button>
        ))}
      </div>

      {/* ===== SCREEN PREVIEW (1 PAGE ONLY) ===== */}
      <div className="preview-container single screen-only">
        <div className="a4-page">
          <DocumentContent data={data} page={currentPage} />
        </div>
      </div>

      {/* ===== PRINT ONLY (ALL PAGES) ===== */}
      <div className="print-only">
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
          <div className="a4-page" key={`print-${page}`}>
            <DocumentContent data={data} page={page} />
          </div>
        ))}
      </div>

    </div>
  );
}
