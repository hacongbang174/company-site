'use client'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar'

import { link as linkStyles } from '@nextui-org/theme'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  User,
} from '@nextui-org/react'

import { AcmeLogo } from './logo'
import { siteConfig } from '@/config/site'
import NextLink from 'next/link'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faPlus } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <NextUINavbar isBordered className="bg-lime-50">
      <NavbarBrand className="grow-0">
        <AcmeLogo />
        <p className="font-bold text-inherit">GCE</p>
      </NavbarBrand>
      <NavbarContent className="hidden flex gap-4">
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
      <NavbarContent justify="end">
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
              }}
              className="transition-transform"
              name="Tony Reichert"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <Button
              size="sm"
              radius="full"
              className="bg-lime-700 text-white shadow-lg"
            >
              {/* <FontAwesomeIcon icon={faCirclePlus} size="2xl" color="primary" /> */}
              <FontAwesomeIcon icon={faPlus} size="xl" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="create_news">Thêm tin tức</DropdownItem>
            <DropdownItem key="create_product">Thêm sản phẩm</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NextUINavbar>
  )
}
