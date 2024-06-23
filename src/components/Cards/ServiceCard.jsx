import Image from 'next/image';
import React from 'react'

const ServiceCard = ({ service }) => {
  const {_id,service_id,title,img,price,description,facility} = service || {};
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <Image height={100} width={450} src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-primary font-semibold'>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard