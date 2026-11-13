import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ControlPanel from './components/ControlPanel'
import MetricCard from './components/MetricCard'
import MapPlaceholder from './components/MapPlaceholder'
import NetworkPlaceholder from './components/NetworkPlaceholder'
import ChartPlaceholder from './components/ChartPlaceholder'
import StagePlaceholder from './components/StagePlaceholder'
import { Car, MapPinned, Bus, Gauge, Timer } from 'lucide-react'
import { DEFAULT_CONTROLS } from './types'
import type { Controls, View } from './types'

const TITLES: Record<View, string> = {
  dashboard: 'Parking reduction simulator',
  map: 'Campus map',
  network: 'Ripple network',
  surprises: "What you didn't see coming",
  reverse: 'Reverse Butterfly Effect',
  compare: 'Compare scenarios',
}

const COMING: Record<Exclude<View, 'dashboard'>, { stage: number; text: string }> = {
  map: { stage: 2, text: 'An interactive map of campus parking lots that reacts as you change the controls.' },
  network: { stage: 3, text: 'An animated web of first, second and third-order consequences you can click for explanations.' },
  surprises: { stage: 4, text: 'AI-written hypotheses about indirect effects you might have missed, with their uncertainty.' },
  reverse: { stage: 5, text: 'Describe the outcome you want and see which combinations of interventions get closest.' },
  compare: { stage: 5, text: 'Put two or three decisions side by side and compare modeled results.' },
}

export default function App() {
  const [view, setView] = useState<View>('dashboard')
  const [controls, setControls] = useState<Controls>(DEFAULT_CONTROLS)

  return (
    <div className="flex h-full min-h-screen flex-col md:flex-row">
      <Sidebar view={view} onChange={setView} />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <header className="mb-6">
          <h1 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{TITLES[view]}</h1>
          <p className="mt-1 max-w-xl text-sm text-slate-400">
            Demonstration data only. Every number here will be an illustrative estimate, not a Cal Poly measurement.
          </p>
        </header>

        {view === 'dashboard' ? (
          <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
            <ControlPanel controls={controls} onChange={setControls} />
            <div className="min-w-0 space-y-6">
              <section className="grid grid-cols-2 gap-3 lg:grid-cols-5">
                <MetricCard icon={Car} label="Displaced vehicles" />
                <MetricCard icon={MapPinned} label="Shifted to nearby lots" />
                <MetricCard icon={Bus} label="Added transit riders" />
                <MetricCard icon={Gauge} label="Congestion pressure" />
                <MetricCard icon={Timer} label="Commute change" />
              </section>
              <div className="grid gap-6 lg:grid-cols-2">
                <MapPlaceholder />
                <NetworkPlaceholder />
              </div>
              <ChartPlaceholder />
            </div>
          </div>
        ) : (
          <StagePlaceholder stage={COMING[view].stage} text={COMING[view].text} />
        )}
      </main>
    </div>
  )
}
