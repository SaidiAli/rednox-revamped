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

export const investors: TeamMember[] = [
    {
        id: 6,
        name: "Wayne Embree",
        position: "Investor",
        image: "/team/wayne.jpeg",
        alt: "wayne embree rednox",
        bio: "Wayne is an experienced seed-stage investor with a track record of fueling startups with guidance and venture capital. He’s been involved in over 200 investments, including sitting on over 50 boards and taking more than 60 businesses through exits. Throughout his career, he has maintained his passion and enthusiasm for helping entrepreneurs change the world.",
    },
    {
        id: 7,
        name: "Jonathan Hakakian",
        position: "Investor",
        image: "/team/jonathan.jpeg",
        alt: "jonathan hakakian rednox",
        bio: "Jonathan is Managing Director of SoundBoard Venture Fund, formerly SoundBoard Angel Fund which he co-founded in 2012 to build a community of experienced entrepreneurs to formally invest in early-stage companies outside the major city centers.",
    },
    {
        id: 8,
        name: "Noboru Yamamura",
        position: "Investor",
        image: "/team/noboru.png",
        alt: "noboru yamamura rednox",
        bio: "A visionary leader guiding the 111-year-old glass manufacturing company, Noboru Yamamura upholds the foundational philosophy and 'Yamamura Spirit' inherited from predecessors. Under his leadership, the company emphasizes monozukuri (the art of manufacturing) to meet customer expectations and aims to remain indispensable for the next century. Committed to societal prosperity, he drives innovation and sustainability while honoring the company&rsquo;s legacy.",
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
    },
    {
        id: 3,
        title: "Strategic Business Partnership Between Nihon Yamamura Glass Co., Ltd. and RedNOx",
        excerpt: "Advancing New Product Development in Mobility and Agriculture Sectors Through Integration of Next-Generation NOx Sensor Technology and Ceramic Manufacturing Expertise",
        date: "2025-05-23",
        slug: "strategic-business-partnership-between-nihon-yamamura-glass-co-ltd-and-rednox",
        image: "/nihon.jpg"
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
        title: "Strategic Business Partnership Between Nihon Yamamura Glass Co., Ltd. and RedNOx",
        excerpt:
            "Advancing New Product Development in Mobility and Agriculture Sectors Through Integration of Next-Generation NOx Sensor Technology and Ceramic Manufacturing Expertise",
        date: "2025-05-23",
        readTime: "5 min read",
        category: "Press Release",
        image: "/nihon.jpg",
        downloadLink: "https://www.nifa.org/",
        downloadCTATitle: "Nihon Yamamura Press Release",
        content: `

    <p><strong>Nihon Yamamura Glass Co., Ltd.</strong> (Headquarters: Amagasaki City, Hyogo Prefecture; President & CEO: Noboru Yamamura; hereinafter "NYG") is pleased to announce the conclusion of a strategic business partnership with <strong>RedNOx Inc.</strong>, a Silicon Valley-based sensor technology startup (Headquarters: Fremont, California, USA; hereinafter "RedNOx").</p>

    <h2>Partnership Overview</h2>
    <p>This partnership is being implemented in conjunction with NYG's participation in RedNOx's $2 million seed investment round, which was oversubscribed. The round also includes participation from Rev1 Ventures (lead investor) and Soundboard Ventures, supporting the commercialization of RedNOx's innovative sensor technologies.</p>

    <h2>RedNOx's Innovative Technology Portfolio</h2>
    <p>RedNOx Inc., founded by Dr. Solomon Ssenyange and based in Fremont, California, is a pioneering Silicon Valley startup in its initial commercial phase, specializing in innovative sensor platforms for greenhouse gases including NOx, N2O, and CO2. The company has established significant partnerships with industry leaders, including a Memorandum of Understanding (MOU) with Cummins Inc. for the development and commercialization of highly sensitive NOx sensors tailored for heavy-duty engine production. RedNOx possesses the following cutting-edge technologies:</p>

    <h3>1. LoNOx Ultra-Sensitive NOx Sensor</h3>
    <ul>
        <li>Achieves measurement of extremely low NOx concentrations below 1ppm with unprecedented accuracy.</li>
        <li>Specifically engineered to be less susceptible to interference by ammonia, addressing a critical issue prevalent with current market NOx sensors.</li>
        <li>Used in heavy duty engine aftertreatment systems across multiple applications.</li>
        <li>Established customer base including major heavy equipment manufacturer Cummins Inc., with engines used in trucks, buses, industrial and marine applications.</li>
        <li>Receiving significant attention for usage in diesel generators used as backup electricity generators for data centers and hospitals.</li>
        <li>Supports legacy OEM manufacturers in meeting stringent future emission requirements.</li>
    </ul>

    <h3>2. AgriNOx System</h3>
    <ul>
        <li>Advanced agricultural IoT system for precise quantification of N2O emissions from fertilizers.</li>
        <li>Recently awarded a USDA NIFA SBIR Phase II grant of $650,000 as part of a $26.8 million investment to support groundbreaking agricultural innovations.</li>
        <li>Features patent-protected electrochemical total NOx sensor and optical N2O sensor designed to meet sub-ppm measurement specifications set forth by regulators.</li>
        <li>Enables farmers to optimize fertilizer management while minimizing greenhouse gas emissions.</li>
        <li>Contributes to fertilizer manufacturers' development of low-GHG emission products.</li>
        <li>Provides additional revenue streams for farmers through NOx credit sales. <span class="note">*Note: N2O has 298 times the greenhouse effect of CO2</span></li>
    </ul>

    <h2>Partnership Objectives and NYG's Manufacturing Excellence</h2>
    <p>Nihon Yamamura Glass Co., Ltd., established in 1914, stands as Japan's leading glass bottle manufacturer with over 110 years of industry expertise and the largest market share in Japan. The company operates four glass bottle production plants with a combined production capacity exceeding 350,000 tons annually, representing the largest scale in Japan. NYG's diverse portfolio extends beyond traditional glass manufacturing to include powdered glass, glass paste, sealing glass, solar panels, batteries, ceramic condensers, LED packages, and advanced materials for automotive and industrial applications.</p>
    <p>Through this strategic partnership, RedNOx's breakthrough sensor technology will be integrated with NYG's long-cultivated ceramic manufacturing expertise and proprietary New Glass sealant technologies. This collaboration will accelerate the development and market introduction of next-generation environmental monitoring products specifically designed for the mobility and agriculture sectors, combining Silicon Valley innovation with Japanese precision manufacturing excellence.</p>

    <h2>Future Development</h2>
    <p>Both companies will collaborate toward the early market introduction of products that contribute to environmental impact reduction, working together to create new value for the realization of a sustainable society.</p>

    <h2>Contact Information for Inquiries</h2>
    <p><strong>Nihon Yamamura Glass Co., Ltd. Public Relations & IR Department</strong><br>
    TEL: +81-6-6487-0001<br>
    Email: <a href="mailto:ir@yamamura-glass.co.jp">ir@yamamura-glass.co.jp</a></p>

    <h2>About RedNOx Inc.</h2>
    <p>RedNOx Inc. is a Silicon Valley-based startup founded by Dr. Solomon Ssenyange and headquartered in Fremont, California. The company specializes in developing innovative sensor platforms for greenhouse gases and environmental monitoring solutions. RedNOx has established partnerships with major industry players including Cummins Inc. and has received significant government funding, including USDA SBIR grants totaling $650,000. As a pioneer in environmental measurement technology, RedNOx is committed to leading the charge towards low to zero-emissions engines, factories, and farmlands, contributing to the realization of a sustainable society.</p>

    <h2>About Nihon Yamamura Glass Co., Ltd.</h2>
    <p>Founded in 1914 and headquartered in Amagasaki, Hyogo Prefecture, Nihon Yamamura Glass Co., Ltd. is Japan's premier glass bottle manufacturer with over 110 years of industry leadership. The company holds the largest market share for glass bottles in Japan and operates four production plants with a combined annual capacity exceeding 350,000 tons. NYG's business portfolio encompasses four main divisions: Glass Bottle Company, Plastics Company, New Glass Company, and Engineering Company, along with comprehensive logistics services. The company's advanced technologies include precision ceramic manufacturing, New Glass sealant technologies, and specialized materials for automotive, electronics, and industrial applications. With international operations spanning China, Thailand, Taiwan, Indonesia, and the Philippines, NYG continues to drive innovation in sustainable packaging solutions and advanced materials technology.</p>`,
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
            bio: "Nihon Yamamura Glass Co., Ltd. is a Japanese company that manufactures and sells glass bottles, plastic containers, and powdered glass. Founded in 1914, the company also operates in the logistics and 'new glass' sectors. It is a strategic partner for RedNOx, with pilot lines in Yokohama, Japan.",
            position: "Venture Capital Firm",
            email: "info@soundboardventurefund.com"
        }
    ]