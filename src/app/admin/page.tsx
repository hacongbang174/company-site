import { title } from '@/components/primitives'
import {
  Card,
  Spacer,
  Button,
  Input,
  Checkbox,
  CardHeader,
  CardBody,
  CardFooter,
} from '@nextui-org/react'

export default function LoginPage() {
  return (
    <div>
      <Card>
        <CardHeader className="pb-0 mt-2 flex items-start justify-center">
          <h3 className="font-bold ">Login</h3>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Input type="phone" label="Phone" className="mt-2" />
          <Input type="password" label="Password" className="mt-2" />
        </CardBody>

        <CardFooter>
          <div className="flex justify-between">
            <Checkbox className="mr-4">
              <h4>Remember me</h4>
            </Checkbox>
            <a href="#" className="text-blue-500">
              Forgot password?
            </a>
          </div>
        </CardFooter>
        <CardFooter className="justify-center w-full">
          <Button color="primary" className=" w-full">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
