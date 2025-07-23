export interface TeamMember {
    id: number
    name: string
    position: string
    image: string
    alt: string;
    bio: string
    email?: string
}

export interface NewsData {
    id: number;
    title: string;
    description: string;
    image?: string;
    date: string;
    link: string;
}

export interface PressData {
    id: number;
    title: string;
    description: string;
    image?: string;
    date: string;
    link: string;
}

export interface PublicationData {
    id: number;
    title: string;
    description: string;
    image?: string;
    date: string;
    link: string;
}