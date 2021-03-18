import * as React from "react";
import SocialBtns from "./socialBtns";

const data={
    title: "Contact Me",
    description: "If you want to get in touch for a chat, find me below.",
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
      <div className="contact grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-16 lg:gap-16 xl:gap-16  my-16 px-0 md:px-20 lg:px-40 xl:px-40">
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
