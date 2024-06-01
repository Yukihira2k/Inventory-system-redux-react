import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

  import { useDispatch,useSelector } from "react-redux";
  import { login ,signIn } from "../Redux/Redux-slice/AuthSlice";
   
  export function Login() {
const dispatch = useDispatch()
const setAccount = useSelector((state)=> state.auth.setAccount)

    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="border-2 border-solid p-10 rounded-xl">
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
        {`${setAccount? "Sign up": "Sign in"}`}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          {`${setAccount ?"Nice to meet you! Enter your details to register.": "Welcome Back!"}`}
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={()=> dispatch(login())}>
          <div className="mb-1 flex flex-col gap-6">
            {setAccount && <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>}
            {setAccount &&<Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          { setAccount && <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree with the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />}
          {setAccount ? <Button className="mt-6" fullWidth >
           Sign up
          </Button> : null}

          {setAccount? null : <Button className="mt-6" fullWidth onClick={()=> dispatch(login())}>
           Sign in
          </Button>}


         <Typography color="gray" className="mt-4 text-center font-normal">
            {`${setAccount? "Already have an account?" : "Don't have an account? "} `}
            <a href="#" className="font-medium text-gray-900" onClick={()=> dispatch(signIn())}>
              {`${setAccount ? "Sign in" : "Sign up"}`}
            </a>
          </Typography>
        </form>
      </Card>
      </div>
      </div>
    );
  }
  export default Login