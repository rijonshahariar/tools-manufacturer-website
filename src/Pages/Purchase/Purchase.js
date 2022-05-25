import { async } from "@firebase/util";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading";
import auth from "../../firebase.init";

const Purchase = () => {
  const [disable, setDisable] = useState(false);
  const [authUser] = useAuthState(auth);
  const [quantity, setQuantity] = useState(null);
  const [loading, setLoading] = useState(false);
  const { partsId } = useParams();
  const navigate = useNavigate();
  const { data: parts, isLoading } = useQuery("partsById", () =>
    fetch(`https://arctoolsbd.herokuapp.com/partsById?id=${partsId}`).then((res) =>
      res.json()
    )
  );

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);

    const minQ = parseInt(parts.min_order_quantity);
    const maxQ = parseInt(parts.available_quantity);
    if (quantity >= minQ && quantity <= maxQ) {
      const userName = authUser.displayName;
      const email = authUser.email;
      const mobile = event.target.mobile.value;
      const address = event.target.address.value;
      const partsId = parts._id;
      const partsName = parts.name;
      const price = parseInt(quantity) * parseInt(parts.price_per_piece);
      const paymentData = {
        userName,
        email,
        partsId,
        partsName,
        price,
        mobile,
        address,
      };
      // console.log(paymentData);

      await fetch(`https://arctoolsbd.herokuapp.com/purchase`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            event.target.reset();
            toast.success(
              `Item Purchased Successfull. Please pay for confirm order`
            );
            navigate("/dashboard/my-order");
          }
        });
    }
    else {
      setDisable(false);
      toast.error("You have to place order in our given range");
    }

    setLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center px-5 min-h-screen">
      <div>
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          Proceed Checkout
        </h2>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <img src={parts.img} className='mx-auto' width={200} height={200} alt='' />
          <div className="card-body">
            <h2 className=" text-2xl font-bold">{parts.name}</h2>
            <p>{parts.desc}</p>
            <p>Minimum Order: {parts.min_order_quantity}</p>
            <p>Available Unit: {parts.available_quantity}</p>
            <p>Price: ${parts.price_per_piece}</p>

          </div>
        </div>


        <div className="w-full max-w-lg mx-auto">
          <h2 className=" text-3xl text-primary text-center mt-10 mb-0 uppercase">
            Provide Information
          </h2>
          <form onSubmit={handleForm}>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                required
                type="text"
                value={authUser.displayName}
                disabled
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                required
                type="email"
                value={authUser.email}
                disabled
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Mobile:</span>
              </label>
              <input
                required
                type="text"
                name="mobile"
                placeholder="+880"
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Quantity:</span>
              </label>
              <input
                required
                type="number"
                name="quantity"
                onKeyUp={(event) => {
                  setQuantity(parseInt(event.target.value));
                  setDisable(false);
                }}
                defaultChecked={parseInt(parts.min_order_quantity)}
                placeholder={`Minimum Order: ${parts.min_order_quantity} - ${parts.available_quantity}`}
                // placeholder={`Min Quantity ${parts.min_order_quantity}pcs / Available Quantity ${parts.available_quantity}pcs`}
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            <div className="form-control w-full max-w-lg mt-1">
              <label className="label">
                <span className="label-text">Address:</span>
              </label>
              <textarea
                required
                name="address"
                className="textarea textarea-primary"
                placeholder=""
              ></textarea>
            </div>
            <button
              disabled={disable}
              className={` btn btn-primary mb-10 mt-10 w-full ${loading && "loading"
                }`}
            >
              {loading ? "" : "Proceed Checkout"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
