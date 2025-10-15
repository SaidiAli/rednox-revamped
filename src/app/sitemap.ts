import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.rednoxinc.com';

    // Get all post slugs
    const postSlugs = Object.keys(blogPosts);
    const postUrls = postSlugs.map((slug) => ({
        url: `${baseUrl}/article/${slug}`,
        lastModified: new Date(blogPosts[slug].date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const staticUrls = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1.0,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
        {
            url: `${baseUrl}/technology`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
        {
            url: `${baseUrl}/heavy-duty-engines`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
        {
            url: `${baseUrl}/gensets`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
        {
            url: `${baseUrl}/agrinox`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
        {
            url: `${baseUrl}/leadership`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
        {
            url: `${baseUrl}/investors`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
        {
            url: `${baseUrl}/press-release`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
        {
            url: `${baseUrl}/in-the-news`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
        {
            url: `${baseUrl}/publications`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    de: `${baseUrl}/fr`,
                    ja: `${baseUrl}/ja`
                },
            }
        },
    ];

    return [...staticUrls, ...postUrls];
}
