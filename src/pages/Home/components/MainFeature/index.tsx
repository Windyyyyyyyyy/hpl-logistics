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
        <img src={FeatureRight} alt="Feature right" className="bg-white" />
      </div>
    </section>
  );
};

export default MainFeature;
