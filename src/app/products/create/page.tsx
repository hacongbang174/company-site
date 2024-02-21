'use client'

import {
  Button,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from '@nextui-org/react'
import { Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export default function ProductDetailPage() {
  const [displayPrice, setDisplayPrice] = useState('')
  const formatVND = (value: any) => {
    let formatted = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(value)
    return formatted.replace(/\s*₫$/, '')
  }
  const parseVND = (value: any) => {
    return Number(value.replace(/\D/g, ''))
  }
  const handlePriceChange = (e: any) => {
    const parsedValue = parseVND(e.target.value)
    setBody({ ...body, price: parsedValue })
    setDisplayPrice(formatVND(parsedValue))
  }
  const [categories, setCategories] = useState([])
  const [type, setType] = useState('')
  const setTypeValue = (value: string) => {
    setType(value)
  }
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    setSelectedFiles(files)
  }

  const handleUpload = async () => {
    if (selectedFiles) {
      const formData = new FormData()
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('images', selectedFiles[i])
      }
      const response = await fetch(
        'https://gce.onedev.top/api/v1/e-commerce/images',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
          body: formData,
        }
      )
      const data = await response.json()
      console.log(data)
    }
  }

  const [images, setImages] = useState([])
  const [body, setBody] = useState({
    name: '',
    product_category_id: '',
    price: 0,
    percent_discount: 0,
    amount: 0,
    description: '',
    images: [],
    organization_id: '24d7e420-beb3-494d-a5e0-fa3a7421c86e',
  })

  const access_token = localStorage.getItem('access_token')
  const getCategory = async () => {
    const response = await fetch(
      'https://gce.onedev.top/api/v1/e-commerce/product-categories',
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    )
    const data = await response.json()
    setCategories(data.data)
  }

  const handleSubmit = async () => {
    const response = await fetch(
      'https://gce.onedev.top/api/v1/e-commerce/products',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(body),
      }
    )
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <div className="w-full bg-[url('/images/bg-create-product.jpg')] bg-cover p-2">
      <div className="bg-white mx-[30rem] py-10 mb-10 mt-10 rounded-lg">
        <h1 className="text-2xl font-bold text-center">Thêm mới sản phẩm</h1>
        <div className="grid mx-10 mt-2">
          <Select
            isRequired
            name="product_category_id"
            label="Danh mục sản phẩm"
            placeholder="Chọn danh mục sản phẩm"
            className="mt-4"
            onChange={(e) => {
              setBody({ ...body, product_category_id: e.target.value })
            }}
          >
            {categories?.map((category: any) => (
              <SelectItem key={category.id} value={category.id}>
                {category.description}
              </SelectItem>
            ))}
          </Select>
          <Input
            isRequired
            name="name"
            label="Tên sản phẩm"
            placeholder="Nhập tên sản phẩm"
            className="mt-4"
            onChange={(e) => {
              setBody({ ...body, name: e.target.value })
            }}
          />
          <RadioGroup
            name="type"
            label="Giá sản phẩm"
            orientation="horizontal"
            className="mt-4"
            defaultValue="contact"
            onChange={(e) => {
              setTypeValue(e.target.value)
            }}
          >
            <Radio value="contact">Liên hệ</Radio>
            <Radio value="price">Giá</Radio>
          </RadioGroup>
          {type === 'price' && (
            <div>
              <Input
                type="text"
                // label="Giá"
                name="price"
                placeholder="Nhập giá sản phẩm"
                className="mt-4"
                value={displayPrice}
                defaultValue="0"
                onChange={handlePriceChange}
              />
              <Input
                type="number"
                name="percent_discount"
                label="Giảm giá (%)"
                placeholder="Nhập giảm giá sản phẩm"
                defaultValue="0"
                className="mt-4"
                onChange={(e) => {
                  setBody({
                    ...body,
                    percent_discount: parseVND(e.target.value),
                  })
                }}
              />
              <Input
                type="number"
                name="amount"
                label="Giá sau khi giảm giá"
                // placeholder="Nhập giảm giá sản phẩm"
                value={formatVND(
                  Number(body.price) -
                    (Number(body.price) * Number(body.percent_discount)) / 100
                )}
                className="mt-4"
                disabled
                onChange={(e) => {
                  setBody({ ...body, amount: parseVND(e.target.value) })
                }}
              />
            </div>
          )}
          <Input
            isRequired
            name="description"
            label="Mô tả sản phẩm"
            placeholder="Nhập mô tả sản phẩm"
            className="mt-4"
            onChange={(e) => {
              setBody({ ...body, description: e.target.value })
            }}
          />
          <div className="mt-4">
            <p>Ảnh sản phẩm</p>

            <input
              type="file"
              multiple
              className=""
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="mx-10 mt-10 flex items-center justify-center">
          <Button
            color="primary"
            className="w-1/8 text-md"
            onClick={handleSubmit}
          >
            Tạo mới
          </Button>
        </div>
      </div>
    </div>
  )
}
