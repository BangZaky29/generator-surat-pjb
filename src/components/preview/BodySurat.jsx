const BodySurat = ({ data }) => {
  return (
    <div className="text-justify text-sm leading-relaxed space-y-4">
      <p className="indent-12">
        Pada hari ini {data.tanggalLengkap}, telah dibuat dan
        ditandatangani perjanjian jual beli antara:
      </p>

      <p className="avoid-break">
        <strong>Pihak Pertama (Penjual):</strong><br />
        Nama: {data.namaPenjual}<br />
        Tempat/Tgl Lahir: {data.tempatLahirPenjual}, {data.tanggalLahirPenjual}<br />
        Pekerjaan: {data.pekerjaanPenjual}<br />
        Alamat: {data.alamatPenjual}<br />
        No. KTP: {data.ktpPenjual}
      </p>

      <p className="avoid-break">
        <strong>Pihak Kedua (Pembeli):</strong><br />
        Nama: {data.namaPembeli}<br />
        Tempat/Tgl Lahir: {data.tempatLahirPembeli}, {data.tanggalLahirPembeli}<br />
        Alamat: {data.alamatPembeli}<br />
        No. KTP: {data.ktpPembeli}
      </p>

      <p className="indent-12">
        Objek jual beli berupa sebidang tanah seluas {data.luasTanah} m²
        ({data.luasTanahTerbilang}) yang berlokasi di {data.lokasiTanah}.
      </p>

      <p className="indent-12">
        Harga jual disepakati sebesar Rp {data.hargaJual}
        ({data.hargaJualTerbilang}).
      </p>
    </div>
  );
};

export default BodySurat;
