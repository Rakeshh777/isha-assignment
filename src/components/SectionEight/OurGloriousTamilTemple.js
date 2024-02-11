import React from 'react'
import './_ourGloriousTamilTemple.css'
import { SwiperSlider } from "../utils/Slider/Slider";
import './_ourGloriousTamilTemple.css'


const OurGloriousTamilTemple = ({data}) => {
    const tileAndSubtitle = data.sectionContent[0]
    const templeSlides = data.sectionContent[1].bannerSlides
  return (
    <div className='ourGloriousTamilTemple'>
        <div className='ourGloriousTamilTemple__title'>{tileAndSubtitle.titleText}</div>
        <div className='ourGloriousTamilTemple__subtitle'>{tileAndSubtitle.titleSubtext}</div>
        <div className='ourGloriousTamilTemple__galleryBlock'>
          <SwiperSlider slides={templeSlides} id='ourGloriousTamilTemple' settings={{pagination: {clickable: true}}}/>
        </div>
    </div>
  )
}

export default OurGloriousTamilTemple