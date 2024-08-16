import {
  PiGithubLogo,
  PiIdentificationBadge,
  PiLinkedinLogo,
  PiTwitterLogo,
} from 'react-icons/pi'

import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="bg-slate-50 px-4 py-4 text-sm text-slate-400 md:px-0">
      <div className="mx-auto max-w-5xl">
        <div className="md:flex md:items-center md:justify-between md:space-y-0">
          <p className="flex items-center justify-center gap-x-1 md:justify-start">
            Yet another app made with ❤️ by
            <Link
              className="border-b-[1px] border-slate-400"
              target="_blank"
              href="https://jeanrobertou.com"
            >
              Jean Robertou
            </Link>
          </p>

          <div className="mt-4 flex items-center justify-center md:mt-0 md:justify-start">
            <Link
              className="border-b-[1px] border-slate-400"
              href={'/rules'}
              target="_blank"
            >
              Rules
            </Link>
          </div>

          <div className="mt-4 flex items-center justify-center gap-x-1 md:mt-0 md:justify-end">
            <p>Inspired by</p>
            <Link
              className="border-b-[1px] border-slate-400"
              target="_blank"
              href="https://1in1million.com/"
            >
              1in1million
            </Link>
            <Link
              className="border-b-[1px] border-slate-400"
              target="_blank"
              href="https://x.com/pkundr"
            >
              (Philipp Kundratitz)
            </Link>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-x-4">
          <Link target="_blank" href="https://jeanrobertou.com">
            <PiIdentificationBadge className="h-6 w-6" />
          </Link>
          <Link target="_blank" href="https://github.com/jean1591">
            <PiGithubLogo className="h-6 w-6" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/robertoujean/"
          >
            <PiLinkedinLogo className="h-6 w-6" />
          </Link>
          <Link target="_blank" href="https://x.com/Jean_Robert_II">
            <PiTwitterLogo className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
