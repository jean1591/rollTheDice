import { DiceSelection } from './components/DiceSelection'

export default function Home() {
  return (
    <div>
      <p className="text-center text-xl font-bold uppercase text-slate-200">
        Play stupid games, win stupid prizes
      </p>

      <p className="mt-2 text-center text-lg font-medium">
        How long can you beat the odds ?
      </p>

      <div className="mt-16">
        <DiceSelection />
      </div>
    </div>
  )
}
