import AppStoreIcon from "../icon/app-store";
import GooglePlayIcon from "../icon/google-play";
import appImage from "../../../assets/images/app.png"

const Banner = () => {
  return ( 
    <div className="absolute top-0 h-[360px] md:h-[148px] w-full z-10">
    <div className="flex flex-col">
      <div className="absolute top-0 w-full">
        <div 
          className="bg-primary-app w-full h-[94px] flex items-end pb-[4.91px] 
          custom-sm:pb-[15px]"
        >
          {/* Banner image */}
            <img 
              src={appImage} 
              alt="footer banner image"
              className="
                absolute w-[242px] h-[172px] object-cover top-0 
                -mt-[48px] ml-[15px] z-20 min-w-[242px] min-h-[172px] 
                custom-md:ml-[50px]
                md:h-[210px] md:w-[350px] md:-mt-[70px] md:ml-0 
                custom-semi-md:w-[400px]  
              "
            />
          {/* Banner description */}
          <div 
            className="
              flex flex-col gap-[5px] ml-[144px] 
              flex-1 items-center pr-4
              custom-semi-md:ml-[200px]
            "
          >
            <h1 
              className="
              text-[18px] font-poppins-semibold text-center leading-[20.52px] text-white
              md:text-[22px] md:leading-[25.08px]
            "
            >
              For easier shopping download our app
            </h1>
            <div className="inline-flex gap-[6.33px]">
              <GooglePlayIcon/>
              <AppStoreIcon />
            </div>
          </div>
        </div>
        <div className="bg-[#FFE961] h-[11px] w-full md:h-8" />
      </div>
    </div>
  </div>
   );
}
 
export default Banner;