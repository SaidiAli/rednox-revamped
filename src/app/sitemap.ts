import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.rednoxinc.com';
    const locales = ['en', 'de', 'ja'];

    // Generate URLs for all articles in all locales
    const postUrls: MetadataRoute.Sitemap = [];

    locales.forEach(locale => {
        const localePosts = blogPosts[locale];
        if (localePosts) {
            Object.keys(localePosts).forEach(slug => {
                postUrls.push({
                    url: `${baseUrl}/${locale}/article/${slug}`,
                    lastModified: new Date(localePosts[slug].date),
                    changeFrequency: 'monthly' as const,
                    priority: 0.8,
                });
            });
        }
    });

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
