import React, { useRef } from 'react';
import PageA4 from './PageA4';
import HeaderSurat from './HeaderSurat';
import BodySurat from './BodySurat';
import TandaTangan from './TandaTangan';
import usePaginate from '../usePaginate';
import './preview.css';

const PreviewPJB = ({ data }) => {
  const contentRef = useRef(null);

  const pages = usePaginate(contentRef, [data]);

  return (
    <>
      {/* Hidden content untuk hitung tinggi */}
      <div
        ref={contentRef}
        className="absolute -z-50 opacity-0 pointer-events-none"
        style={{ width: '210mm' }}
      >
        <HeaderSurat />
        <BodySurat data={data} />
        <TandaTangan data={data} />
      </div>

      {/* Preview */}
      <div className="flex gap-6 overflow-x-auto pb-6">
        {pages.length === 0 && (
          <div className="text-gray-500 text-sm">
            Menyiapkan pratinjau dokumen…
          </div>
        )}

        {pages.map((page, index) => (
          <PageA4 key={index} pageNumber={index + 1}>
            {page.map((node, i) => (
              <div
                key={i}
                dangerouslySetInnerHTML={{ __html: node.outerHTML }}
              />
            ))}
          </PageA4>
        ))}
      </div>
    </>
  );
};

export default PreviewPJB;
