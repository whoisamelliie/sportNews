import player from "../assets/basketball-player.png";
import ball from "../assets/basketball-ball.png";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.png";

const HeroSection = () => {
    return (
      <div    id="home" className="relative  flex flex-col gap-4 mt-[20px] w-full h-[624px] pt-[94px] " >
        {/* Верхний блок с заголовком и картинкой */}
        <div className="flex flex-row items-start gap-6">
          {/* Текстовый блок */}
          <div className="absolute z-10 w-[716px] h-[513px] filter grayscale top-[20px]" style={{backgroundImage: `url(${ball})`}} >
        
            {/* Текст поверх мяча */}
            <p className="absolute inset-0 flex items-center justify-center left-[112px] top-[112px] text-[80px] w-[470px]  h-[300px] font-black leading-none gradient-text text-transparent">
                TOP SCORER TO THE FINAL MATCH
            </p>
         </div>

          
            <img
                className="absolute z-50 top-[79px] left-[282px]flex justify-center right-[436px] w-[720px] h-[580px] flex-shrink-0 object-cover"
                alt="Basketball player"
                src={player}    
            />
                    {/* Правый блок: Баскетболист, описание и кнопка */}
            <div className="flex relative flex-col items-center justify-center w-full gap-6 pr-[31px] pl-[10px]">

                     {/* Описание и кнопка */}
                 <div className="flex relative flex-col w-[364px] h-[75px] gap-4 pt-[542px] left-[106px]">
                    <p className="text-lg text-bl font-dmsans-regular " >
                        The EuroLeague Finals Top Scorer is the individual award for the
                        player that gained the highest points in the EuroLeague Finals.
                    </p>
                    <button className=" bg-bl white text-xl font-dmsans-bold px-8 py-3 rounded-md tracking-9">
                        CONTINUE READING
                    </button>
                </div>
            </div>

        <div className=" relative grid grid-cols-1 gap-6 w-[270px] right-[135px] h-[554px] mb-[118px] ">
            <a className="light-blue w-[89px] h-[34px] rounded-lg font-dmsans-medium text-gr text-center px-[16px] py-[4px]">Today</a>
          {/* Первый блок новости */}
          <div className="bg-cover bg-center rounded-md p-4 text-bl w-[270px] h-[233px] pt-[24px] flex flex-col justify-end" style={{ backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent), url(${news1})` }}>
            <p className="font-dmsans-medium text-xs text-gray-800/60">Race98 - 03 June 2023</p>
            <p className="text-base font-sequel">Ethiopian runners took the top four spots.</p>
          </div>
          
          {/* Второй блок новости */}
          <div className="bg-cover bg-center rounded-md p-4 text-bl w-[270px] h-[233px] pt-[30px] flex flex-col justify-end" style={{ backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent), url(${news2})` }}>
            <p className="text-xs font-dmsans-medium text-gray-800/60">INDYCAR - 03 June 2023</p>
            <p className="text-base font-sequel">IndyCar Detroit: Dixon quickest in second practice</p>
          </div>
        </div>
        </div>
        
        {/* Боковая колонка новостей */}
      </div>
    );
};
  
  export default HeroSection;