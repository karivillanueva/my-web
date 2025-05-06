type AboutDotListPropTypes = {
  elements: string[];
};

const AboutDotList = ({ elements }: AboutDotListPropTypes) => {
  return (
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      {elements.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </ul>
  );
};

export default AboutDotList;
