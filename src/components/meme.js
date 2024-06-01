import React from "react";
import memeData from "./memeData";

export default function Meme(){
    // const [memeImage , setMemeImage] = React.useState("")
    
    // function getMemeImg(){
    //     const memeArray = memeData.data.memes
    //     const randomNumber = Math.floor(Math.random() * memeArray.length)
    //     setMemeImage(memeArray[randomNumber].url)
    // }

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState(memeData)

    function getMemeImage(){
        const memeArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url

        setMeme(prevImg => ({
            ...prevImg,
            randomImage: url
        }))
    }

    function handleClick(event){
        const{ name,value} = event.target
        setMeme( prevMeme=>({
           ...prevMeme,
          [ name]: value
        }))
    }

    return(
        <div className="meme-container">
           <div  className="input-sec">
                <input 
                type="text" 
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleClick}
                ></input>

                <input 
                type="text" 
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleClick}
                ></input>
            </div>
            <div className="btn-sec">
            <button className="btn" onClick={getMemeImage}>
                Get a new meme image 🏕️
            </button>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img"/>
                <h1 className="meme-text-top">{meme.topText}</h1>
                <h1 className="meme-text-down">{meme.bottomText}</h1>
            </div>
            </div>
        </div>
    )
}