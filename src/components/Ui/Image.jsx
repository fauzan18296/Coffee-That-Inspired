import PropTypes from 'prop-types'

const Image = ({ classname, image, alt }) => {
  return (
    <img className={classname} srcSet={ image } alt={ alt } />
  )
}

Image.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  classname: PropTypes.string,
}

export default Image
