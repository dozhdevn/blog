import { userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useEffect } from 'react'

export const withAuth = <Props extends Record<string, unknown>>(Component: React.FC<Props>) =>
  (props: Props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(userActions.initialAuthData())
    }, [dispatch])

    return <Component {...props} />
  }
