import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HTMLMotionProps } from 'framer-motion';
import { Heart, BookOpen, MapPin, Plane, Gift, HelpCircle } from 'lucide-react';

const links = [
  { to: '/about', icon: <Heart />, label: 'About Us' },
  { to: '/party', icon: <BookOpen />, label: 'Wedding Party' },
  { to: '/details', icon: <MapPin />, label: 'Details' },
  { to: '/travel', icon: <Plane />, label: 'Travel' },
  { to: '/registry', icon: <Gift />, label: 'Registry' },
  { to: '/faq', icon: <HelpCircle />, label: 'FAQs' },
];

const Navbar = () => (
  <nav className="flex flex-wrap justify-center gap-6 py-4 bg-white bg-opacity-80 shadow-md sticky top-0 z-50">
    {links.map((link, i) => (
      <Link key={i} to={link.to} className="flex flex-col items-center text-sm">
        <motion.div
          {...({
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.95 },
            className: "bg-[#e1ecdf] w-14 h-14 rounded-full flex items-center justify-center mb-1 shadow-sm"
          } as HTMLMotionProps<'div'>)}
        >
          {link.icon}
        </motion.div>
        <span className="hover:text-[#6a8a4a] transition-colors">{link.label}</span>
      </Link>
    ))}
  </nav>
);
export default Navbar;