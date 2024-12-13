import styles from "./card.module.css";

interface CardsProps {
  title: string;
  paragraph: string;
  buttonText: string;
  icon: string;
  buttonRedirectPath: string;
}

const Card: React.FC<CardsProps> = ({
  title,
  paragraph,
  buttonText,
  icon,
  buttonRedirectPath,
}) => {
  // Split the paragraph into lines
  const lines = paragraph.split("\n");

  return (
    // Cards Container
    <div className="relative flex flex-col justify-center items-start bg-custom-blue w-80 h-64 rounded-md p-4 space-y-8 hover:-translate-y-4 hover:shadow-xl hover:shadow-custom-blue ease-in-out duration-500 transition-all">
      {/* Card Title */}
      <p className="text-white font-bold font-serif text-md">{title}</p>
      {/* Card Text */}
      <div className="text-white text-sm font-sans w-full">
        {lines.map((line, index) => {
          const [day, time] = line.split(": ");
          return (
            <div key={index} className="flex justify-between">
              <span>{day}</span>
              <span>{time}</span>
            </div>
          );
        })}
      </div>
      {/*Card Link Container*/}
      <div
        className={`flex flex-row justify-between items-center w-28 text-white ${styles["tab"]}`}
      >
        {/* Card Redirect Link */}
        <a
          href={buttonRedirectPath}
          className="text-sm font-bold font-serif scroll-smooth"
        >
          {buttonText}
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="absolute bottom-2 right-2 size-24 text-gray-400 opacity-50"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
    </div>
  );
};

export default Card;
