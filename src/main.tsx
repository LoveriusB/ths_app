import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";

import WebFontLoader from "webfontloader";

import { QueryClientProviders } from "./queryClient";
import { AmplifyClientProvider } from "./contexts/AmplifyClient/AmplifyClient";
import { UserContextProvider } from "./contexts/UserContext";
import { ContextWrappers } from "./wrappers/ContextWrappers";
import { TerminalContextWrappers } from "./wrappers/TerminalContextWrappers";
import { SelectedThemeContextProvider } from "./contexts/SelectedThemeContext";
import App from "./App";

WebFontLoader.load({
  google: {
    families: ["Source Code Pro:300,400,500,700", "Muli:300,400,500,700"],
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProviders>
        <AmplifyClientProvider>
          <UserContextProvider>
            <ContextWrappers>
              <TerminalContextWrappers>
                <SelectedThemeContextProvider>
                  <App />
                </SelectedThemeContextProvider>
              </TerminalContextWrappers>
            </ContextWrappers>
          </UserContextProvider>
        </AmplifyClientProvider>
      </QueryClientProviders>
    </BrowserRouter>
  </StrictMode>
);
