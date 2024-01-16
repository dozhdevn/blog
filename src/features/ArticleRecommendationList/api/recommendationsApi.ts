import { Article } from 'entities/Article/model/types/article'
import { rtkApi } from 'shared/api/rtkApi'

export const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
          _expand: 'user',
        },
      }),
    }),
  }),
})

export const { useGetArticleRecommendationsListQuery: useArticleRecommendationsList } = recommendationsApi
