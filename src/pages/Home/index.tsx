import About from '../About';
import { Blog, FeatureSlider, GetQuote, MainFeature, MainSlider } from './components';

const Home = () => {
  return (
    <>
      <MainSlider />
      <FeatureSlider />
      <MainFeature />
      <Blog />
      <GetQuote />
      <About />
    </>
  );
};

export default Home;
