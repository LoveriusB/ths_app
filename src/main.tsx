import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";

import WebFontLoader from "webfontloader";

import { QueryClientProviders } from "./queryClient";
import { ContextWrappers } from "./wrappers/ContextWrappers";
import { TerminalContextWrappers } from "./wrappers/TerminalContextWrappers";
import App from "./App";
import { UserContextProvider } from "./contexts/userContext/UserProvider";
import { SelectedThemeContextProvider } from "./contexts/selectedThemeContext.tsx/SelectedThemeProvider";

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
        <UserContextProvider>
          <ContextWrappers>
            <TerminalContextWrappers>
              <SelectedThemeContextProvider>
                <App />
              </SelectedThemeContextProvider>
            </TerminalContextWrappers>
          </ContextWrappers>
        </UserContextProvider>
      </QueryClientProviders>
    </BrowserRouter>
  </StrictMode>
);
