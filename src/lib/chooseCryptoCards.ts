import { nanoid } from "nanoid";

type ChooseCryptoCard = {
    id: string,
    count: string,
    content: string,
    header: string
}

export const chooseCryptoCards: ChooseCryptoCard[] = [
    { 
        id: nanoid(), 
        count: '01',
        content: 'It was popularised in the 1960s containing Lorem Ipsum passages.', 
        header: 'Easy Trading' 
    },
    { 
        id: nanoid(), 
        count: '02',
        content: 'It was popularised in the 1960s with.', 
        header: '24/7 Help Service' 
    },
    { 
        id: nanoid(),
        count: '03', 
        content: 'It was popularised Letraset sheets containing Lorem Ipsum passages.', 
        header: 'Fast Service' 
    },
    { 
        id: nanoid(), 
        count: '04',
        content: 'It was Lorem Ipsum passages.', 
        header: 'Low Charges' 
    },
]