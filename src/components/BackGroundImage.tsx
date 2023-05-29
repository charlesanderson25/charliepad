import fundoPretoTextura from "../assets/fundoPretoTextura.jpg";

const ImageBackground = () =>{
    return (
        <div style={ { backgroundImage: `url(${fundoPretoTextura})` } }>

        </div>
    );
}


const BackGroundImage = () =>{
    return (
        <div>
            <ImageBackground/>
        </div>
    )
}

export default BackGroundImage;