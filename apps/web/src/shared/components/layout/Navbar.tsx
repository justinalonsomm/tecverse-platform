'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  {
    label: 'Inicio',
    href: '#home',
  },

  {
    label: 'Proyectos',
    href: '#projects',
  },

  {
    label: 'Galería',
    href: '#gallery',
  },

  {
    label: 'Equipo',
    href: '#team',
  },

  {
    label: 'Nosotros',
    href: '#about',
  },

  {
    label: 'Contacto',
    href: '#contact',
  },
];

export function Navbar() {

  const [active, setActive] = useState('#home');

  useEffect(() => {

    const handleScroll = () => {

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      const scrollPosition = window.scrollY + 300;
      
      sections.forEach((section, index) => {

        if (!section) return;

        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActive(navItems[index].href);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {

    e.preventDefault();

    const section = document.querySelector(href);

    if (!section) return;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setActive(href);
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        border-white/5
        bg-[#020617]/70
        backdrop-blur-2xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-5
        "
      >

        {/* logo */}
        <Link
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-linear-to-br
              from-blue-500
              to-purple-500
              text-sm
              font-black
              text-white
            "
          >
            T
          </div>

          <div
            className="
              text-xl
              font-black
              tracking-tight
              text-white
            "
          >
            TEC.Innovation
          </div>
        </Link>

        {/* nav */}
        <nav
          className="
            hidden
            items-center
            gap-3

            md:flex
          "
        >
          {navItems.map((item) => {

            const isActive = active === item.href;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) =>
                  handleClick(e, item.href)
                }
                className={`
                  rounded-2xl
                  px-5
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        border
                        border-blue-500/30
                        bg-blue-500/10
                        text-blue-300
                      `
                      : `
                        text-white/55
                        hover:text-white
                      `
                  }
                `}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* button */}
        <a
          href="#contact"
          onClick={(e) =>
            handleClick(e, '#contact')
          }
          className="
            rounded-2xl
            bg-linear-to-r
            from-blue-500
            to-purple-500
            px-7
            py-3
            text-sm
            font-semibold
            text-white
            shadow-[0_0_40px_rgba(99,102,241,0.35)]
            transition-transform
            duration-300

            hover:scale-105
          "
        >
          Conectar →
        </a>
      </div>
    </header>
  );
}