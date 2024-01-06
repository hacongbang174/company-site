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
        className="object-cover h-40"
        height={100}
        shadow="md"
        src={data?.images[0]?.image_url}
        width="100%"
      />

      <div className="w-full mt-4 text-center">
        <p>{data?.name}</p>
        <p>{moment(data?.updated_date).format('DD/MM/YYYY')}</p>
      </div>
      <div
        className="w-full mt-4 px-40 pl-40 mt-8"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>
      <div className="w-full flex mt-4 justify-center"></div>
    </div>
  )
}
