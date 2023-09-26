import React, { lazy, Suspense, } from "react";
import {
  
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Import your other components using React.lazy

import Blog from "./component/blog/Blog";
import AboutPage from "./component/about/AboutPage";
import Contact from "./component/contact/Contact";
import Footer from "./component/Footer";
import Career from "./component/career/Career";
import MainCource from "./component/cource/MainCource";
import MainCource1 from "./component/cource/MainCource1";
import MainCource2 from "./component/cource/MainCource2";
import MainCource3 from "./component/cource/MainCource3";
import MainCource4 from "./component/cource/MainCource4";
import MainCource5 from "./component/cource/MainCource5";
import MainCource6 from "./component/cource/MainCource6";
import MainCource7 from "./component/cource/MainCource7";
import MainCource8 from "./component/cource/MainCource8";
import MainCource9 from "./component/cource/MainCource9";
import Interviewque from "./component/blog/InterviewQuestion";
import BlockCovid from "./component/blog/BlockCovid";
import BlogAl from "./component/blog/BlogAl";
import FixedFooter from "./component/fixedfooter/FixedFooter";
import GoToTop from "./examples/GotoTop";
import Navbarbb from "./component/navbarboos/Navbarb";
import Special100q from "./component/blog/Special100q";
import Hire from "./component/hirefromus/Hire";
import FacebookFixel from "./component/FacebookFixel";
import Error from "./component/404page/Error";
const LazyHomepage = lazy(() => import("./component/home/HomePage"));

function App() {
  const location = useLocation();
  const shouldShowFooter = location.pathname !== "/";
  return (
    <>
    <div onContextMenu={(e) => e.preventDefault()}>
      <FacebookFixel />
      <Navbarbb />
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<LazyHomepage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
          <Route path="maincource" element={<MainCource />} />
          <Route path="maincource1" element={<MainCource1 />} />
          <Route path="maincource2" element={<MainCource2 />} />
          <Route path="maincource3" element={<MainCource3 />} />
          <Route path="maincource4" element={<MainCource4 />} />
          <Route path="maincource5" element={<MainCource5 />} />
          <Route path="maincource6" element={<MainCource6 />} />
          <Route path="maincource7" element={<MainCource7 />} />
          <Route path="maincource8" element={<MainCource8 />} />
          <Route path="maincource9" element={<MainCource9 />} />
          <Route path="interview1" element={<Interviewque />} />
          <Route path="blogcovid" element={<BlockCovid />} />
          <Route path="special100q" element={<Special100q />} />
          <Route path="blogai" element={<BlogAl />} />
          <Route path="hire" element={<Hire />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <GoToTop />
      <FixedFooter />
      {shouldShowFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
