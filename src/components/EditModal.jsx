import { useState } from "react";

//api call to update an item in the list
import { updateItem } from "../servers/services";
import { ToastContainer, toast } from "react-toastify";

export default function EditModal({ row, closeDialog, getData }) {
  // states to manage input fields, could be managed in other ways
  const [itemName, setItemName] = useState(row.item);
  const [itemURL, setItemURL] = useState(row.itemImagePath);
  const [category, setCategory] = useState(row.category);
  const [price, setPrice] = useState(row.price);
  const [discount, setDiscount] = useState(row.discount * 100);
  const [rate, setRate] = useState(row.rate);

  const notify = (event) => {
    event.preventDefault();

    const promise = handleSubmit(event);

    toast.promise(promise, {
      pending: "Updating item...",
      success: "Item updated successfully! 👌",
      error: "Failed to update item 🤯",
    });

    promise.finally(() => {
      setTimeout(() => {
        closeDialog();
      }, 2000);
    });
  };

  // handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const extractedDataObject = Object.fromEntries(fd.entries());
    try {
      const updatedItem = await updateItem(extractedDataObject, row.id);
      console.log("Updated Item:", updatedItem);
      setTimeout(() => {
        getData();
      }, 5000);
    } catch (error) {
      console.error("Failed to update item", error);
      return error;
    }
  };

  // rendered document
  return (
    <form onSubmit={notify} className="form-container">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <label className="form-label">
        Item Name:
        <input
          type="text"
          name="item"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
          className="form-input"
        />
      </label>
      <label className="form-label">
        Image:
        <input
          type="text"
          name="itemImagePath"
          value={itemURL}
          onChange={(event) => setItemURL(event.target.value)}
          className="form-input"
        />
      </label>
      <label className="form-label">
        Item Category:
        <select
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="form-input"
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="gym">Gym</option>
          <option value="party">Party</option>
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
        </select>
      </label>
      <label className="form-label">
        Item Price:
        <input
          type="number"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className="form-input"
        />
      </label>
      <label className="form-label">
        Item Discount: (ex: 8, this means disount of 8%)
        <input
          type="number"
          name="discount"
          value={discount}
          onChange={(event) => setDiscount(event.target.value)}
          className="form-input"
        />
      </label>
      <label className="form-label">
        Item Rate:
        <input
          type="number"
          name="rate"
          value={rate}
          onChange={(event) => setRate(event.target.value)}
          max="5"
          min="0"
          step="0.5"
          className="form-input"
        />
      </label>
      <div className="form-buttons">
        <button type="submit" className="submit-button">
          Submit
        </button>
        <button type="button" onClick={closeDialog} className="cancel-button">
          Cancel
        </button>
      </div>
    </form>
  );
}
