import React from 'react'

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0)),url(/assets/images/banner/${
                index + 1
              }.jpg)`,
              backgroundSize: "cover", // Add this line
              backgroundPosition: "center", // Add this line
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full bg-top bg-no-repeat rounded-lg h-[90vh]"
          >
            <div>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next:"#slide2",
      prev:"#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next:"#slide3",
      prev:"#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next:"#slide4",
      prev:"#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next:"#slide1",
      prev:"#slide3",
  },
];

export default Banner