import React,{useState} from 'react'
import { Container,Flex,Box,Image,Button,
Stack,FormLabel,Input,Text ,useDisclosure} from "@chakra-ui/react"
import Navbar from '../Components/Navbar'
import Newto from "../assets/newto.png"
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

   

    const Login = () => {
      
      const [passType1, setPassType1] = useState(true);
      const navigate=useNavigate()
      const [input,setInput]=useState({
        
        email:"",
        password:"",
        
      })
      const handelLogin=(e)=>{
        e.preventdefault()
        const loggeduser=JSON.parse(localStorage.getItem("user"))
        if(input.email===loggeduser.email && input.password===loggeduser.password){
          localStorage.setItem("loggedin",true)
          alert("success")
          navigate("/")
        }
        else{
          alert("Wrong Email or Password")
        }
      }
  return (
    <div>
      <Navbar/>
      <Container mt="2%" maxW={{base:"full" , lg:"container.xl"}}
      p={{base:3,lg:2}}>
        <Flex  w="100%" direction={{base:"column-reverse",lg:"row"}} justifyContent={"space-around"}>
        <Box mt="30px"   >
                  
                  <Image  w="30%" src={Newto}  shadow={"base"} position="absolute" top={"30%"}/>
                  
                  
                 
                  <Button mt={{lg:"200%"}}  ml={{lg:"50%"}} colorScheme='blue' variant='outline'>Register for free</Button>
                  
              </Box>
              <Box  w="40%" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" alignItems={"center"}>
              <form
             
             onSubmit={handelLogin}
            >
                <Stack spacing='10%' p={12}>
                <Box>
                <FormLabel htmlFor='username'>Email</FormLabel>
              <Input 
              placeholder='Enter your active Email ID / Username' 
              name="email"
         value={input.email}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
			
              />
                </Box>
                 
                <Box>
                <FormLabel htmlFor='username'>Password</FormLabel>
                <Flex>
                <Input placeholder="Enter your password"
              type={passType1?'password':'text'}
              name="password"
         value={input.password}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
            
              
              />
              <Button onClick={()=>{setPassType1(!passType1)}}>
			{passType1?'show':'hide'}</Button>

            </Flex>

              <Text color="blue" align="end" fontSize={12}>Forgot Password ?</Text>
                </Box>
                <Box backgroundColor={"blue"} >
                <Input type={"submit"} value="Login"  color="white"
                />
                </Box>
                <Box align="center">
                    <Text color="blue">Use OTP to Login</Text>
                </Box>
                <Box display={"flex"}>
                    <Text w="50%" >
                        <hr >
                       </hr>
                    </Text>
                    <Text mt="-3">or</Text>
                    <Text w="50%" >
                        <hr >
                       </hr>
                    </Text>
                </Box>
                <Box align="center">
                <Button  w="100%" borderRadius={"20"} leftIcon={<FcGoogle size={25} align="start"/>}>
             Sign in with Google
            </Button>
                </Box>
                </Stack>
              
            </form>
              </Box>

        </Flex>

      </Container>


    </div>
  )
}

export default Login
