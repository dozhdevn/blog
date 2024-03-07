export interface RatingDto {
  id: string
  rating: number
  review: string
  userId: string
  articleId: string
}

export type RatingCardData = Partial<Pick<RatingDto, 'rating' | 'review'>>
