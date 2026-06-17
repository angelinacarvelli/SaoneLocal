function Card({ title, description, btntext }) {
  return (
    <div className="bg-[#2B5148] text-[#F9F6EF] rounded-[20px] p-4 shadow-md w-full mb-3">
      <h2 className="font-title text-[14px] uppercase mb-2">{title}</h2>

      <p className="font-body text-[12px] leading-snug opacity-90 mb-3">{description}</p>

      <div className="grid grid-cols-3 gap-1.5 mb-3">
        <div className="aspect-square bg-white/10 rounded-lg"></div>
        <div className="aspect-square bg-white/10 rounded-lg"></div>
        <div className="aspect-square bg-white/10 rounded-lg"></div>
      </div>

      <button className="bg-[#A53F32] text-white px-4 py-1.5 rounded-full text-[11px] font-semibold">
        {btntext}
      </button>
    </div>
  );
}

export default Card;
