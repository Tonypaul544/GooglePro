const navItems = ['Features', 'Veo', 'Benefits', 'Pricing', 'FAQ', 'Contact'];

export default function Navbar({ isMenuOpen, onToggleMenu, onNavClick }) {
  return (
    <header className="site-header">
      <nav className="site-navbar container">
        <a href="#top" className="brand" onClick={onNavClick}>
          GOOGLE PRO ACCESS
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={onToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={onNavClick}>
              {item}
            </a>
          ))}
          <a href="#order" className="nav-cta" onClick={onNavClick}>
            GET ACCESS
          </a>
        </div>
      </nav>
    </header>
  );
}
