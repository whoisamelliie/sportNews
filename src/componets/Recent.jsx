
import karate from "../assets/recent/karate.png"
import box2 from "../assets/recent/box2.png"
import ball2 from "../assets/recent/ball2.png"
import gol from "../assets/recent/gol.png"
import ManchesterCity from "../assets/recent/1.svg";
import Liverpool from "../assets/recent/2.svg";
import Chelsea from "../assets/recent/3.svg";
import Tottenham from "../assets/recent/4.svg";
import Arsenal from "../assets/recent/5.svg";
import ManchesterUnited from "../assets/recent/6.svg";

const Recent = () => {
    const icons = {
        "Manchester City": ManchesterCity,
        "Liverpool": Liverpool,
        "Chelsea": Chelsea,
        "Tottenham Hotspur": Tottenham,
        "Arsenal": Arsenal,
        "Manchester United": ManchesterUnited,
    };

    return (
        <div className="w-full lg:w-[1170px] lg:h-[354px] lg:mx-[135px] px-4 sm:px-6">
            <div className="relative flex justify-between items-center mt-[40px] lg:mt-[80px]">
                <div className="font-sequel text-bl text-xl sm:text-2xl" id="recent">Recent News</div>
                <div className="font-sequel text-bl text-xl sm:text-2xl absolute right-0 sm:right-[414px]" id="ranking">Clubs Ranking</div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-[20px] sm:gap-[30px] mt-[16px] justify-center lg:justify-start">
                <div className="w-full sm:w-[270px] h-[330px] relative rounded-lg flex flex-col justify-end bg-cover bg-center" style={{ backgroundImage: `url(${karate})` }}>
                    <div className="absolute w-full sm:w-[270px] h-[82px] bg-gradient-to-t from-[#C49A6C] to-[#E2C29D] shadow-lg rounded-b-lg"></div>
                    <div className="relative z-10 p-4">
                        <p className="font-dmsans-medium text-xs text-white">Day 5 Highlights</p>
                        <p className="text-base font-sequel text-white w-full sm:w-[234px] h-[40px] pt-[4px]">Baku 2023 World Taekwondo Championships</p>
                    </div>
                </div>
                <div className="w-full sm:w-[270px] h-[330px] p-4 light-gray rounded-lg ">
                    {[{img: box2, tag: "#Pollar. 87 - 12 July 2023", title: "Baku 2023 Taekwondo Championships"},
                      {img: ball2, tag: "#Goft. Toni - 20 July 2023", title: "Open Championship Royal Liverpool Golf"},
                      {img: gol, tag: "#Cricket. Toni - 27 July 2023", title: "Ireland Tour of England Test 2023"}]
                      .map(({ img, tag, title }, index) => (
                        <div key={index} className="flex gap-4 items-start w-full pt-[24px] sm:pt-[18px]">

                            <img src={img} alt={title} className="w-[70px] h-[70px] rounded-sm" />
                            <div className="w-full sm:w-[167px] h-[40px]">
                                <p className="text-gray-800/60 font-dmsans-medium text-xs">{tag}</p>
                                <h1 className="font-sequel text-bl text-sm sm:text-1xl">{title}</h1>
                            </div>
                        </div>
                    ))}
                    <div className="pt-[0px] sm:pt-[15px] flex justify-center">
                        <button className="w-[80px] h-[28px] bg-g hover:bg-gray-500 text-white font-dmsans-medium rounded-lg transition duration-300 flex items-center justify-center gap-2">
                            More
                            <svg className="mr-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464467C7.97631 0.269205 7.65973 0.269204 7.46447 0.464467C7.2692 0.659729 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM1 4.5L11 4.5L11 3.5L1 3.5L1 4.5Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-[570px] h-auto light-gray rounded-lg p-4 overflow-x-auto">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full min-w-[600px] text-left border-collapse text-sm sm:text-base">
                            <thead>
                                <tr>
                                    <th className="p-2">Club</th>
                                    <th className="p-2">GP</th>
                                    <th className="p-2">W</th>
                                    <th className="p-2">D</th>
                                    <th className="p-2">L</th>
                                    <th className="p-2">F</th>
                                    <th className="p-2">A</th>
                                    <th className="p-2">GD</th>
                                </tr>
                            </thead>
                            <tbody>
                                {["Manchester City", "Liverpool", "Chelsea", "Tottenham Hotspur", "Arsenal", "Manchester United"].map((club, index) => (
                                    <tr key={index} className="border-b border-gray-400/30 last:border-b-0">
                                        <td className="p-2 flex items-center gap-2">
                                            <span className="font-semibold">{index + 1}</span>
                                            <img src={icons[club]} alt={club} className="w-[24px] h-[24px]" />
                                            {club}
                                        </td>
                                        <td className="p-2">38</td>
                                        <td className="p-2">22</td>
                                        <td className="p-2">5</td>
                                        <td className="p-2">11</td>
                                        <td className="p-2">69</td>
                                        <td className="p-2">40</td>
                                        <td className="p-2">29</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recent
