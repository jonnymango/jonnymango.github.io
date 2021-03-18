import * as React from "react";

const projects = [
    {
        title: "ReMake",
        description: "ReMake is a cloud based video localization and versioning Saas platform, built from the ground up using React/Redux, Node.js, express, mongodb, Terraform and all deployed to AWS using Github CI/CD.",
        url: "https://remake.video",
        image: "static/img/remake.gif"
        
    },
    {
        title: "Think Jam",
        description: "Development and innovation specialist at an award winning Creative Agency focused on delivering best in class work Entertainment Clients",
        url: "https://www.thinkjam.com",
        image: "static/img/thinkjam.jpg"
    }
]


const Projects = () => {
    return(
    <div className="project" id="projects">
     <h2 className="text-2xl font-bold my-8" data-sal="fade">Projects</h2>

{
    projects.map((project, index) =>(
        <div className="projects grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-32 lg:gap-32 xl:gap-32  mb-16">
        {index % 2 ? (<div className="projects__secondary" data-sal="slide-right"><img className="rounded-2xl" src={project.image} alt={project.title} /></div>): false }
        <div className="projects__primary " data-sal={index % 2 ? "slide-left" : "slide-right"}>
        <h2 className="text-xl font-bold my-5">{project.title}</h2>
          <p>
          {project.description}
          </p>
          <p><a href={project.url} target="_blank" rel="noreferrer">{project.url}</a></p>
        </div>
        {index % 2 ? false : (<div className="projects__secondary" data-sal="slide-left"><img className="rounded-2xl" src={project.image} alt={project.title} /></div>) }
      </div> 
    ))
}


{/*
      <div className="projects grid grid-cols-2 gap-32 mb-16">
        <div className="projects__primary ">
        <h2 className="text-xl font-bold my-5">ReMake</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="projects__secondary"><img className="rounded-2xl" src="static/img/DSMTile.png" alt="ReMake" /></div>
      </div>
      <div className="projects grid grid-cols-2 gap-32 my-16">
      <div className="projects__secondary"><img className="rounded-2xl" src="static/img/DSMTile.png" alt="ReMake" /></div>
        <div className="projects__primary ">
        <h2 className="text-xl font-bold my-5">Think Jam</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        
</div>*/}
    </div>)
}

export default Projects;