import { DieNumber } from '@/app/lib/store/features/user/slice'

export const getRandomNumber = (): DieNumber => {
  return (Math.floor(Math.random() * 6) + 1) as DieNumber
}
