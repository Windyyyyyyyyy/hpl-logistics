import { Link } from 'react-router';
import Pointer from '../../../../assets/images/pointer.svg';
import Warehouse from '../../../../assets/images/warehouse.svg';
import Route from '../../../../assets/images/route.svg';
import DeliveryTruck from '../../../../assets/images/delivery-truck2.svg';
import Flight from '../../../../assets/images/flight.svg';
import Telemarketer from '../../../../assets/images/telemarketer.svg';
import FeatureRight from '../../../../assets/images/feature-right.jpg';

const MainFeature = () => {
  const media = [
    {
      icon: Pointer,
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
    {
      icon: Warehouse,
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
    {
      icon: Route,
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
    {
      icon: DeliveryTruck,
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
    {
      icon: Flight,
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
    {
      icon: Telemarketer,
      title: 'Global Logistics',
      description: 'FCL & LCL and Air Services',
    },
  ];

  return (
    <section className="bg-[#f5f7f9]">
      <div className="flex flex-col lg:flex-row">
        <div className="mt-[30px] flex w-full 2sm:mt-[50px] md:mt-[35px] lg:w-3/5">
          <div className="flex flex-wrap items-center justify-evenly">
            {media.map((item, index) => (
              <div
                key={index}
                className="mb-[30px] flex w-full items-center justify-center 2sm:mb-[50px] 2sm:w-[calc(50%-10px)] 2sm:pr-[30px] md:mb-[35px]"
              >
                <div className="pr-[20px]">
                  <img src={item.icon} alt="icon" height={71} width={71} />
                </div>
                <div>
                  <Link to="/">
                    <h4 className="pb-[10px] text-body font-bold uppercase text-[#2f2f30]">
                      {item.title}
                    </h4>
                  </Link>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img src={FeatureRight} alt="Feature right" className="w-full bg-white" />
        </div>
      </div>
    </section>
  );
};

export default MainFeature;
