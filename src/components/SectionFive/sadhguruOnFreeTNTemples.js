import React from 'react'
import LoadMoreButton from '../utils/LoadMoreButton/LoadMoreButton'
import VideoImage from '../utils/VideoImage/VideoImage'
import './_sadhguruOnFreeTNTemples.css'
import { useState } from 'react'

const SadhguruOnFreeTNTemples = ({data}) => {
  const mainTitle = data.sectionContent[0].titleText
  const videos = data.sectionContent[1].card
  const [loadedVideoData, setLoadedVideoData] = useState(videos.slice(0, 4))

  const loadMoreVideoData = () => {
    setLoadedVideoData((prevState) => videos.slice(0, prevState.length + 4))
  }
  return (
    <div className='sadhguruOnFreeTNTemples'>
        <div className='sadhguruOnFreeTNTemples__title'>{mainTitle}</div>
        <div className='sadhguruOnFreeTNTemples__videos'>
        {loadedVideoData.map(video => {
          const {linkUrl, shortText, thumbnail, title } = video
          return (
              <div className='sadhguruOnFreeTNTemples__video-container' key={title}>
                  <VideoImage dataUrl={linkUrl} imageUrl={thumbnail.url} />
                  <div className='sadhguruOnFreeTNTemples__video-container-content'>{shortText}</div>
              </div>
          )
        })}
        </div>
        <div className='sadhguruOnFreeTNTemples__count'>{loadedVideoData.length}/{videos.length}</div>
        <LoadMoreButton loadMore={loadMoreVideoData}/>
    </div>
  )
}

export default SadhguruOnFreeTNTemples