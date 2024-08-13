export const PlayButtons = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-8">
      <button className="flex-1 rounded-lg border-[1px] border-slate-200 bg-blue-100 px-4 py-8 shadow-lg transition duration-500 ease-in-out hover:bg-blue-50 hover:shadow-none focus:border-slate-200">
        <p className="text-3xl font-bold">Roll</p>
        <p className="text-sm text-slate-400">
          You can use the <span className="font-bold">R</span> key to play
        </p>
      </button>

      <button className="flex-1 rounded-lg border-[1px] border-slate-200 bg-red-100 px-4 py-8 shadow-lg transition duration-500 ease-in-out hover:bg-red-50 hover:shadow-none focus:border-slate-200">
        <p className="text-3xl font-bold">End turn</p>
        <p className="text-sm text-slate-400">
          You can use the <span className="font-bold">E</span> key to play
        </p>
      </button>
    </div>
  )
}
