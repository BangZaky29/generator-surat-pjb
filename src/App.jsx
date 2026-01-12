// src/App.jsx - REFACTORED

import React, { useState } from 'react';
import { FileText, User, Users, FileEdit, Download, ChevronDown, ChevronUp, Home } from 'lucide-react';
import logo from './assets/NS_white_01.png';
import PreviewPJB from './components/PreviewPJB';
import { Printer } from 'lucide-react';
import { generatePDFPJB } from '../src/utils/generatePDFPJB';

// ============= CONFIG DEFAULT DATA =============
const DEFAULT_CONFIG = {
  tanggalLengkap: '', // kosong, nanti user isi
  namaPenjual: '', // placeholder sederhana
  tempatLahirPenjual: '',
  tanggalLahirPenjual: '',
  pekerjaanPenjual: '',
  alamatPenjual: '',
  ktpPenjual: '', // NIK default

  adaIstri: false, // default belum ada
  namaIstri: '',
  tempatLahirIstri: '',
  tanggalLahirIstri: '',
  pekerjaanIstri: '',
  ktpIstri: '',

  namaPembeli: '',
  tempatLahirPembeli: '',
  tanggalLahirPembeli: '',
  alamatPembeli: '',
  ktpPembeli: '',

  lokasiTanah: '',
  luasTanah: '',
  luasTanahTerbilang: '',
  spptPbb: '',
  hargaJual: '',
  hargaJualTerbilang: '',
  dp: '',
  dpTerbilang: '',
  tanggalDp: '',
  rekeningPenjual: '',
  pengadilan: ''
};


// Component: Accordion
const Accordion = ({ title, icon: Icon, children, isOpen, onToggle }) => (
  <div className="mb-4 bg-white rounded-lg border border-gray-200 overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <span className="font-semibold text-gray-800">{title}</span>
      </div>
      {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
    </button>
    {isOpen && <div className="p-4 pt-0 border-t border-gray-100">{children}</div>}
  </div>
);

// Component: Input Field
const InputField = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
    />
  </div>
);

// Component: Textarea Field
const TextareaField = ({ label, name, value, onChange, placeholder, rows = 3 }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
    />
  </div>
);

