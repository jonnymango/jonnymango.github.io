import * as React from "react"
import SocialBtns from "./socialBtns";

const data={
    intro: 'Hello <span role="img" aria-label="wavey emoji">👋</span>',
    title: 'I\'m Jonny Wright.',
    subheader: 'Web Geek and Tea Drinker.',
    description: 'Development Director at Think Jam/ReMake.'
}

// markup
const Hero = () => {
  return (
    
      <div className="my-10" data-sal="slide-right" data-sal-delay="300">
      <h1 className="text-5xl main__hero">
        <div className="main__hero--intro" dangerouslySetInnerHTML={{
    __html: data.intro
  }}></div>
        {data.title}
        <div className="main__hero--subtitle text-4xl">{data.subheader}</div>
      </h1>
      <p className="main__hero--description my-4">{data.description}</p>

      <div className="socialBtns">
        <SocialBtns />
      </div>
      </div>
      
      
      
  )
}

export default Hero
