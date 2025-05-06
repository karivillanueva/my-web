type AboutListPropTypes = {
  elements: {
    title: string;
    subtitle: string;
    text?: string;
  }[];
};

const AboutList = ({ elements }: AboutListPropTypes) => {
  return (
    <ul className="space-y-2 text-gray-700">
      {elements.map((element) => (
        <li key={element.title}>
          <span className="font-bold">{element.title}</span> —{' '}
          {element.subtitle}
          <br />
          {element.text}
        </li>
      ))}
    </ul>
  );
};

export default AboutList;
