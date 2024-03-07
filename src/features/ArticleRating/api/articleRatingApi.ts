import { RatingDto } from 'entities/Rating'
import { rtkApi } from 'shared/api/rtkApi'

interface ArticleRatingArgs {
  userId: string
  articleId: string
}

interface SendRatingArgs {
  userId: string
  articleId: string
  rating: number
  review?: string
}

const articleRatingApi = rtkApi
  .enhanceEndpoints({ addTagTypes: ['RATING'] })
  .injectEndpoints({
    endpoints: (build) => ({
      getArticleRating: build.query<RatingDto[], ArticleRatingArgs>({
        query: ({ userId, articleId }) => ({
          url: '/article-ratings',
          params: {
            userId,
            articleId,
          },
        }),
        providesTags: ['RATING'],
      }),

      sendRating: build.mutation<void, SendRatingArgs>({
        query: (args) => ({
          url: '/article-ratings',
          method: 'POST',
          body: args,
        }),
        invalidatesTags: ['RATING'],
      }),
    }),
  })

export const { useGetArticleRatingQuery: useGetArticleRating, useSendRatingMutation: useSendRating } = articleRatingApi
