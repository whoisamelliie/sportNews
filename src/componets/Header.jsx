
const Header = () => {
    return (
      <nav className=" h-[92px]  w-full top-15 bottom-35 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-around items-center ">
          <a href="#" className="text-[42px] text-xl font-darkline text-black italic">Sport News</a>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home" className="neutral-900 hover:text-gray-900 font-dmsans-medium">Home</a></li>
            <li><a href="#category" className="text-gray-800/60 hover:text-gray-900 font-dmsans-regular">Category</a></li>
            <li><a href="#news" className="text-gray-800/60 hover:text-gray-900 font-dmsans-regular">Trending News</a></li>
            <li><a href="#recent" className="text-gray-800/60 hover:text-gray-900 font-dmsans-regular">Recent News</a></li>
            <li><a href="#ranking" className="text-gray-800/60 hover:text-gray-900 font-dmsans-regular">Clubs Ranking</a></li>
            <li><a href="#sport" className="text-gray-800/60 hover:text-gray-900 font-dmsans-regular">Sports Article</a></li>
          </ul>
          <button className="w-[100px] h-[35px] bg-g hover:bg-gray-500 white rounded-lg transition duration-300 flex items-center justify-center gap-2">
            <svg className="w-[16px] h-[16px]" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.65667 0.5C7.94477 0.542566 8.23287 0.572034 8.51769 0.624423C9.90254 0.886366 11.0877 1.5314 12.0764 2.53333C12.9734 3.44686 13.5693 4.53065 13.8214 5.78798C14.1422 7.36946 13.9196 8.87564 13.1273 10.2836C12.8719 10.7354 12.5544 11.148 12.2532 11.5933C12.263 11.6031 12.2957 11.6424 12.3317 11.6752C13.6413 12.9652 14.9508 14.2553 16.2604 15.5421C16.5452 15.8204 16.5779 16.1184 16.3488 16.3476C16.1229 16.5735 15.8151 16.5473 15.5369 16.2755C14.2208 14.9789 12.9014 13.6823 11.5853 12.3857C11.5493 12.3497 11.51 12.3169 11.4707 12.2809C11.2579 12.425 11.0582 12.5723 10.8487 12.7066C9.67009 13.4498 8.38019 13.7969 6.99207 13.7445C5.16198 13.6757 3.60362 12.9718 2.33009 11.6555C1.37412 10.6634 0.794648 9.48138 0.578573 8.11927C0.545834 7.93264 0.526191 7.74928 0.5 7.56264C0.5 7.27123 0.5 6.97982 0.5 6.68841C0.509822 6.64257 0.522917 6.6 0.529465 6.55416C0.568751 6.29222 0.591668 6.027 0.647324 5.76833C0.909233 4.53065 1.48871 3.45668 2.37265 2.55298C3.36463 1.53795 4.55632 0.889641 5.95426 0.624423C6.22926 0.572034 6.50754 0.542566 6.78254 0.5C7.07392 0.5 7.36529 0.5 7.65667 0.5ZM1.53454 7.09115C1.54764 7.32362 1.54764 7.51681 1.57055 7.70671C1.7146 8.92148 2.17949 9.99544 3.02415 10.8861C4.49411 12.4282 6.30456 13.0078 8.37692 12.6051C10.2005 12.2514 11.5624 11.2004 12.371 9.51412C13.1862 7.81149 13.1371 6.09249 12.2237 4.44879C11.2907 2.76253 9.81414 1.80317 7.90221 1.56742C6.39295 1.38078 5.00484 1.75078 3.78696 2.67085C2.31699 3.78739 1.58365 5.29029 1.53454 7.09115Z" fill="white"/>
            </svg>    
            Search
          </button>
        </div>
      </nav>
      
    );
  };
  
  export default Header;
