import { nanoid } from "nanoid"

type Post = {
    id: string, 
    logo: string,
    name: string,
    country: string,
    content: string
}

export const posts: Post[] = [
    {
        id: nanoid(),
        logo: '/user.png',
        name: 'John Doe',
        country: 'USA, Boston',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: nanoid(),
        logo: '/user.png',
        name: 'Go Lang',
        country: 'UK, London',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500rinter took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: nanoid(),
        logo: '/user.png',
        name: 'Min Li',
        country: 'SK, Seul',
        content: 'Lorem Ipsum has been ver since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: nanoid(),
        logo: '/user.png',
        name: 'Jo Jo',
        country: 'Japan, Tokio',
        content: 'Lorem Ipsum has been the industry\'s standard an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
];