import { NewsData, PressData, PublicationData, TeamMember, HomePageTranslations, AboutTranslations, BlogPost } from "./types"

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
            value: "-40 … +700 °C "
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
            value: "±5 % @ 0.1-5 ppm"
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
            value: "-10 … +60 °C"
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
        bio: t("bod.members.wayne.bio"),
        linkedin: "https://www.linkedin.com/in/wayne-embree-a07125/"
    },
    {
        id: 8,
        name: "JP Mijares",
        position: "Director",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1759086878/JPM_pic_xhhzfd.jpg",
        alt: "jp mijares rednox",
        bio: t("bod.members.noboru.bio"),
    }
]

export const newsData: Record<string, NewsData[]> = {
    en: [
        {
            id: 6,
            title: "Europe's New Soil Monitoring Law: A Milestone for Soil Health and Food Security",
            excerpt: "Europe has just crossed an important milestone for climate and food security. On 23 October 2025, the European Parliament approved the Soil Monitoring and Resilience Directive – the EU’s first law dedicated to soil health.",
            date: "2025-12-11",
            link: "https://ai4soilhealth.eu",
            slug: "europe-soil-monitoring-law-milestone"
        },
        {
            id: 1,
            title: "RedNOx Awarded USDA NIFA SBIR Phase II Grant to Drive Innovation in Agricultural Emissions Reduction",
            excerpt: "We are thrilled to announce that RedNOx has been awarded a USDA NIFA SBIR Phase II grant of $650,000 as part of a $26.8 million investment to support groundbreaking, small business-led innovations in agriculture. This funding will enable us to advance our N₂O and NOx sensing technologies, specifically aimed at reducing emissions of nitrous oxide and NOx from both synthetic and microbial fertilizers.",
            text: "We are thrilled to announce that RedNOx has been awarded a USDA NIFA SBIR Phase II grant of $650,000 as part of a $26.8 million investment to support groundbreaking, small business-led innovations in agriculture. This funding will enable us to advance our N₂O and NOx sensing technologies, specifically aimed at reducing emissions of nitrous oxide and NOx from both synthetic and microbial fertilizers. This Phase II award underscores the importance of cutting-edge research in addressing critical environmental challenges and brings our technology closer to commercialization. With USDA NIFA's support, RedNOx will continue its mission to enhance agricultural productivity, benefit local communities, and contribute to a cleaner, healthier environment.",
            date: "2024-10-31",
            link: "https://content.govdelivery.com/accounts/USDANIFA/bulletins/3bf56f8",
            slug: "rednox-awarded-usda-nifa-sbir-phase-2"
        },
        {
            id: 2,
            title: "RedNOx Signs MOU with One of the World's Largest Manufacturers of Hydrogen, Diesel, and Natural Gas Engines",
            excerpt: "RedNOx also Secures a Purchase Order from Cummins Inc. for Next-Generation NOx Sensors.",
            date: "2023-09-04",
            link: "https://rednoxinc.com/wp-content/uploads/2023/09/Cummins-Press-Release_August-2023_v2.pdf",
            slug: "rednox-signs-mou-with-cummins"
        },
        {
            id: 3,
            title: "RedNOx Revolution: Unraveling the Next Big Breakthrough in Emissions Reduction - Exclusively on Chemical and Engineering News",
            excerpt: "RedNOx Revolution: Unraveling the Next Big Breakthrough in Emissions Reduction - Exclusively on Chemical and Engineering News",
            date: "2023-08-21",
            link: "https://cen.acs.org/food/agriculture/USDA-funds-food-agriculture-start/101/i29",
            slug: "rednox-revolution-unraveling-the-next-big-breakthrough-in-emission-reduction"
        },
        {
            id: 4,
            title: "RedNOx Awarded SBIR Phase I for its Innovative Greenhouse Gas Measurement Platform",
            excerpt: "FREMONT, Calif., August 28, 2023 (GLOBE NEWSWIRE) — RedNOx Inc., a trailblazer in environmental solid-state sensing technology, is delighted to announce its recent achievement in securing a Phase I Small Business Innovation Research (SBIR) award for its groundbreaking atmosphere and soil greenhouse gas measurement platform.",
            date: "2023-08-28",
            link: "https://rednoxinc.com/wp-content/uploads/2023/08/USDA-Press-Release_August-2023.pdf",
            slug: "rednox-awarded-sbir-phase-1"
        },
        {
            id: 5,
            title: "REDNOX CLOSES FINANCING TO CREATE THE NEXT GENERATION NOx SENSORS FOR LOW TO ZERO EMISSIONS APPLICATIONS",
            excerpt: "RedNOx Inc announced today its launch and the completion of seed financing with Rev1 Ventures Partners.  RedNOx launches with a technology license from OSU to scale solid-state NOx and CO2 sensor technology for clean energy and low to zero emissions vehicles.  RedNOx's LoNOx sensor technology points to a leap in performance and reliability, with parts-per-billion detection capabilities and long-term durability.",
            date: "2022-07-01",
            link: "#",
            slug: "rednox-closes-financing-to-create-the-next-generation-nox-sensors"
        }
    ],
    de: [
        {
            id: 6,
            title: "Europas neues Bodenüberwachungsgesetz: Ein Meilenstein für Bodengesundheit und Ernährungssicherheit",
            excerpt: "Europa hat gerade einen wichtigen Meilenstein für Klima und Ernährungssicherheit erreicht. Am 23. Oktober 2025 hat das Europäische Parlament die Richtlinie zur Bodenüberwachung und Resilienz verabschiedet – das erste EU-Gesetz, das sich der Bodengesundheit widmet.",
            date: "2025-12-11",
            link: "https://ai4soilhealth.eu",
            slug: "europe-soil-monitoring-law-milestone"
        },
        {
            id: 1,
            title: "RedNOx erhält USDA NIFA SBIR Phase II-Förderung zur Förderung von Innovationen bei der Reduzierung landwirtschaftlicher Emissionen",
            excerpt: "Wir freuen uns bekannt zu geben, dass RedNOx im Rahmen einer Investition von 26,8 Millionen Dollar zur Unterstützung bahnbrechender, von kleinen Unternehmen geführter Innovationen in der Landwirtschaft eine USDA NIFA SBIR Phase II-Förderung in Höhe von 650.000 Dollar erhalten hat. Diese Finanzierung ermöglicht es uns, unsere N₂O- und NOx-Sensortechnologien weiterzuentwickeln, die speziell auf die Reduzierung von Distickstoffoxid- und NOx-Emissionen aus synthetischen und mikrobiellen Düngemitteln ausgerichtet sind.",
            text: "Wir freuen uns bekannt zu geben, dass RedNOx im Rahmen einer Investition von 26,8 Millionen Dollar zur Unterstützung bahnbrechender, von kleinen Unternehmen geführter Innovationen in der Landwirtschaft eine USDA NIFA SBIR Phase II-Förderung in Höhe von 650.000 Dollar erhalten hat. Diese Finanzierung ermöglicht es uns, unsere N₂O- und NOx-Sensortechnologien weiterzuentwickeln, die speziell auf die Reduzierung von Distickstoffoxid- und NOx-Emissionen aus synthetischen und mikrobiellen Düngemitteln ausgerichtet sind. Diese Phase II-Auszeichnung unterstreicht die Bedeutung modernster Forschung bei der Bewältigung kritischer Umweltherausforderungen und bringt unsere Technologie der Kommerzialisierung näher. Mit der Unterstützung von USDA NIFA wird RedNOx seine Mission fortsetzen, die landwirtschaftliche Produktivität zu steigern, lokale Gemeinschaften zu unterstützen und zu einer saubereren, gesünderen Umwelt beizutragen.",
            date: "2024-10-31",
            link: "https://content.govdelivery.com/accounts/USDANIFA/bulletins/3bf56f8",
            slug: "rednox-awarded-usda-nifa-sbir-phase-2"
        },
        {
            id: 2,
            title: "RedNOx unterzeichnet Absichtserklärung mit einem der weltweit größten Hersteller von Wasserstoff-, Diesel- und Erdgasmotoren",
            excerpt: "RedNOx sichert sich auch eine Bestellung von Cummins Inc. für NOx-Sensoren der nächsten Generation.",
            date: "2023-09-04",
            link: "https://rednoxinc.com/wp-content/uploads/2023/09/Cummins-Press-Release_August-2023_v2.pdf",
            slug: "rednox-signs-mou-with-cummins"
        },
        {
            id: 3,
            title: "RedNOx Revolution: Der nächste große Durchbruch bei der Emissionsreduzierung - Exklusiv in Chemical and Engineering News",
            excerpt: "RedNOx Revolution: Der nächste große Durchbruch bei der Emissionsreduzierung - Exklusiv in Chemical and Engineering News",
            date: "2023-08-21",
            link: "https://cen.acs.org/food/agriculture/USDA-funds-food-agriculture-start/101/i29",
            slug: "rednox-revolution-unraveling-the-next-big-breakthrough-in-emission-reduction"
        },
        {
            id: 4,
            title: "RedNOx erhält SBIR Phase I für seine innovative Treibhausgas-Messplattform",
            excerpt: "FREMONT, Kalifornien, 28. August 2023 (GLOBE NEWSWIRE) — RedNOx Inc., ein Vorreiter in der umweltfreundlichen Festkörper-Sensortechnologie, freut sich, die kürzliche Auszeichnung mit einem Phase I Small Business Innovation Research (SBIR)-Award für seine bahnbrechende Atmosphären- und Boden-Treibhausgas-Messplattform bekannt zu geben.",
            date: "2023-08-28",
            link: "https://rednoxinc.com/wp-content/uploads/2023/08/USDA-Press-Release_August-2023.pdf",
            slug: "rednox-awarded-sbir-phase-1"
        },
        {
            id: 5,
            title: "REDNOX SCHLIESST FINANZIERUNG ZUR ENTWICKLUNG DER NÄCHSTEN GENERATION VON NOx-SENSOREN FÜR NIEDRIG- BIS NULL-EMISSIONS-ANWENDUNGEN AB",
            excerpt: "RedNOx Inc. gab heute seine Gründung und den Abschluss der Seed-Finanzierung mit Rev1 Ventures Partners bekannt. RedNOx startet mit einer Technologielizenz von OSU zur Skalierung der Festkörper-NOx- und CO2-Sensortechnologie für saubere Energie und Fahrzeuge mit niedrigen bis null Emissionen. Die LoNOx-Sensortechnologie von RedNOx deutet auf einen Leistungs- und Zuverlässigkeitssprung hin, mit Erkennungsfähigkeiten im Teile-pro-Milliarde-Bereich und langfristiger Haltbarkeit.",
            date: "2022-07-01",
            link: "#",
            slug: "rednox-closes-financing-to-create-the-next-generation-nox-sensors"
        }
    ],
    ja: [
        {
            id: 6,
            title: "欧州の新しい土壌監視法：土壌の健康と食料安全保障のためのマイルストーン",
            excerpt: "欧州は、気候と食料安全保障のための重要なマイルストーンを達成しました。2025年10月23日、欧州議会は土壌監視およびレジリエンス指令を承認しました。これは、土壌の健康に特化したEU初の法律です。",
            date: "2025-12-11",
            link: "https://ai4soilhealth.eu",
            slug: "europe-soil-monitoring-law-milestone"
        },
        {
            id: 1,
            title: "RedNOxが農業排出削減のイノベーション推進のためUSDA NIFA SBIRフェーズII助成金を獲得",
            excerpt: "農業における画期的な中小企業主導のイノベーションを支援する2,680万ドルの投資の一環として、RedNOxが65万ドルのUSDA NIFA SBIRフェーズII助成金を獲得したことを発表できることを嬉しく思います。この資金により、合成および微生物肥料からの亜酸化窒素およびNOx排出の削減を特に目的とした当社のN₂OおよびNOxセンシング技術を進化させることができます。",
            text: "農業における画期的な中小企業主導のイノベーションを支援する2,680万ドルの投資の一環として、RedNOxが65万ドルのUSDA NIFA SBIRフェーズII助成金を獲得したことを発表できることを嬉しく思います。この資金により、合成および微生物肥料からの亜酸化窒素およびNOx排出の削減を特に目的とした当社のN₂OおよびNOxセンシング技術を進化させることができます。このフェーズII賞は、重要な環境課題への対処における最先端研究の重要性を強調し、当社の技術を商業化に近づけます。USDA NIFAの支援により、RedNOxは農業生産性の向上、地域社会への貢献、よりクリーンで健康的な環境への貢献という使命を継続します。",
            date: "2024-10-31",
            link: "https://content.govdelivery.com/accounts/USDANIFA/bulletins/3bf56f8",
            slug: "rednox-awarded-usda-nifa-sbir-phase-2"
        },
        {
            id: 2,
            title: "RedNOxが世界最大級の水素、ディーゼル、天然ガスエンジンメーカーの1社と覚書を締結",
            excerpt: "RedNOxはまた、次世代NOxセンサーについてCummins Inc.から発注書を確保しました。",
            date: "2023-09-04",
            link: "https://rednoxinc.com/wp-content/uploads/2023/09/Cummins-Press-Release_August-2023_v2.pdf",
            slug: "rednox-signs-mou-with-cummins"
        },
        {
            id: 3,
            title: "RedNOx革命: 排出削減における次の大きな突破口を解き明かす - Chemical and Engineering Newsで独占公開",
            excerpt: "RedNOx革命: 排出削減における次の大きな突破口を解き明かす - Chemical and Engineering Newsで独占公開",
            date: "2023-08-21",
            link: "https://cen.acs.org/food/agriculture/USDA-funds-food-agriculture-start/101/i29",
            slug: "rednox-revolution-unraveling-the-next-big-breakthrough-in-emission-reduction"
        },
        {
            id: 4,
            title: "RedNOxが画期的な温室効果ガス測定プラットフォームでSBIRフェーズIを受賞",
            excerpt: "カリフォルニア州フリーモント、2023年8月28日 (GLOBE NEWSWIRE) — 環境固体センシング技術のパイオニアであるRedNOx Inc.は、画期的な大気および土壌温室効果ガス測定プラットフォームでフェーズI中小企業技術革新研究 (SBIR) 賞を獲得したことを発表できることを嬉しく思います。",
            date: "2023-08-28",
            link: "https://rednoxinc.com/wp-content/uploads/2023/08/USDA-Press-Release_August-2023.pdf",
            slug: "rednox-awarded-sbir-phase-1"
        },
        {
            id: 5,
            title: "REDNOXが低排出から無排出アプリケーション向け次世代NOxセンサー開発のための資金調達を完了",
            excerpt: "RedNOx Inc.は本日、Rev1 Ventures Partnersとのシード資金調達の完了と立ち上げを発表しました。RedNOxは、クリーンエネルギーおよび低排出から無排出車両向けの固体NOxおよびCO2センサー技術を拡大するためのOSUからの技術ライセンスで開始します。RedNOxのLoNOxセンサー技術は、10億分の1の検出能力と長期耐久性により、性能と信頼性の飛躍を示しています。",
            date: "2022-07-01",
            link: "#",
            slug: "rednox-closes-financing-to-create-the-next-generation-nox-sensors"
        }
    ]
}

