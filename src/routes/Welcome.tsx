const Welcome = () => {
    return (
        <div className="p-20">
            <h2 
                style={{ fontFamily: "Josefin Sans, sans-serif" }} 
                className="text-white text-5xl font-extrabold tracking-wide">
                Bem vindo ao <span className="text-defaultRed">CharliePad</span>
            </h2>
            <p className="text-white font-bold tracking-wide pl-1 pt-2">
               Faça suas anotações, relate seus pensamentos, tome notas. . .  
            </p>
        </div>
    )
}

export default Welcome