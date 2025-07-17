import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HTMLMotionProps } from 'framer-motion';
import { Heart, BookOpen, MapPin, Plane, Gift, HelpCircle } from 'lucide-react';

const links = [
  { to: '/about', icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'About Us' },
  { to: '/party', icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'Wedding Party' },
  { to: '/details', icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'Details' },
  { to: '/travel', icon: <Plane className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'Travel' },
  { to: '/registry', icon: <Gift className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'Registry' },
  { to: '/faq', icon: <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'FAQs' },
];

const Navbar = () => (
  <nav className="w-full overflow-x-auto bg-white bg-opacity-80 shadow-md sticky top-0 z-50">
    <div className="flex flex-nowrap justify-start sm:justify-center gap-4 sm:gap-6 px-4 py-3 min-w-max">
      {links.map((link, i) => (
        <Link
          key={i}
          to={link.to}
          className="flex flex-col items-center text-xs sm:text-sm flex-shrink-0"
        >
          <motion.div
            {...({
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.95 },
              className: "bg-[#e1ecdf] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-1 shadow-sm"
            } as HTMLMotionProps<'div'>)}
          >
            {link.icon}
          </motion.div>
          <span className="hover:text-[#6a8a4a] transition-colors text-center">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  </nav>
);

export default Navbar;
