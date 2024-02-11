import React from 'react'
import { Slider, SwiperSlide } from '../utils/Slider/Slider'
import './_prominentVoices.css'
import Tweets from '../TwitterEmbed/Tweets'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProminentVoices = ({tweetIds}) => {
  const tweets = tweetIds.map((tweetId, index) => <SwiperSlide key={index}><Tweets tweetId={tweetId}/></SwiperSlide>)
  return (
    <div className='prominentVoices'>
        <div className='prominentVoices__title'>Prominent Voices</div>
        <div className='prominentVoices__galleryBox'>
            <Slider settings={{autoplay: {delay: 1000,disableOnInteraction: false}}}>{tweets}</Slider>
        </div>
    </div>
  )
}

export default ProminentVoices