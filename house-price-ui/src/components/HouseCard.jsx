import SlideUp  from "./SlideUp";

export default function HouseCard({ house }) {
    return (
        <SlideUp delay={120} duration={800} distance={28} className="transform">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 overflow-hidden cursor-pointer">
                <img src={house.image} className="h-48 w-full object-cover" />

                <div className="p-4">
                    <h2 className="font-semibold text-lg">{house.location}</h2>

                    <p className="text-gray-500 text-sm">
                    {house.beds} Beds • {house.baths} Baths • {house.size} sqm
                    </p>

                    <p className="text-blue-600 font-bold mt-2">
                    ₱ {house.price.toLocaleString()}
                    </p>

                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Use as Sample
                    </button>
                </div>
            </div>
        </SlideUp>
    );
}