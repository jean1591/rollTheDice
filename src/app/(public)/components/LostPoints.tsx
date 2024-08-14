'use client'

import { RootState } from '@/app/lib/store/store'
import { useSelector } from 'react-redux'

export const LostPoints = () => {
  const { lostComputerPoints, lostUserPoints } = useSelector(
    (state: RootState) => state.user
  )

  return (
    <div className="rounded-lg border-[1px] border-slate-200 p-4 shadow-lg">
      <p className="text-left text-xl font-semibold">Lost points</p>

      <table className="min-w-full divide-y divide-slate-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0"
            >
              Player
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold"
            >
              Points
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold"
            >
              Turns
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr>
            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-500 sm:pl-0">
              You
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm font-semibold">
              {lostUserPoints.points}
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm">
              {lostUserPoints.turns}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-500 sm:pl-0">
              Computer
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm font-semibold">
              {lostComputerPoints.points}
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm">
              {lostComputerPoints.turns}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
