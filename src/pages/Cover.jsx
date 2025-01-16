
const Cover = ({ text, text1, cover }) => {
    return (
        <div>
            <div className="p-4">
                <div id="cover-outer" style={{
                    backgroundImage: `url(${cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div id="cover-inner-container">
                        <div className="cover-innerText"><span>{text}</span></div>
                        <div className="cover-innerText"><span>{text1}</span></div>
                    </div>

                </div>
            </div></div>
    )
}

export default Cover