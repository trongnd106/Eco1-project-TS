import React, { useState } from "react";
import { FormErrorProduct, FormProduct } from "../types/product";
import productService from "../services/product";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import validate from "../utils/validation";
import { productSchema } from "../validation/product";

const AddProduct = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormProduct>({
    category: "",
    description: "",
    price: "",
    thumbnail: "",
    title: "",
  });
  const [erorrForm, setErrorForm] = useState<FormErrorProduct>({});

  const handelChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrorForm({ ...erorrForm, [name]: null });
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value, errorMessage } = validate(form, productSchema);
    if (errorMessage) {
      setErrorForm(errorMessage);
      return;
    }
    productService
      .create(value)
      .then(() => {
        toast.success("Created product successfully");
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form className="bg-white p-5 rounded-lg" onSubmit={onSubmit}>
      <div className="columns-3">
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            onChange={handelChange}
            id="base-input"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {erorrForm?.title && (
            <span className="text-sm text-red-400">* {erorrForm.title}</span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium"
          >
            Price
          </label>
          <input
            onChange={handelChange}
            type="number"
            name="price"
            id="base-input"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {erorrForm?.price && (
            <span className="text-sm text-red-400">* {erorrForm.price}</span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium"
          >
            Categories
          </label>
          <select
            onChange={handelChange}
            name="category"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id=""
          >
            <option value="">Select</option>
            <option value="sneakers">Sneakers</option>
            <option value="clothes">Clothes</option>
            <option value="hand bag">Hand bag</option>
          </select>
          {erorrForm?.category && (
            <span className="text-sm text-red-400">* {erorrForm.category}</span>
          )}
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium">
          Images
        </label>
        <input
          type="text"
          onChange={handelChange}
          name="thumbnail"
          id="base-input"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {erorrForm?.thumbnail && (
          <span className="text-sm text-red-400">* {erorrForm.thumbnail}</span>
        )}
      </div>
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium">
          Description
        </label>
        <textarea
          onChange={handelChange}
          name="description"
          id=""
          className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          rows={10}
        ></textarea>
        {erorrForm?.description && (
          <span className="text-sm text-red-400">
            * {erorrForm.description}
          </span>
        )}
      </div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Save
      </button>
    </form>
  );
};

export default AddProduct;
