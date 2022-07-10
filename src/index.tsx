import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App/App'

import { store } from './store/store'

import './index.css'
import reportWebVitals from './reportWebVitals'
import ReduxToast from './vendor/ReduxToast'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		{/* <AuthProvider> */}
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReduxToast />
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</QueryClientProvider>
		</Provider>
		{/* </AuthProvider> */}
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
