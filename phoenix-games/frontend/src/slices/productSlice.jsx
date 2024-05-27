import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from '../services/productService';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		return productService.getAllProducts();
	}
);

export const addProduct = createAsyncThunk(
	'products/addProduct',
	async (data, { getState }) => {
		const { auth } = getState();
		return productService.addProduct(data, auth.token);
	}
);

export const updateProduct = createAsyncThunk(
	'products/updateProduct',
	async (data, { getState }) => {
		const { auth } = getState();
		return productService.updateProduct(data.id, data, auth.token);
	}
);

export const deleteProduct = createAsyncThunk(
	'products/deleteProduct',
	async (id, { getState }) => {
		const { auth } = getState();
		return productService.deleteProduct(id, auth.token);
	}
);

const productSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(addProduct.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(addProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.products.push(action.payload);
			})
			.addCase(addProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(updateProduct.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateProduct.fulfilled, (state, action) => {
				state.loading = false;
				const index = state.products.findIndex(
					(p) => p.id === action.payload.id
				);
				if (index !== -1) {
					state.products[index] = action.payload;
				}
			})
			.addCase(updateProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(deleteProduct.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.products = state.products.filter(
					(p) => p.id !== action.payload.id
				);
			})
			.addCase(deleteProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default productSlice.reducer;
