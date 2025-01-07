import { FaChevronRight } from 'react-icons/fa';

import { Link, Outlet, useLocation } from 'react-router';

const services = [
  { name: 'Global Logistics', path: '' },
  { name: 'Transportation Servicess', path: 'transport-services' },
  { name: 'Trucking/Packing Of Cargoes', path: 'truck-pack' },
  { name: 'Warehouse/Storage Solutions', path: 'warehourse-storage' },
];

const ServiceLayout = () => {
  const location = useLocation();
  const selectedService =
    location.pathname.split('/').pop() === 'services'
      ? 'global-logistics'
      : location.pathname.split('/').pop();
  console.log(selectedService);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-32 bg-gradient-to-r from-blue-900 to-blue-700 md:h-64">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto flex h-full items-center px-4">
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            {services.find((service) => service.path === selectedService)?.name}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 sm:px-12 lg:px-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Sidebar */}
          <div className="md:col-span-1">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.path}`}
                className={`flex cursor-pointer items-center justify-between border-b p-4 hover:bg-custom-blue hover:text-white ${selectedService === service.path ? 'bg-custom-blue text-white' : ''}`}
              >
                <span>{service.name}</span>
                <FaChevronRight size={16} />
              </Link>
            ))}
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <div className="mb-8">
              <img
                src="/src/assets/images/services_air_plane.jpg"
                alt="Airplane wing during sunset"
                className="h-24 w-full object-cover md:h-32 lg:h-64"
              />
            </div>
            <Outlet />
            <div className="mt-8 flex flex-col items-start gap-4 md:flex-row">
              {/* Image Section */}
              <div className="h-[200px] w-full overflow-hidden rounded-lg md:w-[280px]">
                <img
                  src="/src/assets/images/commitment.jpg"
                  alt="Team meeting"
                  className="h-[240px] w-full rounded-lg object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex w-full flex-col">
                <h2 className="mb-4 text-xl font-bold">OUR COMMITMENT</h2>
                <p className="text-justify text-sm leading-relaxed">
                  We are committed to providing excellent and unparalleled service to ensure the
                  satisfaction of all customers. No matter where your quote is located or your
                  cargo, our global reach, local flexibility, and strategic networks empower us to
                  deliver innovative and cost-effective logistic solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-50 p-6 md:flex-row md:space-x-4 md:space-y-0">
          <p className="mb-4 text-center text-lg md:mb-0 md:text-left">
            Have you question or need any help for work consultant
          </p>
          <button className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
