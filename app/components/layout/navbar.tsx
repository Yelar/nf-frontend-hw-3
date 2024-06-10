import Link from 'next/link'

export default function navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
              <div className="text-3xl font-semibold text-gray-800">
                <Link href="/">medium clone</Link>
              </div>
        </nav>
          
    );
}