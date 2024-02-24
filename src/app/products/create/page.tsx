'use client'

import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
  Image,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from '@nextui-org/react'
import { Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProductDetailPage() {
  const router = useRouter()
  const [access_token, setAccessToken] = useState('')
  const [categories, setCategories] = useState([])
  const [type, setType] = useState('')
  const [images, setImages] = useState([
    {
      name: '',
      resource_type: 'products',
      image_url: '',
      description: '',
    },
  ])

  const setTypeValue = (value: string) => {
    setType(value)
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    handleUpload(files)
  }

  const handleUpload = async (files: any) => {
    if (files) {
      console.log(files)

      const dataImages = []
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData()
        formData.append('file', files[i])
        formData.append('mediaId', new Date().getDate().toString())
        const response = await fetch('https://gce.onedev.top/api/v1/media', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
          body: formData,
        })
        const data = await response.json()

        dataImages.push({
          name: data.Key,
          resource_type: 'products',
          image_url: data.Location,
          description: data.key,
        })
      }
      setBody({ ...body, images: dataImages })
      setImages(dataImages)
    }
  }

  const handleRemoveImage = (image: any) => {
    const imagesNew = images.filter((item) => item !== image)
    setImages(imagesNew)
    setBody({ ...body, images: imagesNew })
  }

  const [body, setBody] = useState({
    name: '',
    product_category_id: '',
    price: 0,
    percent_discount: 0,
    amount: 0,
    description: '',
    images: [
      {
        name: '',
        resource_type: 'products',
        image_url: '',
        description: '',
      },
    ],
    organization_id: '24d7e420-beb3-494d-a5e0-fa3a7421c86e',
  })

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
    if (data.id) {
      alert('Thêm mới sản phẩm thành công!')
      router.push('/products')
    } else {
      alert('Có lỗi xảy ra trong quá trình thêm mới sản phẩm!')
    }
  }

  useEffect(() => {
    getCategory()
    const token = localStorage.getItem('access_token')
    if (token) {
      setAccessToken(token)
    }
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
                onChange={(e) => {
                  setBody({ ...body, price: +e.target.value })
                }}
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
                    percent_discount: +e.target.value,
                  })
                }}
              />
              <Input
                type="number"
                name="amount"
                label="Giá sau khi giảm giá"
                // placeholder="Nhập giảm giá sản phẩm"
                value={(
                  body.price -
                  (body.price * body.percent_discount) / 100
                ).toString()}
                className="mt-4"
                disabled
                onChange={(e) => {
                  setBody({ ...body, amount: +e.target.value })
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
            <p>
              Ảnh sản phẩm <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-wrap">
              {images[0].image_url !== '' &&
                images.map((image, index) => (
                  <div key={index} className="flex items-start mr-2">
                    <Image
                      width={80}
                      alt="NextUI hero Image"
                      src={image.image_url}
                      className=""
                    />
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="text-red-500"
                      onClick={(e) => handleRemoveImage(image)}
                    />
                  </div>
                ))}
            </div>
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
            isDisabled={
              body.description === '' ||
              body.name === '' ||
              body.product_category_id === '' ||
              body.images[0].image_url === '' ||
              (type === 'price' && body.price === 0)
            }
          >
            Tạo mới
          </Button>
        </div>
      </div>
    </div>
  )
}
