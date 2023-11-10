import { Provider } from 'react-redux'
import { createReduxStore } from 'app/store'

export const withRedux = <Props extends Record<string, unknown>>(Component: React.FC<Props>) =>
  (props: Props) => {
    const store = createReduxStore()

    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    )
  }
