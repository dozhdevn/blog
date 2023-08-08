import { ErrorBoundary } from 'components/ErrorBoundary'

export const withErrorBoundary = <Props,>(Component: React.FC) =>
  (props: Props) => <ErrorBoundary><Component {...props} /></ErrorBoundary>
