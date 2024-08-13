import { Hero } from './components/Hero'
import { PlayButtons } from './components/PlayButtons'
import { Score } from './components/Score'

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
    </div>
  )
}
