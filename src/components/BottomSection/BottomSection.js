import React from 'react'
import {SwiperSlider} from '../utils/Slider/Slider'
import './_bottomSection.css'
import Tweets from '../TwitterEmbed/Tweets'

const BottomSection = ({tweetIds}) => {
    const newsDummySlides = [
        {
            id: 1,
            image:{url: 'https://via.placeholder.com/150'},
            title: 'Dummy Title 1',
            description: 'Dummy Description 1'
        },
        {
            id: 2,
            image:{url: 'https://via.placeholder.com/150'},
            title: 'Dummy Title 2',
            description: 'Dummy Description 2'
        },
        {
            id: 3,
            image:{url: 'https://via.placeholder.com/150'},
            title: 'Dummy Title 3',
            description: 'Dummy Description 3'
        },
        {
            id: 4,
            image:{url: 'https://via.placeholder.com/150'},
            title: 'Dummy Title 4',
            description: 'Dummy Description 4'
        },
        {
            id: 5,
            image:{url: 'https://via..com/150'},
            title: 'Dummy Title 5',
            description: 'Dummy Description 5'
        }
    ]
  return (
    <div className='bottomSection'>
        <div className='bottomSection__title'>What Devotees Say</div>
        <div className='bottomSection__tweetBox'>
            {tweetIds.map((tweetId, index) => <Tweets key={index} tweetId={tweetId}/>)}
        </div>
        <div className='bottomSection__newsBlock'>
            <div className='bottomSection__title'>What Media Says</div>
            <div className='bottomSection__newsBlock__news'>
                <SwiperSlider slides={newsDummySlides}/>
            </div>
            <div className='bottomSection__title footerTitle'>Press Kit & Downloads</div>
            <a href='#' target='_blank' className='bottomSection__footerLink'>Download Press assets here</a>
            <a href='#' target='_blank' className='bottomSection__footerLink'>Awareness Kit</a>
            <a href='#' target='_blank' className='bottomSection__footerLink'>Download Placards</a>
        </div>
    </div>
  )
}

export default BottomSection