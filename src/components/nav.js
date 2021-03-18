import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

const links = [
    {
        title: "About Me",
        scroll: "#about-me"
    },
    {
        title: "Projects",
        scroll: "#projects"
    },
    {
        title: "Contact",
        scroll: "#contact"
    }
]

// markup
const Nav = () => {
return (
    <div className="flex justify-between">
    <div><h2 className="text-3xl font-bold">jw.</h2></div>

    <div className="nav font-bold p-3">
        {
            links.map(link => (
                <a role="button" tabIndex="0" onClick={() => scrollTo(link.scroll)} onKeyDown={() => scrollTo(link.scroll)} href={() => false}>{link.title}.</a>
            ))
        }
    </div>
    </div>     
)
}

export default Nav
      