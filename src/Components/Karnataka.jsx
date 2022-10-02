
import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {Video} from './Video'
import "./Karnataka.css"
import StyleColorMode from './StyleColorMode'

function Karnataka() {
    return (
        <div>

            <div style={{ border: "1px solid white", marginTop: "10px", height: "450px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box  height='50px' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" >
                        <Box w="40px" h="6px" bg="#68A923" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >KARNATAKA</Text>
                    </Box>
                    <Box  height='50px' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" >
                        <Text fontSize="16px" textAlign="left" marginTop="10px" marginLeft="280px" color="blue">VIEW ALL</Text>

                    </Box>
                    <Box  height='50px' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" >
                        <Box w="40px" h="6px" bg="#128296" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >WHAT'S BREWING</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box  height='300px'>
                        <SimpleGrid columns={1} spacing={8} >
                            <Box  height='132px' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" display="flex" gap="10px">

                                <Box width="130%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/probe-istock-photo-955567-1614330128-957286-1614691689-1007262-1625947363-1018117-1628560368-1149701-1664537450.jpg?itok=Q_mpCknX' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >Suspected PFI link: NIA raids community hall in Mangaluru..</Text>

                                </Box>

                            </Box>
                            <Box  height='132px' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" display="flex" gap="10px">

                                <Box width="110%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/siddaramaiha-dh-1149110-1664380321-1149681-1664533147.jpg?itok=u-7qalrM' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" > Siddaramaiah warns BJP against obstructing Yatra</Text>

                                </Box>

                            </Box>

                        </SimpleGrid>
                    </Box>
                    <Box  height='300px'>

                        <SimpleGrid columns={1} spacing={2} marginTop="10px" >
                            <Box  height='80px'  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"   display="flex" gap="10px">
                                <Box width="40%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/hc-1149641-1664529504.jpg?itok=HmMV2g5F' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" > HC orders K'taka to hold BBMP polls on or...</Text>

                                </Box>

                            </Box>
                            <Box  height='80px'  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"   display="flex" gap="15px">
                                <Box width="54%">
                                    <Image width="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/assault-protest-istock-1149527-1664504662.jpg?itok=GNdRy0kM' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >163 communal incidents since 2019 in Karnataka: Data...</Text>

                                </Box>

                            </Box>
                            <Box  height='80px'  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"   display="flex" gap="10px">
                                <Box width="40%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/file7mylaigj8c31eu6mpomk-1149525-1664504426.jpg?itok=BmUOtKuN' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold">Bharat Jodo Yatra to enter Karnataka today</Text>

                                </Box>

                            </Box>

                        </SimpleGrid>

                    </Box>
                    <Box  height='300px'>
                        <Box marginTop="10px">

                            <Video />
                        </Box>


                    </Box>


                </SimpleGrid>


            </div>


            {/* -More from karnatakata //////////////////// */}


            <div style={{ border: "1px solid white", marginTop: "10px", height: "450px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box  height='50px'>

                        <Box w="40px" h="6px" bg="#ABA12B" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="17px" textAlign="left" marginTop="5PX" fontWeight="bold" marginLeft="10px" >MORE FROM KARNATAKA DISTRICTS</Text>
                    </Box>
                    <Box  height='50px'>
                        <Text fontSize="16px" textAlign="left" marginTop="10px" marginLeft="280px" color="blue">VIEW ALL</Text>

                    </Box>
                    <Box  height='50px'>
                        <Box w="40px" h="6px" bg="#128296" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >HOROSCOPE</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box  height='300px'>
                        <SimpleGrid columns={1} spacing={8} >
                            <Box  height='132px' display="flex" gap="10px">

                                <Box width="130%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/drowing-rep-istock-1149595-1664533967.jpg?itok=BEj-hnxD' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >Youth drowns to death in swimming pool in Shivamogga</Text>

                                </Box>

                            </Box>
                            <Box  height='132px' display="flex" gap="10px">

                                <Box width="110%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/bommai-1-1148206-1664121911-1148505-1664441355-1149583-1664534268.jpg?itok=jy-WUD2Z' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >Cong not giving valid reasons for ban on RSS:...</Text>

                                </Box>

                            </Box>

                        </SimpleGrid>
                    </Box>
                    <Box  height='300px' >

                        <SimpleGrid columns={1} spacing={2} marginTop="10px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                            <Box  height='80px'  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"   display="flex" gap="10px">
                                <Box width="52%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/29-meeting-1149514-1664475284.jpg?itok=-y08TLhF' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >Supporters of Hubballi-Ankola line outnumber naysayers</Text>

                                </Box>

                            </Box>
                            <Box  height='80px'  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"   display="flex" gap="15px">
                                <Box width="45%">
                                    <Image width="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/kerala-rain-pti-1149497-1664472784.jpg?itok=RO1kJ1rV' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >  Thundershowers lash Kalyana Karnataka districts</Text>


                                </Box>

                            </Box>
                            <Box  height='80px'  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"   display="flex" gap="10px">
                                <Box width="52%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/seer-1141350-1662086044-1141443-1662094121-1149480-1664471854.jpg?itok=AN_8cbWb' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Link>
                                        <Text fontSize="15px" textAlign="left" fontWeight="bold">Pressure mounts on Murugha Sharana to relinquish Peeth...</Text>

                                    </Link>


                                </Box>

                            </Box>

                        </SimpleGrid>

                    </Box>
                    <Box  height='300px' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" >
                        <Text  fontSize='25px' marginTop="10px" fontFamily="serif">What does your star sign say?</Text>

                        <Box className='backGround' height='250px'  marginTop="0px">
                            <Button bg='black' size='md'  color="white" borderRadius="0px" marginLeft="-220px" marginTop="50px">
                                Explore
                            </Button>
                            {/* <StyleColorMode/> */}
                        </Box>

                    </Box>


                </SimpleGrid>


            </div>






        </div>
    )
}

export default Karnataka