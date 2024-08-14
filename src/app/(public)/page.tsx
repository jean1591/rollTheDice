import { Hero } from './components/Hero'
import { PlayButtons } from './components/PlayButtons'
import { Rules } from './components/Rules'
import { Score } from './components/Score'
import { Stats } from './components/Stats'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <div className="mt-16">
        <Score />
      </div>

      <div className="mt-8">
        <PlayButtons />
      </div>

      <div className="mt-16 flex w-full flex-wrap items-start justify-center gap-8">
        <Rules />
        <Stats />
      </div>
    </div>
  )
}
