import React from "react";
import './FaceRecognition.css'
const FaceRecognition =({ box, imageUrl})=>{
    return(
        <div className= 'center ma'>
            <div className = 'absolute mt2'>
                <img id = 'inputImage' className = "image" src={imageUrl } width = '500px' height = 'auto' alt=" "/>
                <div className = 'bounding_box' style = {{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition