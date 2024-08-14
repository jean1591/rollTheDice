'use client'

export const Stats = () => {
  return (
    <div className="flex-1 rounded-lg border-[1px] border-slate-200 p-4 shadow-lg">
      <p className="text-left text-xl font-semibold">Live stats</p>

      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Value
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Count
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              %
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-500 sm:pl-0">
              1
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm font-semibold">
              123
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm">12 %</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-500 sm:pl-0">
              2
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm font-semibold">
              123
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm">12 %</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-500 sm:pl-0">
              3
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm font-semibold">
              123
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm">12 %</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-500 sm:pl-0">
              4
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm font-semibold">
              123
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm">12 %</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-500 sm:pl-0">
              5
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm font-semibold">
              123
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm">12 %</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-500 sm:pl-0">
              6
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm font-semibold">
              123
            </td>
            <td className="whitespace-nowrap px-3 py-2 text-sm">12 %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
