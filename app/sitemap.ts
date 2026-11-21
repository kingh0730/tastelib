import { baseUrl } from "@/lib/site"
import { ContentMetadata } from "@/lib/utils"

import { metadata as skillsMetadata } from "./skills/content.mdx"
import { metadata as experimentsMetadata } from "./experiments/content.mdx"
import { metadata as aboutMetadata } from "./about/content.mdx"

export default async function sitemap() {
  const routes = [
    skillsMetadata satisfies ContentMetadata,
    experimentsMetadata satisfies ContentMetadata,
    aboutMetadata satisfies ContentMetadata,
  ].map((metadata) => ({
    url: `${baseUrl}${metadata.url}`,
    lastModified: metadata.publishedAt,
  }))

  return [...routes]
}
