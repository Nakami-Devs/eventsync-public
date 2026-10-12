export interface EventItem {
    id: string;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    place: string;
    sessions: Array<{ id: string }>;
}

export interface Room {
    id: string;
    name: string;
    capacity: number;
}

export interface Speaker {
    id: string;
    full_name: string;
    profile_pic: string;
    biography: string;
    external_link: string;
}

export interface Session {
    id: string;
    title: string;
    description: string;
    start_time: string;
    end_time: string;
    id_event: string;
    id_room: string;
    room_name: string;
    speakers: Array<{ id: string, full_name: string }>;
}