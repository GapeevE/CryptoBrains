import { nanoid } from "nanoid";

type FooterMenuItem = {
    id: string,
    text: string,
    href: string,
    badge: false | {comment: string}
};

type FooterMenu = {
    menuId: string
    header: string,
    content: FooterMenuItem[]
};

export const footerMenu: FooterMenu[] = [
    {
        menuId: nanoid(),
        header: 'Crypto Brains',
        content: [
            {
                id: nanoid(),
                text: 'About Us',
                href: '/yellow/about',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Our Team',
                href: '/green/ourTeam',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Road Map',
                href: '/green/roadMap',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Risk Disclosure',
                href: '/pink/riskDisklosure',
                badge: false
            }
        ]
    },
    {
        menuId: nanoid(),
        header: 'Knowledge',
        content: [
            {
                id: nanoid(),
                text: 'F.A.Q.',
                href: '/green/fAQ',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Articals',
                href: '/black/articals',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Video Tutorial',
                href: '/blue/market',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Beginner’s Guide',
                href: '/blue/begginersGuide',
                badge: false
            }
        ]
    },
    {
        menuId: nanoid(),
        header: 'Services',
        content: [
            {
                id: nanoid(),
                text: 'API Service',
                href: '/out',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Token Listing',
                href: '/blue/tokenListing',
                badge: false
            },
            {
                id: nanoid(),
                text: 'API Document',
                href: '/out',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Ticket Services',
                href: '/blue/ticketServices',
                badge: false
            }
        ]
    },
    {
        menuId: nanoid(),
        header: 'Exchange',
        content: [
            {
                id: nanoid(),
                text: 'P2P',
                href: '/blue/p2p',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Referral',
                href: '/yellow/referral',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Markets',
                href: '/blue/market',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Affiliate Program',
                href: '/yellow/affiliateProgram',
                badge: false
            }
        ]
    },
    {
        menuId: nanoid(),
        header: 'Support Sevice',
        content: [
            {
                id: nanoid(),
                text: 'Career',
                href: '/green/career',
                badge: {
                    comment: 'We Are Hiring'
                }
            },
            {
                id: nanoid(),
                text: 'Comunity',
                href: '/pink/comunity',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Customer Chat',
                href: '/out',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Technical Support',
                href: '/pink/technicalSupport',
                badge: false
            }
        ]
    },
    {
        menuId: nanoid(),
        header: 'Press',
        content: [
            {
                id: nanoid(),
                text: 'Blog',
                href: '/black/blog',
                badge: false
            },
            {
                id: nanoid(),
                text: 'News',
                href: '/black/news',
                badge: false
            },
            {
                id: nanoid(),
                text: 'Events',
                href: '/black/events',
                badge: false
            }
        ]
    }
];