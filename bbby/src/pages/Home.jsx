import { Box, Flex, Img,Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'




const Home = () => {
    return (
        <>
            <Box  marginBottom={"5%"} marginTop={"5%"}>
                <Img margin="auto"  width="95%" src='https://b3h2.scene7.com/is/content/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C01-19-DSK-1?$content$&wid=2560&hei=1000' />
            </Box>
            <Flex  style={{ marginBottom:"4%",marginTop:"6%",margin:"auto",width: "90%", justifyContent: "space-evenly", alignItems: "center" }}>
                <Img boxSize={220} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D1?$content$' alt='c1' />
                <Img boxSize={220} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D10?$content$' alt='c2' />
                <Img boxSize={220} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D3?$content$' alt='c3' />
                <Img boxSize={220} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D4?$content$' alt='c4' />
                <Img boxSize={220} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D5?$content$' alt='c5' />
                <Img boxSize={220} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D1%2D6?$content$' alt='c6' />
            </Flex>
            <Box style={{ width: "90%", margin: "auto" }}>
                <Text marginTop="3%" marginBottom={"5%"} color={"darkblue"}  fontSize="6xl">february savings spotlight</Text>
                <Flex marginTop={"4%"} marginBottom={"4%"} style={{ justifyContent: "space-evenly", alignItems: "center" }}>
                    <Flex style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Img marginBottom={"4%"} boxSize={300} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW48-US-0123-0129-WEB-HP-C15-12-V3-1-1?$content$&wid=480' />
                        <Text marginBottom={"4%"} fontSize="2xl">Save 20% Now On Every Order</Text>
                        <Text fontSize="2xl">Offer For New Subscribers</Text>
                    </Flex>
                    <Flex style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Img marginBottom={"4%"} boxSize={300} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW50-BBB-US-0206-0212-WEB-HP-C15-12-V3-2-3?$content$&wid=480' />
                        <Text marginBottom={"4%"} fontSize="2xl">Amazing Deals And Clearance</Text>
                        <Text fontSize="2xl">Stock Up On Essentials</Text>
                    </Flex>
                    <Flex style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Img marginBottom={"4%"} boxSize={300} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-US-JanuaryOffers-Promo2-HP-WRplus-WEB-C15-12-V3-1?$content$&wid=480' />
                        <Text marginBottom={"4%"} fontSize="2xl">Save 20% And Earn Points</Text>
                        <Text fontSize="2xl">Offer For New Subscribers</Text>
                    </Flex>
                    <Flex style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Img marginBottom={"4%"} boxSize={300} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW48-US-0123-0129-WEB-HP-C15-12-V3-1-4?$content$&wid=480' />
                        <Text marginBottom={"4%"} fontSize="2xl">Register-Get $100 In Rewards</Text>
                        <Text fontSize="2xl">Offer For New Subscribers</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box marginBottom="2%">
                <Img  margin="auto" width={"90%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C01-19-DSK-2?$content$&wid=1280&hei=350'></Img>
            </Box>
            <Flex style={{ marginBottom:"4%",margin:"auto",justifyContent: "space-between", width: "90%", }}>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D2%2D1?$content$' />
                    <Text fontSize="xl">Patio Furniture</Text>
                </Flex>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D2%2D2?$content$' />
                    <Text fontSize="xl">Patio Umbrellas</Text>
                </Flex>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D2%2D3?$content$' />
                    <Text fontSize="xl">Outdoor Entertaining</Text>
                </Flex>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D2%2D4?$content$' />
                    <Text fontSize="xl">Lawn And Gardening</Text>
                </Flex>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D2%2D5?$content$' />
                    <Text fontSize="xl">Fire Pits</Text>
                </Flex>
                <Flex style={{ flexDirection: "column" }}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22%2DFW52%2DUS%2D0219%2DWEB%2DHP%2DC02%2D5%2D3%2D3?$content$' />
                    <Text fontSize="xl">Pillows</Text>
                </Flex>
            </Flex>
            <Flex style={{justifyContent:"space-evenly",alignItems:"center",width:"90%",margin:"auto",marginBottom:"2%"}}>
            <Img boxSize={"33%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V2-1?$content$&wid=675' />
            <Img boxSize={"33%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V2-2?$content$&wid=675'/>
            <Img boxSize={"33%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V2-3?$content$&wid=675'/>
            </Flex>
            <Flex style={{marginBottom:"4%",margin:"auto",width:"90%",justifyContent:"space-evenly",alignItems:"center"}}>
                <Flex style={{flexDirection:"column"}}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V3-2-1?$content$&wid=480'></Img>
                    <Text fontWeight="700" fontSize="3xl" className='name'>bedding</Text>
                </Flex>
                <Flex style={{flexDirection:"column"}}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V3-2-2?$content$&wid=480'></Img>
                    <Text fontWeight="700" fontSize="3xl" className='name'>bath</Text>
                </Flex>
                <Flex style={{flexDirection:"column"}}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V3-2-3?$content$&wid=480'></Img>
                    <Text fontWeight="700" fontSize="3xl" className='name'>storage and org</Text>
                </Flex>
                <Flex style={{flexDirection:"column"}}>
                    <Img boxSize={"95%"} src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C15-12-V3-2-6?$content$&wid=480'></Img>
                    <Text fontWeight="700" fontSize="3xl" className='name'>vacuums</Text>
                </Flex>
            </Flex>
            <Flex style={{margin:"auto",marginTop:"2%",width:"90%"}} justifyContent={"space-evenly"}>
                <Img src='https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW52-US-0219-WEB-HP-C01-19-DSK-3?$content$&wid=1280&hei=350'/>
            </Flex>
            <Footer/>
        </>
    )
}

export default Home
