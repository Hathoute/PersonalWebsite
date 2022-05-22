import * as React from "react"
import TextBanner from "../../components/TextBanner/TextBanner";


function Home() {

    let url = require('../../resources/images/code_background.jpg');

    return (
      <TextBanner
        imgData= {{imgUrl: url, width:'100%', height:'400px'}}
        title="Hi There! I’m Hamza HATHOUTE"
        description="Welcome to my personal website."
        color="white"
      />
    )
}

export default Home;