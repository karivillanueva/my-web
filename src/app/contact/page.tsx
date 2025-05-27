import Image from 'next/image';

import ContactForm from '@/components/contact/ContactForm';
import Title from '@/components/ui/Title';

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-8 flex flex-col-reverse md:grid md:grid-cols-2 md:gap-8 items-center">
      <div className="mb-8 mt-6 md:mb-0 md:mt-0">
        <Title title="Contact Me" />

        <p className="text-gray-600 mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <ContactForm />
      </div>
      <div className="w-4/5 mx-auto">
        <Image
          width={400}
          height={100}
          src={'/images/Kari2.jpeg'}
          alt="image-me"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Contact;
