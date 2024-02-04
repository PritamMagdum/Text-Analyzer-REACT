import React from 'react'

export default function About() {
    return (
        <div className="container">
            <h1 className='text-center'>About Us</h1>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://random.imagecdn.app/500/150" className="d-block w-100" alt="Do not worry Just images are not loaded you can explore website." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://random.imagecdn.app/500/151" className="d-block w-100" alt="Do not worry Just images are not loaded you can explore website." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://random.imagecdn.app/500/149" className="d-block w-100" alt="Do not worry Just images are not loaded you can explore website." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container  text-center my-3">
                <h5>Hi, This website is build on MERN Stack technology. The purpose of this website creation is to Analyze how many words you are typed or how much time taken to read the paragraph as well as you can see the how many characters are present in the whole paragraph. <br></br>
                    Also in About Us page means the current page I used random image API for curosol images, it helps to understand how random image API are works on real time web applications.
                    <br />
                    Text analysis is the process of using computer systems to read and understand human-written text for business insights. Text analysis software can independently classify, sort, and extract information from text to identify patterns, relationships, sentiments, and other actionable knowledge.
                </h5>
            </div>
        </div>
    )
}
