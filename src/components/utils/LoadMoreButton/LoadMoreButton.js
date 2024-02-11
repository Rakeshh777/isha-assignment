import React from 'react'
import './_loadMoreButton.css'

const LoadMoreButton = ({loadMore, shade}) => {
  return (
    <button className={`load-more-button ${shade? shade : ''}`} onClick={loadMore}>Load More</button>
  )
}

export default LoadMoreButton