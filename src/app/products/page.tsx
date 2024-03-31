'use client'

import { useState, useEffect } from 'react'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import Link from 'next/link'

export default function ProductsPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(
      `https://gce.onedev.top/api/v1/site/e-commerce/products?include=author%2Csummary%2Cuser%2Cproduct_category%2Cimages%2Corganization&organization_id=94a2e536-aa6d-46fc-a6a3-363e03f564f2`
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
                className="border-none bg-background/60 dark:bg-default-100/50 lg:max-w-[400px] max-w-[350px] mr-2"
                shadow="sm"
              >
                <Image
                  alt="Album cover"
                  className="object-cover h-80 max-w-100"
                  height={300}
                  shadow="md"
                  src={item?.images[0]?.image_url}
                  width="600px"
                />
                <CardBody className="flex flex-col h-[120px] col-span-6 md:col-span-8 font-bold mt-4">
                  <div className="p-4">
                    <span className="line-clamp-2">
                      {item?.name.toUpperCase()}
                      {+item?.percent_discount === 0 ? (
                        ''
                      ) : (
                        <span className="bg-pink-200 text-xl ml-2">
                          -{+item?.percent_discount}%
                        </span>
                      )}
                    </span>
                  </div>
                </CardBody>
                <CardFooter>
                  {+item?.price === 0 ? (
                    <div className="flex p-4">
                      <span className="text-red-500 font-bold">Liên hệ</span>
                    </div>
                  ) : (
                    <div className=" p-4">
                      <span className="line-through mr-2">
                        {(+item?.price).toLocaleString('it-IT', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </span>
                      <span className="text-red-500 font-bold">
                        {(+item?.amount).toLocaleString('it-IT', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </span>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
