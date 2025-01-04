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
      <div className="mx-auto w-[1170px] px-[15px]">
        <div className="pb-[50px] text-center">
          <h5 className="text-text-grey pb-2 text-body uppercase opacity-50">Latest News</h5>
          <h2 className="text-text-grey text-[30px] font-bold uppercase">From Our Blog</h2>
        </div>
        <div className="flex">
          {blogs.map((blog, index) => (
            <BlogCard key={index} value={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
