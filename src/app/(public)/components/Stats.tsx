'use client'

import { RootState } from '@/app/lib/store/store'
import { useSelector } from 'react-redux'

export const Stats = () => {
  const { rolls } = useSelector((state: RootState) => state.user)

  return (
    <div className="rounded-lg p-4 shadow-lg">
      <p className="text-left text-xl font-semibold">Live stats</p>

      <div className="grid grid-cols-4 gap-x-2 text-sm">
        <p className="col-span-2 py-4 text-left font-semibold">Value</p>
        <p className="py-4 text-left font-semibold">Count</p>
        <p className="py-4 text-left font-semibold">%</p>
      </div>

      {Object.entries(rolls).map(([key, value]) => (
        <div
          key={key}
          className="grid grid-cols-4 gap-x-2 border-t-[1px] border-slate-300 text-sm"
        >
          <p className="col-span-2 py-2 text-sm text-slate-500 sm:pl-0">
            {key}
          </p>
          <p className="py-2 text-sm font-semibold">{value.count}</p>
          <p className="py-2 text-sm">{value.percentage} %</p>
        </div>
      ))}
    </div>
  )
}
