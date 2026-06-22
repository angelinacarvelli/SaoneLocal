export default function Card({ title, description, btnText, children }) {
  return (
    <div className="bg-[#2B5148] text-[#F9F6EF] rounded-3xl p-6 mb-4 shadow-lg w-full max-w-md mx-auto">
      {/* Titre en majuscules*/}
      <h2 className="font-bold text-lg uppercase tracking-wider mb-3">
        {title}
      </h2>
      
      {/* Description*/}
      <p className="text-sm opacity-90 mb-5 leading-relaxed font-sans">
        {description}
      </p>

      {/* Images = children */}
      {children && <div className="mb-5">{children}</div>}

      {}
      {btnText && (
        <button className="bg-[#A53F32] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-[#8e362b] transition-colors">
          {btnText}
        </button> 
      )}
    </div>
  );
}