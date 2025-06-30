import { nanoid } from "nanoid";

export type Answer = {
    id: string,
    header: string,
    content: string
}

export const answers: Answer[] = [
    { 
        id: nanoid(),
        header: 'What is the difference between Defi and Metaverse ?',
        content: 'When galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    { 
        id: nanoid(),
        header: 'What should I do if Google verification fails to bind ?',
        content: 'When an unknown printer took a galley of type and scrambled it to makbook. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    { 
        id: nanoid(),
        header: 'How to complete your KYC Verification ?',
        content: 'When an unknown prlley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    { 
        id: nanoid(),
        header: 'What should I do if I enter the Google verification code incorrectly ?',
        content: 'When an unknow took a galley of type and scrambled it to make a tt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    { 
        id: nanoid(),
        header: 'Can We Enter in Website Without Login or Sign Up ?',
        content: 'When an unknown printer took a galley of type and scrambled type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    { 
        id: nanoid(),
        header: 'What should I do if I lost the binded phone number ?',
        content: 'When an unknown printer tookf type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    { 
        id: nanoid(),
        header: 'How to register an account on the web ?',
        content: 'When an unknown printer took a galley oed it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    { 
        id: nanoid(),
        header: 'How we Change mobile number ?',
        content: 'When an unknown printer took a galley of type and scrambled ia type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
];