import './App.css';
import BottomSection from './components/BottomSection/BottomSection';
import Header from './components/Header/Header';
import ProminentVoices from './components/ProminentVoices/ProminentVoices';
import OurGloriousTamilTemple from './components/SectionEight/OurGloriousTamilTemple';
import SadhguruOnFreeTNTemples from './components/SectionFive/sadhguruOnFreeTNTemples';
import SectionFour from './components/SectionFour/SectionFour';
import GetInvolved from './components/SectionNine/GetInvolved';
import SeactionOne from './components/SectionOne/SeactionOne';
import OriginHistorySection from './components/SectionSeven/OriginHistorySection';
import AppealSection from './components/SectionSix/AppealSection';
import SectionThree from './components/SectionThree/SectionThree';
import SectionTwo from './components/SectionTwo/SectionTwo';
import ShareSection from './components/ShareSection/ShareSection';
import TopBanner from './components/TopBanner/TopBanner';
import data from './json.json'

function App() {
  const bodyContent = data.data.allLandingPages[0].body
  const topBannerData = bodyContent.find(item => item.sectionId === 'top-banner')
  const seactionOneData = bodyContent.find(item => item.sectionId === 'paragraph-section')
  const seactionTwoData = bodyContent.find(item => item.sectionId === 'dire-state-of-tamil-temples')
  const sectionFourData = bodyContent.find(item => item.sectionId === "stories-section")
  const sectionFiveData = bodyContent.find(item => item.sectionId === "sadhguru-on-free-tn-temples")
  const sectionSixData = bodyContent.find(item => item.sectionId === "appeal-section")
  const sectionSevenData = bodyContent.find(item => item.sectionId === "origins-history-section")
  const sectionEightData = bodyContent.find(item => item.sectionId === "our-glorious-tamil-temples")
  const freeTNTemplesStickyCard = bodyContent.find(item => item.sectionId === "free-tn-temples-sticky-card")
  const shareText = freeTNTemplesStickyCard.sectionContent[4].body.value.document.children[0].children[0].value
  const shareIconImageList = freeTNTemplesStickyCard.sectionContent[5].imageList
  const tweetIds = ['1365591373445914627', '1367103570651189257', '1365359161270149121', '1369002774151585793', '1365613503772463105']
  return (
    <div className='main'>
        <Header />
        <TopBanner bannerData={topBannerData}/>
        <SeactionOne data={{seactionOneData, freeTNTemplesStickyCard}} />
        <SectionTwo data={seactionTwoData} />
        <SectionThree/>
        <SectionFour data={sectionFourData}/>
        <SadhguruOnFreeTNTemples data={sectionFiveData}/>
        <ProminentVoices tweetIds={tweetIds}/>
        <AppealSection data={sectionSixData}/>
        <ShareSection shareText={shareText} shareIconImageList={shareIconImageList}/>
        <OriginHistorySection data={sectionSevenData}/>
        <OurGloriousTamilTemple data={sectionEightData}/>
        <GetInvolved />
        <BottomSection tweetIds={tweetIds} />
    </div>
  );
}

export default App;
