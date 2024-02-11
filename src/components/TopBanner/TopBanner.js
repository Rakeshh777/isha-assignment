import React from 'react'
import './TopBanner.css'
import { useState } from 'react';
import VideoPopupModal from '../modals/VideoPopupModal/VideoPopupModal';

const TopBanner = ({bannerData}) => {
    const { button, icon, image, subtext, title, videoUrl} = bannerData.sectionContent[0].bannerSlides[0]
    const subtextValue = subtext.value.document.children[0].children[0].value.split('\n')

    const [showVideo, setShowVideo] = useState(false)
    const handlePlayVideo = () => {
      setShowVideo(true)
    }

    const handleCloseVideo = () => {
      setShowVideo(false)
    }


  return (
    <div className='banner'>
        {showVideo && <VideoPopupModal videoUrl={videoUrl} onClose={handleCloseVideo}/> }
        <div className='banner__image'>
            <img className='banner__image__desktop' src={image.url} alt='free-temple-banner'/>
            <img className='banner__image__mobile' src='https://static.consciousplanet.org/static/assets/img/free-temple-banner-mob.jpg?a=1' alt='free-temple-banner-mob'/>
        </div>
        <div className='banner__playButton' onClick={handlePlayVideo}>
            <img src={icon.url} alt='play-button'/>
        </div>
        <div className='banner__text'>
          <div className='banner__text__title'>{title}</div>
          <div className='banner__text__subtitle'>
            {subtextValue[0]}
            <br/>
            <span>
              {subtextValue[1]}
            </span>
          </div>
          <div className='banner__text__clickToSupport'>
            <button>{button[0].buttonText}</button>
          </div>
          <div className='banner__text__OR'>OR</div>
          <div className='banner__text__callButton'>
            <a href={`tel:+918300083000`}>
              <img src="https://static.consciousplanet.org/static/assets/img/phone.svg" alt='call-icon'/>
              83000 83000
            </a>
          </div>
        </div>
    </div>
  )
}

export default TopBanner