import * as React from "react"

// data
const links = [
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/jonny-wright-b11b118/",
      delay: 0
    },
    {
        text: "Github",
        url: "https://www.github.com/jonnymango",
        delay: 200
    },
    {
        text: "Twitter",
        url: "https://www.twitter.com/jonnywright",
        delay: 400
    },
    {
        text: "Instagram",
        url: "https://www.instagram.com/jonnywright",
        delay: 600
    }
  ]



// markup
const SocialBtns = () => {
return (
    <div className="socialBtns">
        {links.map(link => (
            <a key={link.url} href={link.url} data-sal="slide-up" data-sal-delay={link.delay}>{link.text}</a>
        ))}

    </div>
)
}

export default SocialBtns
      