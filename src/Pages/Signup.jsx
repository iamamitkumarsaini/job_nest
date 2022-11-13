import React,{useState} from 'react'
import { Image,Flex, Button,FormControl,Grid,GridItem,Heading,Input,Text,VStack,Box,Container,useDisclosure} from '@chakra-ui/react'
import { useNavigate,Link,NavLink} from 'react-router-dom'
// import SignIn from './SignIn'
// import { FaGoogle } from 'react-icons/fa'
import {GiSchoolBag} from "react-icons/gi"
import ProjectLogo from "../assets/projectlogo.png"
import Regimage from "../assets/regimage.png"
import { useMediaQuery } from "@chakra-ui/react"
import {GiDiscGolfBag} from "react-icons/gi"
import {FcGoogle} from "react-icons/fc"




const Signup = () => {

  const navigate=useNavigate()
  const [passType1, setPassType1] = useState(true);
  let arr=JSON.parse(localStorage.getItem("signupData")) || []
	
  const [input,setInput]=useState({
    name:"",
    email:"",
    password:"",
    mobile:""
  })

	const handelSubmit=(e)=>{
    e.preventDefault()
    // console.log(input)
    arr.push(input)
    console.log(arr)
    localStorage.setItem("signupData",JSON.stringify(arr))
    navigate("/signin")
   
  }



const [isLargerThan600] = useMediaQuery('(min-width: 600px)')


  return (
    <>
   
    <form onSubmit={handelSubmit} >
      <Box 
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" p="5">
          
      <Flex ml={"10%"} mr="10%" justifyContent={"space-between"} align="center">
        
      <Link to="/"><Image  src={ProjectLogo} /></Link>
      {/* <Spacer></Spacer> */}
      
      <Text as={"p"}>Already Registered? 
        <Link to="/signin">
       <Box as='span' color="blue"> Login </Box></Link>
        here</Text>
      </Flex>

      </Box>
     

      <Flex >
        <Box mt={-40} position="fixed">
          <Image src={Regimage} margin={"50%"} pt="10%" w="70%" />
        </Box>
        <Box w="40%" margin="auto">

      
<VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
<VStack margin="auto" >
 <Heading>Find a job & grow your career</Heading>


 
</VStack >
<Grid  templateColumns="repeate(1,1fr)" gap={2} w="full">
<GridItem colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired >
         <Text>Full Name</Text>
         <Input
         isRequired
         type="text"
         placeholder='What is your name?'
        name="name"
         value={input.name}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
         />
     </FormControl>
 </GridItem>
 <GridItem colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired>
         <Text>Email</Text>
         <Input
         isRequired
         type="email"
         placeholder='Tell us your Email ID'
         name="email"
         value={input.email}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
       
         />
     </FormControl>
 </GridItem>
 <GridItem  colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired>
         <Text>Password</Text>
         <Flex justifyContent={"space-evenly"}>
         <Input
         isRequired
         type={passType1?'password':'text'}
         placeholder='Create a password for your account'
         name="password"
         value={input.password}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
         
         >
          
         </Input>
         
         
         
         <Button  onClick={()=>{setPassType1(!passType1)}}>
			  {passType1?'show':'hide'}</Button>
         </Flex>
         
         
     </FormControl>
 </GridItem>
 
 <GridItem  colSpan={{base:2 ,lg:2}}>
     <FormControl isRequired>
         <Text>Mobile Number</Text>
         <Input
         isRequired
         type="number"
         placeholder='Enter your Mobile Number'
         name="mobile"
         value={input.mobile}
      onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}
        
         />
       
     </FormControl>
 </GridItem>

<GridItem colSpan={{base:2 ,lg:2}}>
<Text>Work Status</Text>
<Container maxW='1000px' marginTop='30px'  marginBottom={"30px"} display='grid' gridTemplateColumns= {isLargerThan600?"repeat(5,1fr)":"repeat(2,1fr)"} gap='30px'>

  <Button  leftIcon={<GiDiscGolfBag/>} colorScheme='white' border='1px solid skyblue' color='black' width={isLargerThan600? "180px":"150px"} height='60px' size='lg' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='20px 4px 20px 4px'  p={"10px"} _focus={{ outline: 0, boxShadow: "outline" }}>
       
       I'm Experienced
      
  </Button>
      
    
      <Button leftIcon={<GiSchoolBag/>} colorScheme='white' border='1px solid skyblue' color='black' width={isLargerThan600? "180px":"150px"} height='60px' size='lg' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='20px 4px 20px 4px' p={"10px"} _focus={{ outline: 0, boxShadow: "outline" }}>
        
        I'm Fresher
      </Button>

</Container>

</GridItem>
  
 





 
 <GridItem colSpan={{base:2 , md:2}} >
    
     <Text as={"p"} fontSize="12px">By clicking Register, you agree to the Terms and Conditions & Privacy Policy of JobNest.in</Text>
     
     <Input bg="blue.200" _hover={{bg:"blue"}} mt="4" color="white" type="submit" w="50%" value={"Register"}></Input>
     
         
     
     
 </GridItem>
</Grid>








</VStack>



</Box>

<Box m="15%" ml="-30%" >
  <Text>Or Continue with</Text>
  <br />
  <Button leftIcon={<FcGoogle size="25"/>}>Google</Button>
</Box>

      </Flex>
     
  

    </form>



<Flex justifyContent={"space-between"} color="blue" w="35%" m="auto" fontSize={"12"} >
  <Text >About  |</Text>
  <Text>Contact Us |</Text>
  <Text>FAQs |</Text>
  <Text>Terms and Conditions |</Text>
  <Text>RePort a Problem |</Text>
  <Text>Privacy Policy </Text>
</Flex>
<Text w="30%" m="auto" mb="10%" ml="45%" fontSize={"10"}>All rights reserved © 2022 Info Edge India Ltd.</Text>


    </>
     

  )
}

export default Signup
