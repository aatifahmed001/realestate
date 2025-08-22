export default function Footer() {
  return (
    <div className="container mx-auto px-4">
      <footer className="py-6 my-6 border-t">
        <ul className="flex justify-center space-x-6 border-b pb-6 mb-6">
          <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
          <li><a href="/about" className="text-gray-500 hover:text-gray-700">about</a></li>
          <li><a href="/projects" className="text-gray-500 hover:text-gray-700">Projects</a></li>
          <li><a href="/contact" className="text-gray-500 hover:text-gray-700">Contact</a></li>
        </ul>
        <p className="text-center text-gray-500">&copy; 2025 AM Company, Inc</p>
      </footer>
    </div>

  )
}
