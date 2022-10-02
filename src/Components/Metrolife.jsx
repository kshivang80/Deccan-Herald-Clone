import { Box, Image, Link, ListItem, SimpleGrid, Stack, Text, UnorderedList } from '@chakra-ui/react'


import React from 'react'

function Metrolife() {
    return (
        <div>
            <div style={{ border: "1px solid pink", marginTop: "0px", height: "450px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>
                        <Box w="40px" h="6px" bg="#68A923" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >BENGALURU</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="16px" textAlign="left" marginTop="10px" marginLeft="280px" color="blue">VIEW ALL</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box border="1px solid black" height='300px' width="125%">
                        <Image h="100%" src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/clipboard-59-1149520-1664479291.jpg?itok=Q4t1T-tO" />

                    </Box>
                    <Box border="1px solid black" height='300px' width="80%" marginLeft="19.5%" bg="#432957">

                        <Stack textAlign="left" marginLeft="20px" marginTop="65px">
                            <Link color="white">

                                <Text fontSize='28px' lineHeight="30px" fontWeight="700" color="white" > Art tribute to </Text>
                                <Text fontSize='28px' lineHeight="30px" fontWeight="700" color="white" >Mahatma Gandhi</Text>
                                <Text fontSize='28px' lineHeight="30px" fontWeight="700" color="white" >opens on Monday</Text>
                                <Text color="white" lineHeight="35px">29th Sep 2022</Text>

                            </Link>
                        </Stack>




                    </Box>
                    <Box border="1px solid black" height='300px'  >
                        <SimpleGrid columns={1} spacing={2} marginTop="10px" >
                            <Box border="1px solid black" height='86px' display="flex" gap="10px">
                                <Box width="52%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/pujo-pti-1-1149688-1664534103.jpg?itok=pJ_sT7GL' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >   After two years, Bengal celebrates Pujo with vengeance...</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='86px' display="flex" gap="15px">
                                <Box width="33%">
                                    <Image width="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/hijab-pti-1146742-1663727681-1147579-1663935365-1149646-1664540183.jpg?itok=sPCqG4qh' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >    Can a rebellion save the Congress?</Text>


                                </Box>

                            </Box>
                            <Box border="1px solid black" height='86px' display="flex" gap="10px">
                                <Box width="48%">
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



            {/* /////////////// ENTERTAINMENT ///////////////// */}

            <div style={{ border: "1px solid black", marginTop: "10px", height: "450px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>

                        <Box w="40px" h="6px" bg="red" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="5PX" fontWeight="bold" marginLeft="10px" >ENTERTAINMENT</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="16px" textAlign="left" marginTop="10px" marginLeft="280px" color="blue">VIEW ALL</Text>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Box w="40px" h="6px" bg="blue" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >DH DOC DATABASE</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box border="1px solid black" height='300px'>

                        <Box border="1px solid black" height='300px' w="100%">

                            <Box height="210px">
                                <Image h="100%" w="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/01/salman-1129094-1658496655-1150044-1664638137.jpg?itok=yScdrK5I' />


                            </Box>

                            <Box bg="#128296" h="4px"></Box>
                            <Box textAlign="left" marginLeft="20px" marginTop="7px">
                                <Link  >
                                    <Text fontSize="16px" fontFamily="sans-serif" fontWeight="500"> 'Bigg Boss' house themed as 'circus' for season 16..</Text>
                                    <Text fontSize="13px" fontFamily="sans-serif" fontWeight="500" lineHeight="30px">01 Sep 2022</Text>
                                </Link>

                            </Box>

                        </Box>


                    </Box>
                    <Box border="1px solid black" height='300px'>
                        <SimpleGrid columns={1} spacing={8} >
                            <Box border="1px solid black" height='132px' display="flex" gap="10px">

                                <Box width="130%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/01/salman-chiranjeevi-pit-1150040-1664636757.jpg?itok=_4arBbpD' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" > Salman call Hindi South industries to get together...</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='132px' display="flex" gap="10px">

                                <Box width="110%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/01/db876f09bbb49d54cf70d00698ea5fd3-1-1150014-1664626663.jpg?itok=H0MYKSbV' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" > When Kapil Sharma audition for India idol..</Text>

                                </Box>

                            </Box>

                        </SimpleGrid>



                    </Box>



                    <Box border="1px solid black" height='300px'>
                        <SimpleGrid columns={1} spacing={2} marginTop="5px" >
                            <Box border="1px solid black" height='52px'>

                                <UnorderedList marginLeft="22px">
                                    <ListItem textAlign="left" fontWeight="bold">Centre declares PFI 'unlawful', bans it for five years</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box border="1px solid black" height='52px'>

                                <UnorderedList marginLeft="22px">
                                    <ListItem textAlign="left" fontWeight="bold"> Adhir seeks chairmanship for Cong in Parliament panel</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box border="1px solid black" height='52px'>

                                <UnorderedList marginLeft="22px">
                                    <ListItem textAlign="left" fontWeight="bold"> 'The Simpsons' didn't predict Queen Elizabeth's death</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box border="1px solid black" height='52px'>

                                <UnorderedList marginLeft="22px">
                                    <ListItem textAlign="left" fontWeight="bold"> SC junks plea against Adityanath in 'hate speech' case</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box border="1px solid black" height='52px'>

                                <UnorderedList marginLeft="22px">
                                    <ListItem textAlign="left" fontWeight="bold">Azad quits Cong with scathing attack on Rahul, Sonia</ListItem>
                                </UnorderedList>
                            </Box>


                        </SimpleGrid>
                    </Box>


                </SimpleGrid>


            </div>


            {/* //////////// SUPPLIMENTS .////////// */}


            <div style={{ border: "1px solid black", marginTop: "0px", height: "750px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>
                        <Box w="40px" h="6px" bg="#68A923" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >SUPPLEMENTS</Text>
                    </Box>
                    {/* <Box border="1px solid black" height='50px'>

                    </Box> */}
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="16px" textAlign="left" marginTop="10px" marginLeft="280px" color="blue">VIEW ALL</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box border="1px solid black" height='300px' width="125%">
                        <Image h="100%" src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/clipboard-51-1149084-1664411401.jpg?itok=PT-IWSov" />

                    </Box>
                    <Box border="1px solid black" height='300px' width="80%" marginLeft="19.5%" bg="#432957">

                        <Stack textAlign="left" marginLeft="20px" marginTop="65px">
                            <Link color="white">

                                <Text fontSize='28px' lineHeight="30px" fontWeight="700" color="white" > Dasara over the centuries </Text>

                                <Text color="white" lineHeight="35px">29th Sep 2022</Text>

                            </Link>
                        </Stack>




                    </Box>
                    <Box border="1px solid black" height='340px' marginTop="-40px">
                        <Image h="100%" src="https://www.deccanherald.com/sites/dh/themes/deccanherald/images/app_banner_home.jpg" />


                    </Box>


                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="40px" >



                    <Box display="flex" gap="20px" width="750px" border="1px solid black">
                        <Box border="1px solid black" height='250px' w="750%" bg='#A189B4'>
                            <Stack textAlign="left" marginLeft="20px" marginTop="65px">
                                <Link color="white">
                                    <Text fontSize='28px' lineHeight="30px" fontWeight="700" color="white" > All dolled up for</Text>

                                    <Text fontSize='28px' lineHeight="30px" fontWeight="700" color="white" >festival season</Text>
                                    <Text color="white" lineHeight="35px">29th Sep 2022</Text>

                                </Link>
                            </Stack>
                        </Box>

                        <Box border="1px solid black" height='250px' w="750%">

                            <Box height="180px">
                                <Image h="100%" w="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/29/file7mxzrgg6hmd140p0bomk-1149082-1664411401.jpg?itok=68ShvZB-' />


                            </Box>


                            <Box bg="#432957" h="4px"></Box>
                            <Box textAlign="left" marginLeft="20px">
                                <Link>
                                    <Text fontSize="16px" fontFamily="sans-serif">  Kaavi art: From temples, churches to airports</Text>
                                    <Text fontSize="13px" fontFamily="sans-serif" lineHeight="30px">29 Sep 2022</Text>
                                </Link>

                            </Box>

                        </Box>
                    </Box>

                </SimpleGrid>


            </div>



            {/* ////////////////   SPECIALS   ////////// */}



            <div style={{ border: "1px solid black", marginTop: "0px", height: "750px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>
                        <Box w="40px" h="6px" bg="#68A923" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >SPECIALS</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="16px" textAlign="left" marginTop="10px" marginLeft="280px" color="blue">VIEW ALL</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box border="1px solid black" height='300px' width="125%">
                        <Image h="100%" src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/01/file7mzib1qpnbm18iej843o-1150062-1664642778.jpg?itok=2SKjDN5b" />

                    </Box>
                    <Box border="1px solid black" height='300px' width="80%" marginLeft="19.5%" bg="#EE9E18">

                        <Stack textAlign="left" marginLeft="20px" marginTop="65px">
                            <Link color="white">
                                <Text fontSize='28px' lineHeight="30px" fontWeight="700" color="white" >The connotations of temple entry </Text>

                                <Text color="white" lineHeight="35px">29th Sep 2022</Text>

                            </Link>
                        </Stack>




                    </Box>
                    <Box border="1px solid black" height='300px'>
                        <Box height="210px">
                            <Image h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/01/gandhi-reuters-1149774-1664569214.jpg?itok=3SdW55SD' />


                        </Box>
                        <Box bg="#EE9E18" h="5px"></Box>
                        <Box textAlign="left" marginLeft="20px">
                            <Link>
                                <Text fontWeight="bold">Gandhi, a man of many abilities.....</Text>
                                <Text fontSize="13px" fontFamily="sans-serif" lineHeight="30px">20 Sep 2022</Text>
                            </Link>

                        </Box>


                    </Box>


                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="30px" >





                    <Box display="flex" gap="20px" width="750px" border="1px solid black">
                        <Box border="1px solid black" height='250px' w="750%" >
                            <Box height="130px">
                                <Image h="100%" w="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/01/lead-pic-the-journalist-draws-the-caricature-of-a-kid-as-she-looks-on-happily-on-church-street-dh-photo-b-h-shivakumarjpg-1149859-1664575630.jpg?itok=lHTRapfL' />


                            </Box>

                            <Box bg="#EE9E18" h="4px"></Box>
                            <Box textAlign="left" marginLeft="20px">
                                <Link>
                                    <Text fontSize="16px" fontFamily="sans-serif">  The uncertain life of a street artist</Text>
                                    <Text fontSize="13px" fontFamily="sans-serif" lineHeight="30px">20 Sep 2022</Text>
                                </Link>

                            </Box>

                        </Box>
                        <Box border="1px solid black" height='250px' w="750%" >

                            <Box height="130px">
                                <Image h="100%" w="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/01/stp-1149784-1664591110.jpg?itok=aehWrOMU' />


                            </Box>

                            <Box bg="#EE9E18" h="4px"></Box>
                            <Box textAlign="left" marginLeft="20px">
                                <Link>
                                    <Text fontSize="16px" fontFamily="sans-serif"> BWSSB's 100% sewage treatment plan: Many miles to go..</Text>
                                    <Text fontSize="13px" fontFamily="sans-serif" lineHeight="30px">20 Sep 2022</Text>
                                </Link>

                            </Box>

                        </Box>
                        <Box border="1px solid black" height='250px' w="750%">

                            <Box height="130px">
                                <Image h="100%" w="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/01/clipboard-65-1149780-1664573159.jpg?itok=_mAG8fSH' />


                            </Box>

                            <Box bg="#EE9E18" h="4px"></Box>
                            <Box textAlign="left" marginLeft="20px">
                                <Link>
                                    <Text fontSize="16px" fontFamily="sans-serif"> Faecal coliform plagues BWSSB’s treated water</Text>
                                    <Text fontSize="13px" fontFamily="sans-serif" lineHeight="30px">20 Sep 2022</Text>
                                </Link>

                            </Box>

                        </Box>
                    </Box>

                </SimpleGrid>


            </div>


            {/* /////////////////// SCIENCE & ENVIRONMENT////////////// */}

            <div style={{ border: "1px solid pink", marginTop: "0px", height: "450px" }} >
                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="50px" >

                    <Box border="1px solid black" height='50px'>
                        <Box w="40px" h="6px" bg="#9F7FBB" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >SCIENCE & ENVIRONMENT</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="16px" textAlign="left" marginTop="10px" marginLeft="280px" color="blue">VIEW ALL</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={5} width="75%" margin="auto" marginTop="10px">
                    <Box border="1px solid black" height='300px' width="125%">
                        <Image h="100%" src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/01/covid-virus-afp-1149954-1664610771.jpg?itok=dCvqlTNj" />

                    </Box>
                    <Box border="1px solid black" height='300px' width="80%" marginLeft="19.5%" bg="#9F7FBB">

                        <Stack textAlign="left" marginLeft="20px" marginTop="65px">
                            <Link color="white">

                                <Text fontSize='28px' lineHeight="30px" fontWeight="700" color="white" >Long Covid still a mystery, though theories emerge </Text>

                                <Text color="white" lineHeight="35px">29th Sep 2022</Text>

                            </Link>
                        </Stack>




                    </Box>
                    <Box border="1px solid black" height='300px'  >
                        <SimpleGrid columns={1} spacing={2} marginTop="10px" >
                            <Box border="1px solid black" height='86px' display="flex" gap="10px">
                                <Box width="52%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/milky-way-1149731-1664540643.jpg?itok=z3NA7UWW' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >   Milky Way's arms may have carved earth's continents....</Text>

                                </Box>

                            </Box>
                            <Box border="1px solid black" height='86px' display="flex" gap="15px">
                                <Box width="50%">
                                    <Image width="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/dogs-dh-1142464-1662392949-1149704-1664537055.jpg?itok=EhPM_hLY' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Text fontSize="15px" textAlign="left" fontWeight="bold" >'Virtual Labrador' may help prevent dog bites in future..</Text>


                                </Box>

                            </Box>


                            <Box border="1px solid black" height='86px' display="flex" gap="10px">
                                <Box width="48%">
                                    <Image w="100%" h="100%" src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/09/30/nasa-reuter-1149547-1664494775.jpg?itok=K6ws1gE9' />

                                </Box>
                                <Box fontFamily="sans-serif" >
                                    <Link>
                                        <Text fontSize="15px" textAlign="left" fontWeight="bold"> NASA, SpaceX study to extend Hubble's lifespan...</Text>

                                    </Link>


                                </Box>

                            </Box>

                        </SimpleGrid>
                    </Box>


                </SimpleGrid>




            </div>

            {/* ///// YOU MAY LIKE ///// */}


            <div style={{ border: "1px solid red", marginTop: "0px", height: "400px", width: "60%", margin: "auto" }}>

                <SimpleGrid columns={3} spacing={5} width="100%" margin="auto" marginTop="0px" >

                    <Box border="1px solid black" height='50px'>
                        <Box w="40px" h="6px" bg="#9F7FBB" marginTop="5px" marginLeft="10px"></Box>
                        <Text fontSize="20px" textAlign="left" marginTop="" fontWeight="bold" marginLeft="10px" >YOU MAY LIKE</Text>
                    </Box>
                    <Box border="1px solid black" height='50px'>

                    </Box>
                    <Box border="1px solid black" height='50px'>
                        <Text fontSize="18px" textAlign="left" fontWeight='bold' marginTop="10px" color="black">Sponsored Links by Taboola</Text>
                    </Box>

                </SimpleGrid>

                <SimpleGrid columns={3} spacing={2} marginTop="10px" >
                    <Box border="1px solid black" height='320px' gap="10px">
                        <Box >
                            <Image w="100%" h="230px" src='https://www.akshayapatra.org/apadmin/uploads/pages/Taboola_LP_3298X1147.jpg' />

                        </Box>
                        <Box fontFamily="sans-serif" >
                            <Link>
                                <Text fontSize="19px" textAlign="left" lineHeight="25px" marginTop="5px" fontWeight="bold" color="black">Supporting a child means transforming their life</Text>
                                <Text textAlign="left" color="gray" marginTop="5px">Akshay Patra</Text>
                            </Link>


                        </Box>

                    </Box>
                    <Box border="1px solid black" height='320px' gap="10px">
                        <Box >
                            <Image w="100%" h="230px" src='https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/8/2022_8$largeimg_1791157113.JPG' />

                        </Box>
                        <Box fontFamily="sans-serif" >
                            <Link>
                                <Text fontSize="19px" textAlign="left" lineHeight="25px" marginTop="5px" fontWeight="bold" color="black">Add a ‘Dr.’ to your name</Text>
                                <Text textAlign="left" color="gray" marginTop="5px">upGrad</Text>
                            </Link>


                        </Box>

                    </Box>
                    <Box border="1px solid black" height='320px' gap="10px">
                        <Box >
                            <Image w="100%" h="230px" src='https://content.jdmagicbox.com/comp/delhi/p2/pwfl1511803214t9e5p2/catalogue/icici-bank-delhi-tsxa6.jpg' />

                        </Box>
                        <Box fontFamily="sans-serif" >
                            <Link>
                                <Text fontSize="19px" textAlign="left" lineHeight="25px" marginTop="5px" fontWeight="bold" color="black">Complete protection with iPru All-in-one</Text>
                                <Text textAlign="left" color="gray" marginTop="5px">ICICI Pru Life Insurance Plan</Text>
                            </Link>


                        </Box>

                    </Box>
                    




                </SimpleGrid>

            </div>


        </div>
    )
}

export default Metrolife