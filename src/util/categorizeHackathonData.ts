import { HackathonEventType } from "@/constants/data";

export interface CategorizedHackathonDataType {
    live: HackathonEventType[];
    upcoming: HackathonEventType[];
    previous: HackathonEventType[];
}

export function categorizeHackathonData(data: HackathonEventType[]) : CategorizedHackathonDataType {
    const today = new Date().toDateString();

    const live: HackathonEventType[] = [];
    const upcoming: HackathonEventType[] = [];
    const previous: HackathonEventType[] = [];

    data.forEach(event => {
        const eventDate = new Date(event.date).toDateString();

        if (eventDate === today) {
            live.push(event);
        } else if (new Date(event.date) > new Date()) {
            upcoming.push(event);
        } else {
            previous.push(event);
        }
    });

    return {
        live,
        upcoming,
        previous,
    };
}
