export default function Card({ title, description, btnText }) {
  return (
    <div className="bg-[#2B5148] text-[#F9F6EF] rounded-2xl p-5 mb-4 shadow-md">
      <h2 className="font-bold text-sm uppercase mb-2">{title}</h2>
      <p className="text-xs opacity-90 mb-4">{description}</p>
      <button className="bg-[#A53F32] text-white px-4 py-1 rounded-full text-xs">
        {btnText}
      </button>
    </div>
  );
} 