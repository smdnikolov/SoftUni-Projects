export interface ITreks {
    _id: string;
    location: string;
    dateTime: string;
    description: string;
    imageURL: string;
    organizer: string;
    email: string;
    likes: number;
    _acl: Object;
    _kmd: Object;
}