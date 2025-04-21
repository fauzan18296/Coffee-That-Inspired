import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PropTypes from 'prop-types'

const Loader = ({ children }) => {
  return (
    <SkeletonTheme baseColor='#5F5F5F' highlightColor='#444'>
    <Skeleton className='block rounded-lg mb-5 mx-auto' count={1000} height={400} width={330}>
      {children}
      </Skeleton>
      </SkeletonTheme>
  )
}

Loader.propTypes = {
  children: PropTypes.node.isRequired
}

export default Loader
