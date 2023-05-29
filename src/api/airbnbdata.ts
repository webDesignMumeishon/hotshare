
export interface AirbnbData {
  source: string
  type: string
  categories: Category[]
  data: Daum[]
  count: number
}

export interface Category {
  id: string
  type: string
  title: string
}

export interface Daum {
  ref: string
  info: Info
  category?: string
}

export interface Info {
  type: string
  images: Image
  details: Details
  description: string
  mainImage: MainImage
  maxGuestCapacity: number
  host?: Host
  amenities: Amenities
  title: string
  id: string
  location: Location
  ratings: Ratings
  visibleReviewCount: number
  available: boolean
  price: number
  currency: Currency
  sleepingArrangements: SleepingArrangements
}

export interface Image {
  type: string
  data: Daum2[]
  count: number
}

export interface Daum2 {
  url: string
  width: number
  height: number
  mimeType: string
  orientation: string
  aspectRatio: number
  type: string
}

export interface Details {
  type: string
  data: Daum3[]
  count: number
}

export interface Daum3 {
  type: string
  value: number
}

export interface MainImage {
  url: string
  width: number
  height: number
  mimeType: string
  orientation: string
  aspectRatio: number
  type: string
}

export interface Host {
  name: string
  avatar: Avatar
  isSuperhost: boolean
}

export interface Avatar {
  url: string
  width: number
  height: number
  mimeType: string
  orientation: string
  aspectRatio: number
  type: string
}

export interface Amenities {
  type: string
  data: Daum4[]
  count: number
}

export interface Daum4 {
  group: string
  available: boolean
  title: string
  type: string
}

export interface Location {
  lat: number
  long: number
  address: string
  city: string
  country: Country
  zip: string
}

export interface Country {
  code: string
  title: string
}

export interface Ratings {
  accuracy: number
  checkin: number
  cleanliness: number
  communication: number
  location: number
  value: number
  guestSatisfactionOverall: number
}

export interface Currency {
  code: string
  symbol: string
  name: string
}

export interface SleepingArrangements {
  type: string
  data: Daum5[]
  count: number
}

export interface Daum5 {
  title: string
  subTitle: string
  icons: string[]
}
