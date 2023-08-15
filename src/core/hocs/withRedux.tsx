import { Provider } from 'react-redux'
import { store } from 'store'

export const withRedux = <Props,>(Component: React.FC<Props>) => (props: Props) => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
)
