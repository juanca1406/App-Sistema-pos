import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchProducts } from "../Api/ProductsApi";

export const useProducts = (page) => {
    return useQuery({
        queryKey: ["products", page], // Añade `page` a la clave de cache
        queryFn: () => fetchProducts(page), // Pasa `page` al `fetchEmployees`
        keepPreviousData: true, // Mantiene los datos anteriores mientras carga la nueva página
        cacheTime: 5 * 60 * 1000,
        staleTime: 5 * 60 * 1000
    });
};
