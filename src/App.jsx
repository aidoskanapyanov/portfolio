import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Router from "./routes";

export default function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <ScrollToTop />
        <Router />
      </BrowserRouter>
    </>
  );
}
