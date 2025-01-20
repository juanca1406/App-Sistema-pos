import axiosInstance from "./UrlApi";

export const fetchProducts = async (page) => {
  const response = await axiosInstance.get(`/products?page=${page}`);
  return response.data.products;
};