import { Box, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'




const Home = () => {
    return (
        <>
            <Box marginTop={"18%"}>
                <Img marginBottom={"2%"} width="90%" src='https://b3h2.scene7.com/is/content/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C01-19-DSK-1?$content$&wid=2560&hei=1000' />
            </Box>
            <Flex style={{ width: "90%", margin: "auto", justifyContent: "space-evenly", alignItems: "center" }}>
                <Img boxSize={"15%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D1?$content$' alt='c1' />
                <Img boxSize={"15%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D10?$content$' alt='c2' />
                <Img boxSize={"15%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D3?$content$' alt='c3' />
                <Img boxSize={"15%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D4?$content$' alt='c4' />
                <Img boxSize={"15%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D5?$content$' alt='c5' />
                <Img boxSize={"15%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D6?$content$' alt='c6' />
            </Flex>
            <Box style={{ width: "90%", margin: "auto" }}>
                <h1 className='head' fontSize="30px">february savings spotlight</h1>
                <Flex style={{ justifyContent: "space-evenly", alignItems: "center", margin: "auto" }}>
                    <Flex style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Img boxSize={"80%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW48-US-0123-0129-WEB-HP-C15-12-V3-1-1?$content$&wid=480' />
                        <h1>Save 20% Now On Every Order</h1>
                        <h3>Offer For New Subscribers</h3>
                    </Flex>
                    <Flex style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Img boxSize={"80%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW50-BBB-US-0206-0212-WEB-HP-C15-12-V3-2-3?$content$&wid=480' />
                        <h1>Amazing Deals And Clearance</h1>
                        <h3>Stock Up On Essentials</h3>
                    </Flex>
                    <Flex style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Img boxSize={"80%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-US-JanuaryOffers-Promo2-HP-WRplus-WEB-C15-12-V3-1?$content$&wid=480' />
                        <h1>Save 20% And Earn Points</h1>
                        <h3>Offer For New Subscribers</h3>
                    </Flex>
                    <Flex style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Img boxSize={"80%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW48-US-0123-0129-WEB-HP-C15-12-V3-1-4?$content$&wid=480' />
                        <h1>Register-Get $100 In Rewards</h1>
                        <h3>Offer For New Subscribers</h3>
                    </Flex>
                </Flex>
            </Box>
            <Box>
                <Img width={"90%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C01-19-DSK-2?$content$&wid=1280&hei=350'></Img>
            </Box>
            <Flex style={{ justifyContent: "space-between", width: "90%", margin: "auto" }}>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D2%2D1?$content$' />
                    <p>Patio Furniture</p>
                </Flex>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D2%2D2?$content$' />
                    <p>Patio Umbrellas</p>
                </Flex>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D2%2D3?$content$' />
                    <p>Outdoor Entertaining</p>
                </Flex>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D2%2D4?$content$' />
                    <p>Lawn And Gardening</p>
                </Flex>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D2%2D5?$content$' />
                    <p>Fire Pits</p>
                </Flex>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D3%2D3?$content$' />
                    <p>Pillows</p>
                </Flex>
            </Flex>
            <Flex style={{justifyContent:"space-evenly",alignItems:"center",width:"90%",margin:"auto",marginBottom:"2%"}}>
            <Img boxSize={"33%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V2-1?$content$&wid=675' />
            <Img boxSize={"33%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V2-2?$content$&wid=675'/>
            <Img boxSize={"33%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V2-3?$content$&wid=675'/>
            </Flex>
            <Flex style={{width:"90%",justifyContent:"space-evenly",alignItems:"center",margin:"auto"}}>
                <Flex style={{flexDirection:"column"}}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V3-2-1?$content$&wid=480'></Img>
                    <h3 className='name'>bedding</h3>
                </Flex>
                <Flex style={{flexDirection:"column"}}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V3-2-2?$content$&wid=480'></Img>
                    <h3 className='name'>bath</h3>
                </Flex>
                <Flex style={{flexDirection:"column"}}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V3-2-3?$content$&wid=480'></Img>
                    <h3 className='name'>storage and org</h3>
                </Flex>
                <Flex style={{flexDirection:"column"}}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V3-2-6?$content$&wid=480'></Img>
                    <h3 className='name'>vacuums</h3>
                </Flex>
            </Flex>
            <Flex  width={"100%"} justifyContent={"space-evenly"}>
                <Img src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C01-19-DSK-3?$content$&wid=1280&hei=350'/>
            </Flex>
            <Footer/>
        </>
    )
}

export default Home
