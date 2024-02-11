import React from 'react'
import './_freeTnTempleStickyCard.css'
import { useState, useEffect } from 'react'
import ShareSection from '../ShareSection/ShareSection'
const FreeTnTempleStickyCard = ({data}) => {
    const hashtag = data.sectionContent[0].titleText
    const primaryButton = data.sectionContent[1].buttonText
    const orSubTitle = data.sectionContent[2].body.value.document.children[0].children[0].value
    const showSupportText = data.sectionContent[2].body.value.document.children[1].children[0].value + ' ' + data.sectionContent[2].body.value.document.children[2].children[0].value
    const callText = data.sectionContent[3].body.value.document.children[0].children[0].value
    const shareText = data.sectionContent[4].body.value.document.children[0].children[0].value
    const shareIconImageList = data.sectionContent[5].imageList

const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 560);
   });
 }, []);

  return (
    <div className={`right_side_block  ${scroll ? 'fix' : ''}`}>
            <span className='right_side_block__hashtag'>{hashtag}</span>
            <button className='right_side_block__clicktoSupportBtn'>{primaryButton}</button>
            <span className='right_side_block__subtitle'>{orSubTitle}</span>
            <span className='right_side_block__subtitle'>{showSupportText}</span>
            <div className='right_side_block__callText'>
                <img src='https://static.consciousplanet.org/static/assets/img/phone.svg' alt='call-Icon'/>
                {' ' + callText}
            </div>
            <ShareSection shareText={shareText} shareIconImageList={shareIconImageList} inComponent/>
        </div>
  )
}

export default FreeTnTempleStickyCard