import Content, { metadata } from "./content.mdx"

export { metadata }

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {metadata.title}
      </h1>
      <div className="prose">
        <Content />
      </div>
    </section>
  )
}
