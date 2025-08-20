export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} RealEstate. All rights reserved.</p>
        <p>Built with MERN + Vite + Tailwind</p>
      </div>
    </footer>
  )
}
