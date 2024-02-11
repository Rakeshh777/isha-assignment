import React from 'react'
import {Slider, SwiperSlider, SwiperSlide} from '../utils/Slider/Slider'
import './_bottomSection.css'
import Tweets from '../TwitterEmbed/Tweets'

const BottomSection = ({tweetIds}) => {
    const newsData = [
        {
            heading: 'Sadhguru asks for temples to be released from state control in Tamil Nadu',
            linkUrl: 'https://www.deccanherald.com/india/sadhguru-asks-for-temples-to-be-released-from-state-control-in-tamil-nadu-958971.html',
            description: 'In a bid to release temples from state control in Tamil Nadu, Sadhguru requested Chief Minister Edappadi K Palaniswami and DMK supremo MK Stalin on Twitter'
        },{
            heading: 'Free Temples From State Control, Include Plan in Election Manifesto: Sadhguru Urges TN CM, Stalin',
            description: 'Isha Foundation founder and spiritual guru Sadhguru Jaggi Vasudev on Saturday said he has written a letter to Tamil Naidu Chief Minister and the Leader of the Opposition urging them to free temples',
            linkUrl: 'https://www.news18.com/news/politics/free-temples-from-state-control-include-plan-in-election-manifesto-sadhguru-urges-tn-cm-stalin-3505877.html'
        },
        {
            heading: 'Mention in poll manifesto freeing of temples from govt grip',
            description: 'Though the Constitution allows all communities to manage their spaces of worship, the HR&CE law gives the state control over Hindu temples which has long been a cause of disgruntlement in the majority community, he said.',
            linkUrl: 'https://www.dtnext.in/News/TamilNadu/2021/03/06182456/1279124/Mention-in-poll-manifesto-freeing-of-temples-from-.vpf'
        }
    ]

    const newsBlock = newsData.map((news, index) => {
       return <SwiperSlide key={index}>
            <div className='news_content'>
                <a href={news.linkUrl} className='news__heading'>{news.heading}</a>
                <div className='news_text'>{news.description}</div>
                <a href={news.linkUrl} className='news_continue' >Continue</a>
            </div>
        </SwiperSlide>
    })
  return (
    <div className='bottomSection'>
        <div className='bottomSection__title'>What Devotees Say</div>
        <div className='bottomSection__tweetBox'>
            {tweetIds.map((tweetId, index) => <Tweets key={index} tweetId={tweetId}/>)}
        </div>
        <div className='bottomSection__newsBlock'>
            <div className='bottomSection__title'>What Media Says</div>
            <div className='bottomSection__newsBlock__news'>
                <Slider settings={{autoplay: {delay: 1000,disableOnInteraction: false}}}>{newsBlock}</Slider> 
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