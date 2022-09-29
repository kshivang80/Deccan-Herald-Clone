import { Link } from "react-router-dom";
import { Box, Button, Icon, Input, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'

import { Search2Icon } from '@chakra-ui/icons'
import "./Navbar.css"
import { navItems } from "./NavbarItems";

import { Dropdown, Dropdown1, Dropdown2, Dropdown3, Dropdown4, Dropdown5, Dropdown6, Dropdown7, Dropdown8, Dropdown9 } from "./Dropdown";
import { useState } from "react";
import SideBar from "./SideBar";

function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)
    const [dropdown4, setDropdown4] = useState(false);
    const [dropdown5, setDropdown5] = useState(false);
    const [dropdown6, setDropdown6] = useState(false)
    const [dropdown7, setDropdown7] = useState(false)
    const [dropdown8, setDropdown8] = useState(false);

    return (
        <>

            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <img src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/d-logo-new.svg" alt="" />


                </Link>

                <SideBar />


                <ul className="nav-items">
                    {navItems.map((item) => {

                        if (item.title === "Bengaluru") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown && <Dropdown />}
                                </li>
                            );
                        }

                        if (item.title === "Karnataka") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown1(true)}
                                    onMouseLeave={() => setDropdown1(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown1 && <Dropdown1 />}
                                </li>
                            );
                        }

                        if (item.title === "National") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown2(true)}
                                    onMouseLeave={() => setDropdown2(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown2 && <Dropdown2 />}
                                </li>
                            );
                        }

                        if (item.title === "Sports") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown3(true)}
                                    onMouseLeave={() => setDropdown3(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown3 && <Dropdown3 />}
                                </li>
                            );
                        }
                        if (item.title === "Business") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown4(true)}
                                    onMouseLeave={() => setDropdown4(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown4 && <Dropdown4 />}
                                </li>
                            );
                        }
                        if (item.title === "Opinion") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown5(true)}
                                    onMouseLeave={() => setDropdown5(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown5 && <Dropdown5 />}
                                </li>
                            );
                        }
                        if (item.title === "Features") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown6(true)}
                                    onMouseLeave={() => setDropdown6(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown6 && <Dropdown6 />}
                                </li>
                            );
                        }

                        if (item.title === "Videos") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown7(true)}
                                    onMouseLeave={() => setDropdown7(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown7 && <Dropdown7 />}
                                </li>
                            );
                        }

                        if (item.title === "Specials") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown8(true)}
                                    onMouseLeave={() => setDropdown8(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown8 && <Dropdown8 />}
                                </li>
                            );
                        }


                        return (
                            <li key={item.id} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>

                <Popover>
                    <PopoverTrigger>

                        <Search2Icon w={4} h={4} color="whiteAlpha.900" marginLeft="40px" cursor="pointer" />
                    </PopoverTrigger>
                    <PopoverContent w="430px" bg="#0087A8" height="70px">
                        <PopoverArrow  bg="#0087A8" />
                        {/* <PopoverCloseButton marginTop="10px" /> */}
                        <PopoverHeader  >
                            <Box display="flex" gap="8px">
                                <Input w="350px" placeholder="Search News" h="50px" bg="white" fontSize="22px" />
                                <Button marginTop="4px">Search</Button>
                            </Box>

                        </PopoverHeader>


                    </PopoverContent>
                </Popover>




            </nav>


        </>


    )
}

export default Navbar