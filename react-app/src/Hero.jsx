function Hero() {
  const isDay = new Date().getHours() < 18; // Conditional rendering

  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold">Hi, I'm Thilini 👋</h2>
      <p className="mt-2 text-gray-600">
        {isDay ? "Good Day! Let's build something amazing." : "Good Evening! Thanks for visiting."}
      </p>
    </section>
  );
}

export default Hero;
