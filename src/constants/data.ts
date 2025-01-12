export type HackathonEventType = {
    title: string;
    date: string;
    desp: string;
    content: string;
    type: string;
    company: string;
    slug: string;
  };


  export const hackathonsDummyData: HackathonEventType[] = [
    // Hackathons
    {
        title: "Unicorp Hackathon Contest",
        date: "Jan 12, 2025",
        desp: "A coding competition where participants can solve real-world problems using technology. Participants will have 24 hours to build innovative solutions.",
        content: "This event is designed for developers, designers, and entrepreneurs to team up and showcase their skills. The winning team will get a chance to work with Unicorp Private Limited on exciting new projects.",
        type: "Hackathons",
        company: "Unicorp Private Limited",
        slug: "unicorp-hackathon-contest",
    },

    {
        title: "Tech Titans Hackathon 2025",
        date: "Jan 20, 2025",
        desp: "A global hackathon inviting developers and innovators from around the world to compete in creating innovative solutions for the tech industry.",
        content: "Join this exciting competition and demonstrate your technical prowess by developing a solution in one of the challenge categories such as AI, cloud computing, and IoT. Prizes include cash rewards and internships with top tech companies.",
        type: "Hackathons",
        company: "Tech Titans Inc.",
        slug: "tech-titans-hackathon-2025",
    },

    {
        title: "Innovators Hack 2025",
        date: "Feb 5, 2025",
        desp: "An innovation-focused hackathon where participants build software solutions that address social and environmental issues.",
        content: "This hackathon is aimed at developers, designers, and social entrepreneurs. You'll have 48 hours to create solutions that can drive real-world impact in sectors like sustainability, healthcare, and education.",
        type: "Hackathons",
        company: "Innovators Group",
        slug: "innovators-hack-2025",
    },

    {
        title: "AI Revolution Hackathon",
        date: "Feb 12, 2025",
        desp: "A specialized hackathon centered on Artificial Intelligence, inviting coders and AI enthusiasts to build the next-generation AI tools.",
        content: "Compete to create groundbreaking AI solutions to improve various industries. Whether it's natural language processing, computer vision, or deep learning, showcase your skills and compete for an internship opportunity with AI Revolution Inc.",
        type: "Hackathons",
        company: "AI Revolution Inc.",
        slug: "ai-revolution-hackathon",
    },

    {
        title: "Code for Change Hackathon",
        date: "Mar 1, 2025",
        desp: "A hackathon designed for developers to work on projects that have a positive social impact.",
        content: "Participants will have the opportunity to build software that addresses global challenges such as climate change, poverty alleviation, and access to healthcare. Join us and make a difference while competing for amazing prizes.",
        type: "Hackathons",
        company: "Code for Change Foundation",
        slug: "code-for-change-hackathon",
    },

    // Hiring
    {
        title: "Visa Hiring Challenge",
        date: "Jan 10, 2025",
        desp: "A hiring challenge for developers to demonstrate their technical skills. Participants will solve coding problems that simulate real-world tasks at Visa.",
        content: "Ace this challenge and you could be hired by Visa! Showcase your abilities to solve algorithmic problems and software engineering tasks to qualify for an interview.",
        type: "Hiring",
        company: "Visa and Co",
        slug: "visa-hiring-challenge",
    },

    {
        title: "Tech Titans Recruitment Drive",
        date: "Jan 18, 2025",
        desp: "A recruitment hackathon by Tech Titans where participants are required to solve coding challenges and system design tasks to secure a job offer.",
        content: "Participate in this recruitment event, and top performers will be fast-tracked for interviews at Tech Titans Inc. Solve problems across multiple domains including AI, data science, and cloud technologies.",
        type: "Hiring",
        company: "Tech Titans Inc.",
        slug: "tech-titans-recruitment-drive",
    },

    {
        title: "CodeUp Hiring Challenge",
        date: "Feb 1, 2025",
        desp: "A coding competition to identify top developers for job opportunities at CodeUp. Solve complex coding problems to win.",
        content: "Get hired by CodeUp! This challenge will test your problem-solving and coding skills in various domains such as algorithms, data structures, and system design.",
        type: "Hiring",
        company: "CodeUp Technologies",
        slug: "codeup-hiring-challenge",
    },

    {
        title: "ByteWorks Jobathon",
        date: "Feb 10, 2025",
        desp: "ByteWorks is hosting a jobathon where participants can solve coding challenges and get a chance to join their team.",
        content: "If you're looking for an exciting career in tech, ByteWorks is the place to be. Solve coding challenges to show your skills and potentially get hired on the spot!",
        type: "Hiring",
        company: "ByteWorks Technologies",
        slug: "byteworks-jobathon",
    },

    {
        title: "Digital Solutions Hiring Sprint",
        date: "Mar 5, 2025",
        desp: "A hiring sprint for top tech talent to join Digital Solutions. Solve coding challenges and get a chance to participate in an interview process.",
        content: "Demonstrate your skills in coding, system design, and problem-solving to get noticed by the Digital Solutions HR team. Top performers will be given an opportunity to interview with the company.",
        type: "Hiring",
        company: "Digital Solutions Inc.",
        slug: "digital-solutions-hiring-sprint",
    },

    // University
    {
        title: "Mumbai Coding Contest",
        date: "Jan 11, 2025",
        desp: "A coding contest for university students to showcase their skills in competitive programming and problem-solving.",
        content: "Hosted by the University of Mumbai, this contest will feature problems from various domains, including algorithms, data structures, and mathematics.",
        type: "University",
        company: "University of Mumbai",
        slug: "mumbai-coding-contest",
    },

    {
        title: "Tech Fest 2025: University Edition",
        date: "Jan 15, 2025",
        desp: "A university-level hackathon for students to work on projects and showcase their skills in tech innovation.",
        content: "This event is organized for students across various universities to collaborate, build products, and present them in front of a panel of experts. Teams can choose any topic from AI to software development.",
        type: "University",
        company: "Tech Fest University",
        slug: "tech-fest-2025-university-edition",
    },

    {
        title: "Hack the Future: University Hackathon",
        date: "Feb 2, 2025",
        desp: "A hackathon for university students to solve real-world problems using cutting-edge technologies.",
        content: "Students will have 48 hours to develop innovative solutions in areas such as AI, blockchain, and sustainability. Winning teams will get scholarships and internships at leading tech firms.",
        type: "University",
        company: "Future Innovators University",
        slug: "hack-the-future-university-hackathon",
    },

    {
        title: "CSE Code Jam 2025",
        date: "Feb 8, 2025",
        desp: "An exclusive coding competition for Computer Science and Engineering students to showcase their problem-solving skills.",
        content: "CSE students from universities around the world will compete in solving algorithmic problems and coding challenges in this prestigious event.",
        type: "University",
        company: "Global University of Technology",
        slug: "cse-code-jam-2025",
    },

    {
        title: "SmartTech University Hackathon",
        date: "Mar 10, 2025",
        desp: "A hackathon aimed at university students to build smart tech solutions that improve lives using IoT, AI, and more.",
        content: "Students will work in teams to create innovative tech solutions in smart cities, health tech, or education. Top teams will receive scholarships and career opportunities.",
        type: "University",
        company: "SmartTech University",
        slug: "smarttech-university-hackathon",
    },
];
