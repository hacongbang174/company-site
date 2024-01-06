'use client'

import { Card, Image } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [data, setData] = useState<any>({})
  useEffect(() => {
    fetch(
      `https://gce.onedev.top/api/v1/site/organizations/efe87002-8bc2-4306-9db6-205b487abba6?include=users%2Cindustries%2Cservices%2Ccountry%2Ccity%2Corganization_users%2Corganization_users_position%2Corganization_users_user_invited%2Corganization_users_iam_group%2Cchildren%2Cchilden_organization_users%2Cchildren_organization_users_position%2Cchildren_organization_users_iam_group%2Ciam_groups%2Cchapters%2Csummary`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className="w-full">
      <Image
        alt="Album cover"
        className="object-cover h-60 rounded-none"
        height={100}
        shadow="md"
        src="/images/background-org.jpg"
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
      <div className="flex mt-4 mx-20 ml-20 text-xl text-black">
        <p className="text-3xl font-bold">Lịch sử và các cột mốc quan trọng</p>
      </div>
      <div className=" mt-4 mx-20 ml-20 text-lg text-black">
        <p className="text-3xl font-bold">Giá trị cốt lõi</p>
        <div className="flex flex-wrap mt-4">
          <div className="max-w-[420px] mr-4">
            <Image
              alt="Album cover"
              className="object-cover h-20 w-20"
              src="https://lh4.googleusercontent.com/cOoY2I6iNPEHp8aVkQ7jJAh5l5hnItigyBBC8zH8M1IbpbJJm26V9MWQOhRlDtVNHZN2DE69YRaoceYZ4ZYA1KNeXozsW4Bll8xYQLkQrr6YpXEdLMoR3kkrFbcTOnZi5Q=w1280"
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
                data?.core_values.indexOf('Đổi mới và sáng tạo')
              )}
            </p>
          </div>
          <div className="max-w-[420px] mr-4">
            <Image
              alt="Album cover"
              className="object-cover h-20 w-20"
              src="https://lh4.googleusercontent.com/Aa7EUhD1_I9oOpzBUYNp0jxVy5qEVjC2sfiCYpllyO3KXB74myUADYDVe4oun14AASzHFgCkI2VNbFf04rZCe6rBJEKfebX7HBk8t_YkGnqXIgvnrR7SYwZYAXZvGu4P1g=w1280"
            />
            <p className="mt-4 text-xl font-bold">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Đổi mới và sáng tạo'),
                data?.core_values.indexOf('Đổi mới và sáng tạo') + 19
              )}
            </p>
            <p className="mt-4">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Đổi mới và sáng tạo') + 19,
                data?.core_values.indexOf('Hợp tác vì mục tiêu chung')
              )}
            </p>
          </div>
          <div className="max-w-[420px] mr-4">
            <Image
              alt="Album cover"
              className="object-cover h-20 w-20 "
              src="https://lh5.googleusercontent.com/98bCoyQ7qFazsNc2nvs5FLy_GYaqwBD5EpV5I4EZ6IGfd2zKkT2Oe2wn3B7LDFLts2BIT7POhkuwegbTmEIe8UgnmS_M9-b4EFTZiX3x1wiDhPWhVEV-18MgF6j4Ki9SQA=w1280"
            />

            <p className="mt-4 font-bold text-xl">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Hợp tác vì mục tiêu chung'),
                data?.core_values.indexOf('Hợp tác vì mục tiêu chung') + 25
              )}
            </p>
            <p className="mt-4">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Hợp tác vì mục tiêu chung') + 25,
                data?.core_values.indexOf('Phát triển bản thân')
              )}
            </p>
          </div>

          <div className="max-w-[420px] mr-4">
            <Image
              alt="Album cover"
              className="object-cover h-20 w-20 "
              src="https://lh5.googleusercontent.com/98bCoyQ7qFazsNc2nvs5FLy_GYaqwBD5EpV5I4EZ6IGfd2zKkT2Oe2wn3B7LDFLts2BIT7POhkuwegbTmEIe8UgnmS_M9-b4EFTZiX3x1wiDhPWhVEV-18MgF6j4Ki9SQA=w1280"
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
                data?.core_values.indexOf('Làm việc hiệu quả')
              )}
            </p>
          </div>

          <div className="max-w-[420px] mr-4">
            <Image
              alt="Album cover"
              className="object-cover h-20 w-20 "
              src="https://lh5.googleusercontent.com/98bCoyQ7qFazsNc2nvs5FLy_GYaqwBD5EpV5I4EZ6IGfd2zKkT2Oe2wn3B7LDFLts2BIT7POhkuwegbTmEIe8UgnmS_M9-b4EFTZiX3x1wiDhPWhVEV-18MgF6j4Ki9SQA=w1280"
            />

            <p className="mt-4 font-bold text-xl">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Làm việc hiệu quả'),
                data?.core_values.indexOf('Làm việc hiệu quả') + 17
              )}
            </p>
            <p className="mt-4">
              {data?.core_values?.substring(
                data?.core_values.indexOf('Hợp tác vì mục tiêu chung') + 17,
                data?.core_values.indexOf('Phát triển bản thân'),
                data?.core_values.length - 1
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-4 mx-20 ml-20 text-xl text-black">
        <p className="text-3xl font-bold">Dịch vụ</p>
      </div>
      <div className="flex mt-4 mx-20 ml-20 text-lg text-black">
        {data?.services?.map((item: any) => (
          <p className="mt-4" key={item.id}>
            {item.name}
          </p>
        ))}
      </div>
    </div>
  )
}
