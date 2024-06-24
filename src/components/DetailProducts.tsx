import { Product } from "../types/product";
type Props = {
  product: Product | null;
};
const DetailProducts = ({ product }: Props) => {
  return (
    <section>
      <div className="px-14">
        <div className="text-sm flex gap-3">
          <span className="opacity-50">Account</span>
          <span>/</span>
          <span className="opacity-50">Nothing</span>
          <span>/</span>
          <span>{product?.title}</span>
        </div>
        <div className="flex gap-[70px] mt-20">
          <div className="flex gap-[30px]">
            <div className="flex flex-col gap-4">
              {product?.images.map((image, index) => (
                <div
                  key={index}
                  className="w-[170px] h-[138px] bg-[#F5F5F5] flex items-center justify-center"
                >
                  <img className="w-24 h-24 object-cover" src={image} alt="" />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center w-[500px] bg-[#F5F5F5]">
              <img src={product?.thumbnail} alt="" />
            </div>
          </div>
          <div>
            <div className="border-b-2 pb-6 border-black/50">
              <h1 className="text-2xl font-bold">{product?.title}</h1>
              <div className="flex items-center gap-4 h-max text-sm my-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={15}
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                        fill="#FFAD33"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={15}
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                        fill="#FFAD33"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={15}
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                        fill="#FFAD33"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={15}
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                        fill="#FFAD33"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={15}
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                        fill="#FFAD33"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>(150 Reviews)</p>
                  </div>
                </div>
                <div className="w-[1px] h-4 bg-black/50" />
                <span className="text-green-400">In Stock</span>
              </div>
              <div className="text-2xl mb-6">
                <span>${product?.price}</span>
              </div>
              <div>
                <span className="text-sm">{product?.description}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center">
                <button className="w-10 h-11 border border-black/50 rounded-l-[4px]">
                  <svg
                    className="m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 12H4"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <input
                  className="w-20 h-11 border-y border-black/50 outline-none text-center"
                  defaultValue={2}
                  type="text"
                />
                <button className="w-10 h-11 border border-red-500 rounded-r-[4px] bg-red-500">
                  <svg
                    className="m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 20V12M12 12V4M12 12H20M12 12H4"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <button className="w-[165px] font-medium text-white bg-red-500 rounded-[4px] h-11">
                Buy Now
              </button>
              <button className="rounded-[4px] h-10 w-10 border border-black/50">
                <svg
                  className="m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-10 w-full border border-black/50 rounded">
              <div className="flex items-center px-4 h-[90px] gap-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_2877)">
                      <path
                        d="M11.6666 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6666 25C9.8257 25 8.33331 26.4924 8.33331 28.3333C8.33331 30.1743 9.8257 31.6667 11.6666 31.6667Z"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.33331 28.3335H6.99998C5.89541 28.3335 4.99998 27.4381 4.99998 26.3335V21.6668M3.33331 8.3335H19.6666C20.7712 8.3335 21.6666 9.22893 21.6666 10.3335V28.3335M15 28.3335H25M31.6667 28.3335H33C34.1046 28.3335 35 27.4381 35 26.3335V18.3335M35 18.3335H21.6666M35 18.3335L30.5826 10.9712C30.2211 10.3688 29.5701 10.0002 28.8676 10.0002H21.6666"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 11.8181H11.6667"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.81818 15.4546H8.48484"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 19.0908H11.6667"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2877">
                        <rect width={40} height={40} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <span className="text-xs underline font-medium">
                    Enter your postal code for Delivery Availability
                  </span>
                </div>
              </div>
              <div className="flex items-center px-4 h-[90px] gap-4 border-t border-black/50">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_2882)">
                      <path
                        d="M33.3334 18.3334C32.9258 15.4004 31.5651 12.6828 29.4611 10.5992C27.357 8.51563 24.6263 7.18161 21.6895 6.80267C18.7527 6.42372 15.7727 7.02088 13.2087 8.50216C10.6447 9.98343 8.63877 12.2666 7.50002 15.0001M6.66669 8.33341V15.0001H13.3334"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66669 21.6667C7.07429 24.5997 8.43491 27.3173 10.539 29.4009C12.643 31.4845 15.3738 32.8186 18.3106 33.1975C21.2474 33.5764 24.2273 32.9793 26.7914 31.498C29.3554 30.0167 31.3613 27.7335 32.5 25.0001M33.3334 31.6667V25.0001H26.6667"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2882">
                        <rect width={40} height={40} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Return Delivery</p>
                  <span className="text-xs font-medium">
                    Free 30 Days Delivery Returns.
                    <span className="underline">Details</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProducts;
