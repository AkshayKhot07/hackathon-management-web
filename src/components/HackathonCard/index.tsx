import { HackathonEventType } from "@/constants/data";

interface HackathonCardTypes {
  item: HackathonEventType;
}

const HackathonCard = ({ item }: HackathonCardTypes) => {
  return (
    <div className="shadow-md rounded overflow-hidden">
      <div className="bg-secondary-2 text-white py-10 px-4 text-center">
        Thumbnail
      </div>

      <div className="flex flex-col gap-2 items-center justify-center py-3">
        <p className="text-primary-2 font-semibold tracking-widest">
          {item.type}
        </p>
        <div className="flex flex-col items-center">
          <p className="text-black font-semibold">{item.title}</p>
          <p className="text-secondary-3 text-base">{item.date}</p>
        </div>
        <button className="bg-primary-1 rounded-md text-white font-semibold p-2">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default HackathonCard;
