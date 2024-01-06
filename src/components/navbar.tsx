import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar'

import { link as linkStyles } from '@nextui-org/theme'

import { AcmeLogo } from './logo'
import { siteConfig } from '@/config/site'
import NextLink from 'next/link'
import clsx from 'clsx'

export const Navbar = () => {
  return (
    <NextUINavbar isBordered>
      <NavbarBrand className="grow-0">
        <AcmeLogo />
        <p className="font-bold text-inherit">GCE</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: 'foreground' }),
                'data-[active=true]:text-primary data-[active=true]:font-medium'
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>
    </NextUINavbar>
  )
}
