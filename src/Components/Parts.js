import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";

const Parts = () => {
  const navigate = useNavigate();
  const {
    data: parts,
    isLoading,
    error,
  } = useQuery("parts", () =>
    fetch(`https://arctoolsbd.herokuapp.com/parts`).then((res) => res.json())
  );
  if (error) {
    toast.error(error.message);
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" px-10">
      <h2 className=" text-center font-bold text-primary text-5xl mt-10 mb-5 uppercase">
        PRODUCTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-1 gap-10">
        {parts &&
          parts.slice(0, 6).map((part, key) => (

            <div key={key} className="card lg:card-side bg-base-100 shadow-xl">
              <figure> <img src={part.img} width={400} height={225} alt="Shoes" /></figure>
              <div className="card-body">
                <div>
                  <h2 className="font-bold card-title pb-3">{part.name}</h2>
                  <p className=" pb-1">{part.desc}</p>
                  <p className="font-bold pb-1">
                    Price: <span className="text-primary">${part.price_per_piece}</span>
                  </p>
                  <p className="font-bold pb-1">Minimum Order: <span className="text-primary">{part.min_order_quantity}</span> </p>
                  <p className="font-bold pb-1">
                    Available Unit: <span className="text-primary">{part.available_quantity}</span>
                  </p>
                  <div className="card-actions">
                    <button
                      onClick={() => {
                        navigate(`/purchase/${part._id}`);
                      }}
                      className="btn btn-sm btn-primary mt-5"
                    >
                      Purchase now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Parts;
