import { Hero } from '../components/Hero'
import { PlayButtonsLegacy } from '../components/PlayButtonsLegacy'
import { Rules } from '../components/Rules'
import { ScoreLegacy } from '../components/ScoreLegacy'
import { Stats } from '../components/Stats'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <div className="mt-16">
        <ScoreLegacy />
      </div>

      <div className="mt-8">
        <PlayButtonsLegacy />
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="order-2 space-y-8 md:order-1">
          <Rules />
        </div>
        <div className="order-1 space-y-8 md:order-2">
          <Stats />
        </div>
      </div>
    </div>
  )
}
