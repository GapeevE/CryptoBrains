import { nanoid } from "nanoid";
import { PresentationChartBarIcon, UsersIcon, BanknotesIcon, WalletIcon } from "@heroicons/react/24/solid";

type StartTradingCard = {
    id: string,
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    header: string,
    content: string,
    button: string,
    color: string,
    href: string
}

export const startTradingCards: StartTradingCard[] = [
    {
        id: nanoid(),
        icon: UsersIcon,
        header: 'Create Account',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Sign Up Now',
        color: 'bg-[#F8931A]',
        href: '/red/signUp'
    },
    {
        id: nanoid(),
        icon: BanknotesIcon,
        header: 'Verify Bank Account',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Verify Now',
        color: 'bg-[#BD47FC]',
        href: '/red/login'
    },
    {
        id: nanoid(),
        icon: WalletIcon,
        header: 'Add Fund in Wallet',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Add Now',
        color: 'bg-[#27C28A]',
        href: '/red/login'
    },
    {
        id: nanoid(),
        icon: PresentationChartBarIcon,
        header: 'Start Trading',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        button: 'Start Now',
        color: 'bg-[#F72357]',
        href: '/blue/trade'
    }
]