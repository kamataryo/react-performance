import React from 'react'

export default class ClassFunction extends React.PureComponent {

  render() {
    return (
      <div>
        {
          Array(10000).fill(0).map((_0, i) => {
            return (
              <span key={ `pure-render-${i}` }>
                { i }
                { i % 50 === 0 ? <br /> : null  }
              </span>
            )
          })
        }
      </div>
    )
  }
}
