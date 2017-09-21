import React from 'react'

const PureRenderFunction = () => {
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

export default PureRenderFunction
