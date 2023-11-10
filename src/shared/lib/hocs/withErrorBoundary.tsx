import { ErrorBoundary } from 'shared/ui/ErrorBoundary'

export const withErrorBoundary = <Props extends Record<string, unknown>>(Component: React.FC) =>
  (props: Props) =>
    (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    )
