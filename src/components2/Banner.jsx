const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="w-full px-6 py-6">
      <div
        className="rounded-2xl p-8"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #1a6b4a 100%)",
        }}
      >
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          {/* In-Progress */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="rounded-xl px-16 py-6 text-center min-w-48"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <p className="text-white/70 text-sm font-medium mb-2 tracking-wider uppercase">
                In-Progress
              </p>
              <p className="text-white text-5xl font-bold">{inProgressCount}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 bg-white/20"></div>

          {/* Resolved */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="rounded-xl px-16 py-6 text-center min-w-48"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <p className="text-white/70 text-sm font-medium mb-2 tracking-wider uppercase">
                Resolved
              </p>
              <p className="text-white text-5xl font-bold">{resolvedCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
