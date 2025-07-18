import { Link, useLocation } from 'react-router-dom';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Heart, BookOpen, MapPin, Plane, Gift, HelpCircle } from 'lucide-react';

const links = [
  { to: '/about', icon: <Heart />, label: 'About' },
  { to: '/details', icon: <MapPin />, label: 'Details' },
  { to: '/travel', icon: <Plane />, label: 'Travel' },
  { to: '/party', icon: <BookOpen />, label: 'Party' },
  { to: '/registry', icon: <Gift />, label: 'Registry' },
  { to: '/faq', icon: <HelpCircle />, label: 'FAQs' },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex flex-wrap justify-center gap-4 py-4 bg-white bg-opacity-80 shadow-md sticky top-0 z-50">
      {links.map(({ to, icon, label }) => (
        <Link key={to} to={to} className="flex flex-col items-center text-xs">
          <motion.div
            {...({
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.95 },
              className: `w-10 h-10 flex items-center justify-center rounded-full mb-1 ${pathname === to ? 'bg-primary text-white' : 'bg-[#e1ecdf]'}`,
            } as HTMLMotionProps<'div'>)}
          >
            {icon}
          </motion.div>
          <span className="text-sm">{label}</span>
        </Link>
      ))}
    </nav>
  );
}