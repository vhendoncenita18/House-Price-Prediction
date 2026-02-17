import { useEffect, useState } from "react";
import HouseCard from "../../components/HouseCard";

export default function HousePage() {

  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/houses")
      .then(res => res.json())
      .then(data => {
        setHouses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch houses:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Browse Houses</h1>

      {loading ? (
        <p className="text-gray-500">Loading houses...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map(house => (
            <HouseCard key={house._id} house={house} />
          ))}
        </div>
      )}

    </section>
  );
}