export const newsArticles: Record<string, Record<string, BlogPost>> = {
    en: {
        "rednox-awarded-usda-nifa-sbir-phase-2": {
            title: "RedNOx Awarded USDA NIFA SBIR Phase II Grant to Drive Innovation in Agricultural Emissions Reduction",
            excerpt: "We are thrilled to announce that RedNOx has been awarded a USDA NIFA SBIR Phase II grant of $650,000 as part of a $26.8 million investment to support groundbreaking, small business-led innovations in agriculture. This funding will enable us to advance our N₂O and NOx sensing technologies, specifically aimed at reducing emissions of nitrous oxide and NOx from both synthetic and microbial fertilizers.",
            date: "2024-10-31",
            readTime: "2 mins",
            image: "/usda.jpg",
            category: "New release",
            downloadLink: "https://content.govdelivery.com/accounts/USDANIFA/bulletins/3bf56f8",
            downloadCTATitle: "NIFA Press Release",
            content: `
            <p>We are thrilled to announce that RedNOx has been awarded a USDA NIFA SBIR Phase II grant of $650,000 as part of a $26.8 million investment to support groundbreaking, small business-led innovations in agriculture. This funding will enable us to advance our N₂O and NOx sensing technologies, specifically aimed at reducing emissions of nitrous oxide and NOx from both synthetic and microbial fertilizers.
            This Phase II award underscores the importance of cutting-edge research in addressing critical environmental challenges and brings our technology closer to commercialization. With USDA NIFA's support, RedNOx will continue its mission to enhance agricultural productivity, benefit local communities, and contribute to a cleaner, healthier environment.</p>
            `
        },
        "rednox-signs-mou-with-cummins": {
            title: "RedNOx Signs MOU with One of the World's Largest Manufacturers of Hydrogen, Diesel, and Natural Gas Engines",
            excerpt: "RedNOx also Secures a Purchase Order from Cummins Inc. for Next-Generation NOx Sensors.",
            date: "2023-09-04",
            downloadLink: "/Cummins-Press-Release_August-2023_v2.pdf",
            downloadCTATitle: "Cummins Press Release",
            readTime: "6 mins",
            image: "",
            category: "News Release",
            content: `
<p>FREMONT, Calif., September 4, 2023 (PRWeb) -- RedNOx Inc. ("RedNOx") is proud to announce a significant step in its collaboration with Cummins Inc. The Fremont, CA-based sensor start-up has signed a Memorandum of Understanding (MOU) for the development and commercialization of highly sensitive (parts-per-billion) NO sensors tailored for heavy-duty engine production. Cummins' engines are used in a wide range of applications, from trucks and buses to industrial and marine purposes. RedNOx's NOx&nbsp;sensors are specifically engineered to be less susceptible to interference by ammonia, an issue prevalent with current on-market NOx&nbsp;sensors.</p>

<p>Dr. Solomon Ssenyange, CEO of RedNOx, commented:</p>
  <p>"We're at the forefront of NOx detection technology. This collaboration and the subsequent purchase order from Cummins Inc. for our NOx&nbsp;sensor used in exhaust gas monitoring and control are testaments to the innovation and reliability of our products."</p>

<p>The MOU expands upon Cummins' initial evaluation of RedNOx's NOx&nbsp;sensor technology and their trust in its performance based on benchtop-gas tests. This agreement sets the stage for deeper collaboration between both companies.</p>

<p>If technical and business talks go well, Cummins and RedNOx aim to integrate RedNOx's advanced sensors into various products within Cummins family of products.</p>

<p>"This is an exciting opportunity to collaborate with a global market leader," added Dr. Ssenyange. "While we have several milestones to achieve until we reach a product launch, this MOU demonstrates a meaningful step forward on both sides," added Dr. Ssenyange.</p>
            `
        },
        "rednox-revolution-unraveling-the-next-big-breakthrough-in-emission-reduction": {
            title: "RedNOx Revolution: Unraveling the Next Big Breakthrough in Emissions Reduction - Exclusively on Chemical and Engineering News",
            excerpt: "RedNOx Revolution: Unraveling the Next Big Breakthrough in Emissions Reduction - Exclusively on Chemical and Engineering News",
            date: "2023-08-21",
            downloadLink: "https://cen.acs.org/food/agriculture/USDA-funds-food-agriculture-start/101/i29",
            downloadCTATitle: "Read Article",
            isNewsArticle: true,
            readTime: "2 mins",
            image: "",
            category: "News Release",
            content: ``
        },
        "rednox-awarded-sbir-phase-1": {
            title: "RedNOx Awarded SBIR Phase I for its Innovative Greenhouse Gas Measurement Platform",
            excerpt: "FREMONT, Calif., August 28, 2023 (GLOBE NEWSWIRE) — RedNOx Inc., a trailblazer in environmental solid-state sensing technology, is delighted to announce its recent achievement in securing a Phase I Small Business Innovation Research (SBIR) award for its groundbreaking atmosphere and soil greenhouse gas measurement platform.",
            date: "2023-08-28",
            downloadLink: "/USDA-Press-Release_August-2023.pdf",
            downloadCTATitle: "USDA Press Release",
            image: "/usda.jpg",
            readTime: "5 mins",
            category: "News Release",
            content: `
<p>FREMONT, Calif., August 28, 2023 (GLOBE NEWSWIRE) -- RedNOx Inc., a trailblazer in environmental solid-state sensing technology, is delighted to announce its recent achievement in securing a Phase I Small Business Innovation Research (SBIR) award for its groundbreaking atmosphere and soil greenhouse gas measurement platform.</p>

<p>RedNOx's unique platform measures nitrous oxide (N2O), nitrogen oxides (NOx), and carbon dioxide (CO2) emissions both in the atmosphere and the soil. For agriculturalists, farmer and energy producer, the platform simplifies the process of monitoring, reporting, and verifying these gas levels, ensuring accurate tracking of net negative carbon and NOx emissions. In the future, its integrated software will aggregate all the data and automatically generate the necessary documentation, enabling agricultural producers, factories and fuel using energy producer to easily engage in both the carbon and NOx&nbsp;credit markets. This advancement could boost farmers' incomes while encouraging sustainable agricultural practices.</p>

<p>RedNOx's CEO, Dr. Solomon Ssenyange, stated:</p>
  <p>"Receiving this award reaffirms our dedication to developing solutions that prioritize environmental sustainability and offer economic benefits to agriculture. Our sensor technology not only enhances soil health and food production but also promotes the reduction of carbon and NOx&nbsp;emissions."</p>

<p>The announcement from RedNOx comes in the wake of the USDA's official press release on the recent Phase I Awards, further details of which can be accessed <a href="#">here</a>. RedNOx extends its gratitude to the USDA and the SBIR/STTR Office for recognizing and supporting initiatives that drive tech innovation in food and agriculture.</p>

<p>For those with inquiries concerning the award or RedNOx's ambient and soil greenhouse gas measurement platform, you're encouraged to reach out to the company directly or to the SBIR/STTR Office for broader questions regarding the program.</p>
            `
        },
        "rednox-closes-financing-to-create-the-next-generation-nox-sensors": {
            title: "REDNOX CLOSES FINANCING TO CREATE THE NEXT GENERATION NOx SENSORS FOR LOW TO ZERO EMISSIONS APPLICATIONS",
            excerpt: "RedNOx Inc announced today its launch and the completion of seed financing with Rev1 Ventures Partners.  RedNOx launches with a technology license from OSU to scale solid-state NOx and CO2 sensor technology for clean energy and low to zero emissions vehicles.  RedNOx's LoNOx sensor technology points to a leap in performance and reliability, with parts-per-billion detection capabilities and long-term durability.",
            date: "2022-07-01",
            readTime: "5 mins",
            category: "News release",
            content: `
            <p>RedNOx Inc announced today its launch and the completion of seed financing with Rev1 Ventures Partners.  RedNOx launches with a technology license from OSU to scale solid-state NOx and CO2 sensor technology for clean energy and low to zero emissions vehicles.  RedNOx's LoNOx sensor technology points to a leap in performance and reliability, with parts-per-billion detection capabilities and long-term durability.</p>`
        }
    },
    de: {
        "rednox-awarded-usda-nifa-sbir-phase-2": {
            title: "RedNOx erhält USDA NIFA SBIR Phase II-Förderung zur Förderung von Innovationen bei der Reduzierung landwirtschaftlicher Emissionen",
            excerpt: "Wir freuen uns bekannt zu geben, dass RedNOx im Rahmen einer Investition von 26,8 Millionen Dollar zur Unterstützung bahnbrechender, von kleinen Unternehmen geführter Innovationen in der Landwirtschaft eine USDA NIFA SBIR Phase II-Förderung in Höhe von 650.000 Dollar erhalten hat. Diese Finanzierung ermöglicht es uns, unsere N₂O- und NOx-Sensortechnologien weiterzuentwickeln, die speziell auf die Reduzierung von Distickstoffoxid- und NOx-Emissionen aus synthetischen und mikrobiellen Düngemitteln ausgerichtet sind.",
            date: "2024-10-31",
            readTime: "2 mins",
            image: "/usda.jpg",
            category: "Neue Veröffentlichung",
            downloadLink: "https://content.govdelivery.com/accounts/USDANIFA/bulletins/3bf56f8",
            downloadCTATitle: "NIFA Pressemitteilung",
            content: `
            <p>Wir freuen uns bekannt zu geben, dass RedNOx im Rahmen einer Investition von 26,8 Millionen Dollar zur Unterstützung bahnbrechender, von kleinen Unternehmen geführter Innovationen in der Landwirtschaft eine USDA NIFA SBIR Phase II-Förderung in Höhe von 650.000 Dollar erhalten hat. Diese Finanzierung ermöglicht es uns, unsere N₂O- und NOx-Sensortechnologien weiterzuentwickeln, die speziell auf die Reduzierung von Distickstoffoxid- und NOx-Emissionen aus synthetischen und mikrobiellen Düngemitteln ausgerichtet sind.
            Diese Phase II-Auszeichnung unterstreicht die Bedeutung modernster Forschung bei der Bewältigung kritischer Umweltherausforderungen und bringt unsere Technologie der Kommerzialisierung näher. Mit der Unterstützung von USDA NIFA wird RedNOx seine Mission fortsetzen, die landwirtschaftliche Produktivität zu steigern, lokale Gemeinschaften zu unterstützen und zu einer saubereren, gesünderen Umwelt beizutragen.</p>
            `
        },
        "rednox-signs-mou-with-cummins": {
            title: "RedNOx unterzeichnet Absichtserklärung mit einem der weltweit größten Hersteller von Wasserstoff-, Diesel- und Erdgasmotoren",
            excerpt: "RedNOx sichert sich auch eine Bestellung von Cummins Inc. für NOx-Sensoren der nächsten Generation.",
            date: "2023-09-04",
            downloadLink: "/Cummins-Press-Release_August-2023_v2.pdf",
            downloadCTATitle: "Cummins Pressemitteilung",
            readTime: "6 mins",
            image: "",
            category: "Pressemitteilung",
            content: `
<p>FREMONT, Kalifornien, 4. September 2023 (PRWeb) -- RedNOx Inc. ("RedNOx") freut sich, einen bedeutenden Schritt in seiner Zusammenarbeit mit Cummins Inc. bekannt zu geben. Das in Fremont, Kalifornien ansässige Sensor-Start-up hat eine Absichtserklärung (MOU) für die Entwicklung und Kommerzialisierung hochempfindlicher (Teile pro Milliarde) NO-Sensoren unterzeichnet, die für die Produktion von Schwerlastmotoren maßgeschneidert sind. Die Motoren von Cummins werden in einer Vielzahl von Anwendungen eingesetzt, von Lastwagen und Bussen bis hin zu industriellen und maritimen Zwecken. Die NOx&nbsp;-Sensoren von RedNOx sind speziell entwickelt, um weniger anfällig für Interferenzen durch Ammoniak zu sein, ein Problem, das bei den derzeit auf dem Markt befindlichen NOx&nbsp;-Sensoren vorherrscht.</p>

<p>Dr. Solomon Ssenyange, CEO von RedNOx, kommentierte:</p>
  <p>"Wir stehen an der Spitze der NOx-Detektionstechnologie. Diese Zusammenarbeit und die anschließende Bestellung von Cummins Inc. für unseren NOx&nbsp;-Sensor, der zur Überwachung und Kontrolle von Abgasen verwendet wird, sind Zeugnisse für die Innovation und Zuverlässigkeit unserer Produkte."</p>

<p>Die Absichtserklärung baut auf der ersten Bewertung der NOx&nbsp;-Sensortechnologie von RedNOx durch Cummins und ihrem Vertrauen in ihre Leistung auf der Grundlage von Labortests auf. Diese Vereinbarung bildet die Grundlage für eine tiefere Zusammenarbeit zwischen beiden Unternehmen.</p>

<p>Wenn die technischen und geschäftlichen Gespräche gut verlaufen, wollen Cummins und RedNOx die fortschrittlichen Sensoren von RedNOx in verschiedene Produkte innerhalb der Cummins-Produktfamilie integrieren.</p>

<p>"Dies ist eine aufregende Gelegenheit, mit einem globalen Marktführer zusammenzuarbeiten", fügte Dr. Ssenyange hinzu. "Während wir mehrere Meilensteine erreichen müssen, bis wir eine Produkteinführung erreichen, demonstriert diese Absichtserklärung einen bedeutenden Schritt nach vorne auf beiden Seiten", fügte Dr. Ssenyange hinzu.</p>
            `
        },
        "rednox-revolution-unraveling-the-next-big-breakthrough-in-emission-reduction": {
            title: "RedNOx Revolution: Der nächste große Durchbruch bei der Emissionsreduzierung - Exklusiv in Chemical and Engineering News",
            excerpt: "RedNOx Revolution: Der nächste große Durchbruch bei der Emissionsreduzierung - Exklusiv in Chemical and Engineering News",
            date: "2023-08-21",
            downloadLink: "https://cen.acs.org/food/agriculture/USDA-funds-food-agriculture-start/101/i29",
            downloadCTATitle: "Artikel lesen",
            isNewsArticle: true,
            readTime: "2 mins",
            image: "",
            category: "Pressemitteilung",
            content: ``
        },
        "rednox-awarded-sbir-phase-1": {
            title: "RedNOx erhält SBIR Phase I für seine innovative Treibhausgas-Messplattform",
            excerpt: "FREMONT, Kalifornien, 28. August 2023 (GLOBE NEWSWIRE) — RedNOx Inc., ein Vorreiter in der umweltfreundlichen Festkörper-Sensortechnologie, freut sich, die kürzliche Auszeichnung mit einem Phase I Small Business Innovation Research (SBIR)-Award für seine bahnbrechende Atmosphären- und Boden-Treibhausgas-Messplattform bekannt zu geben.",
            date: "2023-08-28",
            downloadLink: "/USDA-Press-Release_August-2023.pdf",
            downloadCTATitle: "USDA Pressemitteilung",
            image: "/usda.jpg",
            readTime: "5 mins",
            category: "Pressemitteilung",
            content: `
<p>FREMONT, Kalifornien, 28. August 2023 (GLOBE NEWSWIRE) -- RedNOx Inc., ein Vorreiter in der umweltfreundlichen Festkörper-Sensortechnologie, freut sich, die kürzliche Auszeichnung mit einem Phase I Small Business Innovation Research (SBIR)-Award für seine bahnbrechende Atmosphären- und Boden-Treibhausgas-Messplattform bekannt zu geben.</p>

<p>Die einzigartige Plattform von RedNOx misst Distickstoffoxid (N2O), Stickoxide (NOx) und Kohlendioxid (CO2)-Emissionen sowohl in der Atmosphäre als auch im Boden. Für Landwirte, Farmer und Energieproduzenten vereinfacht die Plattform den Prozess der Überwachung, Berichterstattung und Verifizierung dieser Gaswerte und gewährleistet eine genaue Verfolgung der Netto-Negativ-Kohlenstoff- und NOx-Emissionen. In Zukunft wird die integrierte Software alle Daten aggregieren und automatisch die erforderliche Dokumentation erstellen, wodurch landwirtschaftliche Produzenten, Fabriken und kraftstoffnutzende Energieproduzenten einfach an Kohlenstoff- und NOx&nbsp;-Kreditmärkten teilnehmen können. Dieser Fortschritt könnte das Einkommen der Landwirte steigern und gleichzeitig nachhaltige landwirtschaftliche Praktiken fördern.</p>

<p>Dr. Solomon Ssenyange, CEO von RedNOx, erklärte:</p>
  <p>"Diese Auszeichnung bestätigt unser Engagement für die Entwicklung von Lösungen, die Umweltnachhaltigkeit priorisieren und wirtschaftliche Vorteile für die Landwirtschaft bieten. Unsere Sensortechnologie verbessert nicht nur die Bodengesundheit und Lebensmittelproduktion, sondern fördert auch die Reduzierung von Kohlenstoff- und NOx&nbsp;-Emissionen."</p>

<p>Die Ankündigung von RedNOx folgt auf die offizielle Pressemitteilung des USDA zu den kürzlichen Phase I Awards, weitere Details dazu finden Sie <a href="#">hier</a>. RedNOx dankt dem USDA und dem SBIR/STTR Office für die Anerkennung und Unterstützung von Initiativen, die technologische Innovation in Lebensmitteln und Landwirtschaft vorantreiben.</p>

<p>Für Anfragen bezüglich der Auszeichnung oder der Atmosphären- und Boden-Treibhausgas-Messplattform von RedNOx wenden Sie sich bitte direkt an das Unternehmen oder an das SBIR/STTR Office für allgemeinere Fragen zum Programm.</p>
            `
        },
        "rednox-closes-financing-to-create-the-next-generation-nox-sensors": {
            title: "REDNOX SCHLIESST FINANZIERUNG ZUR ENTWICKLUNG DER NÄCHSTEN GENERATION VON NOx-SENSOREN FÜR NIEDRIG- BIS NULL-EMISSIONS-ANWENDUNGEN AB",
            excerpt: "RedNOx Inc. gab heute seine Gründung und den Abschluss der Seed-Finanzierung mit Rev1 Ventures Partners bekannt. RedNOx startet mit einer Technologielizenz von OSU zur Skalierung der Festkörper-NOx- und CO2-Sensortechnologie für saubere Energie und Fahrzeuge mit niedrigen bis null Emissionen. Die LoNOx-Sensortechnologie von RedNOx deutet auf einen Leistungs- und Zuverlässigkeitssprung hin, mit Erkennungsfähigkeiten im Teile-pro-Milliarde-Bereich und langfristiger Haltbarkeit.",
            date: "2022-07-01",
            readTime: "5 mins",
            category: "Pressemitteilung",
            content: `
            <p>RedNOx Inc. gab heute seine Gründung und den Abschluss der Seed-Finanzierung mit Rev1 Ventures Partners bekannt. RedNOx startet mit einer Technologielizenz von OSU zur Skalierung der Festkörper-NOx- und CO2-Sensortechnologie für saubere Energie und Fahrzeuge mit niedrigen bis null Emissionen. Die LoNOx-Sensortechnologie von RedNOx deutet auf einen Leistungs- und Zuverlässigkeitssprung hin, mit Erkennungsfähigkeiten im Teile-pro-Milliarde-Bereich und langfristiger Haltbarkeit.</p>`
        }
    },
    ja: {
        "rednox-awarded-usda-nifa-sbir-phase-2": {
            title: "RedNOxが農業排出削減のイノベーション推進のためUSDA NIFA SBIRフェーズII助成金を獲得",
            excerpt: "農業における画期的な中小企業主導のイノベーションを支援する2,680万ドルの投資の一環として、RedNOxが65万ドルのUSDA NIFA SBIRフェーズII助成金を獲得したことを発表できることを嬉しく思います。この資金により、合成および微生物肥料からの亜酸化窒素およびNOx排出の削減を特に目的とした当社のN₂OおよびNOxセンシング技術を進化させることができます。",
            date: "2024-10-31",
            readTime: "2 mins",
            image: "/usda.jpg",
            category: "新リリース",
            downloadLink: "https://content.govdelivery.com/accounts/USDANIFA/bulletins/3bf56f8",
            downloadCTATitle: "NIFAプレスリリース",
            content: `
            <p>農業における画期的な中小企業主導のイノベーションを支援する2,680万ドルの投資の一環として、RedNOxが65万ドルのUSDA NIFA SBIRフェーズII助成金を獲得したことを発表できることを嬉しく思います。この資金により、合成および微生物肥料からの亜酸化窒素およびNOx排出の削減を特に目的とした当社のN₂OおよびNOxセンシング技術を進化させることができます。
            このフェーズII賞は、重要な環境課題への対処における最先端研究の重要性を強調し、当社の技術を商業化に近づけます。USDA NIFAの支援により、RedNOxは農業生産性の向上、地域社会への貢献、よりクリーンで健康的な環境への貢献という使命を継続します。</p>
            `
        },
        "rednox-signs-mou-with-cummins": {
            title: "RedNOxが世界最大級の水素、ディーゼル、天然ガスエンジンメーカーの1社と覚書を締結",
            excerpt: "RedNOxはまた、次世代NOxセンサーについてCummins Inc.から発注書を確保しました。",
            date: "2023-09-04",
            downloadLink: "/Cummins-Press-Release_August-2023_v2.pdf",
            downloadCTATitle: "Cumminsプレスリリース",
            readTime: "6 mins",
            image: "",
            category: "プレスリリース",
            content: `
<p>カリフォルニア州フリーモント、2023年9月4日 (PRWeb) -- RedNOx Inc. ("RedNOx") は、Cummins Inc.との協力における重要な一歩を発表できることを誇りに思います。カリフォルニア州フリーモントに拠点を置くセンサースタートアップは、重負荷エンジン生産に特化した高感度（10億分の1）NOセンサーの開発と商業化のための覚書（MOU）に署名しました。Cumminsのエンジンは、トラックやバスから産業および海洋用途まで、幅広い用途で使用されています。RedNOxのNOx&nbsp;センサーは、現在市場に出回っているNOx&nbsp;センサーで一般的な問題であるアンモニアによる干渉を受けにくいように特別に設計されています。</p>

<p>RedNOxのCEOであるSolomon Ssenyange博士はコメントしました：</p>
  <p>「私たちはNOx検出技術の最前線にいます。この協力と、排気ガス監視および制御に使用される当社のNOx&nbsp;センサーについてのCummins Inc.からの発注書は、当社製品の革新性と信頼性の証です。」</p>

<p>この覚書は、RedNOxのNOx&nbsp;センサー技術に対するCumminsの最初の評価と、ベンチトップガステストに基づくその性能への信頼を拡大するものです。この契約は、両社間のより深い協力の舞台を整えます。</p>

<p>技術的およびビジネス上の交渉がうまくいけば、CumminsとRedNOxは、RedNOxの先進的なセンサーをCummins製品ファミリーのさまざまな製品に統合することを目指しています。</p>

<p>「これはグローバル市場のリーダーと協力するエキサイティングな機会です」と、Ssenyange博士は付け加えました。「製品発売まで達成すべき複数のマイルストーンがありますが、この覚書は双方にとって意味のある前進を示しています」と、Ssenyange博士は付け加えました。</p>
            `
        },
        "rednox-revolution-unraveling-the-next-big-breakthrough-in-emission-reduction": {
            title: "RedNOx革命: 排出削減における次の大きな突破口を解き明かす - Chemical and Engineering Newsで独占公開",
            excerpt: "RedNOx革命: 排出削減における次の大きな突破口を解き明かす - Chemical and Engineering Newsで独占公開",
            date: "2023-08-21",
            downloadLink: "https://cen.acs.org/food/agriculture/USDA-funds-food-agriculture-start/101/i29",
            downloadCTATitle: "記事を読む",
            isNewsArticle: true,
            readTime: "2 mins",
            image: "",
            category: "プレスリリース",
            content: ``
        },
        "rednox-awarded-sbir-phase-1": {
            title: "RedNOxが画期的な温室効果ガス測定プラットフォームでSBIRフェーズIを受賞",
            excerpt: "カリフォルニア州フリーモント、2023年8月28日 (GLOBE NEWSWIRE) — 環境固体センシング技術のパイオニアであるRedNOx Inc.は、画期的な大気および土壌温室効果ガス測定プラットフォームでフェーズI中小企業技術革新研究 (SBIR) 賞を獲得したことを発表できることを嬉しく思います。",
            date: "2023-08-28",
            downloadLink: "/USDA-Press-Release_August-2023.pdf",
            downloadCTATitle: "USDAプレスリリース",
            image: "/usda.jpg",
            readTime: "5 mins",
            category: "プレスリリース",
            content: `
<p>カリフォルニア州フリーモント、2023年8月28日 (GLOBE NEWSWIRE) -- 環境固体センシング技術のパイオニアであるRedNOx Inc.は、画期的な大気および土壌温室効果ガス測定プラットフォームでフェーズI中小企業技術革新研究 (SBIR) 賞を獲得したことを発表できることを嬉しく思います。</p>

<p>RedNOxのユニークなプラットフォームは、大気と土壌の両方で亜酸化窒素 (N2O)、窒素酸化物 (NOx)、二酸化炭素 (CO2) の排出量を測定します。農業従事者、農家、エネルギー生産者にとって、このプラットフォームはこれらのガスレベルの監視、報告、検証のプロセスを簡素化し、正味マイナス炭素およびNOx排出量の正確な追跡を保証します。将来的には、統合ソフトウェアがすべてのデータを集約し、必要な文書を自動的に生成することで、農業生産者、工場、燃料を使用するエネルギー生産者が炭素およびNOx&nbsp;クレジット市場に簡単に参加できるようになります。この進歩により、持続可能な農業慣行を奨励しながら、農家の収入を増やすことができます。</p>

<p>RedNOxのCEOであるSolomon Ssenyange博士は次のように述べています：</p>
  <p>「この賞は、環境の持続可能性を優先し、農業に経済的利益を提供するソリューションの開発への私たちの献身を再確認するものです。当社のセンサー技術は、土壌の健康と食料生産を向上させるだけでなく、炭素およびNOx&nbsp;排出量の削減も促進します。」</p>

<p>RedNOxの発表は、最近のフェーズI賞に関するUSDAの公式プレスリリースに続くものです。詳細については<a href="#">こちら</a>をご覧ください。RedNOxは、食品と農業における技術革新を推進する取り組みを認識し、支援してくれたUSDAとSBIR/STTRオフィスに感謝の意を表します。</p>

<p>この賞またはRedNOxの大気および土壌温室効果ガス測定プラットフォームに関するお問い合わせは、会社に直接お問い合わせいただくか、プログラムに関する一般的な質問についてはSBIR/STTRオフィスにお問い合わせください。</p>
            `
        },
        "rednox-closes-financing-to-create-the-next-generation-nox-sensors": {
            title: "REDNOXが低排出から無排出アプリケーション向け次世代NOxセンサー開発のための資金調達を完了",
            excerpt: "RedNOx Inc.は本日、Rev1 Ventures Partnersとのシード資金調達の完了と立ち上げを発表しました。RedNOxは、クリーンエネルギーおよび低排出から無排出車両向けの固体NOxおよびCO2センサー技術を拡大するためのOSUからの技術ライセンスで開始します。RedNOxのLoNOxセンサー技術は、10億分の1の検出能力と長期耐久性により、性能と信頼性の飛躍を示しています。",
            date: "2022-07-01",
            readTime: "5 mins",
            category: "プレスリリース",
            content: `
            <p>RedNOx Inc.は本日、Rev1 Ventures Partnersとのシード資金調達の完了と立ち上げを発表しました。RedNOxは、クリーンエネルギーおよび低排出から無排出車両向けの固体NOxおよびCO2センサー技術を拡大するためのOSUからの技術ライセンスで開始します。RedNOxのLoNOxセンサー技術は、10億分の1の検出能力と長期耐久性により、性能と信頼性の飛躍を示しています。</p>`
        }
    }
}

