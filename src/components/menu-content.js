import Link from 'next/link'
import { NavigationLink } from './navigation-link'
import { PROFILES, LINKS } from '@/lib/constants'
import Image from 'next/image'

export const MenuContent = () => (
  <div className="flex w-full h-full flex-col text-sm gap-8">
    {/* Above the Break Line */}
    <div className="flex flex-col gap-4">
      {/* Top Name Card */}
      <Link href="/" className="link-card inline-flex items-center gap-4 p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200">
        <Image
          src="./assets/me.avif"
          alt="Rajat Payghan"
          width={56}
          height={56}
          loading="lazy"
          className="rounded-full border shadow-sm"
          // eslint-disable-next-line react/no-unknown-property
          nopin="nopin"
        />
        <div className="flex flex-col">
          <span className="font-regular text-lg">Rajat Payghan</span>
          <span className="text-gray-600">Product Engineer</span>
        </div>
      </Link>
      {/* Menu Items */}
      <div className="flex flex-col gap-2">
        {LINKS.map((link, linkIndex) => (
          <NavigationLink
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
            shortcutNumber={linkIndex + 1}
          />
        ))}
      </div>
    </div>
    {/* Divider */}
    <hr />
    {/* Links */}
    <div className="flex flex-col gap-4 text-sm">
      <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">Online</span>
      <div className="flex flex-col gap-2">
        {Object.values(PROFILES).map((profile) => (
          <NavigationLink key={profile.url} href={profile.url} label={profile.title} icon={profile.icon} />
        ))}
      </div>
    </div>
  </div>
)