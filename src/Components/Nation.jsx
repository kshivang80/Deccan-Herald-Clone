import React from 'react'
import { background, Box, Button, Image, ListItem, SimpleGrid, Stack, Text, UnorderedList } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import {Video,Video1} from './Video'


function Nation() {
    return (
        <div>
            <div style={{ border: "1px solid black", marginTop: "10px", height: "450px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>

                        <Box w="40px" h="6px" bg="#EE9E18" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="5PX" fontWeight="bold" marginLeft="10px" >NATIONAL</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="16px" textAlign="left" marginTop="10px" marginLeft="280px" color="blue">VIEW ALL</Text>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Box w="40px" h="6px" bg="#9F7FBB" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >SPEAK OUT</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box border="1px solid black" height='300px'>
                        <SimpleGrid columns={1} spacing={8} >
                            <Box border="1px solid black" height='132px' display="flex" gap="10px">

                                <Box width="130%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/bjp-flagreuters-1581583764-1108931-1652440287-1125270-1657385497-1149841-1664557171.jpg?itok=4ms1ij9C' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >BJP wins 417 out of 814 seats in MP local body polls...</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='132px' display="flex" gap="10px">

                                <Box width="110%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/crime-scene-istock-1077210-1643746915-1077893-1643932563-1149836-1664556790.jpg?itok=P-rFT6MH' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" > MP man kills minor for not bringing tobacco from...</Text>

                                </Box>

                            </Box>

                        </SimpleGrid>
                    </Box>
                    <Box border="1px solid black" height='300px'>

                        <SimpleGrid columns={1} spacing={2} marginTop="10px" >
                            <Box border="1px solid black" height='80px' display="flex" gap="10px">
                                <Box width="52%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/pfi-1149835-1664556783.jpg?itok=8LMPxmFE' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" > IUML leader calls PFI ban ‘arbitrary, discriminatory’</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='80px' display="flex" gap="15px">
                                <Box width="33%">
                                    <Image width="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/pilot-pti-1-1144704-1663065057-1149819-1664555900.jpg?itok=bWJZ7CuE' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >   What is in store for Sachin Pilot?</Text>


                                </Box>

                            </Box>
                            <Box border="1px solid black" height='80px' display="flex" gap="10px">
                                <Box width="58%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/kharge-pti-1149812-1664555831.jpg?itok=9TxokxY_' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Link>
                                        <Text fontSize="15px" textAlign="left" fontWeight="bold"> Left with few options, Cong's G-23 leaders back Kharge...</Text>

                                    </Link>


                                </Box>

                            </Box>

                        </SimpleGrid>

                    </Box>
                    <Box border="1px solid black" height='300px'  >
                        <Image w="100%" h="100%" src="https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/09/30/speak-out-70-1149532-1664479762.jpg?itok=a3NNojlR" />

                    </Box>


                </SimpleGrid>


            </div>





            {/* ////////////////////  BUSINES  BOX START   ///////////////// */}

            <div style={{ border: "1px solid black", marginTop: "10px", height: "450px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>

                        <Box w="40px" h="6px" bg="#128296" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="5PX" fontWeight="bold" marginLeft="10px" >BUSINESS</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="16px" textAlign="left" marginTop="10px" marginLeft="280px" color="blue">VIEW ALL</Text>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Box w="40px" h="6px" bg="#90665E" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >OPINION</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box border="1px solid black" height='300px'>

                        <Box border="1px solid black" height='300px' w="100%">

                            <Box height="210px">
                                <Image h="100%" w="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/inflation-istock-1149508-1664474741-1149839-1664556954.png?itok=udHT9Xrt' />


                            </Box>

                            <Box bg="#128296" h="4px"></Box>
                            <Box textAlign="left" marginLeft="20px" marginTop="7px">
                                <Link  >
                                    <Text fontSize="16px" fontFamily="sans-serif" fontWeight="500"> Retail inflation for industrial workers rises to 5.85%...</Text>
                                    <Text fontSize="13px" fontFamily="sans-serif" fontWeight="500" lineHeight="30px">20 Sep 2022</Text>
                                </Link>

                            </Box>

                        </Box>


                    </Box>
                    <Box border="1px solid black" height='300px'>
                        <SimpleGrid columns={1} spacing={8} >
                            <Box border="1px solid black" height='132px' display="flex" gap="10px">

                                <Box width="130%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/file-photo-of-nestle-logo-reuters-1102593-1650529917-1130850-1658994024-1149314-1664444673-1149837-1664556862.jpg?itok=OeflRF0q' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" > Nestle India CFO David Steven McDaniel to step down...</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='132px' display="flex" gap="10px">

                                <Box width="110%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/car-factory-ford-reuters-1149807-1664554962.jpg?itok=345z1xHc' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" > MP man kills minor for not bringing tobacco from...</Text>

                                </Box>

                            </Box>

                        </SimpleGrid>



                    </Box>
                    <Box border="1px solid black" height='300px'  >
                        <SimpleGrid columns={1} spacing={2} marginTop="10px" >
                            <Box border="1px solid black" height='80px' display="flex" gap="10px">
                                <Box width="52%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/pujo-pti-1-1149688-1664534103.jpg?itok=pJ_sT7GL' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >   After two years, Bengal celebrates Pujo with vengeance...</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='80px' display="flex" gap="15px">
                                <Box width="33%">
                                    <Image width="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/hijab-pti-1146742-1663727681-1147579-1663935365-1149646-1664540183.jpg?itok=sPCqG4qh' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >    Can a rebellion save the Congress?</Text>


                                </Box>

                            </Box>
                            <Box border="1px solid black" height='80px' display="flex" gap="10px">
                                <Box width="58%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/clipboard-97-994159-1622903962-1149608-1664522434.jpg?itok=VD6SqS7q' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Link>
                                        <Text fontSize="15px" textAlign="left" fontWeight="bold">  Stronger laws needed to stem the rot of defection...</Text>

                                    </Link>


                                </Box>

                            </Box>

                        </SimpleGrid>
                    </Box>


                </SimpleGrid>


            </div>


            {/* ////// sports  parts//////////////////////// */}

            <div style={{ border: "1px solid black", marginTop: "10px", height: "450px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>

                        <Box w="40px" h="6px" bg="#7DBF85" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="5PX" fontWeight="bold" marginLeft="10px" >SPORTS</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="16px" textAlign="left" marginTop="10px" marginLeft="280px" color="blue">VIEW ALL</Text>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Box w="40px" h="6px" bg="#9F7FBB" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >DH PICKS</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">

                    <Box border="1px solid black" height='300px'>
                        <SimpleGrid columns={1} spacing={8} >
                            <Box border="1px solid black" height='132px' display="flex" gap="10px">

                                <Box width="130%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/file-photo-of-nestle-logo-reuters-1102593-1650529917-1130850-1658994024-1149314-1664444673-1149837-1664556862.jpg?itok=OeflRF0q' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" > Nestle India CFO David Steven McDaniel to step down...</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='132px' display="flex" gap="10px">

                                <Box width="110%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/car-factory-ford-reuters-1149807-1664554962.jpg?itok=345z1xHc' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" > MP man kills minor for not bringing tobacco from...</Text>

                                </Box>

                            </Box>

                        </SimpleGrid>



                    </Box>
                    <Box border="1px solid black" height='300px'  >
                        <SimpleGrid columns={1} spacing={2} marginTop="10px" >
                            <Box border="1px solid black" height='80px' display="flex" gap="10px">
                                <Box width="52%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/pujo-pti-1-1149688-1664534103.jpg?itok=pJ_sT7GL' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >   After two years, Bengal celebrates Pujo with vengeance...</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='80px' display="flex" gap="15px">
                                <Box width="33%">
                                    <Image width="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/hijab-pti-1146742-1663727681-1147579-1663935365-1149646-1664540183.jpg?itok=sPCqG4qh' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >    Can a rebellion save the Congress?</Text>


                                </Box>

                            </Box>
                            <Box border="1px solid black" height='80px' display="flex" gap="10px">
                                <Box width="58%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/clipboard-97-994159-1622903962-1149608-1664522434.jpg?itok=VD6SqS7q' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Link>
                                        <Text fontSize="15px" textAlign="left" fontWeight="bold">  Stronger laws needed to stem the rot of defection...</Text>

                                    </Link>


                                </Box>

                            </Box>

                        </SimpleGrid>
                    </Box>

                    <Box border="1px solid black" height='300px'>
                        <SimpleGrid columns={1} spacing={2} marginTop="5px" >
                            <Box border="1px solid black" height='52px'>

                                <UnorderedList marginLeft="22px">
                                    <ListItem textAlign="left" fontWeight="bold">Centre hikes gas prices by 40%; CNG, PNG to cost more</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box border="1px solid black" height='52px'>

                                <UnorderedList marginLeft="22px">
                                    <ListItem textAlign="left" fontWeight="bold"> Putin declares annexation of Ukrainian lands</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box border="1px solid black" height='52px'>

                                <UnorderedList marginLeft="22px">
                                    <ListItem textAlign="left" fontWeight="bold"> FEMA approves biggest seizure order against Xiaomi: ED</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box border="1px solid black" height='52px'>

                                <UnorderedList marginLeft="22px">
                                    <ListItem textAlign="left" fontWeight="bold"> Goof-up in Tharoor's manifesto: India's map distorted</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box border="1px solid black" height='52px'>

                                <UnorderedList marginLeft="22px">
                                    <ListItem textAlign="left" fontWeight="bold"> Auto driver, who invited Kejriwal home, is 'Modi fan'</ListItem>
                                </UnorderedList>
                            </Box>


                        </SimpleGrid>
                    </Box>


                </SimpleGrid>


            </div>


            {/* // INTERNATIONAL PARTS /////////////// */}
            


            <div style={{ border: "1px solid black", marginTop: "0px", height: "750px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>
                        <Box w="40px" h="6px" bg="#68A923" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >INTERNATIONAL</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="16px" textAlign="left" marginTop="10px" marginLeft="280px" color="blue">VIEW ALL</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box border="1px solid black" height='300px' width="125%">
                        <Image h="100%" src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/clipboard-70-1149872-1664561209.jpg?itok=Qh0MbXST" />

                    </Box>
                    <Box border="1px solid black" height='300px' width="80%" marginLeft="19.5%" bg="#432957">

                        <Stack textAlign="left" marginLeft="20px" marginTop="65px">
                            <Link color="white">
                                <Text fontSize='28px' lineHeight="30px" fontWeight="700" color="white" >Despite alternative </Text>
                                <Text fontSize='28px' lineHeight="30px" fontWeight="700" color="white" >site allotments</Text>
                                <Text fontSize='28px' lineHeight="30px" fontWeight="700" color="white" >Bommai backs BDA</Text>
                                <Text color="white" lineHeight="35px">29th Sep 2022</Text>

                            </Link>
                        </Stack>




                    </Box>
                    <Box border="1px solid black" height='300px'>
                        <Box height="210px">
                            <Image h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/liz-truss-reuters-3-1142775-1662518011-1149842-1664557424.jpg?itok=4EeHt2Ru' />


                        </Box>
                        <Box bg="#432957" h="5px"></Box>
                        <Box textAlign="left" marginLeft="20px">
                            <Link>
                                <Text fontWeight="bold">    Half of Brits think new UK PM Truss should...</Text>
                                <Text fontSize="13px" fontFamily="sans-serif" lineHeight="30px">20 Sep 2022</Text>
                            </Link>

                        </Box>


                    </Box>


                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="40px" >



                    <Box display="flex" gap="20px" width="750px" border="1px solid black">
                        <Box border="1px solid black" height='250px' w="750%" >
                            <Box height="130px">
                                <Image h="100%" w="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/jens-stoltenberg-afp-1149848-1664558472.jpg?itok=SUj6EjGZ' />


                            </Box>

                            <Box bg="#432957" h="4px"></Box>
                            <Box textAlign="left" marginLeft="20px">
                                <Link>
                                    <Text fontSize="16px" fontFamily="sans-serif">   NATO rejects Putin's 'land grab' after annexations</Text>
                                    <Text fontSize="13px" fontFamily="sans-serif" lineHeight="30px">20 Sep 2022</Text>
                                </Link>

                            </Box>

                        </Box>
                        <Box border="1px solid black" height='250px' w="750%" >

                            <Box height="130px">
                                <Image h="100%" w="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/clipboard-68-1149846-1664558338.jpg?itok=0LDGr2nW' />


                            </Box>

                            <Box bg="#432957" h="4px"></Box>
                            <Box textAlign="left" marginLeft="20px">
                                <Link>
                                    <Text fontSize="16px" fontFamily="sans-serif"> Putin says Russia will achieve victory in Ukraine</Text>
                                    <Text fontSize="13px" fontFamily="sans-serif" lineHeight="30px">20 Sep 2022</Text>
                                </Link>

                            </Box>

                        </Box>
                        <Box border="1px solid black" height='250px' w="750%">

                            <Box height="130px">
                                <Image h="100%" w="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/imran-khan-reuters-1139125-1661422946-1149847-1664557833.jpg?itok=PykuXeYj' />


                            </Box>

                            <Box bg="#432957" h="4px"></Box>
                            <Box textAlign="left" marginLeft="20px">
                                <Link>
                                    <Text fontSize="16px" fontFamily="sans-serif">Imran khan discussing 'foreign conspiracy' cypher leaks</Text>
                                    <Text fontSize="13px" fontFamily="sans-serif" lineHeight="30px">20 Sep 2022</Text>
                                </Link>

                            </Box>

                        </Box>


                    </Box>









                </SimpleGrid>

                <Box border="1px solid black" height='250px' w='24%' marginLeft="63.5%" marginTop="-250px">
                    <Box height="160px">
                        <Image h="100%" w="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/vladimir-putin-reuters-1147048-1663781392-1149817-1664555879.jpg?itok=RNlqwcIe' />


                    </Box>

                    <Box bg="#432957" h="4px"></Box>
                    <Box textAlign="left" marginLeft="20px">
                        <Link>
                            <Text fontSize="16px" fontFamily="sans-serif"> Putin eases citizenship rule for foreigners in army...</Text>
                            <Text fontSize="13px" fontFamily="sans-serif" lineHeight="30px">20 Sep 2022</Text>
                        </Link>

                    </Box>


                </Box>






            </div>

            {/* /////////////////////////// DH VIDEO SECTION////////////// ////////////////////////////////////////////////////////////////*/}


                
            <div style={{ border: "1px solid black", marginTop: "10px", height: "600px" , backgroundColor:"#07081D"}} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>

                        <Box w="40px" h="6px" bg="#128296" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="5PX" color="white" fontWeight="bold" marginLeft="10px" >BUSINESS</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="16px" textAlign="left" marginTop="10px"  marginLeft="280px" color="blue"></Text>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Box w="40px" h="6px" bg="#90665E" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" color="white" fontWeight="bold" marginLeft="10px" >OPINION</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={2} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box border="1px solid white" height='430px' w="125%">

                        <Box border="1px solid red" height='320px' w="100%">

                           <Video1 />

                            <Box bg="#128296" h="4px"></Box>
                            <Box textAlign="left" marginLeft="20px" marginTop="7px">
                                <Link  >
                                    <Text fontSize='3xl' color="white" fontFamily="sans-serif" fontWeight="bold"> Cong poll | Does Tharoor stand a chance against Kharge?</Text>
                                   
                                </Link>

                            </Box>

                        </Box>


                    </Box>
                  
                    <Box border="1px solid white" marginLeft="196px" height='430px' w="65%">
                        <SimpleGrid columns={1} spacing={2} marginTop="0px" >
                            <Box border="1px solid black" height='100px' display="flex" gap="10px">
                                <Box width="59%">
                                    <Image w="100%" h="100%" src='https://thumbs.dreamstime.com/b/belgrade-serbia-january-vladimir-putin-president-russian-federation-press-conference-palace-ser-working-visit-137032566.jpg' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" color="white" >   Pressure on Vladimir Putin as reservists called up for war</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='100px' display="flex" gap="15px">
                                <Box width="43%">
                                    <Image width="110%" h="100%" src='https://akm-img-a-in.tosshub.com/aajtak/images/story/202210/rahul_gandhi_bharat_jodo-sixteen_nine.jpg?size=948:533' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" color="white" >    Amid Rahul Gandhi's Bharat Jodo Yatra</Text>


                                </Box>

                            </Box>
                            <Box border="1px solid black" height='100px' display="flex" gap="10px">
                                <Box width="58%">
                                    <Image w="90%" h="100%" src='https://www.un.org/securitycouncil/sites/www.un.org.securitycouncil/files/catherine_colonna_mps_ministerial_meeting.jpg' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Link>
                                        <Text fontSize="15px" textAlign="left" fontWeight="bold" color="white"> Security Council Ministerial Meeting on Ukraine </Text>

                                    </Link>


                                </Box>

                            </Box>

                            <Box border="1px solid black" height='100px' display="flex" gap="10px">
                                <Box width="58%">
                                    <Image w="100%" h="100%" src='https://c.ndtvimg.com/2022-10/ul9uugo8_pm-modi-jio-5g_625x300_01_October_22.jpg' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Link>
                                        <Text fontSize="15px" textAlign="left" fontWeight="bold" color="white">  PM Modi Gets 5G Demo From Mukesh And Akash Ambani</Text>

                                    </Link>


                                </Box>

                            </Box>

                        </SimpleGrid>
                    </Box>


                </SimpleGrid>


            </div>




        </div>
    )
}

export default Nation