import { Link } from 'react-router-dom';

export default function Card({ title, description, btnText, children, link }) {
  return (
    <div className="bg-[#2B5148] text-[#F9F6EF] rounded-3xl p-6 mb-4 shadow-lg w-full max-w-md mx-auto">
      <h2 className="font-bold text-lg uppercase tracking-wider mb-3">
        {title}
      </h2>
      
      <p className="text-sm opacity-90 mb-5 leading-relaxed font-sans">
        {description}
      </p>

      {children && <div className="mb-5">{children}</div>}

      {}
      {btnText && link && (
        <Link to={link}>
          <button className="bg-[#A53F32] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-[#8e362b] transition-colors">
            {btnText}
          </button>
        </Link>
      )}
    </div>
  );
}