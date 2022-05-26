import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmModal from "../Components/ConfirmModal";
import Loading from "../Components/Loading";
import auth from "../firebase.init";

const ManageAllorder = () => {
  const [authUser] = useAuthState(auth);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const [deleteId, setDeleteId] = useState("");
  const {
    data: purchasedItems,
    isLoading,
    refetch,
  } = useQuery(["manageallorder", authUser], () =>
    fetch(`https://arctoolsbd.herokuapp.com/purchase`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        localStorage.removeItem("accessToken");
        signOut(auth);
        navigate("/login");
        toast.error(`${res.statusText} Access!!! Please Login again`);
      }
    })
  );
  const handleDelete = (answer) => {
    if (answer) {
      fetch(`https://arctoolsbd.herokuapp.com/purchaseById/${deleteId}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            refetch();
          }
        });
    }
  };

  const handleDelivery = (id) => {

    fetch(`https://arctoolsbd.herokuapp.com/purchaseById/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        refetch()
        toast.success('Item Delivered')
      })
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
        Manage all order
      </h2>
      <div className="mb-10 overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>User</th>
              <th>Total Price</th>
              <th>Payment ID</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>
            {purchasedItems &&
              purchasedItems.map((item, key) => (
                <tr key={key}>
                  <th>{key + 1}</th>
                  <td className=" capitalize">{item.partsName}</td>
                  <td>{item.userName}</td>
                  <td>${item.price}</td>
                  <td>
                    {item.paymentId ? (
                      <>
                        <p className=" text-success">Paid</p>{" "}
                        <small className="text-primary">{item.paymentId}</small>
                      </>
                    ) : (
                      <>
                        <p className=" text-error">Unpaid</p>{" "}

                      </>
                    )}
                  </td>
                  <td>
                    {item.paymentId ? (
                      <>
                        {item.status === "delivered" ? (
                          "Delivered"
                        ) : (
                          <label
                            htmlFor="confirmation-modal"
                            onClick={() => {
                              handleDelivery(item._id);
                            }}
                            className="btn btn-error btn-xs text-white"
                          >
                            PENDING
                          </label>
                        )}
                      </>
                    ) : (
                      <>
                        <label
                          htmlFor="confirmation-modal"
                          onClick={() => {
                            setModal(true);
                            setDeleteId(item._id);
                          }}
                          className="btn btn-primary btn-xs text-white"
                        >
                          Delete
                        </label>
                      </>
                    )}


                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {modal && (
        <ConfirmModal setModal={setModal} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default ManageAllorder;
