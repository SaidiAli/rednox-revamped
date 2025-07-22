import { TeamMember } from "./types"

export const features = {
    hde: [
        {
            key: "Detection Floor",
            value: "< 1 ppm-NOx"
        },
        {
            key: "Accuracy",
            value: "±10 % @ 1–20 ppm"
        },
        {
            key: "T90 Response",
            value: "< 2 seconds"
        },
        {
            key: "Output",
            value: "CAN-J1939 / Modbus / RS-485 "
        },
        {
            key: "Operating Temp",
            value: "–40 … +700 °C "
        },
        {
            key: "Ingress",
            value: "IP6K9K "
        },
        {
            key: "Lifetime",
            value: "> 5,000 h"
        }
    ],
    afgrinox: [
        {
            key: "Detection Floor",
            value: "< 100 ppb-N₂O"
        },
        {
            key: "Accuracy",
            value: "±5 % @ 0.1–5 ppm"
        },
        {
            key: "T90 Response",
            value: "< 3 seconds"
        },
        {
            key: "Output",
            value: "LoRaWAN / BLE"
        },
        {
            key: "Operating Temp",
            value: "–10 … +60 °C"
        },
        {
            key: "Ingress",
            value: "IP67"
        },
        {
            key: "Lifetime",
            value: "> 5,000 h"
        }
    ]
}

export const founders: TeamMember[] = [
    {
        id: 1,
        name: "Solomon Ssenyange, PhD",
        position: "Co-Founder & CEO",
        image: "/team/solomon_ssenyange.png",
        alt: "solomon ssenyange founder rednox inc",
        bio: "Born in Uganda and grew up in Kenya as a war refugee. He co-founded SpiroSure, which had a $100 million exit to a multinational respiratory company in 2020.",
        email: "solomon@rednoxinc.com"
    },
    {
        id: 2,
        name: "Prabir Dutta, PhD",
        position: "Co-Founder & Technical Advisor",
        image: "/team/prabir.png",
        alt: "prabir dutta founder rednox inc",
        bio: "A world expert in sensor technology. He developed concepts for RedNOx technology in his lab at The Ohio State University.",
    },
    {
        id: 3,
        name: "Darby Makel, PhD",
        position: "Co-Founder & Chief Engineer",
        image: "/team/makel.png",
        alt: "darby makel founder rednox inc",
        bio: "A world expert in sensor technology. He is a systems engineering expert with Makel Engineering.",
    }
]

export const advisors: TeamMember[] = [
    {
        id: 4,
        name: "Peter Swaniker",
        position: "Advisor",
        image: "/team/peter.png",
        alt: "peter swaniker rednox",
        bio: "An experienced entrepreneur in the tech industry. He has over 25 years of experience architecting and building software systems and is an expert in customer-centric solutions",
    },
    {
        id: 5,
        name: "Matt Meisner, PhD",
        position: "Advisor",
        image: "/team/matt.png",
        alt: "matt meisner rednox",
        bio: "A founding team member of Farmers Business Network, which grew into a $4B company. He led the company's data science, new technology evaluation, and investment efforts",
    },
    {
        id: 3,
        name: "Kurt Tsuo",
        position: "Advisor",
        image: "/team/kurt.png",
        alt: "kurt tsuo rednox",
        bio: "Grew FBN's crop input business to $70M/yr revenue as GM. He co-founded Graphyte for carbon removal via biomass and is the COO at ProducePay, a fintech for produce farmers.",
    }
]