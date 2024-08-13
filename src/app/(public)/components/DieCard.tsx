import { ReactNode } from 'react'
import { setSelectedDie } from '@/app/lib/store/features/user/slice'
import { useDispatch } from 'react-redux'

const valueStringToNumber: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
}

export const DieCard = ({
  children,
  value,
}: {
  children: ReactNode
  value: string
}) => {
  const dispatch = useDispatch()

  const handleOnClick = () => {
    console.log(`${valueStringToNumber[value]} clicked!`)
    dispatch(setSelectedDie(valueStringToNumber[value]))
  }

  return (
    <button
      className="flex items-center justify-center rounded-lg border-[1px] border-slate-200 p-4 shadow-none transition duration-500 ease-in-out hover:shadow-lg focus:border-slate-200"
      onClick={handleOnClick}
    >
      <div>
        {children}

        <p className="mt-2 text-center font-bold uppercase">{value}</p>
      </div>
    </button>
  )
}
