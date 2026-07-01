import { Link } from 'react-router-dom';

export default function Card({ title, description, btnText, children, link }) {
  return (
    <div className="bg-saone-green text-saone-cream rounded-3xl p-6 mb-4 shadow-lg w-[90%]">
      <h2 className="font-bold text-lg uppercase tracking-wider mb-3 font-caveat">
        {title}
      </h2>
      
      <p className="text-sm opacity-90 mb-5 leading-relaxed font-montserrat">
        {description}
      </p>

      {children && <div className="mb-5">{children}</div>}

      {}
      {btnText && link && (
        <Link to={link}>
          <button className="bg-saone-terracotta text-saone-cream px-6 py-2 rounded-full text-sm font-montserrat shadow-md hover:bg-[#8e362b] transition-colors ml-[220px]">
            {btnText}
          </button>
        </Link>
      )}
    </div>
  );
}