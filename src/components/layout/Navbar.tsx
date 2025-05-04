'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedin } from 'react-icons/fa';

import { navItems, SOCIAL_LINKS } from '@/utils/constants';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-[#16191C]">
              Karime Villanueva
            </span>

            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
