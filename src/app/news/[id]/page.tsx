'use client'

import { useState, useEffect } from 'react'
import { Card, Image } from '@nextui-org/react'
import moment from 'moment'

export default function NewDetailPage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>()

  useEffect(() => {
    fetch(
      `https://gce.onedev.top/api/v1/site/news/${params?.id}?include=user%2Cchapter%2Corganization%2Creactions%2Cmentions%2Cauthor%2Csummary%2Cimages%2Cparticipates%2Cbids%2Ctags%2Cchildren%2Cindustry`
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
        className="object-cover 2xl:h-[500px] xl:h-[500px] lg:h-[450px] md:h-[400px] sd:h-[350px] h-[300px] "
        height={100}
        shadow="md"
        src={data?.images[0]?.image_url}
        width="100%"
      />

      <div className="w-full mt-12 text-center">
        <p className="font-bold text-2xl">{data?.name.toUpperCase()}</p>
        <p className="font-bold mt-4">
          {moment(data?.updated_date).format('DD/MM/YYYY')}
        </p>
      </div>
      <div
        className="w-full lg:px-40 lg:pl-40 md:px-30 md:pl-30 sm:px-20 sm:pl-20 px-10 py-10"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>
      <div className="w-full flex mt-4 justify-center"></div>
    </div>
  )
}
