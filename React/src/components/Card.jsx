export default function Card({ title, description, btnText, images = [] }) {
  return (
    <div className="bg-[#2B5148] text-[#F9F6EF] rounded-[20px] p-5 shadow-lg w-full mb-4">
      <h2 className="font-bold text-sm uppercase mb-2 tracking-wide">{title}</h2>
      <p className="text-xs leading-snug opacity-90 mb-4">{description}</p>
      
      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mb-4">
          {images.map((img, i) => (
            <img key={i} src={img} className="aspect-square rounded-lg object-cover bg-white/10" alt="prod" />
          ))}
        </div>
      )}
      
      <button className="bg-[#A53F32] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
        {btnText}
      </button>
    </div>
  );
}