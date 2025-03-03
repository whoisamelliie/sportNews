import soccer from "../assets/category-image/soccer-ball.png";
import bascket from "../assets/category-image/bascket-ball1.png";
import car from "../assets/category-image/sport-car.png";
import pong from "../assets/category-image/ping-pong.png";


const Category = () => {
    return (
        <div id="category" className="w-[1170px] h-[480px] mx-[135px]">
            <div className="font-sequel text-bl text-2xl">Category</div>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex-1 p-4">
                        <div className="flex mt-2 light-gray rounded-md w-[270px] h-[116px] justify-center items-center ml-[-16px] hover:shadow-lg hover:brightness-110 transition-all duration-300">
                            <span className="text-3xl font-sequel-bold gradient-text tracking-wide">FOOTBALL</span>
                        </div>
                    </div>
                    <div className="mt-3 overflow-hidden rounded-lg shadow-md w-[270px] h-[288px] mb-[14px] hover:shadow-lg hover:brightness-110 transition-all duration-300">
                        <img src={soccer} alt="Football" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="flex flex-col mt-[10px]">
                    <div className="mt-3 overflow-hidden rounded-lg shadow-md w-[270px] h-[235px] hover:shadow-lg hover:brightness-110 transition-all duration-300">
                        <img src={bascket} alt="Basketball" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-4">
                        <div className="flex mt-2 light-gray rounded-md w-[270px] h-[169px] justify-center items-center ml-[-16px] hover:shadow-lg hover:brightness-110 transition-all duration-300">
                            <span className="text-3xl font-sequel-bold gradient-text tracking-wide px-[33px] py-[20px] text-center">BASKETBALL</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex-1 p-4">
                        <div className="flex mt-2 light-gray rounded-md w-[270px] h-[116px] justify-center items-center ml-[-16px] hover:shadow-lg hover:brightness-110 transition-all duration-300">
                            <span className="text-2xl font-sequel-bold gradient-text tracking-wide px-[33px] py-[20px]">CAR SPORT</span>
                        </div>
                    </div>
                    <div className="mt-3 overflow-hidden rounded-lg shadow-md w-[270px] h-[288px] mb-[14px] hover:shadow-lg hover:brightness-110 transition-all duration-300">
                        <img src={car} alt="Car Sport" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="flex flex-col mt-[10px]">
                    <div className="mt-3 overflow-hidden rounded-lg shadow-md w-[270px] h-[286px] hover:shadow-lg hover:brightness-110 transition-all duration-300">
                        <img src={pong} alt="Table Tennis" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-4">
                        <div className="flex mt-2 light-gray rounded-md w-[270px] h-[118px] justify-center items-center ml-[-16px] hover:shadow-lg hover:brightness-110 transition-all duration-300">
                            <span className="text-3xl font-sequel-bold gradient-text tracking-wide px-[33px] py-[20px] text-center">TABLE TENNIS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
