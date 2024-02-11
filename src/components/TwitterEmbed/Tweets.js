import React from 'react'
import { Tweet } from 'react-twitter-widgets'

const Tweets = ({tweetId}) => {
  return <Tweet tweetId={tweetId}/>
}

export default Tweets