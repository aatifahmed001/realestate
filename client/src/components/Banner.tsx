export default function Banner() {
  return (
    <section className="relative h-[60vh] bg-gray-200">
      <img
        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2000&auto=format&fit=crop"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Find your next home</h1>
          <p className="mt-3 max-w-xl text-lg">Explore premium apartments, villas, and more across India.</p>
        </div>
      </div>
    </section>
  )
}
