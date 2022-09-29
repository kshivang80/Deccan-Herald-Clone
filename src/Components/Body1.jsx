import { Box, Image, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
//import "node_modules/video-react/dist/video-react.css"
// import "video-React"
// <link rel="stylesheet" href="/css/video-react.css" />
import { Player } from 'video-react';
import Video from './Video';

function Body1() {
    return (
        <div >
            <Box h="80px"></Box>
            <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" >
                <Box border="1px solid black" height='300px'>
                    <Image src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/sonia-ghelot-pti-1149269-1664439125.jpg?itok=3J4DygZQ' w="100%" h="100%" />

                </Box>
                <Box border="1px solid black" height='300px'>
                    <SimpleGrid columns={1} spacing={5} marginTop="8px">
                        <Box border="1px solid black" height='80px' display="flex" gap="10px">
                            <Box width="40%">
                                <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/congress-flag-getty-1045182-1635488850-1149280-1664442422.jpg?itok=CwI29lx-' />

                            </Box>
                            <Box fontFamily="sans-serif" >
                                <Text fontSize="15px" textAlign="left" fontWeight="bold" >Hectic discussions on ahead of Cong prez poll ...</Text>

                            </Box>

                        </Box>
                        <Box border="1px solid black" height='80px' display="flex" gap="15px">
                            <Box width="40%">
                                <Image width="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/loan-istock-1117013-1654862746-1-1149391-1664457689.jpg?itok=U9hC2IOQ' />

                            </Box>
                            <Box fontFamily="sans-serif" >
                                <Text fontSize="15px" textAlign="left" fontWeight="bold" >Govt hikes interest rate on small savings schemes in...</Text>

                            </Box>

                        </Box>
                        <Box border="1px solid black" height='80px' display="flex" gap="10px">
                            <Box width="40%">
                                <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/supreme-court-reuters-1-1149245-1664456399.jpg?itok=ja9Gb_4C' />

                            </Box>
                            <Box fontFamily="sans-serif" >
                                <Text fontSize="15px" textAlign="left" fontWeight="bold">BJP did Gujarat development without publicity: Modi.....</Text>

                            </Box>

                        </Box>
                    </SimpleGrid>
                </Box>
                <Box border="1px solid black" height='300px'>

                </Box>
                <Box border="1px solid black" height='300px'>
                    <SimpleGrid columns={1} spacing={8} >
                        <Box border="1px solid black" height='132px' display="flex" gap="10px">

                            <Box width="130%">
                                <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/rains-pti-1149403-1664461275.jpg?itok=5OqdiOJR' />

                            </Box>
                            <Box fontFamily="sans-serif" >
                                <Text fontSize="15px" textAlign="left" fontWeight="bold" >Southwest monsoon ends with excess rains in Rajasthan...</Text>

                            </Box>

                        </Box>
                        <Box border="1px solid black" height='132px' display="flex" gap="10px">

                            <Box width="130%">
                                <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/markets-dh-1149381-1664455487.jpg?itok=AYrbhcYP' />

                            </Box>
                            <Box fontFamily="sans-serif" >
                                <Text fontSize="15px" textAlign="left" fontWeight="bold" >India a 'star' among emerging market economies:</Text>

                            </Box>

                        </Box>

                    </SimpleGrid>
                </Box>
                <Box border="1px solid black" height='300px'>
                    <SimpleGrid columns={1} spacing={2} marginTop="5px" >
                        <Box border="1px solid black" height='52px'>

                            <UnorderedList marginLeft="22px">
                                <ListItem textAlign="left" fontWeight="bold">BJP did Gujarat development without publicity: Modi</ListItem>
                            </UnorderedList>
                        </Box>
                        <Box border="1px solid black" height='52px'>

                            <UnorderedList marginLeft="22px">
                                <ListItem textAlign="left" fontWeight="bold">Ashok Gehlot to not contest Congress presidential poll</ListItem>
                            </UnorderedList>
                        </Box>
                        <Box border="1px solid black" height='52px'>

                            <UnorderedList marginLeft="22px">
                                <ListItem textAlign="left" fontWeight="bold">Row over BHU exam question linked to Gyanvapi Mosque</ListItem>
                            </UnorderedList>
                        </Box>
                        <Box border="1px solid black" height='52px'>

                            <UnorderedList marginLeft="22px">
                                <ListItem textAlign="left" fontWeight="bold">Current account deficit widens to 2.8% of GDP in Q1</ListItem>
                            </UnorderedList>
                        </Box>
                        <Box border="1px solid black" height='52px'>

                            <UnorderedList marginLeft="22px">
                                <ListItem textAlign="left" fontWeight="bold">Congress President Poll Live: Sachin Pilot reaches Sonia Gandhi's residence....</ListItem>
                            </UnorderedList>
                        </Box>


                    </SimpleGrid>
                </Box>
                <Box border="1px solid black" height='300px'>
                    <SimpleGrid columns={1} spacing={2} marginTop="5px" >
                        <Box border="1px solid black" height='90px' display="flex" gap="10px">
                            <Box width="40%">
                                <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/rss-pti-file-1149307-1664448153.jpg?itok=vdIeJPK9' />

                            </Box>
                            <Box fontFamily="sans-serif" >
                                <Text fontSize="15px" textAlign="left" fontWeight="bold" >IPO mop-up plunges 32% to Rs 35,456 cr in...</Text>

                            </Box>

                        </Box>
                        <Box border="1px solid black" height='90px' display="flex" gap="15px">
                            <Box width="40%">
                                <Image width="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/bumrah-ap-1149309-1664459479.jpg?itok=OBdQqfI6' />

                            </Box>
                            <Box fontFamily="sans-serif" >
                                <Text fontSize="15px" textAlign="left" fontWeight="bold" >Jasprit Bumrah ruled out of T20 World Cup...</Text>

                            </Box>

                        </Box>
                        <Box border="1px solid black" height='90px' display="flex" gap="10px">
                            <Box width="40%">
                                <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/ipo-1145613-1663320565-1149346-1664448184.jpg?itok=2emGrteB' />

                            </Box>
                            <Box fontFamily="sans-serif" >
                                <Text fontSize="15px" textAlign="left" fontWeight="bold" >IPO mop-up plunges 32% to Rs 35,456 cr in...</Text>

                            </Box>

                        </Box>

                    </SimpleGrid>

                </Box>

            </SimpleGrid>

            <div style={{ border: "1px solid black", marginTop: "70px", height: "500px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="20px" textAlign="left" marginTop="22px" fontWeight="bold" marginLeft="10px" >MORE TOP STORIES</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="20px" textAlign="left" marginTop="22px" fontWeight="bold" marginLeft="10px" >DH VIDEOS</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box border="1px solid black" height='300px'>
                        <SimpleGrid columns={1} spacing={8} >
                            <Box border="1px solid black" height='132px' display="flex" gap="10px">

                                <Box width="130%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/an-internal-view-of-the-al-janoub-stadium-in-doha-1110876-1653021070-1149407-1664462001.jpg?itok=CeWTJcV-' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >Qatar confirms Covid test requirements for WC fans...</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='132px' display="flex" gap="10px">

                                <Box width="130%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/file7myl9q1zp364kg80blc-1-1149409-1664462778.jpg?itok=xB9mBAyA' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >Lt Gen Chauhan's village celebrates as he becomes CDS.</Text>

                                </Box>

                            </Box>

                        </SimpleGrid>
                    </Box>
                    <Box border="1px solid black" height='300px'>

                        <SimpleGrid columns={1} spacing={2} marginTop="10px" >
                            <Box border="1px solid black" height='80px' display="flex" gap="10px">
                                <Box width="40%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/apple-watch-ecg-1149397-1664459598.jpg?itok=kSL_ZlGV' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >World Heart Day: Apple Watch can help track your...</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='80px' display="flex" gap="15px">
                                <Box width="40%">
                                    <Image width="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/chani-twi-1131564-1659236933-1149362-1664457617.jpg?itok=6JbEOKdc' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >National Games: Top sports stars in the arena on...</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='80px' display="flex" gap="10px">
                                <Box width="40%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/istock-177041191-1583841411-1-1149359-1664449576.jpg?itok=CoivVZOZ' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold">Letter threatens to petrol-bomb Pollachi, probe on</Text>

                                </Box>

                            </Box>

                        </SimpleGrid>

                    </Box>
                    <Box border="1px solid black" height='300px'>
                        <Box marginTop="35px">

                            <Video />
                        </Box>


                    </Box>


                </SimpleGrid>


            </div>

            {/* .......................................................................... */}

            <div style={{ border: "1px solid black", marginTop: "70px", height: "500px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="20px" textAlign="left" marginTop="22px" fontWeight="bold" marginLeft="10px" >MORE TOP STORIES</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="20px" textAlign="left" marginTop="22px" fontWeight="bold" marginLeft="10px" >DH VIDEOS</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box border="1px solid black" height='300px' width="135.5%">
                        <Image h="100%" src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/pti09152022000086a-3-1-1149317-1664444942.jpg?itok=5OOHgHcH"/>
                      
                    </Box>
                    <Box border="1px solid black" height='300px' width="70%" marginLeft="30%">

                      

                    </Box>
                    <Box border="1px solid black" height='300px'>
                        <Box marginTop="35px">

                            
                        </Box>


                    </Box>


                </SimpleGrid>


            </div>


        </div>
    )
}

export default Body1