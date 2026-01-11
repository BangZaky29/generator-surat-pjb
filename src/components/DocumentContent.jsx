// C:\codingVibes\nuansasolution\.subpath\generator-surat-pjb\src\components\DocumentContent.jsx

const DocumentContent = ({ data }) => (
  <>
    {/* Judul */}
    <h1 className="text-center text-xl font-bold mb-6">
      PERJANJIAN JUAL BELI
    </h1>

    {/* Pembukaan */}
    <p className="mb-4 indent-12">
      Perjanjian ini dibuat pada hari ini, {data.tanggalLengkap}, antara:
    </p>

    {/* Pihak Pertama */}
    <div className="avoid-break mb-4">
      <p className="mb-2">
        <strong>1.</strong> Tuan <strong>{data.namaPenjual}</strong>, lahir di {data.tempatLahirPenjual}, 
        pada tanggal {data.tanggalLahirPenjual}, {data.pekerjaanPenjual}, bertempat tinggal 
        di {data.alamatPenjual}, pemegang Kartu Tanda Penduduk Nomor: {data.ktpPenjual}, 
        Warga Negara Indonesia.
      </p>
      
      {data.adaIstri && (
        <p className="ml-8 mb-2">
          Menurut keterangannya dalam hal ini telah mendapat persetujuan dari Istrinya yang turut hadir 
          dalam pembuatan Surat Perjanjian Peningkatan Jual Beli ini, yaitu Nyonya <strong>{data.namaIstri}</strong>, 
          lahir di {data.tempatLahirIstri}, pada tanggal {data.tanggalLahirIstri}, {data.pekerjaanIstri}, 
          bertempat tinggal di {data.alamatPenjual}, pemegang Kartu Tanda Penduduk Nomor: {data.ktpIstri}, 
          Warga Negara Indonesia, bertempat tinggal sama dengan Suaminya tersebut diatas yang turut hadir 
          dan ikut menandatangani Surat Perjanjian Peningkatan Jual Beli ini sebagai tanda persetujuannya;
        </p>
      )}
      
      <p className="mb-2">
        Selaku <strong>PENJUAL</strong>, yang selanjutnya disebut juga sebagai <strong>PIHAK PERTAMA</strong>.
      </p>
    </div>

    {/* Pihak Kedua */}
    <div className="avoid-break mb-4">
      <p className="mb-2">
        <strong>2.</strong> Tuan <strong>{data.namaPembeli}</strong>, lahir di {data.tempatLahirPembeli}, 
        pada tanggal {data.tanggalLahirPembeli}, bertempat tinggal di {data.alamatPembeli}, 
        pemegang Kartu Tanda Penduduk Nomor: {data.ktpPembeli}, Warga Negara Indonesia.
      </p>
      
      <p className="mb-2">
        Selaku <strong>PEMBELI</strong> yang dalam hal ini bertindak dan atas nama diri sendiri, 
        selanjutnya disebut sebagai <strong>PIHAK KEDUA</strong>.
      </p>
    </div>

    {/* Uraian Objek */}
    <p className="mb-4 indent-12">
      Para pihak bertindak sebagaiamana tersebut diatas, terlebih dahulu dengan ini menerangkan 
      agar supaya dikemudian hari, para pihak tidak dapat memungkirinya, maka Pihak Kedua atas 
      resiko dan tanggung jawabnya sendiri dengan ini berjanji dan oleh karena itu mengikatkan 
      diri akan membeli dan menerima penyerahan dari Pihak Pertama, atas:
    </p>

    {/* Detail Objek */}
    <div className="avoid-break mb-4 ml-8">
      <p className="mb-2">
        1. Sebidang "TANAH" di {data.lokasiTanah}; seluas {data.luasTanah} M² ({data.luasTanahTerbilang}), 
        dengan Surat Pemberitahuan Pajak Terhutang Pajak Bumi dan Bangunan: {data.spptPbb}.
      </p>
      
      <p className="mb-2">
        2. Bahwa Pihak Pertama hendak menjual sebidang "TANAH" tersebut diatas dengan harga 
        Rp.{data.hargaJual},- ({data.hargaJualTerbilang}), yang akan dibayar oleh Pihak Kedua 
        kepada Pihak Pertama, pada saat penandatangan perjanjian ini. Pada saat penandatangan 
        perjanjanjian ini dengan uraian sebagai berikut:
      </p>
      
      <div className="ml-8 space-y-2">
        <p>
          - Pembayaran Pertama (DP) pada {data.tanggalDp} Sebesar Rp.{data.dp},- ({data.dpTerbilang}) 
          di transfer ke Rekening Atas Nama {data.rekeningPenjual} selaku Pihak Pertama.
        </p>
        <p>
          - Pembayaran Kedua (Pelunasan) pada saat Akta Jual telah selesai Peralihannya kepada Pihak Kedua, 
          Pajak-Pajak Jual Beli Sudah dibayarkan dan Pajak-Pajak sudah tervalidasi.
        </p>
      </div>
    </div>

    <p className="mb-6">
      Untuk penerimaan sejumlah uang tersebut akan dibuatkan tanda terima (kwitansi) secara tersendiri.
    </p>

    <p className="mb-6">
      Selanjutnya para penghadap tetap bertindak seperti tersebut diatas menerangkan, bahwa perjanjian 
      pengikatan jual beli ini dilakukan dan diterima dengan syarat-syarat dan ketentuan-ketentuan 
      sebagai berikut:
    </p>

    {/* Pasal 1 */}
    <div className="avoid-break mb-4">
      <h3 className="font-bold text-center mb-2">Pasal 1</h3>
      <p>
        Jual beli tanah tersebut akan dilakukan dan diterima dengan harga yang disepakati oleh para pihak, 
        dengan cara pembayaran seperti telah diuraikan diatas.
      </p>
    </div>

    {/* Pasal 2 */}
    <div className="avoid-break mb-4">
      <h3 className="font-bold text-center mb-2">Pasal 2</h3>
      <p className="mb-2">
        Jual beli tanah tersebut diatas akan dilakukan dan diterima dengan memakai perjanjian-perjanjian 
        dan ketentuan-ketentuan sebagai berikut:
      </p>
      <ol className="list-decimal ml-8 space-y-2">
        <li>segala sesuatu yang akan dijual dan dibeli tersebut berpindah tangan kepada Pihak Kedua 
        dalam keadaan kosong pada hari ini.</li>
        <li>segala sesuatu yang akan dijual dan dibeli itu harus diserahkan oleh Pihak Pertama kepada 
        Pihak Kedua, bebas dari sengketa/perkara;</li>
        <li>Ongkos jual beli, dan segala biaya balik nama Akta Jual Beli mengenai tanah tersebut diatas 
        ke atas nama Pihak Kedua menjadi tanggungan dan harus dibayar oleh Pihak Pertama.</li>
        <li>Mengenai kewajiban pembayaran Pajak Penghasilan (PPH) untuk penjual maupun pajak Bangunan (BPHTB) 
        akan dibayar oleh Pihak Pertama.</li>
        <li>dan selanjutnya dengan memakai perjanjian-perjanjian serta ketentuan-ketentuan yang lazim dipakai 
        untuk sesuatu jual beli tanah, perjanjian-perjanjian dan ketentuan-ketentuan mana telah diketahui 
        oleh kedua belah pihak.</li>
      </ol>
    </div>

    {/* Pasal 3 */}
    <div className="avoid-break mb-4">
      <h3 className="font-bold text-center mb-2">Pasal 3</h3>
      <ol className="list-decimal ml-8 space-y-2">
        <li>Pihak Pertama selanjutnya dengan ini memberi kuasa dengan Hak substitusi kepada Pihak Kedua, 
        untuk selama jual beli atas tanah tersebut diatas belum dilaksanakan untuk dan atas nama Pihak Pertama 
        melakukan dan menjalankan hak, kepentingan dan kekuasaan dari Pihak Pertama sebagai yang berhak dan 
        berkepentingan atas tanah tersebut dan untuk keperluan itu melakukan segala tindakan baik yang berupa 
        tindakan pengurus maupun yang berupa tindakan kepemilikan atas tanah dan rumah tersebut diatas, akan 
        tetapi dengan ketentuan bahwa segala keuntungan dan kerugian yang timbul dari tindakan itu menjadi hak 
        serta tanggungan dari Pihak Kedua sendiri dan segala sesuatu itu dijalankan atas biaya Pihak Kedua.</li>
        <li>Pihak Pertama dengan ini memberi kuasa kepada Pihak Kedua dengan hak untuk menyerahkan kekuasaan 
        ini kepada pihak lain, untuk pengurusan Sertifikat atas nama Pihak Kedua.</li>
      </ol>
    </div>

    {/* Pasal 4 */}
    <div className="avoid-break mb-4">
      <h3 className="font-bold text-center mb-2">Pasal 4</h3>
      <p>
        Pihak Pertama dengan ini memberi kuasa kepada Pihak Kedua dengan hak untuk menyerahkan kekuasaan ini 
        kepada pihak lain, untuk dan atas nama Pihak Pertama melakukan penjualan tanah tersebut kepada Pihak Kedua 
        dengan memakai aturan-aturan sebagaimana tersebut diatas dan aturan-aturan lain yang dipandang baik oleh 
        yang diberi kuasa dan berhubung dengan itu yang diberi kuasa dikuasakan untuk menandatangani akta jual beli 
        yang bersangkutan, menyerahkan apa yang dijual itu serta melakukan apa saja yang dianggap baik dan diperlukan 
        untuk mencapai maksud tersebut dengan tidak ada yang dikecualikan.
      </p>
    </div>

    {/* Pasal 5 */}
    <div className="avoid-break mb-4">
      <h3 className="font-bold text-center mb-2">Pasal 5</h3>
      <p>
        Penanda-tanganan akta jual beli dan Pengurusan Sertifikat Hak Milik atas sebidang "TANAH" tersebut diatas 
        akan dilaksanakan setelah pembayaran Rp.{data.hargaJual},- ({data.hargaJualTerbilang}) telah ditunaikan 
        kepada Pihak Pertama atau maksimal 50% (lima puluh persen) dari Rp.{data.hargaJual},- ({data.hargaJualTerbilang}) 
        senilai Rp.{data.dp},- ({data.dpTerbilang}).
      </p>
    </div>

    {/* Pasal 6 */}
    <div className="avoid-break mb-4">
      <h3 className="font-bold text-center mb-2">Pasal 6</h3>
      <p>
        Pihak Pertama berjanji oleh karena itu mengikatkan diri selama jual beli tanah tersebut diatas belum 
        dilaksanakan, tidak akan menyewakan, menjaminkan atau membebani dan atau dengan cara apapun mengalihkan 
        hak atas tanah tersebut kepada pihak lain.
      </p>
    </div>

    {/* Pasal 7 */}
    <div className="avoid-break mb-4">
      <h3 className="font-bold text-center mb-2">Pasal 7</h3>
      <p>
        Perjanjian ini tidak akan berakhir karena salah satu pihak meninggal dunia akan tetapi temurun dan harus 
        dipenuhi oleh (para) ahli warisnya dan/atau yang mendapatkan hak dari pihak yang meninggal dunia itu.
      </p>
    </div>

    {/* Pasal 8 */}
    <div className="avoid-break mb-4">
      <h3 className="font-bold text-center mb-2">Pasal 8</h3>
      <p>
        Segala biaya, bea balik nama dan ongkos-ongkos lainnya yang harus dikeluarkan untuk tertulisnya Akta Jual Beli 
        mengenai tanah tersebut atas nama Pihak Kedua harus dibayarkan oleh Pihak Pertama. Termasuk Biaya Pajak Penjual, 
        Pajak Pembeli, Validasi Pajak Penjual, Pecah SPPT PBB P2 dan Peralihan SPPT PBB P2 ke atas nama Pihak Kedua.
      </p>
    </div>

    {/* Pasal 9 */}
    <div className="avoid-break mb-6">
      <h3 className="font-bold text-center mb-2">Pasal 9</h3>
      <p>
        Tentang perjanjian ini dengan segala akibatnya kedua belah pihak memilih domisili yang tetap dan umum 
        di Kantor Panitera {data.pengadilan}.
      </p>
    </div>

    {/* Tanda Tangan */}
    <div className="avoid-break mt-12 grid grid-cols-2 gap-8">
      <div className="text-center">
        <p className="font-bold mb-16">PIHAK PERTAMA</p>
        <p className="font-bold">({data.namaPenjual})</p>
        {data.adaIstri && (
          <p className="font-bold mt-8">({data.namaIstri})</p>
        )}
      </div>
      <div className="text-center">
        <p className="font-bold mb-16">PIHAK KEDUA</p>
        <p className="font-bold">({data.namaPembeli})</p>
      </div>
    </div>
  </>
);

export default DocumentContent;