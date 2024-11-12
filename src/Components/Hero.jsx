const Hero = () =>{
    return(
      <div className=" hero container">
        <div className="Hero-01">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="Hero-btn">
            <button>Shop Now</button>
            <button className="second-btn">Category</button>
        </div>
        <div className="hero-availability">
            <p>Also available on</p>
            <img src="/images/flipkart.png" alt="Flipkart image"></img>
            <img src="/images/amazon.png" alt="Amazon image"></img>
        </div>
        </div>
        <div className="Hero-img">
            <img src="/images/shoe_image.png" alt="Shoe Image" ></img>
        </div>

      </div>
    );
};
export default Hero; 