import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HelpLayout from "./layouts/HelpLayout";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    // <BrowserRouter>
    //   <header>
    //     <nav>
    //       <h1>Rajorshi Router</h1>
    //       <Link to="/">Home</Link>
    //       <br />
    //       <NavLink to="about">About</NavLink>
    //     </nav>
    //   </header>
    //   <main>
    //     <Routes>
    //       {/* <Route path="/" element={<Home />} /> */}
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
