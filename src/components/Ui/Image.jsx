import PropTypes from 'prop-types'
import { memo } from 'react'

const Image = memo(({ classname, image, alt }) => {
  return (
    <img className={classname} srcSet={ image } alt={ alt } />
  )
})

Image.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  classname: PropTypes.string,
}
Image.displayName = 'My Image'

export default Image
