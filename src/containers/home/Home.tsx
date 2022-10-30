import * as React from "react"
import TextBanner from "../../components/TextBanner/TextBanner";
import {getString} from "../../utils/LangsManager";


function Home() {
    return (
      <TextBanner
        imgData= {{imgUrl: '/resources/images/code_background.jpg', width:'100%', height:'400px'}}
        title="home.hi_there"
        description="home.welcome_website"
        color="white"
      />
    )
}

export default Home;