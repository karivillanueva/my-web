type AboutGridPropTypes = {
  elements: string[];
};
const AboutGrid = ({ elements }: AboutGridPropTypes) => {
  return (
    <ul className="grid grid-cols-2 gap-2 text-gray-800">
      {elements.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </ul>
  );
};

export default AboutGrid;
