
import React from 'react'
import "./index.css"

const SailplaneLanding = React.lazy(() => import('./components/sailplaneLanding'))
const SailplaneApp = React.lazy(() => import('./components/sailplaneApp'))

const currentComponent = 'currentComponent'
const landing = 'landing'
const app = 'app'

function App () {
  if (
    window.localStorage.getItem(currentComponent) !== landing &&
    window.localStorage.getItem(currentComponent) !== app
  ) {
    window.localStorage.setItem(currentComponent, landing)
  }

  const Component =
    window.localStorage.getItem(currentComponent) === landing
      ? SailplaneLanding
      : SailplaneApp

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component />
      </React.Suspense>
    </>
  )
}

export default App
