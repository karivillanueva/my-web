const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
