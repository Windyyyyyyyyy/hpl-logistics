import React, { useEffect, useState } from 'react';
import { saveEmail } from '../../thirdparty/firebase/firebase';

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
    const isSaved = await saveEmail(email);
    if (isSaved) {
      alert('Email subscribed successfully!');
      setEmail('');
      localStorage.setItem('isSubscribed', 'true');
      setIsSubscribed(true);
    } else {
      alert('Failed to subscribe email');
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/api/placeholder/1920/400')",
            opacity: 0.3
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <div className="flex items-center text-gray-300">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">›</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Us Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative aspect-w-16 aspect-h-9 md:aspect-none md:h-full">
            <img
              src="src/assets/images/air_plane.jpg"
              alt="Airplane"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">ABOUT US</h2>
            <div className="space-y-4 text-gray-600">
              <p>Shenzhen Loyo International Logistics Co., Ltd is a professional integrated international logistics company in China, with its head office located in Shenzhen—the leading port in China.</p>
              <p>Loyo Logistics provide freight transportation and logistics, outsource solutions, and information services to continuously increased amount of customers. To meet our customers's freight needs, we wholeheartedly integrate all kinds of transportation, including contract motor carriers, railroads, air freight carriers, express, ocean carriers, etc.</p>
              <p>Your satisfaction is our eternal purpose of service and also the commitment of the endeavor and responsibility of Loyo Logistics.</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">OUR GLOBAL MISSION</h3>
            <p className="text-gray-600">To be a leading logistics company in China region by providing efficient and quality one-stop logistics solutions with excellent customer satisfaction. Loyo Logistics would like to be your reliable assistant and faithful friend in Logistics, and also wins the trust and cooperation.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">WE ARE GROWING FASTER</h3>
            <p className="text-gray-600">Loyo Logistics is healthy, broad and profound, and has been one of the most competitive international freight forwarders. The Company will keep committing itself to leading the scientific development of the industry to approach the changing challenges in the global logistics field.</p>
          </div>
        </div>

        {/* Technology Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-64 md:h-full">
            <img
              src="src/assets/images/container.jpg"
              alt="Container Port"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">TECHNOLOGY AND ENGINEERING</h3>
            <div className="space-y-4 text-gray-600">
              <p>Credibly orchestrate virtual resources and dynamic expertise. Interactively maintain leveraged users.</p>
              <p>Competently deliver e-business users via economically sound supply chains. Assertively reconceptualize error-free e-markets whereas focused schemas. Proofluiescently embrace process-centric niche markets before orthogonal platforms.</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-blue-600 text-white p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to our corporate newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-lg text-gray-900 flex-grow w-full sm:max-w-md"
                required
              />
              <button type="submit" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
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