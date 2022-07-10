import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { authService } from '../../services/auth/auth.service'

import { toastError } from '../../utils/toastr-error'

import { errorCatch } from '../../api/api.helpers'

import { IAuthResponse, IEmailPassword } from './user.interface'

// register
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await await authService.register(email, password)
			toastr.success('Registration', 'Completed successful')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)
// login
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await authService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)
// logout
export const logout = createAsyncThunk('auth/logout', async () => {
	await authService.logout()
})
// checkAuth
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await authService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorizaiton is finished, plz sign in again'
				)
				thunkAPI.dispatch(logout())
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)
