
const Cover = () => {
    return (
        <div> <div className="p-4">
            <div id="private-outer" style={{
                backgroundImage: `url("/src/assets/card/card-img-3.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div id="private-container">
                    <div className="private_innerText">&nbsp;   &nbsp; &nbsp; <span>Private</span></div>
                    <div className="private_innerText_1"><span>Offices</span></div>
                </div>

                <div className="absolute bottom-0 lg:left-[75%] max-md:left-[60%] rounded-tl-[10px] bg-white p-2 ">
                    <p className="text-sm text-pretty">Immerse yourself in unparalleled business professionalism within our Executive Private Offices for Business.</p>
                </div>

            </div>
        </div></div>
    )
}

export default Cover