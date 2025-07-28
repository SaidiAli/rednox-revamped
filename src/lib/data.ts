import { NewsData, PressData, PublicationData, TeamMember, HomePageTranslations, AboutTranslations } from "./types"

export const features = (t: HomePageTranslations) => ({
    hde: [
        {
            key: t("keyValueGrid.metrics.detectionFloor"),
            value: "< 1 ppm-NOx"
        },
        {
            key: t("keyValueGrid.metrics.accuracy"),
            value: "±10 % @ 1–20 ppm"
        },
        {
            key: t("keyValueGrid.metrics.t90"),
            value: "< 2 seconds"
        },
        {
            key: t("keyValueGrid.metrics.output"),
            value: "CAN-J1939 / Modbus / RS-485 "
        },
        {
            key: t("keyValueGrid.metrics.operatingTemp"),
            value: "–40 … +700 °C "
        },
        {
            key: t("keyValueGrid.metrics.ingress"),
            value: "IP6K9K "
        },
        {
            key: t("keyValueGrid.metrics.lifetime"),
            value: "> 5,000 h"
        }
    ],
    afgrinox: [
        {
            key: t("keyValueGrid.metrics.detectionFloor"),
            value: "< 100 ppb-N₂O"
        },
        {
            key: t("keyValueGrid.metrics.accuracy"),
            value: "±5 % @ 0.1–5 ppm"
        },
        {
            key: t("keyValueGrid.metrics.t90"),
            value: "< 3 seconds"
        },
        {
            key: t("keyValueGrid.metrics.output"),
            value: "LoRaWAN / BLE"
        },
        {
            key: t("keyValueGrid.metrics.operatingTemp"),
            value: "–10 … +60 °C"
        },
        {
            key: t("keyValueGrid.metrics.ingress"),
            value: "IP67"
        },
        {
            key: t("keyValueGrid.metrics.lifetime"),
            value: "> 5,000 h"
        }
    ]
})

export const founders = (t: AboutTranslations): TeamMember[] => (
    [
        {
            id: 1,
            name: "Solomon Ssenyange, PhD",
            position: "Co-Founder & CEO",
            image: "/team/solomon-team.png",
            alt: "solomon ssenyange founder rednox inc",
            bio: t("founders.solomon.bio"),
            email: "solomon@rednoxinc.com"
        },
        {
            id: 2,
            name: "Prabir Dutta, PhD",
            position: "Co-Founder & Technical Advisor",
            image: "/team/dutta.jpeg",
            alt: "prabir dutta founder rednox inc",
            bio: t("founders.dutta.bio"),
        },
        {
            id: 3,
            name: "Darby Makel, PhD",
            position: "Co-Founder & Chief Engineer",
            image: "/team/markel.png",
            alt: "darby makel founder rednox inc",
            bio: t("founders.markel.bio"),
        }
    ]
)

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

export const newsData: NewsData[] = [
    {
        id: 1,
        title: "NIFA Press Release",
        excerpt: "RedNOx wins NIFA grant for agricultural emissions monitoring",
        date: "2025-07-22",
        link: "https://www.nifa.org/"
    },
    {
        id: 2,
        title: "NIFA Press Release",
        excerpt: "RedNOx wins NIFA grant for agricultural emissions monitoring",
        date: "2025-07-22",
        link: "https://www.nifa.org/"
    }
]

export const pressData: PressData[] = [
    {
        id: 1,
        title: "RedNOx Awarded SBIR Phase I for its Innovative Greenhouse Gas Measurement Platform",
        excerpt: "FREMONT, Calif., August 28, 2023 (GLOBE NEWSWIRE) -- RedNOx Inc., a trailblazer in environmental solid-state sensing technology, is delighted to announce its recent achievement in securing a Phase I Small Business Innovation Research (SBIR) award for its groundbreaking atmosphere and soil greenhouse gas measurement platform.",
        date: "2023-08-23",
        slug: "rednox-awarded-sbir-phase-i-for-its-innovative-greenhouse-gas-measurement-platform",
        image: "/usda.jpg"
    },
    {
        id: 2,
        title: "RedNOx Awarded USDA NIFA SBIR Phase II Grant to Drive Innovation in Agricultural Emissions Reduction",
        excerpt: "We are thrilled to announce that RedNOx has been awarded a USDA NIFA SBIR Phase II grant of $650,000 as part of a $26.8 million investment to support groundbreaking, small business-led innovations in agriculture.",
        date: "2024-10-31",
        slug: "rednox-awarded-usda-nifa-sbir-phase-ii-grant-to-drive-innovation-in-agricultural-emissions-reduction",
        image: "/us.jpg"
    }
]

