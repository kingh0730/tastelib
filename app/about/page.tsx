import { formatDate } from "@/lib/utils"
import Content, { metadata } from "./content.mdx"

export { metadata }

export default function Page() {
  return (
    <article>
      <header>
        <h1 className="title text-2xl font-semibold tracking-tighter">
          {metadata.title}
        </h1>
        <div className="mt-2 mb-8 flex items-center justify-between text-sm">
          <time
            dateTime={metadata.publishedAt}
            className="text-sm text-neutral-600 dark:text-neutral-400"
          >
            {formatDate(metadata.publishedAt)}
          </time>
        </div>
      </header>
      <div className="prose">
        <Content />
      </div>
    </article>
  )
}
