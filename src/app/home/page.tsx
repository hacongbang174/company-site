'use client'

import { Card, Image } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [data, setData] = useState<any>({})
  useEffect(() => {
    fetch(
      `https://gce.onedev.top/api/v1/site/organizations/94a2e536-aa6d-46fc-a6a3-363e03f564f2?include=users%2Cindustries%2Cservices%2Ccountry%2Ccity%2Corganization_users%2Corganization_users_position%2Corganization_users_user_invited%2Corganization_users_iam_group%2Cchildren%2Cchilden_organization_users%2Cchildren_organization_users_position%2Cchildren_organization_users_iam_group%2Ciam_groups%2Cchapters%2Csummary`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }, [])

  return (
    <div className="w-full">
      <Image
        alt="Album cover"
        className="object-cover h-60 rounded-none"
        height={100}
        shadow="md"
        src="/images/background.jpg"
        width="100%"
      />
      <div className="flex mt-4 mx-20 ml-20 justify-center text-lg">
        <Card isBlurred className="border-none w-[800px] mr-4" shadow="sm">
          <div className="p-4">
            <p className="text-red-500 text-2xl">Tầm nhìn</p>
            <p className="mt-4">{data?.vision}</p>
          </div>
        </Card>
        <Card isBlurred className="border-none w-[800px]" shadow="sm">
          <div className="p-4">
            <p className="text-red-500 text-2xl"> Sứ mệnh</p>
            <p className="mt-4">{data?.mission}</p>
          </div>
        </Card>
      </div>
      {/* <div className="flex mt-4 mx-20 ml-20 text-xl text-black">
        <p className="text-3xl font-bold">Lịch sử và các cột mốc quan trọng</p>
      </div> */}
      <div className=" mt-8 mx-20 ml-20 text-lg text-black">
        <p className="text-3xl font-bold">Giá trị cốt lõi</p>
        <div className="flex flex-wrap mt-4">
          <div className="max-w-[420px] mr-4 mt-4">
            <Image
              alt="Album cover"
              className="object-cover h-40 w-80"
              src="/images/khach-hang-la-trong-tam.jpg"
            />
            <p className="mt-4 text-xl font-bold">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Khách hàng là trọng tâm'),
                data?.core_values.indexOf('Khách hàng là trọng tâm') + 23
              )}
            </p>
            <p className="mt-4">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Khách hàng là trọng tâm') + 23,
                data?.core_values.indexOf('Thích ứng nhanh với mọi thay đổi')
              )}
            </p>
          </div>
          <div className="max-w-[420px] mr-4 mt-4">
            <Image
              alt="Album cover"
              className="object-cover h-40 w-80"
              src="/images/doi-moi-va-sang-tao.jpg"
            />
            <p className="mt-4 text-xl font-bold">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Thích ứng nhanh với mọi thay đổi'),
                data?.core_values.indexOf('Thích ứng nhanh với mọi thay đổi') +
                  32
              )}
            </p>
            <p className="mt-4">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Thích ứng nhanh với mọi thay đổi') +
                  32,
                data?.core_values.indexOf('Là một đội ngũ gắn kết')
              )}
            </p>
          </div>
          <div className="max-w-[420px] mr-4 mt-4">
            <Image
              alt="Album cover"
              className="object-cover h-40 w-80 "
              src="/images/hop-tac-vi-muc-tieu-chung.jpg"
            />

            <p className="mt-4 font-bold text-xl">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Là một đội ngũ gắn kết'),
                data?.core_values.indexOf('Là một đội ngũ gắn kết') + 22
              )}
            </p>
            <p className="mt-4">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Là một đội ngũ gắn kết') + 22,
                data?.core_values.length
              )}
            </p>
          </div>
          {/* 
          <div className="max-w-[420px] mr-4 mt-4">
            <Image
              alt="Album cover"
              className="object-cover h-40 w-80 "
              src="/images/phat-trien-ban-than.jpg"
            />

            <p className="mt-4 font-bold text-xl">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Phát triển bản thân'),
                data?.core_values.indexOf('Phát triển bản thân') + 19
              )}
            </p>
            <p className="mt-4">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Phát triển bản thân') + 19,
                data?.core_values.indexOf('Làm việc hiệu quả') - 3
              )}
            </p>
          </div>

          <div className="max-w-[420px] mr-4 mt-4">
            <Image
              alt="Album cover"
              className="object-cover h-40 w-80 "
              src="/images/lam-viec-hieu-qua.jpg"
            />

            <p className="mt-4 font-bold text-xl">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Làm việc hiệu quả'),
                data?.core_values.indexOf('Làm việc hiệu quả') + 17
              )}
            </p>
            <p className="mt-4">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Làm việc hiệu quả') + 17,
                data?.core_values.length
              )}
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex mt-4 mx-20 ml-20 text-xl text-black">
        <p className="text-3xl font-bold">Dịch vụ</p>
      </div>
      <div className="flex mt-4 mx-20 ml-20 text-lg text-black">
        {data?.services?.map((item: any) => (
          <div className="mt-4 mr-8" key={item.id}>
            - {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}
