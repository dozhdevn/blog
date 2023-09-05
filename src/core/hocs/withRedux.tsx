import { Provider } from 'react-redux'
import { createReduxStore } from 'store'

export const withRedux = <Props,>(Component: React.FC<Props>) => (props: Props) => {
  const store = createReduxStore()

  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}
