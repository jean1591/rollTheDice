'use client'

import { RootState } from '@/app/lib/store/store'
import { useSelector } from 'react-redux'

export const Stats = () => {
  const { rolls } = useSelector((state: RootState) => state.user)

  return (
    <div className="rounded-lg border-[1px] border-slate-200 p-4 shadow-lg">
      <p className="text-left text-xl font-semibold">Live stats</p>

      <table className="min-w-full divide-y divide-slate-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0"
            >
              Value
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold"
            >
              Count
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold"
            >
              %
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {Object.entries(rolls).map(([key, value]) => (
            <tr key={key}>
              <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-500 sm:pl-0">
                {key}
              </td>
              <td className="whitespace-nowrap px-3 py-2 text-sm font-semibold">
                {value.count}
              </td>
              <td className="whitespace-nowrap px-3 py-2 text-sm">
                {value.percentage} %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
