import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <div>
      <section id="about-us" className="flex justify-between items-center max-lg:flex:col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
            We Provide You 
            <span className="text-coral-red"> Super</span>
            <br />
            <span className="text-coral-red">Quality </span>Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text ml-2 text-justify">
            Ensuring premium comfort and style, our meticulously crafted footwear
            is designed to elevate your experience, providing you with unmatched
            quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text ml-2">Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-10 ml-2">
            <Button label= "View Details" />
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center">
            <img src={shoe8} alt="shoe-8" width={570} height={522} className="object-container" />
        </div>
      </section>
    </div>
  )
}

export default SuperQuality;
