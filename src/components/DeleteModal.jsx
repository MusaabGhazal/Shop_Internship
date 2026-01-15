// api call to delete an item from the list
import { deleteItem } from "../servers/services";

export default function DeleteModal({ row, closeDialog, getData }) {
  // if pressed (cancel) button
  function handleCancelButton() {
    closeDialog();
  }

  // if pressed (confirm) button
  async function handleConfirmButton() {
    try {
      const deletedItem = await deleteItem(row.id);
      console.log("Deleted Item:", deletedItem);
      getData();
      closeDialog();
    } catch (error) {
      console.error("Failed to delete item", error);
    }
    closeDialog();
  }

  //rendered data
  return (
    <div class="confirmation-dialog">
      <p class="dialog-message">Are you sure you want to delete this item?</p>
      <div class="dialog-buttons">
        <button class="confirm-button" onClick={handleConfirmButton}>
          Yes
        </button>
        <button class="cancel-button" onClick={handleCancelButton}>
          No
        </button>
      </div>
    </div>
  );
}
