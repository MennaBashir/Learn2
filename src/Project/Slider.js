function Slider() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel mt-4 mb-3 slide container" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://tkwresearch.com.au/wp-content/uploads/2023/05/Market-research-role-in-marketing-blog.jpg" className="d-block active" style={{ width: "1200px", height: "800px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://pepperyourcontent.com/wp-content/uploads/2022/03/pasted-image-0-3-18-1024x1014.png" className="d-block " style={{ width: "1200px", height: "800px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUjZGUVsyZqVUGqO7DhvAe7HOrRfEgEwkjA&usqp=CAU" className="d-block " style={{ width: "1200px", height: "800px" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
export default Slider;