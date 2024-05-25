interface ExperienceCardProps {
  jobTitle: string;
  employmentType: string;
  duration: string;
  company: string;
  desc: string[];
  image: string;
  companyLink?: string;
}

const ExperienceCard = ({
  jobTitle,
  employmentType,
  duration,
  company,
  desc,
  image,
  companyLink,
}: ExperienceCardProps) => {
  return (
    <div
      className={`rounded-lg shadow-md bg-gray-50 dark:bg-gray-800  relative overflow-hidden`}
    >
      <img
        src={image}
        className="absolute opacity-20 -bottom-16 -right-8 overflow-hidden"
        width={400}
        alt="company logo"
      ></img>
      <div className="backdrop-blur w-full h-full p-4 rounded-lg flex flex-col gap-1">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <h3 className="text-lg font-semibold flex-shrink-0">{jobTitle}</h3>
          <span className="text-gray-500 dark:text-bunker-400 text-xs">
            {employmentType} | {duration}
          </span>
        </div>
        <div className="text-gray-700 dark:text-bunker-100 self-center sm:self-start">
          {company}
        </div>
        <ul className="mt-2 space-y-1">
          {desc.map((li, i) => (
            <li key={i} className="text-gray-700 dark:text-bunker-200 text-xs">
              {li}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
