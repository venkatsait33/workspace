
const Cover = () => {
    return (
        <div> <div className="p-4">
            <div id="outer" style={{
                backgroundImage: `url("/src/assets/cover-images/cv2.avif")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div id="inner-container">
                    <div className="innertext"><span>About</span></div>
                    <div className="innertext"><span>Workspace</span></div>
                </div>

            </div>
        </div></div>
    )
}

export default Cover