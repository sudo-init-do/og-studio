export default function Home() {
  return (
    <main className="container py-16 space-y-10">
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-brand" /> New
        </div>
        <h1 className="text-5xl font-bold tracking-tight">OG Studio</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Design beautiful social preview images and generate them on the fly with a simple API.
        </p>
        <div className="mt-4">
          <a href="/studio" className="rounded-lg bg-brand px-5 py-3 font-medium text-white">Open Studio</a>
        </div>
      </section>
    </main>
  )
}
