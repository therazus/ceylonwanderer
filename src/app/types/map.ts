export interface Location {
  id: string
  name: string
  category: string
  coordinates: {
    x: number
    y: number
  }
}

export interface Category {
  id: string
  name: string
  image: string
  locations: Location[]
}

