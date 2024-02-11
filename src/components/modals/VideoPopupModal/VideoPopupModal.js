import React from 'react'
import './_videoPopupModal.css'
import { createPortal } from 'react-dom'

const VideoPopupModal = ({videoUrl, onClose}) => {
  return (
    createPortal(<div className='video_popup'>
            <div className='video_popUp__close' onClick={onClose}>x</div>
            <iframe src={videoUrl} title='video' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>,
        document.getElementById('modals')
    )
  )
}

export default VideoPopupModal