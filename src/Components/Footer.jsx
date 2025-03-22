import Instagram from "../assets/instagram.png";
import Github from "../assets/Github.png";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <>
      <div id="contact" className="footer-page h-auto w-screen relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-[15vw] uppercase text-center text-white opacity-20">Contact us</h1>
        </div>
        <div className="max-md:transform-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 footer-heading border border-white p-12  bg-black bg-opacity-50">
          <h1 className="text-[7vw] uppercase text-white text-center mb-8">reCoderr</h1>
          <p className="text-white text-[2vw] text-center mb-10">Design.Code.Creativity</p>
          <h1 className="text-white text-[4vw] text-nowrap heading-h1 text-center mb-10">Know More</h1>
          <p className="text-[3vw] text-white text-nowrap uppercase text-center mb-8">
            freelancer Services available:
          </p>
          <p className="text-white text-nowrap text-[3vw] text-center mb-12">Gmail: vermadigital943@gmail.com</p>
          <div className="social-media flex items-center max-md:flex-col justify-center gap-12 relative top-5">
            <div className="instagram p-2">
              <img className="h-12 cursor-pointer hover:scale-110 transition-transform" src={Instagram} alt="Instagram logo" />
            </div>
            <div className="linkedin p-2">
              <img className="h-12 cursor-pointer hover:scale-110 transition-transform" src={LinkedIn} alt="LinkedIn logo" />
            </div>
            <div className="Github p-2">
              <img className="h-12 cursor-pointer hover:scale-110 transition-transform" src={Github} alt="Github logo" />
            </div>
            <div className="Twitter p-2">
              <img className="h-12 cursor-pointer bg-white rounded-md p-1.5 hover:scale-110 transition-transform" src={Twitter} alt="Twitter logo" />
            </div>
          </div>
        </div>
        <img
          className="w-full h-screen object-cover"
          src="https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1322,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg"
          alt="Footer page"
        />
      </div>
    </>
  );
};

export default Footer;
