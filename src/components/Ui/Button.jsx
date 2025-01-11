import PropTypes from 'prop-types'

const Button = ({ classname, onClick = () => {}, type, name }) => {
  return (
    <button
      className={classname}
      onClick={onClick}
      type={type}
    >
    {name}
    </button>
  )
}

Button.propTypes = {
  classname: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string
}

export default Button
