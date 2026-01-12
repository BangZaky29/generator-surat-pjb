// src/utils/generatePDFPJB.js

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import DocumentContent from '../components/DocumentContent';

/**
 * generatePDFPJB
 * @param {object} data - formData dari App.jsx
 * @returns {Promise<void>} - promise agar bisa await
 */
export const generatePDFPJB = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pdf = new jsPDF({
        format: 'a4',
        unit: 'mm',
        orientation: 'portrait',
      });

      const totalPage = 6; // jumlah halaman default
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let page = 1; page <= totalPage; page++) {
        // Render React component tanpa JSX
        const htmlString = ReactDOMServer.renderToStaticMarkup(
          React.createElement(
            'div',
            {
              style: {
                width: '210mm',
                minHeight: '297mm',
                padding: '20mm',
                boxSizing: 'border-box',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#ffffff', // pastikan bg putih
              },
            },
            React.createElement(DocumentContent, { data, page })
          )
        );

        // Buat temporary container
        const tempDiv = document.createElement('div');
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        tempDiv.style.top = '0';
        tempDiv.innerHTML = htmlString;
        document.body.appendChild(tempDiv);

        // Render ke canvas
        const canvas = await html2canvas(tempDiv, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
        });

        const imgData = canvas.toDataURL('image/png');

        // Hitung proporsi
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pageWidth;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        if (page > 1) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Hapus temporary div
        document.body.removeChild(tempDiv);
      }

      // Simpan PDF
      pdf.save(`Perjanjian_Jual_Beli_${data.namaPenjual || 'Penjual'}.pdf`);

      resolve();
    } catch (error) {
      console.error('Error generate PDF:', error);
      reject(error);
    }
  });
};
