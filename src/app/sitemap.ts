import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectMap: MetadataRoute.Sitemap = [];
  for (let i = 1; i <= 5; i++) {
    projectMap.push({
      url: `https://www.madyan.online/projects/${i}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });

  }

  const certMap: MetadataRoute.Sitemap = [];
  for (let i = 1; i <= 5; i++) {
    certMap.push({
      url: `https://www.madyan.online/certifications/${i}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  const links: MetadataRoute.Sitemap = [
    {
      url: "https://www.madyan.online",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.madyan.online/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.madyan.online/certifications",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectMap,
    ...certMap,
  ];

  return links;
}
