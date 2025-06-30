import { nanoid } from "nanoid";

type Links = {
    id: string,
    name: string,
    href: string
}
export const links: Links[] = [
    {
        id: nanoid(),
        name: 'Market', 
        href: '/blue/market'
    },
    {
        id: nanoid(),
        name: 'Trade', 
        href: '/trade'
    },
    {
        id: nanoid(),
        name: 'Earn', 
        href: '/red/earn'
    },
    {
        id: nanoid(),
        name: 'About', 
        href: '/yellow/about'
    },
    {
        id: nanoid(),
        name: 'Career', 
        href: '/green/career'
    },
]