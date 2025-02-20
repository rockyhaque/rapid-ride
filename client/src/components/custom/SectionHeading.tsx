interface SectionHeadingProps {
    heading: string;
  }
  
  const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => {
    return (
      <div className="mx-auto text-center md:w-4/12 my-8">
        <h3 className="text-3xl font-semibold py-4">{heading}</h3>
        <div className="flex justify-center items-center">
          <h1 className="w-28 h-1 bg-gradient-to-l from-slate-700 via-red-100 to-teal-200 rounded-full"></h1>
        </div>
      </div>
    );
  };
  
  export default SectionHeading;
  