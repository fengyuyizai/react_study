import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, active, click }) => (
    <button
       onClick={click}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  click: PropTypes.func.isRequired
}

export default Link
