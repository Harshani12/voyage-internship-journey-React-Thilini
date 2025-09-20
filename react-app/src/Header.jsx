function Header() {
  return (
    <header className="p-4 bg-gray-900 text-white flex justify-between">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <nav>
        <a href="#about" className="px-2">About</a>
        <a href="#projects" className="px-2">Projects</a>
        <a href="#contact" className="px-2">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
