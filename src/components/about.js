import * as React from "react"

const data = {
    title: "About Me",
    description: "Originally from Yorkshire, now based out of London. A seasoned full stack developer and UI/UX javascript specialist, with over a decade’s worth of development experience in the advertising world; having led development teams in content localization for countless award-winning clients and campaigns.",
    subdescription: 'Currently I\'m working as Development Director at <a href="https://www.thinkjam.com" target="_blank" rel="noreferrer">Think Jam.</a>',
    image: 'static/img/me1.jpg',
    imagedescription: "me"

}

// markup
const About = () => {
  return (
    <div className="aboutMe grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-32 lg:gap-32 xl:gap-32  mb-16" id="about-me">
        <div className="aboutMe__primary " data-sal="slide-right">
          <h2 className="text-2xl font-bold my-5" data-sal="fade">{data.title}</h2>
          <p>{data.description}</p>
          <p dangerouslySetInnerHTML={{ __html: data.subdescription}}></p>
        </div>
        <div className="aboutMe__secondary"  data-sal="slide-left"><img className="rounded-2xl" src={data.image} alt={data.imagedescription} /></div>
    </div>      
  )
}

export default About
