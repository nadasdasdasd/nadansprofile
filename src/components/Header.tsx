import type React from "react";

type TSection = 'about' | 'work' | 'contact' | 'education'
const Header: React.FC<any> = () => {
  const sections: Array<TSection> = ['about', 'work', 'contact', 'education'];

  const changeUrlPath = (section: TSection) => {
    window.history.replaceState(null, '', `#${section}`);
  }
  const scrollIntoSection = (section: TSection) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      changeUrlPath(section)
    }
  }
  return (
    <>
      <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg">
        <nav>

          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollIntoSection(section)}
              style={{ marginRight: 10 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </header>
    </>
  )
}

export default Header;
