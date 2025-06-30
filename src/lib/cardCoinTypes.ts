import { nanoid } from "nanoid";

type cardCoin = {
    id: string,
    name: string,
    filter: string
}

export const cardCoinTypes: cardCoin[] = [
    {
        id: nanoid(),
        name: 'All',
        filter: ''
    },
    {
        id: nanoid(),
        name: 'Smart Contract Platform',
        filter: 'smart-contract-platform'
    },
    {
        id: nanoid(),
        name: 'L1',
        filter: 'layer-1'
    },
    {
        id: nanoid(),
        name: 'POW',
        filter: 'proof-of-work-pow'
    }
]