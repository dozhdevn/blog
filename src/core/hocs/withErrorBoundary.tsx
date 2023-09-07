import { ErrorBoundary } from 'components/ErrorBoundary'

export const withErrorBoundary = <Props extends Record<string, unknown>>(Component: React.FC) =>
  (props: Props) => <ErrorBoundary><Component {...props} /></ErrorBoundary>
