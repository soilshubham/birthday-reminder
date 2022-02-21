import BirthdayCard from "../components/BirthdayCard";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import Link from "next/link";

const UpcomingBirthdays = (props) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-xl font-medium">Upcoming</h2>
        <Link href="/dashboard/birthdays">
          <div
            className="font-normal flex items-center justify-center gap-2
                        md:hover:text-primary transition-all cursor-pointer"
          >
            <span className="text-sm">View All</span>
            <RightArrowIcon />
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 mb-32 md:mb-16 md:grid md:grid-cols-3">
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
      </div>
    </>
  );
};

export default UpcomingBirthdays;
