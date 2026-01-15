import { useState } from "react";

//api call to add an item
import { addItem } from "../servers/services";

export default function AddModal({ row, closeDialog, getData }) {
  // manage the states of the input fields, could be done in other ways
  const [itemName, setItemName] = useState("");
  const [itemURL, setItemURL] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState(0);
  const [rate, setRate] = useState(5);

  // form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const extractedDataObject = Object.fromEntries(fd.entries());
    try {
      const addedItem = await addItem(extractedDataObject);
      console.log("Added Item:", addedItem);
      getData();
      closeDialog();
    } catch (error) {
      console.error("Failed to add item", error);
    }
    closeDialog();
  };

  //rendered screen (dialog)
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">
        Item Name:
        <input
          type="text"
          name="item"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
          className="form-input"
          required
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
          required
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
          required
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
          defaultValue={0}
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
