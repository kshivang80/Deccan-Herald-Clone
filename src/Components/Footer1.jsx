
import "./Footer.css"

import React from 'react'
import { Box, Button, Stack } from "@chakra-ui/react"

function Footer1() {
    return (
        <div>
            <div style={{ backgroundColor: ' #0087a8', width: "100%" }}>
                <div className="Footer">
                    <div>

                        <h4>  NATIONAL</h4>

                        <p>Politics</p>
                        <p>North and Central</p>
                        <p>South</p>
                        <p>East and Northeast</p>
                        <p>West</p>



                    </div>
                    <div>
                        <h4>KARNATAKA</h4>
                        <p>Top Stories</p>
                        <p>Politics</p>
                        <p>Districts</p>



                    </div>
                    <div>
                        <h4>BENGALURU</h4>
                        <p>Top Stories</p>
                        <p>Bengaluru Crime</p>
                        <p>Politics</p>
                        <p>Infrastructure</p>
                        <p>Life in the City</p>



                    </div>
                    <div>
                        <h4>SPORTS</h4>
                        <p>Cricket</p>
                        <p>Formula 1 with DH</p>
                        <p>Football</p>
                        <p>Tennis</p>
                        <p>Sportscene</p>
                        <p>Other Sports</p>


                    </div>
                    <div>
                        <h4>BUSINESS</h4>
                        <p>Business News</p>
                        <p>Family Finance</p>
                        <p>Technology</p>
                        <p>DH Wheels</p>



                    </div>
                    <div>
                        <h4>MULTIMEDIA</h4>
                        <p>Videos</p>
                        <p>Photos</p>


                    </div>
                    <div>
                        <h4>OPINION</h4>
                        <p >DH Views</p>
                        <p>Editorials</p>
                        <p>Panorama</p>
                        <p>Comment</p>
                        <p> In Perspective</p>
                        <p>Right in the Middle</p>



                    </div>
                    <div>

                        <h4>ENTERTAINMENT</h4>
                        <p >Entertainment News</p>
                        <p>DH Showtime</p>
                        <p>DH Talkies</p>
                        <p>Arts, Books & Culture</p>



                    </div>


                </div>

                <Box  bg="#0087a8">
                    <Stack spacing={2} direction='row' align='center' w="80%" margin="auto">
                        <Button color='white' colorScheme='teal'   border=' 2px solid teal' h="auto" w="auto">
                            INDIA ENTERS 5G ERA
                        </Button>
                        <Button color='white' colorScheme='teal'   border=' 2px solid teal' h="auto" w="auto" borderRadius="0px">
                            IT'S KHARGE VS THAROOR
                        </Button>
                        <Button color='white' colorScheme='teal'   border=' 2px solid teal' h="auto" w="auto">
                            INDORE INDIA'S CLEANEST CITY
                        </Button>
                        <Button color='white' colorScheme='teal'   border=' 2px solid teal' h="auto" w="auto">
                            TEAM INDIA GRAPPLE WITH BUMRAH RIDDLE
                        </Button>
                        <Button color='white' colorScheme='teal'   border=' 2px solid teal' h="auto" w="auto" >
                            DH PHOTO GALLERIES
                        </Button>
                    </Stack>
                </Box>

            </div>


            {/* //////////// second footer//////// */}
            <Box h="50px" bg="#0087a8">

            </Box>






        </div>



    )
}

export default Footer1

