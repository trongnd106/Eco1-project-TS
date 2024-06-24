const Ads = () => {
  return (
    <div className="my-28 bg-black">
      <div className="container mx-auto relative text-white py-28">
        <div>
          <p className="font-semibold">Tagline</p>
          <h3 className="mt-4 mb-8 text-5xl font-bold">Sales Up to 50%</h3>
          <div className="flex items-center">
            <button className="py-3 px-6 border border-white rounded bg-black text-white">
              Shop Now
            </button>
            <button className="py-3 px-6 border border-black rounded flex items-center">
              <span>Button</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute top-0 w-[240px] right-[180px]">
          <img src="banner2.png" />
        </div>
      </div>
    </div>
  );
};

export default Ads;
