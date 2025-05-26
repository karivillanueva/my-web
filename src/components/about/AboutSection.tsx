type AboutSectionProps = {
  title: string;
  children: React.ReactNode;
};

const AboutSection = ({ title, children }: AboutSectionProps) => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold mb-4 text-gray-400">{title}</h3>
      {children}
    </section>
  );
};

export default AboutSection;
