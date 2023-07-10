import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// routes
import AppRoutes from "./routes/routes";

// redux
import { Persister, store } from "./redux/store";

// styles
import GlobalStyle from "./global/styles/global";
import theme from "./global/styles/theme";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
	return (
		<PersistGate loading={null} persistor={Persister}>
			<ToastContainer />
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<AppRoutes />
				</ThemeProvider>
			</Provider>
		</PersistGate>
	);
};

export default App;
