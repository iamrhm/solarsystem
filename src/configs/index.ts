export type SolarPlanets = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'pluto';
export type SolarSystemSatellites = 'moon' | 'phobos' | 'deimos' | 'europa' | 'titania';
export type Stars = 'sun';

export interface ICelestialBody<T> {
  rotation: [number, number, number],
  position: [number, number, number],
  scale: number,
  revolution: number,
  spin: number,
  name: T,
}

export interface IPlanet<T> extends ICelestialBody<T> {
  planeAngle: number,
  type: 'planet',
  ringModule?: {
    position: [number, number, number],
    scale: [number, number, number],
    geometry?: THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    material?: THREE.Material | THREE.Material[] | undefined,
  }
  satellites?: SolarSystemSatellites[],
}

export interface ISatellite<T> extends ICelestialBody<T> {
  type: 'satellite'
}

export type WithTexture<T> = T & {
  geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>,
  material: THREE.Material | THREE.Material[] | undefined
}

export const planets: Record<SolarPlanets, IPlanet<SolarPlanets>>  = {
  mercury: {
    position: [0.35, 0, 0],
    rotation: [0, 0.01, 0],
    scale: 0.04,
    revolution: 0.19,
    spin: 1.59,
    planeAngle: Math.PI * 0.005,
    type: 'planet',
    name: 'mercury',
  },
  venus: {
    rotation: [0, 2.64, 0],
    position: [0.45, 0, 0],
    scale: 0.05,
    revolution: 0.3,
    spin: 1.04,
    planeAngle: Math.PI * 0.015,
    type: 'planet',
    name: 'venus',
  },
  earth: {
    rotation: [0, 23.5, 0],
    position: [0.6, 0, 0],
    scale: 0.06,
    revolution: 0.5,
    spin: 1,
    planeAngle: Math.PI * 0.15,
    type: 'planet',
    name: 'earth',
    satellites: ['moon'],
  },
  mars: {
    rotation: [0, 25.19, 0],
    position: [0.8, 0, 0],
    scale: 0.05,
    revolution: 0.7,
    spin: 0.97,
    planeAngle: Math.PI * 0.25,
    type: 'planet',
    name: 'mars',
    satellites: ['phobos','deimos'],
  },
  jupiter: {
    rotation: [0, 3.13, 0],
    position: [1.1, 0, 0],
    scale: 0.1,
    revolution: 1,
    spin: 2.44,
    planeAngle: Math.PI / 4,
    type: 'planet',
    name: 'jupiter',
    satellites: ['europa'],
  },
  saturn: {
    rotation: [0, 26.73, 0],
    position: [1.45, 0, 0],
    scale: 0.08,
    revolution: 1.2,
    spin: 2.756,
    planeAngle: Math.PI / 4,
    ringModule: {
      position: [57, 0, 0],
      scale: [9, 9, 36],
    },
    type: 'planet',
    name: 'saturn',
  },
  uranus: {
    rotation: [0, 97.77, 0],
    position: [1.72, 0, 0],
    scale: 0.07,
    revolution: 1.5,
    spin: 1.46,
    planeAngle: Math.PI / 4,
    type: 'planet',
    name: 'uranus',
    satellites: ['titania'],
  },
  neptune: {
    rotation: [0, 28.32, 0],
    position: [1.9, 0, 0],
    scale: 0.05,
    revolution: 1.7,
    spin: 1.67,
    name: 'neptune',
    type: 'planet',
    planeAngle: Math.PI / 4,
  },
  pluto: {
    rotation: [0, 119.6, 0],
    position: [2, 0, 0],
    scale: 0.04,
    revolution: 2,
    spin: 6.39,
    name: 'pluto',
    type: 'planet',
    planeAngle: Math.PI / 4,
  },
}

export const satellites: Record<SolarSystemSatellites, ISatellite<SolarSystemSatellites>> = {
  moon: {
    rotation: [0, 6.68, 0],
    position: [1.01, 0.01, 0],
    scale: 0.02,
    revolution: .2732,
    spin: 8.32,
    name: 'moon',
    type: 'satellite'
  },
  phobos: {
    position: [1.2, 0, 0],
    rotation: [0, 0.93, 0],
    scale: 0.02,
    revolution: 0.32,
    spin: 0.32,
    name: 'phobos',
    type: 'satellite'
  },
  deimos: {
    position: [1.05, 0, 0.5],
    rotation: [0, 0.79, 0],
    scale: 0.01,
    revolution: .126,
    spin: 1.26,
    name: 'deimos',
    type: 'satellite'
  },
  europa: {
    position: [1.5, 0, 1.5],
    scale: 0.015,
    rotation: [0, 0, 0],
    revolution: 0.355,
    spin: 3.55,
    name: 'europa',
    type: 'satellite'
  },
  titania: {
    position: [1.2, 0, 0],
    scale: 0.015,
    rotation: [0, 0, 0],
    revolution: .1595,
    spin: 5.95,
    name: 'titania',
    type: 'satellite'
  },
}

export const stars: Record<Stars, ICelestialBody<Stars>> = {
  sun: {
    rotation: [0, 0, 0],
    position: [0, 0, 0],
    scale: 0.025,
    revolution: 0,
    spin: 0.05,
    name: 'sun'
  }
}
