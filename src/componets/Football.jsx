import players from "../assets/football/players-give.png";
import { useState } from "react";


import num1 from "../assets/football/1.svg";
import num2 from "../assets/football/2.svg";
import num3 from "../assets/football/3.svg";
import num4 from "../assets/football/4.svg";

const numbers = [num1, num2, num3, num4];

const Football = () => {
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
        <div className="w-[1168px] h-[618px] mx-[135px] mt-[80px] light-gray rounded-lg">
           <div className="relative w-[1170px] h-[518px] rounded-lg "> 
                <img
                    src={players}
                    alt="pl"
                    className="w-full h-full object-cover rounded-xl "
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className=" absolute top-[30px] left-[36px] border-1 border-white w-[107px] h-[36px]  flex justify-center items-center light-gray-text text-sm  font-dmsans-medium rounded-lg">
                    Football
                </div>
                <div className="absolute bottom-[20px] left-[36px] right-0">
                    <p className="font-dmsans-regular white text-sm">Agence France-Presse - 04 June 2023</p>
                    <h1 className="font-sequel-bold white text-3xl leading-normal uppercase w-[760px] ">Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms</h1>
                    <p className="font-dmsans-medium white text-base w-[697px] h-[56px] pb-[45px]">The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals</p>
                </div>
            </div>
            <div className="flex items-center justify-end gap-4 pt-[20px] pb-[20px] pr-[25px]">

                <button
                    onClick={handlePrev}
                    className="w-[50px] h-[50px] flex justify-center items-center rounded-lg bg-gray-300"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                
                <div className="flex items-center gap-2 ">
                    {[1, 2, 3, 4].map((num) => (
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num)}
                            className={`w-10 h-10 flex justify-center items-center rounded-full ${
                                currentPage === num ? "bg-black text-white" : "bg-gray-200 text-black"
                            }`}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                
                <button
                    onClick={handleNext}
                    className="w-[50px] h-[50px] flex justify-center items-center rounded-lg bg-black"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default Football;

