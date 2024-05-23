import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from '../components/ShoeCard';


const Hero = () => {
  return (
    <div>
      <section id="home" className="w-full flex xl:flex-row flex-col 
                                    justify-center min-h-full max-container gap-10 p-2">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leadin-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span>Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leaging-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.</p>
          <Button label="Shop now" iconURL={arrowRight}/>

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
              {
                statistics.map((stat, index)=>(
                <div key={index}>
                  <p className="text-4xl font-palanquin font-bold ledaing-7">{stat.value}</p>
                  <p className="font-montserrat text-slate-gray">{stat.label}</p>

                </div>
              ))
              }
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img className="object-container relative z-10" width={610} height={500} alt="Shoe collection" src={bigShoe1}></img>
          <div>
            {
              shoes.map((shoe, index)=>(
                    <div key={index}>
                      <ShoeCard imgURL = {shoe}
                          changeBigShoeImage = {
                            ()=>{}}
                            bigShoeImg = ""
                       />
                    </div>
                  ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;
