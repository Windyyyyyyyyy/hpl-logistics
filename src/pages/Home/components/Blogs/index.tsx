import BlogCard from './BlogCard';

const Blogs = () => {
  const blogs = [
    {
      imagesUrl: '/src/assets/images/icon',
      title: `China's strong export numbers beat forecasts and record surplus`,
      description: `China's strong exports, together with the record surplus, could put pressure on the government to let the Chinese currency`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      imagesUrl: '/src/assets/images/icon',
      title: `China's strong export numbers beat forecasts and record surplus`,
      description: `China's strong exports, together with the record surplus, could put pressure on the government to let the Chinese currency`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      imagesUrl: '/src/assets/images/icon',
      title: `China's strong export numbers beat forecasts and record surplus`,
      description: `China's strong exports, together with the record surplus, could put pressure on the government to let the Chinese currency`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ];

  return (
    <section className="w-full px-0 py-[80px]">
      <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <div className="pb-[50px] text-center">
          <h5 className="pb-2 text-body uppercase text-text-grey opacity-50">Latest News</h5>
          <h2 className="text-[30px] font-bold uppercase text-text-grey">From Our Blog</h2>
        </div>
        <div className="-mx-[15px] flex flex-col items-center justify-center lg:flex-row">
          {blogs.map((blog, index) => (
            <div key={index} className="w-full max-lg:mb-[40px] max-lg:px-[40px]">
              <BlogCard value={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
