import sport from "../assets/news/sport.png";
import race from "../assets/news/race-hose.png";
import bike from "../assets/news/cyclis.png";
import box from "../assets/news/boxing.png";

const Trending = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-[1170px] h-auto sm:h-[609px] mt-[80px] mx-auto px-4 sm:px-0" id="news">
            <div className="w-full sm:w-[600px] h-auto sm:h-[609px] pl-0 sm:pl-[36px] light-gray rounded-lg">
                <div className="font-sequel text-bl text-2xl pt-[20px] pb-[16px] pl-[20px] sm:pl-0">Trending News</div>
                <div className="space-y-6 sm:space-y-0 ml-7 sm:ml-[0px]">
   
                <div className="flex flex-col sm:flex-row gap-4 items-start w-full sm:w-[499px] h-auto sm:h-[150px] pr-[20px]">
                    <div className="w-full sm:w-[234px] h-[150px]">
                        <img
                            src={race}
                            alt="race"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full sm:w-[245px] h-auto sm:h-[150px] pt-[14px]">
                        <p className="text-gray-800/60 font-dmsans-medium text-xs">Race98 - 03 June 2023</p>
                        <h1 className="font-sequel text-bl text-1xl">6-Year-Old Horse Dies at Belmont Park After Race Injury</h1>
                        <p className="font-dmsans-regular text-gray-800/60 text-xs">NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week`s</p>
                    </div>
                </div>

                
                <div className="flex flex-col sm:flex-row gap-4 items-start w-full sm:w-[499px] h-auto sm:h-[150px] pt-[28px] pr-[20px]">
                    <div className="w-full sm:w-[234px] h-[150px]">
                        <img
                            src={bike}
                            alt="bike"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full sm:w-[245px] h-auto sm:h-[150px] pt-[6px]">
                        <div className="flex border-t-1 border-gray-400/30 w-full sm:w-[279px] h-[3px]"></div>
                        <p className="text-gray-800/60 font-dmsans-medium text-xs pt-[15px]">Jony.Ls - 03 June 2023</p>
                        <h1 className="font-sequel text-bl text-1xl">Savilia Blunk Embraces Longer Season with World Cup</h1>
                        <p className="font-dmsans-regular text-gray-800/60 text-xs">Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some</p>
                    </div>
                </div>

                
                <div className="flex flex-col sm:flex-row gap-4 items-start w-full sm:w-[499px] h-auto sm:h-[150px] pt-[60px] mb-[90px] pr-[20px]">
                    <div className="w-full sm:w-[234px] h-[150px]">
                        <img
                            src={box}
                            alt="box"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full sm:w-[245px] h-auto sm:h-[150px]">
                        <div className="flex border-t-1 border-gray-400/30 w-full sm:w-[279px] h-[2px]"></div>
                        <p className="text-gray-800/60 font-dmsans-medium text-xs pt-[15px]">King.F - 03 June 2023</p>
                        <h1 className="font-sequel text-bl text-1xl">Ryan Garcia is fighting again, this time on social media</h1>
                        <p className="font-dmsans-regular text-gray-800/60 text-xs">Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="relative w-full sm:w-[570px] h-[300px] sm:h-[609px] rounded-lg mt-6 sm:mt-0">
                <img
                    src={sport}
                    alt="sport"
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                <div className="absolute top-[30px] left-[20px] sm:left-[36px] border-1 border-white w-[107px] h-[36px] flex justify-center items-center light-gray-text text-sm font-dmsans-medium rounded-lg">
                    Cycling
                </div>
                <div className="absolute bottom-0 left-[10px] sm:left-[36px] right-0 p-4">
                    <p className="font-dmsans-regular text-white">Debits - 03 June 2023</p>
                    <h1 className="font-sequel-bold text-white sm:text-3xl leading-normal">DISCOVER THE MEMBER BENEFITS OF USA CYCLING!</h1>
                </div>
            </div>
        </div>
    );
};

export default Trending;