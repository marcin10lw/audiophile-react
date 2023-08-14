import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "App";
import { store } from "store/store";
import "scss/globals/globalStyle.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          autoClose={2500}
          pauseOnHover={false}
          position="bottom-left"
          style={{ maxWidth: "500px", width: "100%" }}
        />
        <App />
      </QueryClientProvider>
    </HashRouter>
  </Provider>
);
