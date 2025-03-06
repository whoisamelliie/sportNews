
import soccer from "../assets/category-image/soccer-ball.png";
import bascket from "../assets/category-image/bascket-ball1.png";
import car from "../assets/category-image/sport-car.png";
import pong from "../assets/category-image/ping-pong.png";

const Category = () => {
    return (
        <div id="category" className="w-full max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            <div className="font-sequel text-bl text-2xl text-left sm:text-left pl-[25px]">Category</div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  sm:gap-[30px] lg:[10px] mt-6">
                
                <div className="flex flex-col">
                    <div className="flex-1 p-4 sm:p-0">
                        <div className="flex mt-2 light-gray rounded-md w-full h-[116px] justify-center items-center ml-[1px] hover:shadow-lg hover:brightness-110 transition-all duration-300 sm:w-[270px] sm:h-[116px] sm:ml-0">
                            <span className="text-3xl font-sequel-bold gradient-text tracking-wide">FOOTBALL</span>
                        </div>
                    </div>
                    <div className="mt-3 overflow-hidden rounded-lg shadow-md w-full h-[288px] mb-[14px] hover:shadow-lg hover:brightness-110 transition-all duration-300 sm:w-[270px] sm:h-[288px]">
                        <img src={soccer} alt="Football" className="w-full h-full object-cover" />
                    </div>
                </div>

                
                <div className="flex flex-col mt-[10px] sm:mt-0">
                    <div className="mt-3 overflow-hidden rounded-lg shadow-md w-full h-[235px] hover:shadow-lg hover:brightness-110 transition-all duration-300 sm:w-[270px] sm:h-[235px]">
                        <img src={bascket} alt="Basketball" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-4 sm:p-0">
                        <div className="flex mt-2 light-gray rounded-md w-full h-[169px] justify-center items-center ml-[1px] hover:shadow-lg hover:brightness-110 transition-all duration-300 sm:w-[270px] sm:h-[169px] sm:ml-0">
                            <span className="text-3xl font-sequel-bold gradient-text tracking-wide px-[33px] py-[20px] text-center">BASKETBALL</span>
                        </div>
                    </div>
                </div>

                
                <div className="flex flex-col">
                    <div className="flex-1 p-4 sm:p-0">
                        <div className="flex mt-2 light-gray rounded-md w-full h-[116px] justify-center items-center ml-[1px] hover:shadow-lg hover:brightness-110 transition-all duration-300 sm:w-[270px] sm:h-[116px] sm:ml-0">
                            <span className="text-2xl font-sequel-bold gradient-text tracking-wide px-[33px] py-[20px]">CAR SPORT</span>
                        </div>
                    </div>
                    <div className="mt-3 overflow-hidden rounded-lg shadow-md w-full h-[288px] mb-[14px] hover:shadow-lg hover:brightness-110 transition-all duration-300 sm:w-[270px] sm:h-[288px]">
                        <img src={car} alt="Car Sport" className="w-full h-full object-cover" />
                    </div>
                </div>

                
                <div className="flex flex-col mt-[10px] sm:mt-0">
                    <div className="mt-3 overflow-hidden rounded-lg shadow-md w-full h-[286px] hover:shadow-lg hover:brightness-110 transition-all duration-300 sm:w-[270px] sm:h-[286px]">
                        <img src={pong} alt="Table Tennis" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-4 sm:p-0">
                        <div className="flex mt-2 light-gray rounded-md w-full h-[118px] justify-center items-center ml-[1px] hover:shadow-lg hover:brightness-110 transition-all duration-300 sm:w-[270px] sm:h-[118px] sm:ml-0">
                            <span className="text-3xl font-sequel-bold gradient-text tracking-wide px-[33px] py-[20px] text-center">TABLE TENNIS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;