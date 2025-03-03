import React, { useState } from 'react';
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

    const cards = [
        {
            image: basketball3,
            category: "Basketball",
            author: "Jake Will.",
            date: "04 June 2023",
            title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
            description: "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn`t all about a massive body mass or ripped muscles.",
            avatar: p1
        },
        {
            image: hockey,
            category: "Hockey",
            author: "Foxi.zacon",
            date: "03 June 2023",
            title: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
            description: "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
            avatar: p2
        },
        {
            image: three,
            category: "Badminton",
            author: "Bong Lozada",
            date: "01 June 2023",
            title: "`Outdoor` Badminton Gets Support From Local Federation",
            description: "The Badminton World Federation is developing Air Badminton and the country`s governing body, Philippine Badminton Association.",
            avatar: p3
        },
        {
            image: bike,
            category: "Bike",
            author: "Bong Lozada",
            date: "03 June 2023",
            title: "Savilia Blunk Embraces Longer Season with World Cup",
            description: "Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some",
            avatar: p3
        },
        {
            image: box,
            category: "Box",
            author: "Bong Lozada",
            date: "03 June 2023",
            title: "Ryan Garcia is fighting again, this time on social media",
            description: "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
            avatar: p3
        }
    ];

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const visibleCards = cards.slice(startIndex, startIndex + 3).concat(cards.slice(0, Math.max(0, startIndex + 3 - cards.length)));

    return (
        <div className="w-[1170px] h-[643px] mt-[72px] mx-[135px]" id="sport">
            <div className="font-sequel text-bl text-2xl pt-[20px] pb-[16px]">Sports Article </div>
            <div className="">
                <ul className="flex gap-8">
                    {visibleCards.map((card, index) => (
                        <li key={index}>
                            <div className="w-[370px] h-[505px]">
                                <div className="relative">
                                    <img
                                        className="w-[370px] h-[248px] rounded-lg"
                                        src={card.image}
                                        alt={card.category}
                                    />
                                    <div className="absolute top-[20px] left-[240px] border-1 border-white w-[100px] h-[34px] flex justify-center items-center light-gray-text text-sm font-dmsans-medium rounded-lg">
                                        {card.category}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mt-[28px]">
                                    <img
                                        src={card.avatar}
                                        alt={card.author}
                                        className="w-[44px] h-[44px] rounded-full object-cover"
                                    />
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
            <div className="flex items-center gap-[30px] mt-[20px]">
                <button onClick={handlePrev} className="w-[70px] h-[50px] flex justify-center items-center rounded-lg bg-gray-300">
                    <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="70" y="50" width="70" height="50" rx="3" transform="rotate(-180 70 50)" fill="#BAB8B8"/>
                        <path d="M46.9961 26C47.5484 26 47.9961 25.5523 47.9961 25C47.9961 24.4477 47.5484 24 46.9961 24L46.9961 26ZM22.2097 24.2929C21.8192 24.6834 21.8192 25.3166 22.2097 25.7071L28.5737 32.0711C28.9642 32.4616 29.5974 32.4616 29.9879 32.0711C30.3784 31.6805 30.3784 31.0474 29.9879 30.6569L24.331 25L29.9879 19.3431C30.3784 18.9526 30.3784 18.3195 29.9879 17.9289C29.5974 17.5384 28.9642 17.5384 28.5737 17.9289L22.2097 24.2929ZM46.9961 24L22.9168 24L22.9168 26L46.9961 26L46.9961 24Z" fill="#EBEEF3"/>
                    </svg>
                </button>
                <button onClick={handleNext} className="w-[70px] h-[50px] flex justify-center items-center rounded-lg bg-black">
                    <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="3.05176e-05" width="70" height="50" rx="3" fill="#262626"/>
                        <path d="M22.9141 24C22.3618 24 21.9141 24.4477 21.9141 25C21.9141 25.5523 22.3618 26 22.9141 26V24ZM47.7004 25.7071C48.091 25.3166 48.091 24.6834 47.7004 24.2929L41.3365 17.9289C40.946 17.5384 40.3128 17.5384 39.9223 17.9289C39.5317 18.3195 39.5317 18.9526 39.9223 19.3432L45.5791 25L39.9223 30.6569C39.5317 31.0474 39.5317 31.6806 39.9223 32.0711C40.3128 32.4616 40.946 32.4616 41.3365 32.0711L47.7004 25.7071ZM22.9141 26H46.9933V24H22.9141V26Z" fill="#EBEEF3"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Sports;
