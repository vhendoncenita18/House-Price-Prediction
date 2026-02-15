import houseImage from '../assets/landingpage-house.png';

function LandingPage() {
  return (
    <section className="bg-gray-200 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Predict House Prices with AI
                    </h1>

                    <p className="mt-4 text-gray-600 text-lg">
                        Get accurate house value predictions using machine learning.
                    </p>
                    
                    <div className="mt-6">
                        <button className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition">
                            Get Started
                        </button>

                        <button className="border border-blue-600 px-6 py-4 rounded-lg hover:bg-blue-50 transition ml-4 ">
                            Learn More
                        </button>
                    </div>
                </div>

                <div>
                    <img src={houseImage} alt="Landing Page House" className="w-[520px] drop-shadow-2xl hover:shadow-3x1 object-cover" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default LandingPage
