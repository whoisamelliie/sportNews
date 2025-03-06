import React, { useState, useEffect } from 'react';
import basketball3 from "../assets/sport/basketball3.png";
import hockey from "../assets/sport/hockey.png";
import three from "../assets/sport/three.png";
import bike from "../assets/news/cyclis.png";
import box from "../assets/news/boxing.png";
import p1 from "../assets/sport/p1.svg";
import p2 from "../assets/sport/p2.svg";
import p3 from "../assets/sport/p3.svg";

const Sports = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cards = [
        { image: basketball3, category: "Basketball", author: "Jake Will.", date: "04 June 2023", title: "5 Exercises Basketball Players Should Be Using To Develop Strength", description: "Strength in basketball isn’t all about a massive body mass or ripped muscles.", avatar: p1 },
        { image: hockey, category: "Hockey", author: "Foxi.zacon", date: "03 June 2023", title: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year", description: "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.", avatar: p2 },
        { image: three, category: "Badminton", author: "Bong Lozada", date: "01 June 2023", title: "Outdoor Badminton Gets Support From Local Federation", description: "The Badminton World Federation is developing Air Badminton.", avatar: p3 },
        { image: bike, category: "Bike", author: "Bong Lozada", date: "03 June 2023", title: "Savilia Blunk Embraces Longer Season with World Cup", description: "Savilia Blunk took a conservative approach to her first season as an Elite Class athlete.", avatar: p3 },
        { image: box, category: "Box", author: "Bong Lozada", date: "03 June 2023", title: "Ryan Garcia is fighting again, this time on social media", description: "Ryan Garcia and his promoter reignited their war of words via Twitter.", avatar: p3 }
    ];

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const visibleCards = isMobile ? [cards[startIndex]] : cards.slice(startIndex, startIndex + 3).concat(cards.slice(0, Math.max(0, startIndex + 3 - cards.length)));

    return (
        <div className="w-full max-w-[1170px] h-auto mt-[72px] mx-auto" id="sport">
            <div className="font-sequel text-bl text-2xl pt-[20px] pb-[16px] sm:left-[0] pl-[25px]">Sports Article</div>
            <div>
                <ul className="flex gap-8 justify-center overflow-hidden">
                    {visibleCards.map((card, index) => (
                        <li key={index} className="w-[90%] sm:w-[370px]">
                            <div className="h-auto">
                                <div className="relative">
                                    <img className="w-full h-[248px] rounded-lg" src={card.image} alt={card.category} />
                                    <div className="absolute top-5 right-5 border border-white w-[100px] h-[34px] flex justify-center items-center bg-transparent text-white text-sm font-medium rounded-lg">
                                        {card.category}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mt-[28px]">
                                    <img src={card.avatar} alt={card.author} className="w-[44px] h-[44px] rounded-full object-cover" />
                                    <div>
                                        <p className="text-sm font-dmsans text-bl">{card.author}</p>
                                    </div>
                                </div>
                                <div className="mt-[20px]">
                                    <p className="font-dmsans-medium text-gray-800/60 text-sm">{card.date}</p>
                                    <h1 className="font-sequel text-bl text-xl pt-[10px]">{card.title}</h1>
                                    <p className="font-dmsans-medium text-gray-800/60 text-sm pt-[10px]">{card.description}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-center gap-[30px] mt-[20px]">
                <button onClick={handlePrev} className="w-[70px] h-[50px] flex justify-center items-center rounded-lg bg-gray-300">◀</button>
                <button onClick={handleNext} className="w-[70px] h-[50px] flex justify-center items-center rounded-lg bg-black text-white">▶</button>
            </div>
        </div>
    );
};

export default Sports;