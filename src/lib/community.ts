import { nanoid } from "nanoid";

type Comunity = {
    id: string,
    src: string,
    alt: string,
    href: string
};

export const community: Comunity[] = [
    {
        id: nanoid(),
        src: 'discord.png',
        alt: 'discord',
        href: '/out'
    },
    {
        id: nanoid(),
        src: 'telegram.png',
        alt: 'telegram',
        href: '/out'
    },
    {
        id: nanoid(),
        src: 'instagram.png',
        alt: 'instagram',
        href: '/out'
    },
    {
        id: nanoid(),
        src: 'linkedin.png',
        alt: 'linkedin',
        href: '/out'
    },
    {
        id: nanoid(),
        src: 'youtube.png',
        alt: 'youtube',
        href: '/out'
    }
];