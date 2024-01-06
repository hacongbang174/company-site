'use client'

import { useState, useEffect } from 'react'
import { Card, Image } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import Link from 'next/link'

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([])
  const [offset, setOffset] = useState(0)

  const getNewsData = (number: number) => {
    fetch(
      `${process.env.REACT_APP_API_SERVER}/news?offset=${number}&limit=10&include=user%2Cchapter%2Corganization%2Creactions%2Cmentions%2Cauthor%2Csummary%2Cimages%2Cparticipates%2Cbids%2Ctags%2Cchildren%2Cindustry&organization_id=efe87002-8bc2-4306-9db6-205b487abba6`
    )
      .then((res) => res.json())
      .then((data) => {
        const count = data.paging.count
        setNews((prevNews) => [...prevNews, ...data.data])
        if (number < count) {
          setOffset((prevOffset) => prevOffset + 10)
        }
      })
      .catch((error) => {
        console.error('Error fetching news:', error)
      })
  }

  useEffect(() => {
    getNewsData(offset)
  }, [offset])

  return (
    <div className="w-full">
      <Image
        alt="Album cover"
        className="object-cover h-60 rounded-none"
        height={100}
        shadow="md"
        src="https://media.techcombank.com/uploads/Rectangle_870_6869fb9e12.png?w=360&q=75%20360w,%20https://media.techcombank.com/uploads/Rectangle_870_6869fb9e12.png?w=576&q=75%20576w,%20https://media.techcombank.com/uploads/Rectangle_870_6869fb9e12.png?w=1080&q=75%201080w,%20https://media.techcombank.com/uploads/Rectangle_870_6869fb9e12.png?w=1200&q=75%201200w,%20https://media.techcombank.com/uploads/Rectangle_870_6869fb9e12.png?w=1920&q=75%201920w"
        width="100%"
      />

      {news.map((item: any, index: number) => (
        <div className="w-full flex mt-4 justify-center" key={index}>
          <div className="">
            <Card isBlurred className="border-none w-[900px]" shadow="sm">
              <div className="flex">
                <Image
                  alt="Album cover"
                  className="object-cover h-60 max-w-80"
                  height={200}
                  shadow="md"
                  src={item?.images[0]?.image_url}
                  width="600px"
                />
                <div className="p-4">
                  <div className="relative col-span-6 md:col-span-4 flex">
                    {item?.type === 0 && (
                      <span className="text-red-400 mr-2">CƠ HỘI</span>
                    )}
                    {item?.type === 1 && (
                      <span className="text-red-400 mr-2">SỰ KIỆN</span>
                    )}
                    {item?.type === 2 && (
                      <span className="text-red-400 mr-2">TIN TỨC</span>
                    )}
                    <span className="mr-2">|</span>
                    <span>
                      {moment(item?.updated_date).format('DD/MM/YYYY')}
                    </span>
                  </div>
                  <div className="flex flex-col col-span-6 md:col-span-8 font-bold mt-4">
                    {item?.name}
                  </div>
                  <div
                    className="flex flex-col col-span-6 md:col-span-8 mt-4 max-h-[72px] overflow-hidden text-ellipsis"
                    dangerouslySetInnerHTML={{ __html: item?.content }}
                  ></div>

                  <div className="flex flex-col col-span-6 md:col-span-8 mt-8 ">
                    <Link href={`/news/${item.id}`}>
                      <p className="font-bold flex items-center">
                        <span className="mr-2"> Xem chi tiết</span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-red-500"
                        />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}
