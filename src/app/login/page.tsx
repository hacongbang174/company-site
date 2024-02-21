'use client'

import {
  Card,
  Button,
  Input,
  CardHeader,
  CardBody,
  CardFooter,
} from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [account, setAccount] = useState({
    phone: '',
    password: '',
  })
  const [error, setError] = useState('')
  const setPhone = (e: any) => {
    const phone = e.target.value
    setAccount({ ...account, phone })
  }

  const setPassword = (e: any) => {
    const password = e.target.value
    setAccount({ ...account, password })
  }
  const handelLogin = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(account),
    }
    fetch(`https://gce.onedev.top/api/v1/auth/sign-in`, requestOptions)
      .then((res) => res.json())
      .then((data: any) => {
        if (data?.access_token) {
          const access_token = data.access_token
          localStorage.setItem('access_token', access_token)
          localStorage.setItem('user', JSON.stringify(data.user))
          router.push('/home')
        } else {
          setError('Số điện thoại hoặc mật khẩu sai. Vui lòng kiểm tra lại!')
        }
      })
  }

  return (
    <div>
      <Card>
        <CardHeader className="pb-0 mt-2 flex items-start justify-center">
          <h3 className="font-bold ">Login</h3>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Input
            type="phone"
            label="Phone"
            className="mt-2"
            onChange={(event) => setPhone(event)}
          />
          <Input
            type="password"
            label="Password"
            className="mt-2"
            onChange={(event) => setPassword(event)}
          />
        </CardBody>

        <p className="text-red-500 mx-2 my-2">{error}</p>
        <CardFooter className="justify-center w-full">
          <Button color="primary" className=" w-full" onClick={handelLogin}>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
