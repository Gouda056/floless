import Feature from "../src/components/landing/feature/feature";
import Gallery from "../src/components/landing/gallery/index";
import Partners from "../src/components/landing/Partners/Partners";
import Testimonials from "../src/components/landing/testimonial/testimonials";
import Home from "../src/components/landing/home/home";
import Trends from "../src/components/landing/trends/trends";
import Faqs from "../src/components/landing/faq/Faqs";

const Index = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Home />
      <Feature />
      <Gallery />
      <Trends />
      {/* <Testimonials /> */}
      <Partners />
      <Faqs />
    </div>
  );
};

Index.layout = "Landing";
export default Index;
