import { Amplify } from "aws-amplify";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import WebFontLoader from "webfontloader";
import amplifyConfig from "../amplify_outputs.json";
import App from "./App";
import { SelectedThemeContextProvider } from "./contexts/selectedThemeContext.tsx/SelectedThemeProvider";
import { UserContextProvider } from "./contexts/userContext/UserProvider";
import { QueryClientProviders } from "./queryClient";
import { ContextWrappers } from "./wrappers/ContextWrappers";
import { TerminalContextWrappers } from "./wrappers/TerminalContextWrappers";

WebFontLoader.load({
  google: {
    families: ["Source Code Pro:300,400,500,700", "Muli:300,400,500,700"],
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

Amplify.configure(amplifyConfig);

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
