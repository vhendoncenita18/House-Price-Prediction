import { useEffect, useState } from 'react';
import houseImage from '../../assets/landingpage-house.png';
import SlideUp from '../../components/SlideUp';
import HouseCard from '../../components/HouseCard';
import LandingPageMansion from "../../assets/LandingPageMansion.jpg";
import { Link } from 'react-router-dom';
import BgImage from '../../assets/bg-landingpage-houses.jpg';
import ServiceCard from '../../components/ServiceCard';

function LandingPage() {
      useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => console.log("Backend says:", data))
      .catch(err => console.error(err));
  }, []);

    const houses = 
        [
            {
                id: 1,
                image: LandingPageMansion,
                location: "Cebu City",
                beds: 3,
                baths: 2,
                size: 120,
                price: 3500000, 
            },
            {
                id: 2,
                image: "/sample2.jpg",
                location: "Davao City",
                beds: 4,
                baths: 3,
                size: 180,
                price: 5200000,
            },
        ];
  return (
    <>
    <section className="bg-gray-200 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <SlideUp delay={120} duration={800} distance={28} className="transform">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            Predict House Prices with AI
                        </h1>

                        <p className="mt-4 text-gray-600 text-lg">
                            Get accurate house value predictions using machine learning.
                        </p>
                        
                        <div className="mt-6">
                            <Link to="/predict">
                                <button className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition">
                                    Learn More
                                </button>
                            </Link> 

                            <Link to="/login">
                                <button className="border border-blue-600 px-6 py-4 rounded-lg hover:bg-blue-50 transition ml-4 ">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </SlideUp>
                <SlideUp delay={200} duration={800} distance={28} className="transform">
                    <div>
                        <img
                            src={houseImage}
                            alt="Landing Page House"
                            className="w-[520px] drop-shadow-2xl object-cover hover:-translate-y-3 transition-transform duration-300"
                        />
                    </div>
                </SlideUp>
            </div>
        </div>
    </section>

    <section className="bg-gray-300 min-h-screen py-10">

        <SlideUp>
            <div className="max-w-7xl mx-auto px-6">
                <div className="items-center gap-6 mb-10 justify-center">
                    
                    <div className="">
                        <p className="text-black font-bold text-1xl text-center">Our Services</p>
                        <h1 className="text-3xl font-bold text-black text-center">WHAT WE OFFER</h1>
                        <p className="text-gray-700 text-center px-16">We deliver highly accurate and data-driven house price predictions powered by advanced AI algorithms that analyze market trends, location factors, and property features in real time—giving you smarter insights, better decisions, and a competitive edge in the real estate market.</p>
                    </div>
                        
                    <div className="grid md:grid-cols-3 gap-8 items-start mt-10">

                        <ServiceCard service={{ icon: "🤖", title: "AI-Powered Predictions", description: "Our system uses advanced machine learning algorithms to accurately predict house prices based on property features such as location, size, number of bedrooms, and amenities. This helps users make smarter buying and selling decisions with data-driven insights." }} />

                        <ServiceCard service={{ icon: "🏠", title: "Smart Property Management Dashboard", description: "Manage and monitor your properties in one centralized dashboard. Track listings, view price predictions, manage property history, and organize your real estate data efficiently with a clean and user-friendly interface." }} />

                        <ServiceCard service={{ icon: "📊", title: "Comprehensive Market Analysis", description: "Gain insights into real estate market trends with our comprehensive analysis tools. Access historical price data, neighborhood statistics, and market forecasts to make informed decisions whether you're buying, selling, or investing in properties." }} />
                    </div>
                    

                </div>
            </div>
        </SlideUp>
    </section>

    <section className="bg-white min-h-screen pt-16 relative overflow-hidden">
        <img src={BgImage} alt="Login Background" 
                className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
            <SlideUp delay={120} duration={800} distance={28} className="transform">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="justify-between flex items-start">
                        <h3 className="text-4xl font-bold text-white shadow-md">
                            Find Your Perfect Home</h3>
                        <Link to="/houses" className="text-white font-semibold hover:text-blue-500 hover:underline self-end">
                            View All Houses
                        </Link>
                    </div>
                    
                    <div className="mt-10 grid md:grid-cols-3 gap-8 items-start">
                        {houses.map(house => (
                            <HouseCard key={house.id} house={house} />
                        ))}
                    </div>
                </div>
            </SlideUp>
        </div>
    </section>

    
    </>
  )
}

export default LandingPage