// Main App Component
export default function App() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [notification, setNotification] = useState(null); // null | { type: 'success' | 'error' | 'info', message: string }
  const [viewMode, setViewMode] = useState('form');
  const [openSections, setOpenSections] = useState({
    tanggal: true,
    penjual: false,
    pembeli: false,
    objek: false
  });

  const [formData, setFormData] = useState(DEFAULT_CONFIG);

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handlePrint = () => {
    window.print();
  };

  // ✅ Move handleDownloadPDF here
  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);
      setNotification({ type: 'info', message: 'Sedang menyiapkan PDF...' });

      // generatePDFPJB bisa dibuat async jika belum
      await generatePDFPJB(formData);  

      setIsDownloading(false);
      setNotification({ type: 'success', message: 'PDF berhasil diunduh!' });

      // hide notifikasi otomatis setelah 3 detik
      setTimeout(() => setNotification(null), 3000);

    } catch (error) {
      console.error(error);
      setIsDownloading(false);
      setNotification({ type: 'error', message: 'Gagal mengunduh PDF.' });
      setTimeout(() => setNotification(null), 3000);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification */}
        {notification && (
          <div
            className={`fixed top-4 right-4 z-50 px-4 py-3 rounded shadow-lg text-white
              ${notification.type === 'success' ? 'bg-green-500' : ''}
              ${notification.type === 'error' ? 'bg-red-500' : ''}
              ${notification.type === 'info' ? 'bg-blue-500' : ''}`}
          >
            {notification.message}
          </div>
        )}
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 print:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 md:w-32 md:h-32 border-gray-300 rounded-xl shadow-[5px_5px_12px_rgba(0,0,0,0.11)]">
              <img src={logo} alt="Logo" className="w-full h-full object-contain"/>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-800">Generator Perjanjian Jual Beli</h1>
              <p className="text-xs md:text-sm text-gray-600">Buat perjanjian jual beli properti dengan mudah</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Panel - Form */}
          <div className={`lg:col-span-2 print:hidden ${viewMode === 'preview' ? 'hidden lg:block' : 'block'}`}>
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
              <div className="flex items-start gap-2">
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-semibold text-blue-900 mb-1">Tips:</p>
                  <p className="text-sm text-blue-800">
                    Pastikan semua data terisi dengan lengkap dan benar. Gunakan format terbilang untuk tanggal dan nominal.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 inline-flex items-center justify-center text-sm mr-2">1</span>
                Isi Data Perjanjian
              </h2>

              {/* Tanggal Perjanjian */}
              <Accordion title="Tanggal Perjanjian" icon={FileText} isOpen={openSections.tanggal} onToggle={() => toggleSection('tanggal')}>
                <TextareaField
                  label="Tanggal Lengkap (Terbilang)"
                  name="tanggalLengkap"
                  value={formData.tanggalLengkap}
                  onChange={handleInputChange}
                  placeholder="tujuh Oktober Tahun dua ribu dua puluh lima (07-10-2025)"
                  rows={2}
                />
              </Accordion>

              {/* Data Penjual */}
              <Accordion title="Data Pihak Pertama (Penjual)" icon={User} isOpen={openSections.penjual} onToggle={() => toggleSection('penjual')}>
                <InputField label="Nama Lengkap" name="namaPenjual" value={formData.namaPenjual} onChange={handleInputChange} placeholder="Atas Nama..." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="Tempat Lahir" name="tempatLahirPenjual" value={formData.tempatLahirPenjual} onChange={handleInputChange} placeholder="Bogor" />
                  <TextareaField label="Tanggal Lahir (Terbilang)" name="tanggalLahirPenjual" value={formData.tanggalLahirPenjual} onChange={handleInputChange} placeholder="dua puluh lima Januari..." rows={2} />
                </div>
                <InputField label="Pekerjaan" name="pekerjaanPenjual" value={formData.pekerjaanPenjual} onChange={handleInputChange} placeholder="Karyawan Swasta" />
                <TextareaField label="Alamat Lengkap" name="alamatPenjual" value={formData.alamatPenjual} onChange={handleInputChange} placeholder="Jalan Letnan Sukarna..." rows={3} />
                <InputField label="Nomor KTP" name="ktpPenjual" value={formData.ktpPenjual} onChange={handleInputChange} placeholder="No.ktp penjual" />
                
                <div className="mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="adaIstri" checked={formData.adaIstri} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                    <span className="text-sm font-medium text-gray-700">Penjual Sudah Menikah (Ada Persetujuan Istri)</span>
                  </label>
                </div>

                {formData.adaIstri && (
                  <div className="pl-4 border-l-2 border-blue-200">
                    <InputField label="Nama Istri" name="namaIstri" value={formData.namaIstri} onChange={handleInputChange} placeholder="Atas Nama..." />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputField label="Tempat Lahir Istri" name="tempatLahirIstri" value={formData.tempatLahirIstri} onChange={handleInputChange} placeholder="Bogor" />
                      <TextareaField label="Tanggal Lahir Istri" name="tanggalLahirIstri" value={formData.tanggalLahirIstri} onChange={handleInputChange} placeholder="empat belas Juli..." rows={2} />
                    </div>
                    <InputField label="Pekerjaan Istri" name="pekerjaanIstri" value={formData.pekerjaanIstri} onChange={handleInputChange} placeholder="Mengurus Rumah Tangga" />
                    <InputField label="Nomor KTP Istri" name="ktpIstri" value={formData.ktpIstri} onChange={handleInputChange} placeholder="No.ktp istri" />
                  </div>
                )}
              </Accordion>

              {/* Data Pembeli */}
              <Accordion title="Data Pihak Kedua (Pembeli)" icon={Users} isOpen={openSections.pembeli} onToggle={() => toggleSection('pembeli')}>
                <InputField label="Nama Lengkap" name="namaPembeli" value={formData.namaPembeli} onChange={handleInputChange} placeholder="Atas Nama..." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="Tempat Lahir" name="tempatLahirPembeli" value={formData.tempatLahirPembeli} onChange={handleInputChange} placeholder="Bogor" />
                  <TextareaField label="Tanggal Lahir (Terbilang)" name="tanggalLahirPembeli" value={formData.tanggalLahirPembeli} onChange={handleInputChange} placeholder="dua puluh tujuh November..." rows={2} />
                </div>
                <TextareaField label="Alamat Lengkap" name="alamatPembeli" value={formData.alamatPembeli} onChange={handleInputChange} placeholder="Kampung Pabuaran..." rows={3} />
                <InputField label="Nomor KTP" name="ktpPembeli" value={formData.ktpPembeli} onChange={handleInputChange} placeholder="No.ktp pembeli" />
              </Accordion>

              {/* Objek Jual Beli */}
              <Accordion title="Objek & Harga Jual Beli" icon={Home} isOpen={openSections.objek} onToggle={() => toggleSection('objek')}>
                <TextareaField label="Lokasi Tanah" name="lokasiTanah" value={formData.lokasiTanah} onChange={handleInputChange} placeholder="Kampung Benteng, RT 001, RW 003..." rows={3} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="Luas Tanah (M²)" name="luasTanah" value={formData.luasTanah} onChange={handleInputChange} placeholder="130" type="number" />
                  <InputField label="Luas Tanah (Terbilang)" name="luasTanahTerbilang" value={formData.luasTanahTerbilang} onChange={handleInputChange} placeholder="seratus tiga puluh meter persegi" />
                </div>
                <InputField label="SPPT PBB" name="spptPbb" value={formData.spptPbb} onChange={handleInputChange} placeholder="No.sppt pbb" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="Harga Jual (Angka)" name="hargaJual" value={formData.hargaJual} onChange={handleInputChange} placeholder="136500000" />
                  <InputField label="Harga Jual (Terbilang)" name="hargaJualTerbilang" value={formData.hargaJualTerbilang} onChange={handleInputChange} placeholder="Seratus Tiga Puluh Enam Juta..." />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="DP (Angka)" name="dp" value={formData.dp} onChange={handleInputChange} placeholder="68250000" />
                  <InputField label="DP (Terbilang)" name="dpTerbilang" value={formData.dpTerbilang} onChange={handleInputChange} placeholder="Enam Puluh Delapan Juta..." />
                </div>
                <InputField label="Tanggal Pembayaran DP" name="tanggalDp" value={formData.tanggalDp} onChange={handleInputChange} placeholder="Selasa 07 Oktober 2025" />
                <InputField label="Rekening Atas Nama" name="rekeningPenjual" value={formData.rekeningPenjual} onChange={handleInputChange} placeholder="Atas Nama..." />
                <InputField label="Pengadilan Domisili" name="pengadilan" value={formData.pengadilan} onChange={handleInputChange} placeholder="Pengadilan Negeri..." />
              </Accordion>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className={`lg:col-span-3 ${viewMode === 'form' ? 'hidden lg:block' : 'block'}`}>
            <div className="print:hidden mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-800">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 inline-flex items-center justify-center text-sm mr-2">2</span>
                  Pratinjau Hasil
                </h2>
                <div className="flex justify-end gap-4 mb-4 print:hidden">
                  <button
                    onClick={handleDownloadPDF}
                    disabled={isDownloading}
                    className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors shadow-sm text-sm md:text-base
                      ${isDownloading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                  >
                    {isDownloading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3h-4z"></path>
                        </svg>
                        Sedang Mengunduh...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 md:w-5 md:h-5" />
                        PDF
                      </>
                    )}
                  </button>

                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors shadow-sm text-sm md:text-base"
                  >
                    <Printer className="w-4 h-4 md:w-5 md:h-5" />
                    PRINT
                  </button>

                </div>

              </div>
            </div>

            <PreviewPJB data={formData} />
          </div>
        </div>
      </div>

      {/* Floating Action Button - Mobile Only */}
      <div className="fixed bottom-4 right-4 z-50 lg:hidden print:hidden">
        <button
          onClick={() => setViewMode(viewMode === 'form' ? 'preview' : 'form')}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition-all active:scale-95"
        >
          {viewMode === 'form' ? <FileText className="w-6 h-6" /> : <FileEdit className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}