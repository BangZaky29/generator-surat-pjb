// src/components/PreviewPJB.jsx - FIXED

import React from 'react';
import DocumentContent from './DocumentContent';

const PreviewPJB = ({ data }) => {
  return (
    <div className="preview-container">
      {/* Preview untuk Screen */}
      <div className="screen-preview">
        <div className="a4-page">
          <DocumentContent data={data} />
        </div>
      </div>

      {/* Print Content - Hidden on screen */}
      <div className="print-content">
        <DocumentContent data={data} />
      </div>

      <style jsx>{`
        /* Screen Preview */
        .screen-preview {
          display: block;
        }

        .a4-page {
          width: 100%;
          max-width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          padding: 1.5cm;
          background: white;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          overflow: visible;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .a4-page {
            padding: 1cm;
            box-shadow: none;
            border-radius: 0;
          }
        }

        /* Print Content - Hidden on screen */
        .print-content {
          display: none;
        }

        /* Print Styles */
        @media print {
          .preview-container {
            margin: 0;
            padding: 0;
          }

          .screen-preview {
            display: none;
          }

          .print-content {
            display: block;
          }

          @page {
            size: A4;
            margin: 2cm;
          }
        }
      `}</style>
    </div>
  );
};

export default PreviewPJB;