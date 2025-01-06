import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const services = [
  { name: 'Global Logistics', path: '' },
  { name: 'Transportation Servicess', path: 'transport-services' },
  { name: 'Trucking/Packing Of Cargoes', path: 'truck-pack' },
  { name: 'Warehouse/Storage Solutions', path: 'warehourse-storage' }
];

const ServiceLayout = () => {
  const location = useLocation();
  const selectedService = location.pathname.split('/').pop() === 'services' ? 'global-logistics' : location.pathname.split('/').pop();
  console.log(selectedService);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-32 md:h-64 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white">{services.find(service => service.path === selectedService)?.name}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto sm:px-12 lg:px-32 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.path}`}
                className={`p-4 border-b hover:bg-custom-blue hover:text-white  flex items-center justify-between cursor-pointer ${selectedService === service.path ? 'bg-custom-blue text-white' : ''}`}
              >
                <span>{service.name}</span>
                <ChevronRight size={16} />
              </Link>
            ))}
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <div className="mb-8">
              <img
                src="/src/assets/images/services_air_plane.jpg"
                alt="Airplane wing during sunset"
                className="w-full h-24 md:h-32 lg:h-64 object-cover"
              />
            </div>
            <Outlet />
            <div className="mt-8 flex flex-col md:flex-row items-start gap-4">
              {/* Image Section */}
              <div className="w-full md:w-[280px] h-[200px] rounded-lg overflow-hidden">
                <img
                  src="/src/assets/images/commitment.jpg"
                  alt="Team meeting"
                  className="w-full h-[240px] object-cover rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div className="w-full flex flex-col">
                <h2 className="text-xl font-bold mb-4">OUR COMMITMENT</h2>
                <p className="text-justify leading-relaxed text-sm">
                  We are committed to providing excellent and unparalleled service
                  to ensure the satisfaction of all customers. No matter where your
                  quote is located or your cargo, our global reach, local flexibility,
                  and strategic networks empower us to deliver innovative and
                  cost-effective logistic solutions.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center p-6 bg-gray-50 rounded-lg space-y-4 md:space-y-0 md:space-x-4">
          <p className="text-lg mb-4 md:mb-0 text-center md:text-left">Have you question or need any help for work consultant</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;