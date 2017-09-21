import React from 'react'
import PropTypes from 'prop-types'
import PureRenderFunction from './partials/pure-render-function'
import ClassFunction from './partials/class-function'
export default class App extends React.Component {

  /**
   * prop types
   * @type {object}
   */
  static propTypes = {
    title: PropTypes.string,
  }

  /**
   * default props
   * @type {object}
   */
  static defaultProps = {
    title: 'React Performance Check',
  }

  /**
   * constructor
   * @param  {object} props React props.
   * @return {void}
   */
  constructor(props) {
    super(props)
    this.state = { enabled: false }
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {

    const {
      title,
    } = this.props

    return (
      <div>
        <h1>{ title }</h1>
        <button onClick={ () => this.setState({ enabled: !this.state.enabled }) }>{ this.state.enabled ? 'clear' : 'start' }</button>
          {
            this.state.enabled ? (
            <main>
              <PureRenderFunction />
              <ClassFunction />
              <PureRenderFunction />
              <ClassFunction />
              <PureRenderFunction />
              <ClassFunction />
              <PureRenderFunction />
              <ClassFunction />
              <PureRenderFunction />
              <ClassFunction />
              <PureRenderFunction />
              <ClassFunction />
            </main>
          ) : null
        }
      </div>
    )
  }
}
