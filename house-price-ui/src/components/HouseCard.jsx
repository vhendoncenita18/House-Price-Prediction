import SlideUp  from "./SlideUp";

export default function HouseCard({ house }) {
    return (
        <SlideUp delay={120} duration={800} distance={28} className="transform">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden cursor-pointer transform translate-x-0 hover:-translate-y-3 hover:scale-[1.02]">
                <img src={house.image} alt={house.title} className="h-48 w-full object-cover" />

                <div className="p-4">
                    <h2 className="font-semibold text-xl">{house.title}</h2>
                    <p className="text-gray-600">{house.location}</p>

                    <div className="mt-2 text-sm text-gray-600">
                        🛏 {house.bedrooms} beds • 🛁 {house.bathrooms} bath • 📐 {house.area} sqm
                    </div>

                    <div className="mt-3 text-blue-600 font-bold text-lg">
                        ₱ {house.price?.toLocaleString()}
                    </div>

                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Use as Sample
                    </button>
                </div>
            </div>
        </SlideUp>
    );
}