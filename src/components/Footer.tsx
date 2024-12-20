import { FC } from "react";

const Footer: FC = () => {
  const getFormattedDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    const daySuffix = (day: number) => {
      if (day >= 11 && day <= 13) return "th";
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    const day = date.getDate();
    return `${date.toLocaleDateString('en-US', options)}${daySuffix(day)}`;
  };

  return (
    <div className="bg-blue-500 text-white p-4 text-center mt-auto">
      <div> {getFormattedDate()} &copy; Copyright | All Rights Reserved for Muhammad Muhammad</div>
    </div>
  );
};

export default Footer;
