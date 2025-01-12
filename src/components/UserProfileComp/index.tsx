import { HackathonEventType } from "@/constants/data";

const UserProfileComp = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5 items-center">
        <div className="w-[140px] h-[140px] border-[10px] border-primary bg-secondary-2 text-white text-center flex items-center justify-center rounded-full">
          Thumbnail
        </div>
        <div className="flex-[0.8] w-full">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-secondary-1 font-semibold">
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Joe Doe"
                className="border border-secondary-3 px-2 py-1 rounded-md"
                value={"Akshay Khot"}
                readOnly
                disabled={true}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-secondary-1 font-semibold">
                Email:
              </label>
              <input
                type="text"
                name="email"
                placeholder="joe@gmail.com"
                className="border border-secondary-3 px-2 py-1 rounded-md"
                value={"akshay@test.com"}
                readOnly
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-black text-2xl font-semibold mb-3">
          Participated Events
        </p>
        <div className="flex flex-col gap-5">
        {testData?.map((item) => (
          <div
            key={item.slug}
            className="border border-secondary-5 p-1 flex gap-2 items-center rounded-md shadow"
          >
            <div className="w-24 h-24 bg-secondary-2 text-white font-semibold rounded-full flex flex-col items-center justify-center">
              Thumbnail
            </div>
            <div>
              <p className="text-lg text-secondary-1 font-semibold">{item.title}</p>
              <div className="flex gap-2 items-center">
                <p className="text-primary-2 font-semibold tracking-widest">
                  {item.type}
                </p>
                <p className="text-secondary-2 font-bold">|</p>
                <p className="text-secondary-3 text-base">{item.date}</p>
              </div>
              <p className="text-black">
                {item.desp}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileComp;

const testData: HackathonEventType[] = [
  // Hackathons
  {
    title: "Unicorp Hackathon Contest",
    date: "Jan 12, 2025",
    desp: "A coding competition where participants can solve real-world problems using technology. Participants will have 24 hours to build innovative solutions.",
    content:
      "This event is designed for developers, designers, and entrepreneurs to team up and showcase their skills. The winning team will get a chance to work with Unicorp Private Limited on exciting new projects.",
    type: "Hackathons",
    company: "Unicorp Private Limited",
    slug: "unicorp-hackathon-contest",
  },

  {
    title: "Tech Titans Hackathon 2025",
    date: "Jan 20, 2025",
    desp: "A global hackathon inviting developers and innovators from around the world to compete in creating innovative solutions for the tech industry.",
    content:
      "Join this exciting competition and demonstrate your technical prowess by developing a solution in one of the challenge categories such as AI, cloud computing, and IoT. Prizes include cash rewards and internships with top tech companies.",
    type: "Hackathons",
    company: "Tech Titans Inc.",
    slug: "tech-titans-hackathon-2025",
  },
];