export const publicationData: PublicationData[] = [
    {
        id: 1,
        title: "NIFA Press Release",
        excerpt: "RedNOx wins NIFA grant for agricultural emissions monitoring",
        date: "2025-07-22",
        link: "https://www.nifa.org/"
    },
    {
        id: 2,
        title: "NIFA Press Release",
        excerpt: "RedNOx wins NIFA grant for agricultural emissions monitoring",
        date: "2025-07-22",
        link: "https://www.nifa.org/"
    },
]

export interface BlogPost {
    title: string;
    excerpt: string;
    author?: string;
    date: string;
    image?: string;
    readTime: string;
    category: string;
    content: string;
}

export const blogPosts: Record<string, BlogPost> = {
    "rednox-awarded-sbir-phase-i-for-its-innovative-greenhouse-gas-measurement-platform": {
        title: "RedNOx Awarded SBIR Phase I for its Innovative Greenhouse Gas Measurement Platform",
        excerpt:
            "FREMONT, Calif., August 28, 2023 (GLOBE NEWSWIRE) -- RedNOx Inc., a trailblazer in environmental solid-state sensing technology, is delighted to announce its recent achievement in securing a Phase I Small Business Innovation Research (SBIR) award for its groundbreaking atmosphere and soil greenhouse gas measurement platform.",
        date: "2023-08-23",
        image: "/usda.jpg",
        readTime: "8 min read",
        category: "Press Release",
        content: `
    <p>FREMONT, Calif., August 28, 2023 (GLOBE NEWSWIRE) -- RedNOx Inc., a trailblazer in environmental solid-state sensing technology, is delighted to announce its recent achievement in securing a Phase I Small Business Innovation Research (SBIR) award for its groundbreaking atmosphere and soil greenhouse gas measurement platform.</p>
    <p>RedNOx's unique platform measures nitrous oxide (N2O), nitrogen oxides (NOx), and carbon dioxide (CO2) emissions both in the atmosphere and the soil. For agriculturalists, farmer and energy producer, the platform simplifies the process of monitoring, reporting, and verifying these gas levels, ensuring accurate tracking of net negative carbon and NOx emissions. In the future, its integrated software will aggregate all the data and automatically generate the necessary documentation, enabling agricultural producers, factories and fuel using energy producer to easily engage in both the carbon and NOx credit markets. This advancement could boost farmers' incomes while encouraging sustainable agricultural practices.</p>
    <p>RedNOx's CEO, Dr. Solomon Ssenyange, stated, "Receiving this award reaffirms our dedication to developing solutions that prioritize environmental sustainability and offer economic benefits to agriculture. Our sensor technology not only enhances soil health and food production but also promotes the reduction of carbon and NOx emissions."</p>
    <p>The announcement from RedNOx comes in the wake of the USDA's official press release on the recent Phase I Awards, further details of which can be accessed here. RedNOx extends its gratitude to the USDA and the SBIR/STTR Office for recognizing and supporting initiatives that drive tech innovation in food and agriculture.</p>
    <p>For those with inquiries concerning the award or RedNOx's ambient and soil greenhouse gas measurement platform, you're encouraged to reach out to the company directly or to the SBIR/STTR Office for broader questions regarding the program.</p>
    <h3>About RedNOx</h3>
    <p>Headquartered in Fremont, CA, RedNOx Inc. specializes in developing state-of-the-art sensing solutions for a variety of applications. Committed to both innovation and sustainability, RedNOx is redefining how agriculture interacts with environmental responsibilities. Learn more about their initiatives and advancements at www.rednoxinc.com and stay connected via LinkedIn.</p>
  `,
    },
    "rednox-awarded-usda-nifa-sbir-phase-ii-grant-to-drive-innovation-in-agricultural-emissions-reduction": {
        title: "RedNOx Awarded USDA NIFA SBIR Phase II Grant to Drive Innovation in Agricultural Emissions Reduction",
        excerpt:
            "We are thrilled to announce that RedNOx has been awarded a USDA NIFA SBIR Phase II grant of $650,000 as part of a $26.8 million investment to support groundbreaking, small business-led innovations in agriculture.",
        date: "2024-10-31",
        readTime: "5 min read",
        category: "Press Release",
        image: "/us.jpg",
        content: `
    <p>We are thrilled to announce that RedNOx has been awarded a USDA NIFA SBIR Phase II grant of $650,000 as part of a $26.8 million investment to support groundbreaking, small business-led innovations in agriculture. This funding will enable us to advance our N₂O and NOx sensing technologies, specifically aimed at reducing emissions of nitrous oxide and NOx from both synthetic and microbial fertilizers.</p>
    <p>This Phase II award underscores the importance of cutting-edge research in addressing critical environmental challenges and brings our technology closer to commercialization. With USDA NIFA’s support, RedNOx will continue its mission to enhance agricultural productivity, benefit local communities, and contribute to a cleaner, healthier environment.</p>
  `,
    }
}