'use client'

import { useState, useEffect } from 'react'
import { Card, CardFooter, Image } from '@nextui-org/react'
import Link from 'next/link'

export default function ProductsPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_SERVER}/e-commerce/products?include=author%2Csummary%2Cuser%2Cproduct_category%2Cimages%2Corganization&organization_id=efe87002-8bc2-4306-9db6-205b487abba6`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
      })
  }, [])

  return (
    <div className="w-full">
      <Image
        alt="Album cover"
        className="object-cover h-60 rounded-none"
        height={100}
        shadow="md"
        src="/images/background-product.png"
        width="100%"
      />

      <div className="w-full flex mt-4 justify-center flex-wrap">
        {data?.map((item: any) => (
          <Link href={`/products/${item?.id}`} key={item?.id}>
            <div className="flex mt-2 max-w-[1250px]">
              <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[400px] mr-2"
                shadow="sm"
              >
                <div className="">
                  <Image
                    alt="Album cover"
                    className="object-cover h-80 max-w-100"
                    height={200}
                    shadow="md"
                    src={item?.images[0]?.image_url}
                    width="600px"
                  />
                  <div className="p-4">
                    <div className="flex flex-col col-span-6 md:col-span-8 font-bold mt-4 line-clamp-2">
                      {item?.name}
                    </div>
                  </div>
                </div>
                <CardFooter>
                  <div className="flex mt-4">
                    <span className="line-through mr-2">
                      {item?.price.toLocaleString('it-IT', {
                        style: 'currency',
                        currency: 'VND',
                      })}
                    </span>
                    <span className="text-red-500 font-bold">
                      {item?.amount.toLocaleString('it-IT', {
                        style: 'currency',
                        currency: 'VND',
                      })}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
