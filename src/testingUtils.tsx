import { PropsWithChildren, ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

const apiQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 3000,
    },
  },
});

const Wrapper = ({ children }: PropsWithChildren<{}>) => (
    <Router>
      <QueryClientProvider client={apiQueryClient}>
        {children}
      </QueryClientProvider>
    </Router>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
