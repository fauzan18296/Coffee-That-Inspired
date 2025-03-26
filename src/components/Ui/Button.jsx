import PropTypes from 'prop-types'
import { memo } from 'react'

const Button = memo(({ classname, onClick = () => { }, type, children }) => {
  return (
    <button
      className={classname}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
});

Button.propTypes = {
  classname: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node
}
Button.displayName = 'MyButton'

export default Button
