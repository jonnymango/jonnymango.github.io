import * as React from "react";
import SocialBtns from "./socialBtns";

const data={
    title: "Contact Me",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: 'static/img/me.jpg',
    imagedescription: 'me',
    name: "Jonny Wright",
    contactaddress: "jonny@jonny-wright.co.uk"
}

const Contact = () => {
    return(
        <div className="contact " id="contact" data-sal="slide-right">
      <h2 className="text-2xl font-bold my-5" data-sal="fade">{data.title}</h2>
      <p className="my-4">
          {data.description}
      </p>
      <div className="contact grid grid-cols-4 gap-16 my-16 px-20">
      <div>
        <img className="rounded-full" src={data.image} alt={data.imagedescription}  />
      </div>
      <div className="aboutMe__primary col-span-3">
          <h2 className="text-xl font-bold mt-4">{data.name}</h2>
          <h2 className="text-xl mb-4"><a href={`mailto:${data.contactaddress}`}>{data.contactaddress}</a></h2>
          <SocialBtns />
      </div>
      </div>

      

      </div>
    );
}

export default Contact;
