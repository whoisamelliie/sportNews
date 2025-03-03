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
        <div className=" w-[1170px] h-[354px] mx-[135px]">
            <div className="relative flex justify-between items-center mt-[80px]">
                <div className="font-sequel text-bl text-2xl" id="recent">Recent News</div>
                <div className="font-sequel text-bl text-2xl absolute right-[414px]" id="ranking">Clubs Ranking</div>
            </div>
            <div className="flex flex-wrap gap-[30px] mt-[16px]">
                <div>
                    <div className="relative rounded-lg w-[270px] h-[300px]  flex flex-col justify-end" style={{ backgroundImage: `url(${karate})` }}>
                    <div className="absolute w-[270px] h-[82px] bg-gradient-to-t from-[#C49A6C] to-[#E2C29D] shadow-lg rounded-b-lg"></div>
                        <div className="relative z-1 p-4">
                            <p className="font-dmsans-medium text-xs light-gray-text">Day 5 Highlights</p>
                            <p className="text-base font-sequel light-gray-text w-[234px] h-[40px] pt-[4px]">Baku 2023 World Taekwondo Championships</p>
                        </div>
                    </div>
                </div>
                <div className=" w-[270px] h-[300px] pl-[14px] light-gray rounded-lg">
                    <div className="">
                        <div className="flex gap-4 items-start w-[249px] h-[70px] pt-[14px]  ">
                            <div>
                                <img
                                    src={box2}
                                    alt="box"
                                    className="w-[70px] h-[70px] rounded-sm"                                
                                />
                            </div>
                            <div className="w-[167px] h-[40px] pt-[10px] ">
                                <p className="text-gray-800/60 font-dmsans-medium text-xs ">#Pollar. 87 - 12 July 2023</p>
                                <h1 className="font-sequel text-bl text-1xl ">Baku 2023 Taekwondo Championships</h1>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start  w-[249px] h-[70px] pt-[24px]">
                            <div>
                                <img
                                    src={ball2}
                                    alt="ball"
                                    className="w-[70px] h-[70px] object-cover rounded-sm"                                
                                />
                            </div>
                            <div className=" w-[167px] h-[40px]  ">
                                <p className="text-gray-800/60 font-dmsans-medium text-xs pt-[6px] ">#Goft. Toni - 20 July 2023</p>
                                <h1  className="font-sequel text-bl text-1xl ">Open Championship Royal Liverpool Golf</h1>
                                
                            </div>
                        </div>
                        <div className="flex gap-4 items-start  w-[249px] h-[70px] pt-[34px]">
                            <div>
                                <img
                                    src={gol}
                                    alt="gol"
                                    className="w-[70px] h-[70px] object-cover rounded-sm"                                
                                />
                            </div>
                            <div className="w-[167px] h-[40px]">
                                <p className="text-gray-800/60 font-dmsans-medium text-xs pt-[6px]">#Cricket. Toni - 27 July 2023</p>
                                <h1  className="font-sequel text-bl text-1xl ">Ireland Tour of England Test 2023</h1>
                            </div>
                        </div>
                        <div className="pt-[48px] pl-[84px]">
                            <button className="w-[80px] h-[28px] bg-g hover:bg-gray-500 text-white font-dmsans-medium rounded-lg transition duration-300 flex items-center justify-center gap-2">
                                More
                                <svg className="mr-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464467C7.97631 0.269205 7.65973 0.269204 7.46447 0.464467C7.2692 0.659729 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM1 4.5L11 4.5L11 3.5L1 3.5L1 4.5Z" fill="white"/>
                                </svg>
                            </button>
                        </div>

                    </div>
                
                </div>
                <div>
                    <div className="w-[570px] h-[300px] light-gray  rounded-lg p-4">
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr className="">
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
                                {[
                                    ["Manchester City", 38, 29, 6, 3, 99, 26, 73],
                                    ["Liverpool", 38, 28, 8, 2, 94, 26, 68],
                                    ["Chelsea", 38, 21, 11, 6, 76, 33, 43],
                                    ["Tottenham Hotspur", 38, 22, 5, 11, 69, 40, 29],
                                    ["Arsenal", 38, 22, 3, 13, 61, 48, 13],
                                    ["Manchester United", 38, 16, 10, 12, 57, 57, 0],
                                ].map(([club, gp, w, d, l, f, a, gd], index) => (
                                 <tr key={index} className="border-b border-gray-400/30 last:border-b-0">
                                        <td className="p-2 flex items-center gap-2">
                                            <span className="font-semibold">{index + 1}</span>
                                            <img src={icons[club]} alt={club} className="w-[24px] h-[24px]" />
                                            {club}
                                        </td>
                                        <td className="p-2">{gp}</td>
                                        <td className="p-2">{w}</td>
                                        <td className="p-2">{d}</td>
                                        <td className="p-2">{l}</td>
                                        <td className="p-2">{f}</td>
                                        <td className="p-2">{a}</td>
                                        <td className="p-2">{gd}</td>
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