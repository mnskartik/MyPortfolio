import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/" className="text-xl font-bold">
        Kartik Singh
      </Link>

      <div className="flex items-center gap-6">
        <Link href="#projects" className="text-sm hover:text-primary">
          Projects
        </Link>
        <Link href="#skills" className="text-sm hover:text-primary">
          Skills
        </Link>
        <Link href="#experience" className="text-sm hover:text-primary">
          Experience
        </Link>
        <Link href="#contact" className="text-sm hover:text-primary">
          Contact
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  )
}