export const pressData: Record<string, PressData[]> = {
    en: [
        {
            id: 1,
            title: "RedNOx Partners with Nihon Yamamura Glass, Secures $2M to Revolutionize Emissions Monitoring",
            excerpt: "We're excited to announce that RedNOx Inc. has expanded its partnership with Nihon Yamamura Glass (NYG), a leading Japanese ceramics and glass manufacturer.",
            date: "2025-10-08",
            slug: "strategic-business-partnership-between-nihon-yamamura-glass-co-ltd-and-rednox",
            image: "/nihon.jpg"
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
            title: "RedNOx Awarded SBIR Phase I for its Innovative Greenhouse Gas Measurement Platform",
            excerpt: "FREMONT, Calif., August 28, 2023 (GLOBE NEWSWIRE) -- RedNOx Inc., a trailblazer in environmental solid-state sensing technology, is delighted to announce its recent achievement in securing a Phase I Small Business Innovation Research (SBIR) award for its groundbreaking atmosphere and soil greenhouse gas measurement platform.",
            date: "2023-08-23",
            slug: "rednox-awarded-sbir-phase-i-for-its-innovative-greenhouse-gas-measurement-platform",
            image: "/usda.jpg"
        }
    ],
    de: [
        {
            id: 1,
            title: "RedNOx geht Partnerschaft mit Nihon Yamamura Glass ein und sichert sich 2 Millionen Dollar zur Revolutionierung der Emissionsüberwachung",
            excerpt: "Wir freuen uns bekannt zu geben, dass RedNOx Inc. seine Partnerschaft mit Nihon Yamamura Glass (NYG), einem führenden japanischen Keramik- und Glashersteller, erweitert hat.",
            date: "2025-10-08",
            slug: "strategic-business-partnership-between-nihon-yamamura-glass-co-ltd-and-rednox",
            image: "/nihon.jpg"
        },
        {
            id: 2,
            title: "RedNOx erhält USDA NIFA SBIR Phase II-Förderung zur Förderung von Innovationen bei der Reduzierung landwirtschaftlicher Emissionen",
            excerpt: "Wir freuen uns bekannt zu geben, dass RedNOx im Rahmen einer Investition von 26,8 Millionen Dollar zur Unterstützung bahnbrechender, von kleinen Unternehmen geführter Innovationen in der Landwirtschaft eine USDA NIFA SBIR Phase II-Förderung in Höhe von 650.000 Dollar erhalten hat.",
            date: "2024-10-31",
            slug: "rednox-awarded-usda-nifa-sbir-phase-ii-grant-to-drive-innovation-in-agricultural-emissions-reduction",
            image: "/us.jpg"
        },
        {
            id: 3,
            title: "RedNOx erhält SBIR Phase I für seine innovative Treibhausgas-Messplattform",
            excerpt: "FREMONT, Kalifornien, 28. August 2023 (GLOBE NEWSWIRE) -- RedNOx Inc., ein Vorreiter in der umweltfreundlichen Festkörper-Sensortechnologie, freut sich, die kürzliche Auszeichnung mit einem Phase I Small Business Innovation Research (SBIR)-Award für seine bahnbrechende Atmosphären- und Boden-Treibhausgas-Messplattform bekannt zu geben.",
            date: "2023-08-23",
            slug: "rednox-awarded-sbir-phase-i-for-its-innovative-greenhouse-gas-measurement-platform",
            image: "/usda.jpg"
        }
    ],
    ja: [
        {
            id: 1,
            title: "RedNOxが日本山村硝子とパートナーシップを締結、排出監視の革新に200万ドルを確保",
            excerpt: "RedNOx Inc.が日本の大手セラミックスおよびガラスメーカーである日本山村硝子 (NYG) とのパートナーシップを拡大したことを発表できることを嬉しく思います。",
            date: "2025-10-08",
            slug: "strategic-business-partnership-between-nihon-yamamura-glass-co-ltd-and-rednox",
            image: "/nihon.jpg"
        },
        {
            id: 2,
            title: "RedNOxが農業排出削減のイノベーション推進のためUSDA NIFA SBIRフェーズII助成金を獲得",
            excerpt: "農業における画期的な中小企業主導のイノベーションを支援する2,680万ドルの投資の一環として、RedNOxが65万ドルのUSDA NIFA SBIRフェーズII助成金を獲得したことを発表できることを嬉しく思います。",
            date: "2024-10-31",
            slug: "rednox-awarded-usda-nifa-sbir-phase-ii-grant-to-drive-innovation-in-agricultural-emissions-reduction",
            image: "/us.jpg"
        },
        {
            id: 3,
            title: "RedNOxが画期的な温室効果ガス測定プラットフォームでSBIRフェーズIを受賞",
            excerpt: "カリフォルニア州フリーモント、2023年8月28日 (GLOBE NEWSWIRE) -- 環境固体センシング技術のパイオニアであるRedNOx Inc.は、画期的な大気および土壌温室効果ガス測定プラットフォームでフェーズI中小企業技術革新研究 (SBIR) 賞を獲得したことを発表できることを嬉しく思います。",
            date: "2023-08-23",
            slug: "rednox-awarded-sbir-phase-i-for-its-innovative-greenhouse-gas-measurement-platform",
            image: "/usda.jpg"
        }
    ]
}

