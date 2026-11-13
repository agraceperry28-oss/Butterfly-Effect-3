export type View = 'dashboard' | 'map' | 'network' | 'surprises' | 'reverse' | 'compare'

export interface Controls {
  parkingRemoved: number // percent of spaces removed
  extraBuses: number // additional buses per hour
  modeShift: number // percent of commuters switching mode
  demandChange: number // percent change in parking demand
}

export const DEFAULT_CONTROLS: Controls = {
  parkingRemoved: 30,
  extraBuses: 0,
  modeShift: 0,
  demandChange: 0,
}
