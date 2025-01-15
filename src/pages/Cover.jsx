
const Cover = ({ text, text1 }) => {
    return (
        <div>
            <div className="p-4">
                <div id="outer" style={{
                    backgroundImage: `url("/src/assets/card/card-img-3.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div id="inner-container">
                        <div className="innertext"><span>{text}</span></div>
                        <div className="innertext"><span>{text1}</span></div>
                    </div>

                </div>
            </div></div>
    )
}

export default Cover