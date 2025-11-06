import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Container from "../Container/Container";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Swal from "sweetalert2";
import ErrorProductNotFound from "../Error/ErrorProductNotFound";

const UpdateCoffeeDetails = () => {
  const product = useLoaderData();
  const { productId } = useParams();
  // console.log(product);

  const { _id, name, chef, details, image, supplier, taste, category } =
    product || {};

  // console.log(_id,name, chef, details, image, supplier, taste, category);

  if (productId !== _id) {
    return <ErrorProductNotFound />;
  }

  const handleUpdateData = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const details = e.target.details.value;
    const image = e.target.image.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;

    // console.log(name, chef, supplier, taste, category, details, image);
    const updateProductData = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      image,
    };

    Swal.fire({
      title: "Do you want to Save the Updates?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-espresso-emporium-server-1yc0.onrender.com/updateCoffeeDetails/${_id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateProductData),
          }
        )
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Saved!", "", "success");
          })
          .catch((err) => {
            Swal.fire({
              position: "top-center",
              icon: "error",
              title: `${err.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <Container>
        <div className="md:w-5/6 p-3 md:p-0 mx-auto m-10">
          <div>
            <Link to={"/"} className="bg-[#331A15] btn rounded-md text-white">
              <MdKeyboardDoubleArrowLeft />
              Back To Home
            </Link>
          </div>

          <div className="card card-side bg-base-300 mt-4 shadow-sm h-full md:p-6 w-full">
            <div className="p-5">
              <h1 className="md:text-4xl text-2xl text-[#374151] font-semibold pb-3 text-center">
                Update Existing Coffee Details
              </h1>
              <p className="text-[#1B1A1A70] font-semibold text-sm text-center">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>

              <form onSubmit={handleUpdateData}>
                <div className="flex gap-5 items-center">
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Name</legend>
                    <input
                      type="text"
                      className="input w-full focus:outline-0 border-teal-500"
                      name="name"
                      defaultValue={name}
                      placeholder={name}
                    />
                  </fieldset>
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Chef</legend>
                    <input
                      type="text"
                      name="chef"
                      defaultValue={chef}
                      className="input w-full focus:outline-0 border-teal-500"
                      placeholder={chef}
                    />
                  </fieldset>
                </div>

                <div className="flex gap-5">
                  {" "}
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Supplier</legend>
                    <input
                      type="text"
                      className="input w-full focus:outline-0 border-teal-500"
                      defaultValue={supplier}
                      placeholder={supplier}
                      name="supplier"
                    />
                  </fieldset>
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Taste
                      <span className="text-red-400">*</span>
                    </legend>
                    <input
                      type="text"
                      name="taste"
                      className="input w-full focus:outline-0 border-teal-500"
                      placeholder={taste}
                      defaultValue={taste}
                    />
                  </fieldset>
                </div>
                <div className="flex gap-5">
                  {" "}
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Category</legend>
                    <input
                      type="text"
                      className="input w-full focus:outline-0 border-teal-500"
                      placeholder={category}
                      defaultValue={category}
                      name="category"
                    />
                  </fieldset>
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Details
                      <span className="text-red-400">*</span>
                    </legend>
                    <input
                      type="text"
                      name="details"
                      className="input w-full focus:outline-0 border-teal-500"
                      placeholder={details}
                      defaultValue={details}
                    />
                  </fieldset>
                </div>
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Photo
                    <span className="text-base text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    className="input w-full focus:outline-0 border-teal-500"
                    placeholder={image}
                    defaultValue={image}
                    name="image"
                  />
                </fieldset>

                <div className="flex justify-center items-center w-full mt-5">
                  <button
                    type="submit"
                    className="bg-linear-to-r w-full cursor-pointer flex justify-center items-center to-[#9F62F2] from-[#632EE3] text-white py-2 rounded-lg hover:bg-linear-to-l"
                  >
                    Update Coffee Details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdateCoffeeDetails;
