import PropTypes from 'prop-types'

const Button = ({ classname, onClick = () => {}, type, children }) => {
  return (
    <button
      className={classname}
      onClick={onClick}
      type={type}
    >
    {children}
    </button>
  )
}

Button.propTypes = {
  classname: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node
}

export default Button
