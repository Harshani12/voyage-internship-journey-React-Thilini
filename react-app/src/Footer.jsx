function Footer() {
  return (
    <footer id="contact" className="p-4 bg-gray-900 text-white text-center">
      <p>© {new Date().getFullYear()} Thilini Harshani</p>
      <p>Connect with me on <a href="https://linkedin.com" className="underline">LinkedIn</a></p>
    </footer>
  );
}

export default Footer;
