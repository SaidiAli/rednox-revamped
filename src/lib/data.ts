import { NewsData, PressData, PublicationData, TeamMember, HomePageTranslations, AboutTranslations } from "./types"

export const features = (t: HomePageTranslations) => ({
    hde: [
        {
            key: t("keyValueGrid.metrics.detectionFloor"),
            value: "< 1 ppm-NOx"
        },
        {
            key: t("keyValueGrid.metrics.accuracy"),
            value: "±10 % @ 0.5-20% ppm"
        },
        {
            key: t("keyValueGrid.metrics.t90"),
            value: "< 5 seconds"
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
            value: "> 3,000 h"
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
            image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1759086906/solomon-team_qt2hpv.png",
            alt: "solomon ssenyange founder rednox inc",
            bio: t("management.members.solomon.bio"),
            email: "solomon@rednoxinc.com",
            linkedin: "https://www.linkedin.com/in/sssenyange/"
        },
        {
            id: 2,
            name: "Prabir Dutta, PhD",
            position: "Co-Founder & Technical Advisor",
            image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1759086905/dutta_qzvoq3.jpg",
            alt: "prabir dutta founder rednox inc",
            bio: t("management.members.dutta.bio"),
            linkedin: "https://www.linkedin.com/in/prabir-dutta-ba9a9535/"
        },
        {
            id: 3,
            name: "Darby Makel, PhD",
            position: "Director",
            image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1759086907/markel_mnttzu.png",
            alt: "darby makel founder rednox inc",
            bio: t("management.members.markel.bio"),
            linkedin: "https://www.linkedin.com/in/darby-makel-b1549045/"
        }
    ]
)

export const advisors = (t: AboutTranslations): TeamMember[] => [
    {
        id: 4,
        name: "Peter Swaniker",
        position: "Advisor",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1759086907/peter_lmltcg.png",
        alt: "peter swaniker rednox",
        bio: t("advisors.members.peter.bio"),
        linkedin: "https://www.linkedin.com/in/peterswaniker/"
    },
    {
        id: 5,
        name: "Matt Meisner, PhD",
        position: "Advisor",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1759086907/matt_n3qw5v.png",
        alt: "matt meisner rednox",
        bio: t("advisors.members.matt.bio"),
        linkedin: "https://www.linkedin.com/in/matt-meisner/"
    },
    {
        id: 3,
        name: "Kurt Tsuo",
        position: "Advisor",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1759086906/kurt_pxxm33.png",
        alt: "kurt tsuo rednox",
        bio: t("advisors.members.kurt.bio"),
        linkedin: "https://www.linkedin.com/in/kurt-tsuo/"
    }
]

export const investors = (t: AboutTranslations): TeamMember[] => [
    {
        id: 6,
        name: "Wayne Embree",
        position: "Director",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1759086904/wayne_zaosbe.jpg",
        alt: "wayne embree rednox",
        bio: t("investors.members.wayne.bio"),
        linkedin: "https://www.linkedin.com/in/wayne-embree-a07125/"
    },
    {
        id: 8,
        name: "JP Mijares",
        position: "Director",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1759086878/JPM_pic_xhhzfd.jpg",
        alt: "jp mijares rednox",
        bio: t("investors.members.noboru.bio"),
    }
]

export const newsData: NewsData[] = [
    {
        id: 1,
        title: "RedNOx Awarded USDA NIFA SBIR Phase II Grant to Drive Innovation in Agricultural Emissions Reduction",
        excerpt: "We are thrilled to announce that RedNOx has been awarded a USDA NIFA SBIR Phase II grant of $650,000 as part of a $26.8 million investment to support groundbreaking, small business-led innovations in agriculture. This funding will enable us to advance our N₂O and NOx sensing technologies, specifically aimed at reducing emissions of nitrous oxide and NOx from both synthetic and microbial fertilizers.",
        text: "We are thrilled to announce that RedNOx has been awarded a USDA NIFA SBIR Phase II grant of $650,000 as part of a $26.8 million investment to support groundbreaking, small business-led innovations in agriculture. This funding will enable us to advance our N₂O and NOx sensing technologies, specifically aimed at reducing emissions of nitrous oxide and NOx from both synthetic and microbial fertilizers. This Phase II award underscores the importance of cutting-edge research in addressing critical environmental challenges and brings our technology closer to commercialization. With USDA NIFA’s support, RedNOx will continue its mission to enhance agricultural productivity, benefit local communities, and contribute to a cleaner, healthier environment.",
        date: "2024-10-31",
        link: "https://content.govdelivery.com/accounts/USDANIFA/bulletins/3bf56f8"
    },
    {
        id: 2,
        title: "RedNOx Signs MOU with One of the World's Largest Manufacturers of Hydrogen, Diesel, and Natural Gas Engines",
        excerpt: "RedNOx also Secures a Purchase Order from Cummins Inc. for Next-Generation NOx Sensors.",
        date: "2023-09-04",
        link: "https://rednoxinc.com/wp-content/uploads/2023/09/Cummins-Press-Release_August-2023_v2.pdf"
    },
    {
        id: 3,
        title: "RedNOx Revolution: Unraveling the Next Big Breakthrough in Emissions Reduction - Exclusively on Chemical and Engineering News",
        excerpt: "RedNOx Revolution: Unraveling the Next Big Breakthrough in Emissions Reduction - Exclusively on Chemical and Engineering News",
        date: "2023-08-21",
        link: "https://cen.acs.org/food/agriculture/USDA-funds-food-agriculture-start/101/i29"
    },
    {
        id: 4,
        title: "RedNOx Awarded SBIR Phase I for its Innovative Greenhouse Gas Measurement Platform",
        excerpt: "FREMONT, Calif., August 28, 2023 (GLOBE NEWSWIRE) — RedNOx Inc., a trailblazer in environmental solid-state sensing technology, is delighted to announce its recent achievement in securing a Phase I Small Business Innovation Research (SBIR) award for its groundbreaking atmosphere and soil greenhouse gas measurement platform.",
        date: "2023-08-28",
        link: "https://rednoxinc.com/wp-content/uploads/2023/08/USDA-Press-Release_August-2023.pdf"
    },
    {
        id: 5,
        title: "REDNOX CLOSES FINANCING TO CREATE THE NEXT GENERATION NOx SENSORS FOR LOW TO ZERO EMISSIONS APPLICATIONS",
        excerpt: "RedNOx Inc announced today its launch and the completion of seed financing with Rev1 Ventures Partners.  RedNOx launches with a technology license from OSU to scale solid-state NOx and CO2 sensor technology for clean energy and low to zero emissions vehicles.  RedNOx’s LoNOx sensor technology points to a leap in performance and reliability, with parts-per-billion detection capabilities and long-term durability.",
        date: "2022-07-01",
        link: "#"
    }
]

export const pressData: PressData[] = [
    {
        id: 1,
        title: "RedNOx Partners with Nihon Yamamura Glass, Secures $2M to Revolutionize Emissions Monitoring",
        excerpt: "We’re excited to announce that RedNOx Inc. has expanded its partnership with Nihon Yamamura Glass (NYG), a leading Japanese ceramics and glass manufacturer.",
        date: "2025-10-08",
        slug: "strategic-business-partnership-between-nihon-yamamura-glass-co-ltd-and-rednox",
        image: "/nihon.jpg"
    },
    {
        id: 2,
        title: "RedNOx Awarded SBIR Phase I for its Innovative Greenhouse Gas Measurement Platform",
        excerpt: "FREMONT, Calif., August 28, 2023 (GLOBE NEWSWIRE) -- RedNOx Inc., a trailblazer in environmental solid-state sensing technology, is delighted to announce its recent achievement in securing a Phase I Small Business Innovation Research (SBIR) award for its groundbreaking atmosphere and soil greenhouse gas measurement platform.",
        date: "2023-08-23",
        slug: "rednox-awarded-sbir-phase-i-for-its-innovative-greenhouse-gas-measurement-platform",
        image: "/usda.jpg"
    },
    {
        id: 3,
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
        title: "Development of high sensitivity potentiometric NOx sensor and its application to breath analysis",
        authors: ['Suvra Prakash Mondal a', 'Prabir K. Dutta a', 'G.W. Hunter b', 'B.J. Ward c', 'D. Laskowski d', 'R.A. Dweik d'],
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400511005314"
    },
    {
        id: 2,
        title: "High temperature amperometric total NOx sensors with platinum-loaded zeolite Y electrodes",
        authors: ['Jiun-Chan Yang', 'Prabir K. Dutta'],
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400506007398",
    },
    {
        id: 2,
        title: "Strategies for total NOx measurement with minimal CO interference utilizing a microporous zeolitic catalytic filter",
        authors: ['Nicholas F Szabo', 'Prabir K. Dutta'],
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400502003222",
    },
    {
        id: 2,
        title: "Promoting selectivity and sensitivity for a high temperature YSZ-based electrochemical total NOx sensor by using a Pt-loaded zeolite Y filter",
        authors: ['Jiun-Chan Yang', 'Prabir K. Dutta'],
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400507000500",
    },
    {
        id: 2,
        title: "Temperature-controlled CO, CO2 and NOx sensing in a diesel engine exhaust stream",
        authors: ['Osvaldo L. Figueroa a', 'Chonghoon Lee a', 'Sheikh A. Akbar b', 'Nicholas F. Szabo a', 'Joseph A. Trimboli a', 'Prabir K. Dutta c', 'Naoto Sawaki d', 'Ahmed A. Soliman e,', 'Henk Verweij b'],
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400504008871",
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
    downloadCTATitle?: string;
    downloadLink?: string;
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
    },
    "strategic-business-partnership-between-nihon-yamamura-glass-co-ltd-and-rednox": {
        title: "RedNOx Partners with Nihon Yamamura Glass, Secures $2M to Revolutionize Emissions Monitoring",
        excerpt:
            "We’re excited to announce that RedNOx Inc. has expanded its partnership with Nihon Yamamura Glass (NYG), a leading Japanese ceramics and glass manufacturer.",
        date: "2025-10-08",
        readTime: "5 min read",
        category: "Press Release",
        image: "/nihon.jpg",
        downloadLink: "https://www.yamamura.co.jp/cms/wp-content/uploads/2025/10/20251008_CMS0632_473LOWYE-2.pdf",
        downloadCTATitle: "Nihon Yamamura Press Release",
        content: `
        <article>
            <p>RedNOx Inc. is pleased to announce an expanded strategic partnership with Nihon Yamamura Glass (NYG). NYG has invested in our oversubscribed $2M seed round and will provide us with ceramics and glass sealing expertise to scale our sensor production.</p>

        <div>
            What this enables: faster, higher-quality manufacturing of next-generation NOx and N₂O sensors for mobility and agriculture applications.
        </div>

        <h2>Technology in focus</h2>

        <p>LoNOx sensor: Ultra-sensitive NOx detection across 500 ppb–20 ppm. Built to resist ammonia interference and suitable for diesel and gasoline engines, it’s especially relevant for low-emission gensets used by data centers and hospitals.</p>

        <p>AgriNOx system: Precision measurement of fertilizer-derived N₂O at sub-ppm levels. Supported by a $650K USDA grant, pilots in California are helping farmers reduce nitrogen inputs and access carbon credit opportunities.</p>

        <h2>Why this matters</h2>

        <p>NOx is a harmful air pollutant, and N₂O is nearly 300× more potent than CO₂. With tighter emissions standards expected from 2027 onward, our combined technology and manufacturing capability will help OEMs and farmers meet regulatory and sustainability goals.</p>

        <p>By pairing Silicon Valley innovation with Japanese technical strength, RedNOx and NYG aim to accelerate commercialization and deliver practical solutions that reduce emissions and create value for industry and agriculture.</p>
        </article>
        `,
    }
}

export const _investors = [
    {
        name: "Rev1ventures",
        image: "/investors/1.png",
        bio: "Rev1 Ventures is a venture capital firm based in Columbus, Ohio. It focuses on investing in early-stage, scalable, and tech-enabled businesses in various sectors, including advanced materials and alternative energy. As a venture development studio, it helps entrepreneurs and corporations accelerate innovation.",
        position: "Venture Capital Firm",
        email: "info@rev1ventures.com"
    },
    {
        name: "Soundboard Venture Fund",
        image: "/investors/2.png",
        bio: "SoundBoard Venture Fund is an early-stage venture capital firm based in Montclair, New Jersey. It uses a collaborative approach, leveraging the diverse perspectives of its investors to evaluate and make investment decisions. The firm focuses on scalable, tech-enabled businesses and places a strong emphasis on assessing the leadership team of the companies they invest in.",
        position: "Venture Capital Firm",
        email: "info@soundboardventurefund.com"
    },
    {
        name: "Nihon Yamamura Glass Co., Ltd.",
        image: "/investors/3.png",
        bio: "Nihon Yamamura Glass Co., Ltd. is a Japanese company that manufactures and sells glass bottles, plastic containers, and powdered glass. Founded in 1914, the company also operates in the logistics and 'new glass' sectors. It is a strategic partner for RedNOx in Yokohama, Japan.",
        position: "Venture Capital Firm",
        email: "info@soundboardventurefund.com"
    }
]