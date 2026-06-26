import { Link } from 'react-router-dom';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <nav>
      {routes
        .filter(route => route.showInNav)
        .map((route) => (
          <Link key={route.path} to={route.path} className="ton-style-css">
            {route.label}
          </Link>
        ))}
    </nav>
  );
};