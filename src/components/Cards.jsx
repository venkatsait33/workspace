import React from 'react'

const Cards = ({ ...item }, { key }) => {
    console.log(item)
    return (
        <div>
            <div className="card" key={key}>
                <img
                    src={item.image} // Replace this with your image URL
                    alt="Office Space"
                    className="card-image"
                />
                <div className="arrow-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="arrow-icon"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <div>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards