const Header = () => {
  const headers = ["Home", "Pricing", "Blog", "FAQs", "About Us"];

  return (
    <header className="flex py-3">
      <div className="font-bold text-primary text-xl">witt.</div>
      <ul className="flex items-center justify-center sm:gap-6 gap-4 w-full">
        {headers.map((header, index) => (
          <li key={index} className="text-sm">
            {header}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
