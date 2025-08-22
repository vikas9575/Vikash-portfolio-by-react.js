import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X,Menu } from "lucide-react";

const navItem = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold flex items-center"
        >
          <span className="relative  z-10">Vikash Mewada
            <span className="text-glow text-primary text-foreground">Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItem.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-white hover:bg-blue-700 px-2 py-1 rounded transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>



        {/* Mobile Nav */}

        <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "close Manu":"open menu"}> {isMenuOpen ? <X size={24} /> : <Menu size={24}/>}{""} </button>
        <div 
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-45 flex flex-col items-center justify-end transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl mt-auto mb-8">
            {navItem.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-white hover:bg-amber-700 px-4 py-2 rounded transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)} // close menu on click
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
