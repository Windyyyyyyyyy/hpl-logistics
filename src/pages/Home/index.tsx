import About from '../About';
import { Blogs, FeatureSlider, GetQuote, MainFeature, MainSlider } from './components';

const Home = () => {
  return (
    <>
      <MainSlider />
      <FeatureSlider />
      <MainFeature />
      <Blogs />
      <GetQuote />
      <About />
    </>
  );
};

export default Home;
