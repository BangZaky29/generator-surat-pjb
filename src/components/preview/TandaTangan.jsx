const TandaTangan = ({ data }) => {
  return (
    <div className="mt-16 grid grid-cols-2 gap-12 text-center avoid-break">
      <div>
        <p>Penjual</p>
        <div className="h-20" />
        <p className="font-bold underline">{data.namaPenjual}</p>
      </div>

      <div>
        <p>Pembeli</p>
        <div className="h-20" />
        <p className="font-bold underline">{data.namaPembeli}</p>
      </div>
    </div>
  );
};

export default TandaTangan;
