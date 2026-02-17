import HouseCard from "../../components/HouseCard";
import LandingPageMansion from "../../assets/LandingPageMansion.jpg";

export default function HousePage() {
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
        <section className="pt-24 px-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Browse Houses</h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {houses.map(house => (
                <HouseCard key={house.id} house={house} />
                ))}
            </div>
        </section>
    );
}