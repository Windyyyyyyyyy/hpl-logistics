import {
  Blogs,
  FeatureSlider,
  GetQuote,
  MainFeature,
  MainSlider,
  About,
  Quotation,
  Gallery,
  ClientLogo,
} from './components';

const Home = () => {
  return (
    <>
      <MainSlider />
      <FeatureSlider />
      <MainFeature />
      <Blogs />
      <GetQuote />
      <Quotation />
      <About />
      <Gallery />
      <ClientLogo />
    </>
  );
};

export default Home;
