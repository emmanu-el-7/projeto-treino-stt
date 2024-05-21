import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';

const customer = JSON.parse(localStorage.getItem('customer'));

const initialState = {
	customer: customer ? customer : null,
	error: false,
	success: false,
	loading: false,
};

export const register = createAsyncThunk(
	'auth/register',

	async (customer, thunkAPI) => {
		const data = await authService.register(customer);

		if (data.errors) {
			return thunkAPI.rejectWithValue(data.errors[0]); //será exibida sempre a primeira mensagem de erro do array
		}

		return data;
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	await authService.logout();
});

export const login = createAsyncThunk(
	'auth/login',
	async (customer, thunkAPI) => {
		const data = await authService.login(customer);

		if (data.errors) {
			return thunkAPI.rejectWithValue(data.errors[0]);
		}

		return data;
	}
);

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.error = false;
			state.success = false;
			state.loading = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.loading = true;
				state.error = false;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.error = null;
				state.customer = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.customer = null;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.error = null;
				state.customer = null;
			})
			.addCase(login.pending, (state) => {
				state.loading = true;
				state.error = false;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.error = null;
				state.customer = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.customer = null;
			});
	},
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
