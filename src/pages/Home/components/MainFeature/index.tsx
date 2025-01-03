import { Link } from 'react-router';

const MainFeature = () => {
  const media = [
    {
      icon: '/src/assets/images/pointer.svg',
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
    {
      icon: '/src/assets/images/warehouse.svg',
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
    {
      icon: '/src/assets/images/route.svg',
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
    {
      icon: '/src/assets/images/delivery-truck2.svg',
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
    {
      icon: '/src/assets/images/flight.svg',
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
    {
      icon: '/src/assets/images/telemarketer.svg',
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
  ];

  return (
    <section className="flex bg-[#f5f7f9]">
      <div className="flex w-[calc(50%+210px)] justify-center">
        <div className="flex max-w-[780px] flex-wrap justify-evenly">
          {media.map((item, index) => (
            <div key={index} className="mb-6 flex w-[calc(50%-10px)] items-center justify-center">
              <div className="pr-[20px]">
                <img src={item.icon} alt="icon" height={71} width={71} />
              </div>
              <div>
                <Link to="/">
                  <h4 className="pb-[10px] text-body font-bold uppercase text-[#2f2f30]">
                    {item.title}
                  </h4>
                </Link>
                <p className="text-justify text-sm text-black">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[calc(50%-210px)]">
        <img src="/src/assets/images/feature-right.jpg" alt="Feature right" />
      </div>
    </section>
  );
};

export default MainFeature;
