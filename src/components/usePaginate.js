import { useEffect, useState } from 'react';

const A4_HEIGHT_PX = 1122; // ± tinggi A4 @96dpi (aman)

export default function usePaginate(contentRef, deps = []) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (!contentRef.current) return;

    const nodes = Array.from(contentRef.current.children);
    const result = [];

    let currentPage = [];
    let currentHeight = 0;

    nodes.forEach((node) => {
      const nodeHeight = node.offsetHeight;

      if (currentHeight + nodeHeight > A4_HEIGHT_PX) {
        result.push(currentPage);
        currentPage = [];
        currentHeight = 0;
      }

      currentPage.push(node);
      currentHeight += nodeHeight;
    });

    if (currentPage.length) {
      result.push(currentPage);
    }

    setPages(result);
  }, deps);

  return pages;
}
