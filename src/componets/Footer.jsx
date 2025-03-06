import { useState } from "react";
import american from "../assets/footer/american.png";
import social from "../assets/footer/social.svg";

const Footer = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="h-auto sm:h-[500px] mx-auto px-4 sm:px-0 sm:mx-[135px]">
            
            <div className="w-full max-w-[1168px] h-auto sm:h-[428px] mt-[40px]">
                <div className="w-full sm:w-[1168px] h-auto sm:h-[385px] light-gray pl-4 sm:pl-[68px] rounded-lg">
                    
                    <p className="w-full sm:w-[614px] pt-8 sm:pt-[84px] text-3xl sm:text-6xl items-center justify-center font-black leading-none gradient-text text-transparent uppercase">
                        Newsletter Subscription
                    </p>

                    
                    <div className="w-full sm:w-[440px] mt-6 sm:mt-10 flex items-center">
                        <input
                            type="email"
                            id="email"
                            placeholder="shovon.khan0099@gmail.com"
                            className="block w-full h-[50px] sm:h-[58px] px-3 py-2 border rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <button className="w-[60px] sm:w-[74px] h-[50px] sm:h-[58px] bg-black text-white px-4 py-2 rounded-r-lg flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.734299 18.1565C0.343775 18.5471 0.343775 19.1802 0.734299 19.5708C1.12482 19.9613 1.75799 19.9613 2.14851 19.5708L0.734299 18.1565ZM19.468 1.83703C19.468 1.28474 19.0203 0.837026 18.468 0.837026H9.46803C8.91574 0.837026 8.46803 1.28474 8.46803 1.83703C8.46803 2.38931 8.91574 2.83703 9.46803 2.83703H17.468V10.837C17.468 11.3893 17.9157 11.837 18.468 11.837C19.0203 11.837 19.468 11.3893 19.468 10.837V1.83703ZM2.14851 19.5708L19.1751 2.54413L17.7609 1.12992L0.734299 18.1565L2.14851 19.5708Z" fill="#EBEEF3"/>
                            </svg>
                        </button>
                    </div>

                    
                    <div className="relative w-full sm:w-[520px] h-[200px] sm:h-[385px]">
                        <img 
                            src={american}
                            alt="amer"
                            className="absolute bottom-0 sm:bottom-[302px] left-0 sm:left-[580px] w-[200px] sm:w-auto"
                        />
                    </div>
                </div>
            </div>

            
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-0">
                
                <div className="mb-4 sm:mb-0">
                    <img 
                        src={social}
                        alt="social"
                        className="w-full sm:w-auto"
                    />
                </div>

                
                <div className="flex items-center gap-4">
                    <button
                        onClick={handlePrev}
                        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center rounded-lg bg-gray-300"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4].map((num) => (
                            <button
                                key={num}
                                onClick={() => setCurrentPage(num)}
                                className={`w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center rounded-full ${
                                    currentPage === num ? "bg-black text-white" : "bg-gray-200 text-black"
                                }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex justify-center items-center rounded-lg bg-black"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;