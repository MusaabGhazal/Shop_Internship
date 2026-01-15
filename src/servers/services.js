import axios from 'axios';

export const updateItem = async (fd, itemId) => {
  try {
    const apiUrl = `https://677f78fd0476123f76a69d5d.mockapi.io/api/items/${itemId}`;

    fd.discount = (+fd.discount)/100;
    fd.price = +fd.price;
    const response = await axios.put(apiUrl, fd)
    
    console.log('Item updated successfully:', response.data);
    return response.data;

  } catch (error) {
    console.error('Error updating the item:', error);
    throw error;
  }
};

export const fetchData = async () => {
  return await axios.get("https://677f78fd0476123f76a69d5d.mockapi.io/api/items");
};

export const deleteItem = async (itemId) => {
  try {
    const apiUrl = `https://677f78fd0476123f76a69d5d.mockapi.io/api/items/${itemId}`;

    const response = await axios.delete(apiUrl);

    console.log('Item deleted successfully:', response.data);
    return response.data;

  } catch (error) {
    console.error('Error deleting the item:', error);
    throw error;
  }
};

export const addItem = async (fd) => {
  try {
    const apiUrl = `https://677f78fd0476123f76a69d5d.mockapi.io/api/items`;

    fd.discount = (+fd.discount)/100;
    fd.price = +fd.price;
    const response = await axios.post(apiUrl, fd);

    console.log('Item added successfully:', response.data);
    return response.data;

  } catch (error) {
    console.error('Error adding the item:', error);
    throw error;
  }
};
