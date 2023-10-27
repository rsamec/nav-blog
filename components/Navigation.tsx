import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="layout flex items-center justify-between py-4">
      <ul className="flex items-center justify-between space-x-3 text-xs md:space-x-4 md:text-base">
        <li>
          <Link href="/" className="hover:underline" prefetch={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/#ships" className="hover:underline" prefetch={false}>
            Lodě
          </Link>
        </li>
        <li>
          <Link href="/#projects" className="hover:underline" prefetch={false}>
            Rada a tipy
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation