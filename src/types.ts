export type Fit = 'Adult' | 'Teen' | 'Kids'

export interface Product {
  id: number
  name: string
  brand: string
  shape: 'Aviator' | 'Wayfarer' | 'Round' | 'Rectangle' | 'Cat-Eye' | 'Geometric'
  color: string
  price: number
  polarized: boolean
  fit: Fit
  image?: string
  newArrival?: boolean
  bestSeller?: boolean
  rating?: number
}
