import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import "./SideBar.css"

function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const styles = {
        color: "white",
        fontSize: "18px",
        fontFamily: "sans-serif",
        height: '60px',
        width: "100%",
        border: "0.5px solid LightBlue",
        display:"flex",
        cursor:"pointer"
        
       

    }

    return (
        <>
            {/* <Button ref={btnRef}  onClick={onOpen}>
         <HamburgerIcon   ref={btnRef}  onClick={onOpen}/>
        </Button> */}
            <HamburgerIcon ref={btnRef} onClick={onOpen} width="50px" height="30px" color="white" marginLeft="40px" />
            <Box width="2px" height="35px" bg="white"></Box>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}

            >
                <DrawerOverlay />
                <DrawerContent bg="#0087A8">
                    <DrawerCloseButton color="white" border="1px solid LightBlue" width="40px" height="40px" />
                    <DrawerHeader></DrawerHeader>

                    <DrawerBody   className='SideBar' overflowX="hidden">
                        <SimpleGrid columns={0.5} spacing={0.1} marginTop="8px" width="120%" marginLeft="-24px"   >
                            <Box style={styles}>
                              
                                <Text marginTop="16px"  marginLeft="30px">  HOME</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px"  marginLeft="160px"/>
                            </Box>
                            <Box style={styles}>
                                <Text marginTop="16px"  marginLeft="30px"> DH CUP 2022</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="100px"/>
                            </Box>
                            <Box style={styles}>
                               
                                <Text marginTop="16px"  marginLeft="30px">  BENGALURU</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="104px"/>
                            </Box>
                            <Box style={styles}>
                                
                                <Text marginTop="16px"  marginLeft="30px">  KARNATAKA</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="110px"/>
                                
                            </Box>
                            <Box style={styles}>
                              
                                <Text marginTop="16px" marginLeft="30px">    NATIONAL</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="130px"/>
                            </Box>
                            <Box style={styles}>
                              
                                <Text marginTop="16px" marginLeft="30px">    SPORTS</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="145px"/>
                            </Box>
                            <Box style={styles}>
                                
                                <Text marginTop="16px" marginLeft="30px">  BUSINESS</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="130px"/>
                            </Box>
                            <Box style={styles}>
                               
                                <Text marginTop="16px" marginLeft="30px">   WORLD</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="155px"/>
                            </Box>
                            <Box style={styles}>
                                
                                <Text marginTop="16px" marginLeft="30px"> OPINION</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="148px"/>
                            </Box>
                            <Box style={styles}>
                                
                                <Text marginTop="16px" marginLeft="30px"> METROLIFE</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="120px"/>
                            </Box>
                            <Box style={styles}>
                               
                                <Text marginTop="16px" marginLeft="30px">   ENTERTAINMENT</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="73px"/>
                            </Box>
                            <Box style={styles}>
                              
                                <Text marginTop="16px" marginLeft="30px">    VIDEOS</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px"  marginLeft="155px"/>
                            </Box>
                            <Box style={styles}>
                               
                                <Text marginTop="16px" marginLeft="30px"> SPECIALS</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="135px"/>
                            </Box>
                            <Box style={styles}>
                                
                                <Text marginTop="16px" marginLeft="30px">TRAVEL</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px"  marginLeft="155px"/>
                            </Box>
                            <Box style={styles}>
                                
                                <Text marginTop="16px" marginLeft="30px"> SPECTRUM</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px"  marginLeft="120px"/>
                            </Box>
                            <Box style={styles}>
                               
                                <Text marginTop="16px" marginLeft="30px">  LIVING</Text>

                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="163px"/>
                            </Box>
                            <Box style={styles}>
                               
                                <Text marginTop="16px" marginLeft="30px"> SUNDAY HERALD</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="70px"/>
                            </Box>
                            <Box style={styles}>
                             
                                <Text marginTop="16px" marginLeft="30px">  PHOTOS</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="145px"/>
                            </Box>
                            <Box style={styles}>
                               
                                <Text marginTop="16px" marginLeft="30px"> DH EDUCATION</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="85px"/>
                            </Box>
                            <Box style={styles}>
                                
                                <Text marginTop="16px" marginLeft="30px">E-PAPER</Text>
                                <AddIcon  marginTop="17px" w="20px" h="20px" marginLeft="142px"/>
                            </Box>
                        </SimpleGrid>
                    </DrawerBody>

                    {/* <DrawerFooter>


                    </DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideBar