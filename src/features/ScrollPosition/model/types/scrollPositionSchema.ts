type ScrollPosition = Record<string, number>

export type ScrollPositionPayload = {
  pathname: string
  position: number
}

export type ScrollPositionSchema = {
  scrollPosition: ScrollPosition
}
