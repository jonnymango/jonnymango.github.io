import * as React from "react"

const interests = [
    {
        text: "Project Management",
        delay: 0
    },
    {
        text: "Prince2 Qualified",
        delay: 125
    },
    {
        text: "UX Development",
        delay: 250
    },
    {
        text: "Javascript",
        delay: 375
    },
    {
        text: "Wordpress",
        delay: 500
    },
    {
        text: "Voice Technology",
        delay: 625
    },
    {
        text: "AR/VR Development",
        delay: 750
    },
    {
        text: "Advertising Technology",
        delay: 875
    }
        
]

const Interests = () => {
    return(
        <div className="interests ">
          <h2 className="text-2xl font-bold my-8" data-sal="fade">Interests &amp; Skills</h2>
          <div className="interests grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-l mb-16">
            {interests.map(interest => (
                <div className="interest" data-sal="slide-up">{interest.text}</div>
            ))}
            
          </div>
      </div>
    )
}

export default Interests