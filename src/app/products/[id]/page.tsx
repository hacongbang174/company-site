'use client'

import { useState, useEffect } from 'react'
import { Card, Image } from '@nextui-org/react'

export default function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const [data, setData] = useState<any>()

  useEffect(() => {
    fetch(
      `https://gce.onedev.top/api/v1/site/e-commerce/products/${params?.id}?include=author%2Csummary%2Cuser%2Cproduct_category%2Cimages%2Corganization`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [params.id])

  return (
    <div className="w-full">
      <Image
        alt="Album cover"
        className="object-cover h-60 round-none"
        height={100}
        shadow="md"
        src="/images/background-product.png"
        width="100%"
      />

      <div className="w-full flex mt-4 justify-center">
        <div className="">
          <Card
            isBlurred
            className="border-none lg:w-[900px] md:w-[720px] sm:w-[600px] w-[350px]"
            shadow="sm"
          >
            <div className="lg:flex md:flex">
              <Image
                alt="Album cover"
                className="object-cover h-auto lg:min-w-[300px] md:min-w-[200px] sm:w-[800px] w-[600px]"
                shadow="md"
                src={data?.images[0]?.image_url}
              />

              <div className="p-8">
                <div className="relative col-span-6 md:col-span-4 flex">
                  <p className="mr-2 font-bold text-xl">
                    {data?.name}
                    {+data?.percent_discount === 0 ? (
                      ''
                    ) : (
                      <span className="bg-pink-200 text-xl ml-2">
                        -{+data?.percent_discount}%
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex flex-col col-span-6 md:col-span-8 font-bold mt-4">
                  {+data?.price === 0 ? (
                    <div className="flex mt-4">
                      <span className="text-red-500 font-bold">Liên hệ</span>
                    </div>
                  ) : +data?.percent_discount === 0 ? (
                    <div className="">
                      <p className="text-red-500 font-bold">
                        {(+data?.amount).toLocaleString('it-IT', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </p>
                    </div>
                  ) : (
                    <div className="">
                      <p className="line-through mr-2">
                        {(+data?.price).toLocaleString('it-IT', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </p>
                      <p className="text-red-500 font-bold">
                        {(+data?.amount).toLocaleString('it-IT', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </p>
                    </div>
                  )}
                  {/* <span className="line-through mr-2">
                    {(+data?.price).toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </span>
                  <span className="text-red-500 font-bold">
                    {(+data?.amount).toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'VND',
                    })}{' '}
                  </span> */}
                </div>
                <div className="flex flex-col col-span-6 md:col-span-8 mt-4  lg:w-[570px] md:w-[470px] sm:w-[570px] w-[300px] overflow-hidden text-ellipsis">
                  Mô tả :
                </div>
                <div className="flex flex-col col-span-6 md:col-span-8 mt-4  lg:w-[570px] md:w-[470px] sm:w-[570px] w-[300px] overflow-hidden text-ellipsis">
                  {data?.description}
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8 mt-8 ">
                  <p className="font-bold flex items-center"></p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
