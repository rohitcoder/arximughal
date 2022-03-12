import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const LayoutWrapper = ({ children }) => {
  const { theme } = useTheme()
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  {theme === 'dark' || theme === 'system' ? (
                    <Image src={'/static/images/dark-bg-light-text.png'} width={280} height={50} />
                  ) : (
                    <Image src={'/static/images/light-bg-dark-text.png'} width={280} height={50} />
                  )}
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => {
                if (Object.prototype.hasOwnProperty.call(link, 'type') && link.type === 'cta') {
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-full py-3 mx-3 justify-center dark:bg-emerald-500 dark:highlight-white/20 dark:hover:bg-emerald-400"
                    >
                      {link.title}
                    </Link>
                  )
                } else {
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                    >
                      {link.title}
                    </Link>
                  )
                }
              })}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
