import { Hero } from './components/Hero'
import { PlayButtons } from './components/PlayButtons'
import { Rules } from './components/Rules'
import { Score } from './components/Score'
import { Stats } from './components/Stats'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <div className="mt-8 md:mt-16">
        <Score />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <PlayButtons />
        <Stats />
      </div>
    </div>
  )
}
