import { useTranslations } from 'next-intl';

export type HomePageTranslations = ReturnType<typeof useTranslations<'HomePage'>>;
export type TechnologyTranslations = ReturnType<typeof useTranslations<'Technology'>>;
export type AboutTranslations = ReturnType<typeof useTranslations<'AboutRednox'>>;

export interface TeamMember {
    id: number
    name: string
    position: string
    image: string
    alt: string;
    bio: string
    email?: string
    linkedin?: string
}

export interface NewsData {
    id: number;
    title: string;
    excerpt: string;
    text?: string;
    image?: string;
    date: string;
    link: string;
    slug: string;
}

export interface PressData {
    id: number;
    title: string;
    excerpt: string;
    image?: string;
    date: string;
    slug: string;
}

export interface PublicationData {
    id: number;
    title: string;
    image?: string;
    authors: string[]
    link: string;
}

export interface BlogPost {
    title: string;
    excerpt: string;
    author?: string;
    date: string;
    image?: string;
    readTime: string;
    category: string;
    content: string;
    downloadCTATitle?: string;
    downloadLink?: string;
    isNewsArticle?: boolean;
}