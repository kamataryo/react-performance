import React from 'react'
import { render as reactRender } from 'react-dom'
import { AppContainer as HMRContainer } from 'react-hot-loader'
import App from './components/app-container'

import Perf from 'react-addons-perf'

if (window) {
  window.Perf = Perf
}

/**
 * render React App
 * @param  {ReactComponent} Component React Component
 * @return {void}
 */
const render = Component =>
  reactRender(
    <HMRContainer>
      <Component />
    </HMRContainer>,
    document.getElementById('app')
  )

// Go!
render(App)

// Hot Module Replacement settings
if (module.hot) {
  module.hot.accept('./components/app-container', () => {
    const NextApp = require('./components/app-container').default
    render(NextApp)
  })
}
