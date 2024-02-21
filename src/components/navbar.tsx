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
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export const Navbar = () => {
  const router = useRouter()
  const [user, setUser] = useState<any>({})

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
    setUser({})
    router.push('/login')
  }

  // Update the useEffect dependency array to include 'user'
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

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
      {Object.keys(user).length === 0 ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="/login" variant="flat">
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: user.thumbnail,
                }}
                className="transition-transform"
                name={user.username}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="logout" color="danger" onClick={handleLogout}>
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
              <DropdownItem key="create_news" as={Link} href="/news/create">
                Thêm tin tức
              </DropdownItem>
              <DropdownItem
                key="create_product"
                as={Link}
                href="/products/create"
              >
                Thêm sản phẩm
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      )}
    </NextUINavbar>
  )
}
