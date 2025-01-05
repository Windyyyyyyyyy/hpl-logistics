import React, { useEffect, useState } from 'react';
// import { saveEmail } from '../../thirdparty/firebase/firebase';

const About = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const subscribed = localStorage.getItem('isSubscribed');
    if (subscribed) {
      setIsSubscribed(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubscribed) {
      alert('You have already subscribed.');
      return;
    }
    //   const isSaved = await saveEmail(email);
    //   if (isSaved) {
    //     alert('Email subscribed successfully!');
    //     setEmail('');
    //     localStorage.setItem('isSubscribed', 'true');
    //     setIsSubscribed(true);
    //   } else {
    //     alert('Failed to subscribe email');
    //   }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-900 md:h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/api/placeholder/1920/400')",
            opacity: 0.3,
          }}
        />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">About Us</h1>
          <div className="flex items-center text-gray-300">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span className="mx-2">›</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* About Us Section */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="aspect-w-16 aspect-h-9 md:aspect-none relative md:h-full">
            <img
              src="src/assets/images/air_plane.jpg"
              alt="Airplane"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold">ABOUT US</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Shenzhen Loyo International Logistics Co., Ltd is a professional integrated
                international logistics company in China, with its head office located in
                Shenzhen—the leading port in China.
              </p>
              <p>
                Loyo Logistics provide freight transportation and logistics, outsource solutions,
                and information services to continuously increased amount of customers. To meet our
                customers's freight needs, we wholeheartedly integrate all kinds of transportation,
                including contract motor carriers, railroads, air freight carriers, express, ocean
                carriers, etc.
              </p>
              <p>
                Your satisfaction is our eternal purpose of service and also the commitment of the
                endeavor and responsibility of Loyo Logistics.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-8">
            <h3 className="mb-4 text-2xl font-bold">OUR GLOBAL MISSION</h3>
            <p className="text-gray-600">
              To be a leading logistics company in China region by providing efficient and quality
              one-stop logistics solutions with excellent customer satisfaction. Loyo Logistics
              would like to be your reliable assistant and faithful friend in Logistics, and also
              wins the trust and cooperation.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-8">
            <h3 className="mb-4 text-2xl font-bold">WE ARE GROWING FASTER</h3>
            <p className="text-gray-600">
              Loyo Logistics is healthy, broad and profound, and has been one of the most
              competitive international freight forwarders. The Company will keep committing itself
              to leading the scientific development of the industry to approach the changing
              challenges in the global logistics field.
            </p>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="relative h-64 md:h-full">
            <img
              src="src/assets/images/container.jpg"
              alt="Container Port"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold">TECHNOLOGY AND ENGINEERING</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Credibly orchestrate virtual resources and dynamic expertise. Interactively maintain
                leveraged users.
              </p>
              <p>
                Competently deliver e-business users via economically sound supply chains.
                Assertively reconceptualize error-free e-markets whereas focused schemas.
                Proofluiescently embrace process-centric niche markets before orthogonal platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="rounded-lg bg-blue-600 p-8 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-4 text-2xl font-bold">Subscribe to our corporate newsletter</h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full flex-grow rounded-lg px-4 py-2 text-gray-900 sm:max-w-md"
                required
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-white px-6 py-2 font-semibold text-blue-600 transition-colors hover:bg-gray-100 sm:w-auto"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
