import SlideUp from "./SlideUp";

export default function ServiceCard({ service, delay = 120 }) {
  return (
    <SlideUp delay={delay} duration={800} distance={28} className="transform">
      <div className="bg-gray-100 rounded-2xl shadow-lg p-6 h-full hover:shadow-xl transition-all duration-200 hover:-translate-y-2">
        <div className="text-3xl flex justify-center">{service.icon}</div>
        <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">{service.title}</h3>
        <p className="mt-3 text-gray-600 leading-relaxed text-center">{service.description}</p>
      </div>
    </SlideUp>
  );
}