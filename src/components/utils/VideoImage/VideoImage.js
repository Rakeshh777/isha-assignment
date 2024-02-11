import React from 'react'
import './_videoImage.css'
import { useState } from 'react'
import VideoPopupModal from '../../modals/VideoPopupModal/VideoPopupModal'

const VideoImage = ({imageUrl, dataUrl}) => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <>
      {showVideo && <VideoPopupModal videoUrl={dataUrl} onClose={()=>setShowVideo(false)}/> }
      <div className='video-image' data-url={dataUrl} onClick={() => setShowVideo(true)}>
          <img src={imageUrl} />
      </div>
    </>
  )
}

export default VideoImage