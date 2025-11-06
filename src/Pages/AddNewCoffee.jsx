import React from "react";
import Container from "../Container/Container";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddNewCoffee = () => {
  const handleAddNewCoffee = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const available = e.target.checked.checked;
    console.log(
      name,
      image,
      chef,
      supplier,
      taste,
      category,
      details,
      price,
      rating,
      available
    );

    const newCoffee = {
      name,
      image,
      chef,
      supplier,
      taste,
      category,
      details,
      price,
      rating,
      available,
    };

    fetch(
      `https://coffee-store-espresso-emporium-server-1yc0.onrender.com/coffees`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Product has been Added.",
          showConfirmButton: false,
          timer: 1000,
        });
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
                Add New Coffee
              </h1>
              <p className="text-[#1B1A1A70] font-semibold text-sm text-center">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>

              <form onSubmit={handleAddNewCoffee} className="mt-7">
                <div className="flex gap-5 items-center">
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Name
                      <span className="text-base text-red-400">*</span>
                    </legend>
                    <input
                      type="text"
                      className="input w-full focus:outline-0 border-teal-500"
                      name="name"
                      placeholder="Enter Product Title"
                      required
                    />
                  </fieldset>
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Chef
                      <span className="text-base text-red-400">*</span>
                    </legend>
                    <input
                      type="text"
                      name="chef"
                      placeholder="Enter Chef Name"
                      required
                      className="input w-full focus:outline-0 border-teal-500"
                    />
                  </fieldset>
                </div>

                <div className="flex gap-5">
                  {" "}
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Supplier
                      <span className="text-base text-red-400">*</span>
                    </legend>
                    <input
                      type="text"
                      className="input w-full focus:outline-0 border-teal-500"
                      name="supplier"
                      placeholder="Enter Supplier Name"
                      required
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
                      placeholder="Enter Taste"
                      required
                    />
                  </fieldset>
                </div>
                <div className="flex gap-5">
                  {" "}
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Category
                      <span className="text-base text-red-400">*</span>
                    </legend>
                    <input
                      type="text"
                      className="input w-full focus:outline-0 border-teal-500"
                      name="category"
                      placeholder="Enter Product Category"
                      required
                    />
                  </fieldset>
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Available
                      <span className="text-red-400">*</span>
                    </legend>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox border-teal-500 checked:border-secondary checkbox-secondary"
                      name="checked"
                    />
                  </fieldset>
                </div>
                <div className="flex gap-5">
                  {" "}
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Price
                      <span className="text-base text-red-400">*</span>
                    </legend>
                    <input
                      type="number"
                      className="input w-full focus:outline-0 border-teal-500"
                      name="price"
                      step="any"
                      placeholder="Enter Product Price"
                      required
                    />
                  </fieldset>
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Rating
                      <span className="text-red-400">*</span>
                    </legend>
                    <input
                      type="number"
                      name="rating"
                      step="0.1"
                      className="input w-full focus:outline-0 border-teal-500"
                      placeholder="Enter Product Rating"
                      required
                    />
                  </fieldset>
                </div>
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Details
                    <span className="text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    name="details"
                    className="input w-full focus:outline-0 border-teal-500"
                    placeholder="Enter Product Details"
                    required
                  />
                </fieldset>
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Photo
                    <span className="text-base text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    className="input w-full focus:outline-0 border-teal-500"
                    name="image"
                    placeholder="Enter Product Photo URL"
                    required
                  />
                </fieldset>

                <div className="flex justify-center items-center w-full mt-5">
                  <button
                    type="submit"
                    className="bg-linear-to-r w-full cursor-pointer flex justify-center items-center to-[#9F62F2] from-[#632EE3] text-white py-2 rounded-lg hover:bg-linear-to-l"
                  >
                    Add New Coffee
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

export default AddNewCoffee;
