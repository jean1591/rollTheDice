export const Score = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-8 rounded-lg bg-slate-100 p-8 shadow-lg">
      <div className="flex-1 rounded-lg bg-white p-4">
        <p className="text-center text-3xl font-bold">You</p>

        <div className="mt-12 flex items-center justify-between gap-x-4">
          <div className="flex-1 rounded-lg bg-slate-100 p-4 text-right shadow-md">
            <p className="text-2xl font-bold">64</p>
            <p className="text-sm text-slate-400">Score</p>
          </div>
          <div className="flex-1 rounded-lg bg-slate-100 p-4 text-right shadow-md">
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-slate-400">Turn</p>
          </div>
        </div>
      </div>

      <div className="flex-1 rounded-lg bg-white p-4">
        <p className="text-center text-3xl font-bold">Computer</p>

        <div className="mt-12 flex items-center justify-between gap-x-4">
          <div className="flex-1 rounded-lg bg-slate-100 p-4 text-right shadow-md">
            <p className="text-2xl font-bold">64</p>
            <p className="text-sm text-slate-400">Score</p>
          </div>
          <div className="flex-1 rounded-lg bg-slate-100 p-4 text-right shadow-md">
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-slate-400">Turn</p>
          </div>
        </div>
      </div>
    </div>
  )
}
