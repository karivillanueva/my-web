import Text from '@/components/ui/Text';
import AboutSection from '@/components/about/AboutSection';
import AboutList from '@/components/about/AboutList';
import AboutGrid from '@/components/about/AboutGrid';
import AboutDotList from '@/components/about/AboutDotList';

import {
  EXPERIENCE,
  EDUCATION,
  TECH_STACK,
  ABOUT_ME_DETAILS,
} from '@/utils/constants';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h2 className="text-xl text-gray-700 font-semibold">
          Software Engineer · Project Manager
        </h2>
      </header>

      <AboutSection title="About Me">
        <Text text="I’m a Software Engineer with 4 years of experience developing applications and 3 years of experience in Project Management. I specialize in building scalable and performant apps using modern tools like React, React Native, Next.js, and Tailwind. With a background in mechanical engineering and software development, I bring analytical thinking, attention to detail, and a strong drive to deliver high-quality digital solutions. I thrive in fast-paced environments, constantly learning, iterating, and leveraging AI tools to optimize the development process." />
      </AboutSection>

      <AboutSection title="Skills">
        <AboutGrid elements={TECH_STACK} />
      </AboutSection>

      <AboutSection title="Experience & Education">
        <AboutList elements={EXPERIENCE} />
      </AboutSection>

      <AboutSection title="Education">
        <AboutList elements={EDUCATION} />
      </AboutSection>

      <AboutSection title="More About Me">
        <AboutDotList elements={ABOUT_ME_DETAILS} />
      </AboutSection>
    </div>
  );
};

export default About;