export const publicationData: Record<string, PublicationData[]> = {
    en: [
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
            id: 3,
            title: "Strategies for total NOx measurement with minimal CO interference utilizing a microporous zeolitic catalytic filter",
            authors: ['Nicholas F Szabo', 'Prabir K. Dutta'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400502003222",
        },
        {
            id: 4,
            title: "Promoting selectivity and sensitivity for a high temperature YSZ-based electrochemical total NOx sensor by using a Pt-loaded zeolite Y filter",
            authors: ['Jiun-Chan Yang', 'Prabir K. Dutta'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400507000500",
        },
        {
            id: 5,
            title: "Temperature-controlled CO, CO2 and NOx sensing in a diesel engine exhaust stream",
            authors: ['Osvaldo L. Figueroa a', 'Chonghoon Lee a', 'Sheikh A. Akbar b', 'Nicholas F. Szabo a', 'Joseph A. Trimboli a', 'Prabir K. Dutta c', 'Naoto Sawaki d', 'Ahmed A. Soliman e,', 'Henk Verweij b'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400504008871",
        },
    ],
    de: [
        {
            id: 1,
            title: "Entwicklung eines hochempfindlichen potentiometrischen NOx-Sensors und seine Anwendung zur Atemanalyse",
            authors: ['Suvra Prakash Mondal a', 'Prabir K. Dutta a', 'G.W. Hunter b', 'B.J. Ward c', 'D. Laskowski d', 'R.A. Dweik d'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400511005314"
        },
        {
            id: 2,
            title: "Hochtemperatur-amperometrische Gesamt-NOx-Sensoren mit platinbeladenen Zeolith-Y-Elektroden",
            authors: ['Jiun-Chan Yang', 'Prabir K. Dutta'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400506007398",
        },
        {
            id: 3,
            title: "Strategien zur Gesamt-NOx-Messung mit minimaler CO-Interferenz unter Verwendung eines mikroporösen zeolithischen katalytischen Filters",
            authors: ['Nicholas F Szabo', 'Prabir K. Dutta'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400502003222",
        },
        {
            id: 4,
            title: "Förderung der Selektivität und Empfindlichkeit eines YSZ-basierten elektrochemischen Hochtemperatur-Gesamt-NOx-Sensors durch Verwendung eines platinbeladenen Zeolith-Y-Filters",
            authors: ['Jiun-Chan Yang', 'Prabir K. Dutta'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400507000500",
        },
        {
            id: 5,
            title: "Temperaturgesteuerte CO-, CO2- und NOx-Erfassung in einem Dieselmotor-Abgasstrom",
            authors: ['Osvaldo L. Figueroa a', 'Chonghoon Lee a', 'Sheikh A. Akbar b', 'Nicholas F. Szabo a', 'Joseph A. Trimboli a', 'Prabir K. Dutta c', 'Naoto Sawaki d', 'Ahmed A. Soliman e,', 'Henk Verweij b'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400504008871",
        },
    ],
    ja: [
        {
            id: 1,
            title: "高感度ポテンショメトリックNOxセンサーの開発と呼気分析への応用",
            authors: ['Suvra Prakash Mondal a', 'Prabir K. Dutta a', 'G.W. Hunter b', 'B.J. Ward c', 'D. Laskowski d', 'R.A. Dweik d'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400511005314"
        },
        {
            id: 2,
            title: "白金担持ゼオライトY電極を用いた高温アンペロメトリック全NOxセンサー",
            authors: ['Jiun-Chan Yang', 'Prabir K. Dutta'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400506007398",
        },
        {
            id: 3,
            title: "微細孔ゼオライト触媒フィルターを用いたCO干渉を最小限に抑えた全NOx測定の戦略",
            authors: ['Nicholas F Szabo', 'Prabir K. Dutta'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400502003222",
        },
        {
            id: 4,
            title: "白金担持ゼオライトYフィルターを用いた高温YSZベース電気化学全NOxセンサーの選択性と感度の向上",
            authors: ['Jiun-Chan Yang', 'Prabir K. Dutta'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400507000500",
        },
        {
            id: 5,
            title: "ディーゼルエンジン排気ストリームにおける温度制御CO、CO2およびNOx検出",
            authors: ['Osvaldo L. Figueroa a', 'Chonghoon Lee a', 'Sheikh A. Akbar b', 'Nicholas F. Szabo a', 'Joseph A. Trimboli a', 'Prabir K. Dutta c', 'Naoto Sawaki d', 'Ahmed A. Soliman e,', 'Henk Verweij b'],
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400504008871",
        },
    ]
}

export const blogPosts: Record<string, Record<string, BlogPost>> = {
    en: {
        "europe-soil-monitoring-law-milestone": {
            title: "Europe's New Soil Monitoring Law: A Milestone for Soil Health and Food Security",
            excerpt: "Europe has just crossed an important milestone for climate and food security. On 23 October 2025, the European Parliament approved the Soil Monitoring and Resilience Directive – the EU’s first law dedicated to soil health.",
            date: "2025-12-11",
            readTime: "3 min read",
            category: "News Release",
            image: "/soil-health-law.png",
            downloadLink: "https://ai4soilhealth.eu/europe-adopts-its-first-soil-health-law/",
            downloadCTATitle: "Learn More",
            content: `
            <p>Europe has just crossed an important milestone for climate and food security.</p>
            <p>On 23 October 2025, the European Parliament approved the Soil Monitoring and Resilience Directive – the EU’s first law dedicated to soil health. The law enters into force on 15 December 2025 and requires Member States to regularly monitor and assess soil health across all land uses, including agricultural soils.</p>
            <p>In practice, the Soil Monitoring Law means:</p>
            <ul class="list-disc pl-6 mb-4">
                <li>Every Member State must define soil districts and soil units and build national monitoring networks.</li>
                <li>Soil health has to be tracked across multiple degradation aspects – including excess nutrient (nitrogen) loads.</li>
                <li>Governments must turn this data into actionable support for farmers and land managers, not just compliance reports.</li>
            </ul>
            <p>At RedNOx, we are aligning our AgriNOx platform with this new framework.</p>
            <p>AgriNOx combines ultra-sensitive (ppb) N₂O and NO real-time sub-surface sensing with a data and analytics layer to help:</p>
            <ul class="list-disc pl-6 mb-4">
                <li>Quantify nitrogen losses from fertiliser use at the plot and soil-unit level.</li>
                <li>Translate those measurements into soil-health and nitrogen-efficiency indicators that Member States can use in their monitoring and reporting.</li>
                <li>Give farmers and advisors decision support on how to cut nitrogen waste and greenhouse gas emissions while maintaining yields.</li>
            </ul>
            <p>Our goal is simple: help turn this law from a policy milestone into measurable improvements in soil health, nitrogen efficiency, and farm profitability.</p>
            <p><a href="https://ai4soilhealth.eu" target="_blank" class="text-primary hover:underline">ai4soilhealth.eu</a><br/>
            <a href="https://lnkd.in/gynKggte" target="_blank" class="text-primary hover:underline">LinkedIn Post</a></p>
            `
        },
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
    <p style="font-weight: bold;">About RedNOx</p>
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
    <p>This Phase II award underscores the importance of cutting-edge research in addressing critical environmental challenges and brings our technology closer to commercialization. With USDA NIFA's support, RedNOx will continue its mission to enhance agricultural productivity, benefit local communities, and contribute to a cleaner, healthier environment.</p>
  `,
        },
        "strategic-business-partnership-between-nihon-yamamura-glass-co-ltd-and-rednox": {
            title: "RedNOx Partners with Nihon Yamamura Glass, Secures $2M to Revolutionize Emissions Monitoring",
            excerpt:
                "We're excited to announce that RedNOx Inc. has expanded its partnership with Nihon Yamamura Glass (NYG), a leading Japanese ceramics and glass manufacturer.",
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

        <p style="font-weight: bold;">Technology in focus:</p>

        <p>LoNOx sensor: Ultra-sensitive NOx detection across 500 ppb-20 ppm. Built to resist ammonia interference and suitable for diesel and gasoline engines, it's especially relevant for low-emission gensets used by data centers and hospitals.</p>

        <p>AgriNOx system: Precision measurement of fertilizer-derived N₂O at sub-ppm levels. Supported by a $650K USDA grant, pilots in California are helping farmers reduce nitrogen inputs and access carbon credit opportunities.</p>

        <p style="font-weight: bold;">Why this matters:</p>

        <p>NOx is a harmful air pollutant, and N₂O is nearly 300x more potent than CO₂. With tighter emissions standards expected from 2027 onward, our combined technology and manufacturing capability will help OEMs and farmers meet regulatory and sustainability goals.</p>

        <p>By pairing Silicon Valley innovation with Japanese technical strength, RedNOx and NYG aim to accelerate commercialization and deliver practical solutions that reduce emissions and create value for industry and agriculture.</p>
        </article>
        `,
        }
    },
    de: {
        "europe-soil-monitoring-law-milestone": {
            title: "Europas neues Bodenüberwachungsgesetz: Ein Meilenstein für Bodengesundheit und Ernährungssicherheit",
            excerpt: "Europa hat gerade einen wichtigen Meilenstein für Klima und Ernährungssicherheit erreicht. Am 23. Oktober 2025 hat das Europäische Parlament die Richtlinie zur Bodenüberwachung und Resilienz verabschiedet – das erste EU-Gesetz, das sich der Bodengesundheit widmet.",
            date: "2025-12-11",
            readTime: "3 min read",
            category: "Pressemitteilung",
            image: "/soil-health-law.png",
            downloadLink: "https://ai4soilhealth.eu",
            downloadCTATitle: "Mehr erfahren",
            content: `
            <p>Europa hat gerade einen wichtigen Meilenstein für Klima und Ernährungssicherheit erreicht.</p>
            <p>Am 23. Oktober 2025 hat das Europäische Parlament die Richtlinie zur Bodenüberwachung und Resilienz verabschiedet – das erste EU-Gesetz, das sich der Bodengesundheit widmet. Das Gesetz tritt am 15. Dezember 2025 in Kraft und verpflichtet die Mitgliedstaaten, die Bodengesundheit bei allen Landnutzungsarten, einschließlich landwirtschaftlicher Böden, regelmäßig zu überwachen und zu bewerten.</p>
            <p>In der Praxis bedeutet das Bodenüberwachungsgesetz:</p>
            <ul class="list-disc pl-6 mb-4">
                <li>Jeder Mitgliedstaat muss Bodendistrikte und Bodeneinheiten definieren und nationale Überwachungsnetzwerke aufbauen.</li>
                <li>Die Bodengesundheit muss über mehrere Degradationsaspekte hinweg verfolgt werden – einschließlich überschüssiger Nährstoffbelastungen (Stickstoff).</li>
                <li>Regierungen müssen diese Daten in handlungsfähige Unterstützung für Landwirte und Landmanager umwandeln, nicht nur in Compliance-Berichte.</li>
            </ul>
            <p>Bei RedNOx richten wir unsere AgriNOx-Plattform auf diesen neuen Rahmen aus.</p>
            <p>AgriNOx kombiniert ultraempfindliche (ppb) N₂O- und NO-Echtzeit-Untergrundsensorik mit einer Daten- und Analyseschicht, um zu helfen:</p>
            <ul class="list-disc pl-6 mb-4">
                <li>Stickstoffverluste durch Düngemittelverwendung auf Parzellen- und Bodeneinheitsebene zu quantifizieren.</li>
                <li>Diese Messungen in Bodengesundheits- und Stickstoffeffizienzindikatoren zu übersetzen, die Mitgliedstaaten für ihre Überwachung und Berichterstattung nutzen können.</li>
                <li>Landwirten und Beratern Entscheidungshilfen zu geben, um Stickstoffabfälle und Treibhausgasemissionen zu reduzieren und gleichzeitig die Erträge zu erhalten.</li>
            </ul>
            <p>Unser Ziel ist einfach: Helfen Sie dabei, dieses Gesetz von einem politischen Meilenstein in messbare Verbesserungen der Bodengesundheit, der Stickstoffeffizienz und der Rentabilität der landwirtschaftlichen Betriebe zu verwandeln.</p>
            <p><a href="https://ai4soilhealth.eu" target="_blank" class="text-primary hover:underline">ai4soilhealth.eu</a><br/>
            <a href="https://lnkd.in/gynKggte" target="_blank" class="text-primary hover:underline">LinkedIn Beitrag</a></p>
            `
        },
        "rednox-awarded-sbir-phase-i-for-its-innovative-greenhouse-gas-measurement-platform": {
            title: "RedNOx erhält SBIR Phase I für seine innovative Treibhausgas-Messplattform",
            excerpt:
                "FREMONT, Kalifornien, 28. August 2023 (GLOBE NEWSWIRE) -- RedNOx Inc., ein Vorreiter in der umweltfreundlichen Festkörper-Sensortechnologie, freut sich, die kürzliche Auszeichnung mit einem Phase I Small Business Innovation Research (SBIR)-Award für seine bahnbrechende Atmosphären- und Boden-Treibhausgas-Messplattform bekannt zu geben.",
            date: "2023-08-23",
            image: "/usda.jpg",
            readTime: "8 min read",
            category: "Pressemitteilung",
            content: `
    <p>FREMONT, Kalifornien, 28. August 2023 (GLOBE NEWSWIRE) -- RedNOx Inc., ein Vorreiter in der umweltfreundlichen Festkörper-Sensortechnologie, freut sich, die kürzliche Auszeichnung mit einem Phase I Small Business Innovation Research (SBIR)-Award für seine bahnbrechende Atmosphären- und Boden-Treibhausgas-Messplattform bekannt zu geben.</p>
    <p>Die einzigartige Plattform von RedNOx misst Distickstoffoxid (N2O), Stickoxide (NOx) und Kohlendioxid (CO2)-Emissionen sowohl in der Atmosphäre als auch im Boden. Für Landwirte, Farmer und Energieproduzenten vereinfacht die Plattform den Prozess der Überwachung, Berichterstattung und Verifizierung dieser Gaswerte und gewährleistet eine genaue Verfolgung der Netto-Negativ-Kohlenstoff- und NOx-Emissionen. In Zukunft wird die integrierte Software alle Daten aggregieren und automatisch die erforderliche Dokumentation erstellen, wodurch landwirtschaftliche Produzenten, Fabriken und kraftstoffnutzende Energieproduzenten einfach an Kohlenstoff- und NOx-Kreditmärkten teilnehmen können. Dieser Fortschritt könnte das Einkommen der Landwirte steigern und gleichzeitig nachhaltige landwirtschaftliche Praktiken fördern.</p>
    <p>Dr. Solomon Ssenyange, CEO von RedNOx, erklärte: "Diese Auszeichnung bestätigt unser Engagement für die Entwicklung von Lösungen, die Umweltnachhaltigkeit priorisieren und wirtschaftliche Vorteile für die Landwirtschaft bieten. Unsere Sensortechnologie verbessert nicht nur die Bodengesundheit und Lebensmittelproduktion, sondern fördert auch die Reduzierung von Kohlenstoff- und NOx-Emissionen."</p>
    <p>Die Ankündigung von RedNOx folgt auf die offizielle Pressemitteilung des USDA zu den kürzlichen Phase I Awards, weitere Details dazu finden Sie hier. RedNOx dankt dem USDA und dem SBIR/STTR Office für die Anerkennung und Unterstützung von Initiativen, die technologische Innovation in Lebensmitteln und Landwirtschaft vorantreiben.</p>
    <p>Für Anfragen bezüglich der Auszeichnung oder der Atmosphären- und Boden-Treibhausgas-Messplattform von RedNOx wenden Sie sich bitte direkt an das Unternehmen oder an das SBIR/STTR Office für allgemeinere Fragen zum Programm.</p>
    <p style="font-weight: bold;">Über RedNOx</p>
    <p>Mit Hauptsitz in Fremont, Kalifornien, spezialisiert sich RedNOx Inc. auf die Entwicklung modernster Sensorlösungen für eine Vielzahl von Anwendungen. RedNOx ist der Innovation und Nachhaltigkeit verpflichtet und definiert neu, wie die Landwirtschaft mit Umweltverantwortung interagiert. Erfahren Sie mehr über ihre Initiativen und Fortschritte auf www.rednoxinc.com und bleiben Sie über LinkedIn in Verbindung.</p>
  `,
        },
        "rednox-awarded-usda-nifa-sbir-phase-ii-grant-to-drive-innovation-in-agricultural-emissions-reduction": {
            title: "RedNOx erhält USDA NIFA SBIR Phase II-Förderung zur Förderung von Innovationen bei der Reduzierung landwirtschaftlicher Emissionen",
            excerpt:
                "Wir freuen uns bekannt zu geben, dass RedNOx im Rahmen einer Investition von 26,8 Millionen Dollar zur Unterstützung bahnbrechender, von kleinen Unternehmen geführter Innovationen in der Landwirtschaft eine USDA NIFA SBIR Phase II-Förderung in Höhe von 650.000 Dollar erhalten hat.",
            date: "2024-10-31",
            readTime: "5 min read",
            category: "Pressemitteilung",
            image: "/us.jpg",
            content: `
    <p>Wir freuen uns bekannt zu geben, dass RedNOx im Rahmen einer Investition von 26,8 Millionen Dollar zur Unterstützung bahnbrechender, von kleinen Unternehmen geführter Innovationen in der Landwirtschaft eine USDA NIFA SBIR Phase II-Förderung in Höhe von 650.000 Dollar erhalten hat. Diese Finanzierung ermöglicht es uns, unsere N₂O- und NOx-Sensortechnologien weiterzuentwickeln, die speziell auf die Reduzierung von Distickstoffoxid- und NOx-Emissionen aus synthetischen und mikrobiellen Düngemitteln ausgerichtet sind.</p>
    <p>Diese Phase II-Auszeichnung unterstreicht die Bedeutung modernster Forschung bei der Bewältigung kritischer Umweltherausforderungen und bringt unsere Technologie der Kommerzialisierung näher. Mit der Unterstützung von USDA NIFA wird RedNOx seine Mission fortsetzen, die landwirtschaftliche Produktivität zu steigern, lokale Gemeinschaften zu unterstützen und zu einer saubereren, gesünderen Umwelt beizutragen.</p>
  `,
        },
        "strategic-business-partnership-between-nihon-yamamura-glass-co-ltd-and-rednox": {
            title: "RedNOx geht Partnerschaft mit Nihon Yamamura Glass ein und sichert sich 2 Millionen Dollar zur Revolutionierung der Emissionsüberwachung",
            excerpt:
                "Wir freuen uns bekannt zu geben, dass RedNOx Inc. seine Partnerschaft mit Nihon Yamamura Glass (NYG), einem führenden japanischen Keramik- und Glashersteller, erweitert hat.",
            date: "2025-10-08",
            readTime: "5 min read",
            category: "Pressemitteilung",
            image: "/nihon.jpg",
            downloadLink: "https://www.yamamura.co.jp/cms/wp-content/uploads/2025/10/20251008_CMS0632_473LOWYE-2.pdf",
            downloadCTATitle: "Nihon Yamamura Pressemitteilung",
            content: `
        <article>
            <p>RedNOx Inc. freut sich, eine erweiterte strategische Partnerschaft mit Nihon Yamamura Glass (NYG) bekannt zu geben. NYG hat in unsere überzeichnete Seed-Runde von 2 Millionen Dollar investiert und wird uns mit Keramik- und Glasversiegelungsexpertise zur Skalierung unserer Sensorproduktion versorgen.</p>

        <div>
            Was dies ermöglicht: Schnellere, qualitativ hochwertigere Herstellung von NOx- und N₂O-Sensoren der nächsten Generation für Mobilitäts- und Landwirtschaftsanwendungen.
        </div>

        <p style="font-weight: bold;">Technologie im Fokus:</p>

        <p>LoNOx-Sensor: Ultrasensitive NOx-Detektion über 500 ppb-20 ppm. Entwickelt, um Ammoniakinterferenzen zu widerstehen und für Diesel- und Benzinmotoren geeignet, ist er besonders relevant für emissionsarme Generatoren, die von Rechenzentren und Krankenhäusern verwendet werden.</p>

        <p>AgriNOx-System: Präzisionsmessung von düngemittelbedingtem N₂O auf Sub-ppm-Niveau. Unterstützt durch eine 650.000-Dollar-Förderung des USDA helfen Pilotprojekte in Kalifornien Landwirten, Stickstoffeinsätze zu reduzieren und Zugang zu Kohlenstoffkreditmöglichkeiten zu erhalten.</p>

        <p style="font-weight: bold;">Warum dies wichtig ist:</p>

        <p>NOx ist ein schädlicher Luftschadstoff, und N₂O ist fast 300-mal potenter als CO₂. Mit strengeren Emissionsstandards, die ab 2027 erwartet werden, wird unsere kombinierte Technologie- und Fertigungsfähigkeit OEMs und Landwirten helfen, regulatorische und Nachhaltigkeitsziele zu erreichen.</p>

        <p>Durch die Kombination von Silicon Valley-Innovation mit japanischer technischer Stärke wollen RedNOx und NYG die Kommerzialisierung beschleunigen und praktische Lösungen liefern, die Emissionen reduzieren und Mehrwert für Industrie und Landwirtschaft schaffen.</p>
        </article>
        `,
        }
    },
    ja: {
        "europe-soil-monitoring-law-milestone": {
            title: "欧州の新しい土壌監視法：土壌の健康と食料安全保障のためのマイルストーン",
            excerpt: "欧州は、気候と食料安全保障のための重要なマイルストーンを達成しました。2025年10月23日、欧州議会は土壌監視およびレジリエンス指令を承認しました。これは、土壌の健康に特化したEU初の法律です。",
            date: "2025-12-11",
            readTime: "3 min read",
            category: "プレスリリース",
            image: "/soil-health-law.png",
            downloadLink: "https://ai4soilhealth.eu",
            downloadCTATitle: "詳細を見る",
            content: `
            <p>欧州は、気候と食料安全保障のための重要なマイルストーンを達成しました。</p>
            <p>2025年10月23日、欧州議会は土壌監視およびレジリエンス指令を承認しました。これは、土壌の健康に特化したEU初の法律です。この法律は2025年12月15日に施行され、加盟国に対し、農地を含むすべての土地利用における土壌の健康状態を定期的に監視・評価することを義務付けています。</p>
            <p>実際には、土壌監視法は以下のことを意味します。</p>
            <ul class="list-disc pl-6 mb-4">
                <li>すべての加盟国は、土壌地区と土壌単位を定義し、国レベルの監視ネットワークを構築する必要があります。</li>
                <li>土壌の健康状態は、過剰な栄養素（窒素）負荷を含む複数の劣化の側面全体で追跡されなければなりません。</li>
                <li>政府は、このデータを単なるコンプライアンス報告書ではなく、農家や土地管理者への実用的な支援に変える必要があります。</li>
            </ul>
            <p>RedNOxでは、AgriNOxプラットフォームをこの新しい枠組みに合わせて調整しています。</p>
            <p>AgriNOxは、超高感度（ppb）のN₂OおよびNOリアルタイム地下センシングとデータおよび分析レイヤーを組み合わせて、以下を支援します。</p>
            <ul class="list-disc pl-6 mb-4">
                <li>区画および土壌単位レベルでの肥料使用による窒素損失を定量化します。</li>
                <li>これらの測定値を、加盟国が監視と報告に使用できる土壌の健康指標と窒素効率指標に変換します。</li>
                <li>収量を維持しながら窒素廃棄物と温室効果ガス排出を削減する方法について、農家とアドバイザーに意思決定支援を提供します。</li>
            </ul>
            <p>私たちの目標はシンプルです。この法律を政策のマイルストーンから、土壌の健康、窒素効率、および農業収益性の測定可能な改善に変える手助けをすることです。</p>
            <p><a href="https://ai4soilhealth.eu" target="_blank" class="text-primary hover:underline">ai4soilhealth.eu</a><br/>
            <a href="https://lnkd.in/gynKggte" target="_blank" class="text-primary hover:underline">LinkedIn投稿</a></p>
            `
        },
        "rednox-awarded-sbir-phase-i-for-its-innovative-greenhouse-gas-measurement-platform": {
            title: "RedNOxが画期的な温室効果ガス測定プラットフォームでSBIRフェーズIを受賞",
            excerpt:
                "カリフォルニア州フリーモント、2023年8月28日 (GLOBE NEWSWIRE) — 環境固体センシング技術のパイオニアであるRedNOx Inc.は、画期的な大気および土壌温室効果ガス測定プラットフォームでフェーズI中小企業技術革新研究 (SBIR) 賞を獲得したことを発表できることを嬉しく思います。",
            date: "2023-08-23",
            image: "/usda.jpg",
            readTime: "8 min read",
            category: "プレスリリース",
            content: `
    <p>カリフォルニア州フリーモント、2023年8月28日 (GLOBE NEWSWIRE) — 環境固体センシング技術のパイオニアであるRedNOx Inc.は、画期的な大気および土壌温室効果ガス測定プラットフォームでフェーズI中小企業技術革新研究 (SBIR) 賞を獲得したことを発表できることを嬉しく思います。</p>
    <p>RedNOxのユニークなプラットフォームは、大気と土壌の両方で亜酸化窒素 (N2O)、窒素酸化物 (NOx)、二酸化炭素 (CO2) の排出量を測定します。農業従事者、農家、エネルギー生産者にとって、このプラットフォームはこれらのガスレベルの監視、報告、検証のプロセスを簡素化し、正味マイナス炭素およびNOx排出量の正確な追跡を保証します。将来的には、統合ソフトウェアがすべてのデータを集約し、必要な文書を自動的に生成することで、農業生産者、工場、燃料を使用するエネルギー生産者が炭素およびNOxクレジット市場に簡単に参加できるようになります。この進歩により、持続可能な農業慣行を奨励しながら、農家の収入を増やすことができます。</p>
    <p>RedNOxのCEOであるSolomon Ssenyange博士は次のように述べています。「この賞は、環境の持続可能性を優先し、農業に経済的利益を提供するソリューションの開発への私たちの献身を再確認するものです。当社のセンサー技術は、土壌の健康と食料生産を向上させるだけでなく、炭素およびNOx排出量の削減も促進します。」</p>
    <p>RedNOxの発表は、最近のフェーズI賞に関するUSDAの公式プレスリリースに続くものです。詳細についてはこちらをご覧ください。RedNOxは、食品と農業における技術革新を推進する取り組みを認識し、支援してくれたUSDAとSBIR/STTRオフィスに感謝の意を表します。</p>
    <p>この賞またはRedNOxの大気および土壌温室効果ガス測定プラットフォームに関するお問い合わせは、会社に直接お問い合わせいただくか、プログラムに関する一般的な質問についてはSBIR/STTRオフィスにお問い合わせください。</p>
    <p style="font-weight: bold;">RedNOxについて</p>
    <p>カリフォルニア州フリーモントに本社を置くRedNOx Inc.は、さまざまなアプリケーション向けの最先端センシングソリューションの開発を専門としています。革新と持続可能性にコミットしているRedNOxは、農業が環境責任とどのように相互作用するかを再定義しています。www.rednoxinc.comで彼らの取り組みと進歩について詳しく学び、LinkedInでつながりを保ちましょう。</p>
  `,
        },
        "rednox-awarded-usda-nifa-sbir-phase-ii-grant-to-drive-innovation-in-agricultural-emissions-reduction": {
            title: "RedNOxが農業排出削減のイノベーション推進のためUSDA NIFA SBIRフェーズII助成金を獲得",
            excerpt:
                "農業における画期的な中小企業主導のイノベーションを支援する2,680万ドルの投資の一環として、RedNOxが65万ドルのUSDA NIFA SBIRフェーズII助成金を獲得したことを発表できることを嬉しく思います。",
            date: "2024-10-31",
            readTime: "5 min read",
            category: "プレスリリース",
            image: "/us.jpg",
            content: `
    <p>農業における画期的な中小企業主導のイノベーションを支援する2,680万ドルの投資の一環として、RedNOxが65万ドルのUSDA NIFA SBIRフェーズII助成金を獲得したことを発表できることを嬉しく思います。この資金により、合成および微生物肥料からの亜酸化窒素およびNOx排出の削減を特に目的とした当社のN₂OおよびNOxセンシング技術を進化させることができます。</p>
    <p>このフェーズII賞は、重要な環境課題への対処における最先端研究の重要性を強調し、当社の技術を商業化に近づけます。USDA NIFAの支援により、RedNOxは農業生産性の向上、地域社会への貢献、よりクリーンで健康的な環境への貢献という使命を継続します。</p>
  `,
        },
        "strategic-business-partnership-between-nihon-yamamura-glass-co-ltd-and-rednox": {
            title: "RedNOxが日本山村硝子とパートナーシップを締結、排出監視の革新に200万ドルを確保",
            excerpt:
                "RedNOx Inc.が日本の大手セラミックスおよびガラスメーカーである日本山村硝子 (NYG) とのパートナーシップを拡大したことを発表できることを嬉しく思います。",
            date: "2025-10-08",
            readTime: "5 min read",
            category: "プレスリリース",
            image: "/nihon.jpg",
            downloadLink: "https://www.yamamura.co.jp/cms/wp-content/uploads/2025/10/20251008_CMS0632_473LOWYE-2.pdf",
            downloadCTATitle: "日本山村硝子プレスリリース",
            content: `
        <article>
            <p>RedNOx Inc.は、日本山村硝子 (NYG) との戦略的パートナーシップの拡大を発表できることを嬉しく思います。NYGは当社のオーバーサブスクライブされた200万ドルのシードラウンドに投資し、センサー生産の拡大のためにセラミックスおよびガラスシーリングの専門知識を提供します。</p>

        <div>
            これにより実現すること:モビリティおよび農業アプリケーション向けの次世代NOxおよびN₂Oセンサーのより迅速で高品質な製造。
        </div>

        <p style="font-weight: bold;">注目の技術：</p>

        <p>LoNOxセンサー:500 ppb-20 ppmの範囲で超高感度NOx検出。アンモニア干渉に耐性があり、ディーゼルおよびガソリンエンジンに適しており、データセンターや病院で使用される低排出発電機に特に関連性があります。</p>

        <p>AgriNOxシステム:サブppmレベルでの肥料由来N₂Oの精密測定。65万ドルのUSDA助成金に支援され、カリフォルニアでのパイロットプロジェクトは、農家が窒素投入量を削減し、炭素クレジットの機会にアクセスするのを支援しています。</p>

        <p style="font-weight: bold;">これが重要な理由：</p>

        <p>NOxは有害な大気汚染物質であり、N₂OはCO₂の約300倍強力です。2027年以降に予想されるより厳しい排出基準により、当社の統合された技術および製造能力は、OEMおよび農家が規制および持続可能性目標を達成するのに役立ちます。</p>

        <p>シリコンバレーのイノベーションと日本の技術力を組み合わせることで、RedNOxとNYGは商業化を加速し、排出を削減し、産業および農業に価値を創造する実用的なソリューションを提供することを目指しています。</p>
        </article>
        `,
        }
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

export function getBlogPost(locale: string, slug: string): BlogPost | null {
    return blogPosts[locale]?.[slug] || blogPosts['en']?.[slug] || newsArticles[locale]?.[slug] || newsArticles['en']?.[slug] || null;
}

export function getAllBlogPosts(locale: string): Record<string, BlogPost> {
    return blogPosts[locale] || blogPosts['en'] || {};
}

export function getBlogPostsArray(locale: string): Array<BlogPost & { slug: string }> {
    const posts = getAllBlogPosts(locale);
    return Object.entries(posts).map(([slug, post]) => ({ ...post, slug }));
}

export function getAllBlogSlugs(): string[] {
    const slugs = new Set<string>();
    Object.values(blogPosts).forEach(localePosts => {
        Object.keys(localePosts).forEach(slug => slugs.add(slug));
    });
    return Array.from(slugs);
}

export function getNewsData(locale: string): NewsData[] {
    return newsData[locale] || newsData['en'] || [];
}

export function getPressData(locale: string): PressData[] {
    return pressData[locale] || pressData['en'] || [];
}

export function getPublicationData(locale: string): PublicationData[] {
    return publicationData[locale] || publicationData['en'] || [];
}
