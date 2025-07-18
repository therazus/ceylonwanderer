export interface District {
    id: string
    name: string
    description?: string  // Keep for backward compatibility
    descriptionKey: string  // Translation key
    image: string
    path: string
    height?: number
    width?: number
}
  
  