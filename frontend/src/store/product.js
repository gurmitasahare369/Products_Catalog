import { create } from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),

    createProduct: async (newProduct) => {
        try {
            if(!newProduct.name || !newProduct.price || !newProduct.image){
                return { success: false, message: 'All fields are required.' };
            } 

            const res = await fetch('/api/products',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify(newProduct)
                body: JSON.stringify({...newProduct,
                    price: Number(newProduct.price), 
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                return { success: false, message: data.message || "Failed" };
            }

            set((state) => ({products: [...state.products, data.data]}));
            return { success: true, message: 'Product created succesfully.' };
        } catch (error) {            
            console.error("Create product error:", error);
            return { success: false, message: "Something went wrong" };
        }
    },

    fetchProducts: async () => {
        try {
            const res = await fetch('/api/products');
            const data = await res.json();
            set({products: data.data});

        } catch (error) {
             console.error("Create product error:", error);
            return { success: false, message: "Something went wrong" };
        }
    },

    deleteProduct: async (pid) => {
        try {
            const res = await fetch(`/api/products/${pid}`,{
                method: 'DELETE',
            });
            const data = await res.json();

            if(!data.success){
                return { success: false, message: data.message };
            }

            set((state) => ({products: state.products.filter(product => product._id !== pid)}));  // update ui immediately, without refetching
            return { success: true, message: 'Product deleted successfully.' };
        } catch (error) {
            console.error("Delete product error:", error);
            return { success: false, message: "Something went wrong" };
        }
    },

    updateProduct: async (pid, updatedProduct) => {
        try {
            const res = await fetch(`/api/products/${pid}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            });

            const data = await res.json();

            if(!data.success){
                return { success: false, message: data.message };
            } else{
                set((state) => ({products: state.products.map((product) => (product._id === pid ? data.data : product))

                }));  // update ui immediately, without refetching
                return { success: true, message: 'Product updated successfully.' };
            }
        } catch (error) {
            console.error("Update product error:", error);
            return { success: false, message: "Something went wrong" };
        }
    }
}));