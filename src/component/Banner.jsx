const Banner = ({ taskStatus, resolved }) => {
  return (
    <div className="px-6 lg:px-16 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card text-white shadow-md rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-500">
          <div className="card-body items-center justify-center text-center py-10">
            <p className="text-xl font-semibold opacity-80">In-Progress</p>
            <h2 className="text-5xl font-bold">{taskStatus.length}</h2>  
          </div>
        </div>

        <div className="card text-white shadow-md rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600">
          <div className="card-body items-center justify-center text-center py-10">
            <p className="text-xl font-semibold opacity-80">Resolved</p>
            <h2 className="text-5xl font-bold">{resolved.length}</h2>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;