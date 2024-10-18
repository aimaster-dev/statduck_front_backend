"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Badge from "../../../components/Badge";

const Features = () => {
    return (
        <section className="relative">



            <div className="absolute inset-0 w-full h-full opacity-20">
                <Image
                    src="/hero-bg.svg"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="z-0"
                />
            </div>

            <link
                href="https://cdn.prod.website-files.com/642ed403044d8378fabb82a6/css/bx-easya.webflow.e285811a4.min.css"
                rel="stylesheet"
                type="text/css"
            />

            <div className="page-wrapper ">

                <div className="global-styles w-embed"></div>
                <main className="main-wrapper">
                    <div className="text-center py-12">
                        <TypeAnimation
                            sequence={[
                                "Engage with trivia questions on a variety of sports.",
                                1000,
                                "Compete in real-time multiplayer modes.",
                                1000,
                                "Challenge yourself with adaptive difficulty levels.",
                                1000,
                                "Earn cryptocurrency rewards for achievements.",
                                1000,
                                "Secure transactions using Polygon blockchain.",
                                1000,
                                "Track and manage earnings directly within the game.",
                                1000,
                            ]}
                            wrapper="div"
                            speed={50}
                            className="text-5xl font-bold mt-8 gaming-effect"
                            repeat={Infinity}
                        />
                    </div>
                    <div data-w-id="14a70c8a-7dcd-2d5a-01d1-4592f5b44138" className="section-home-fast" >
                        <div className="padding-global pb-20">
                            <div className="container-81-25">
                                <div className="padding-section-small">
                                    <div className="margin-bottom margin-regular is-mobile-42"></div>
                                    <div className="home-fast-component">
                                        <div
                                            id="w-node-_49844e76-639f-e5ad-a62e-ad02e841c602-d79d1d2a"
                                            data-w-id="49844e76-639f-e5ad-a62e-ad02e841c602"
                                            className="image-gradient-border"
                                        >
                                            <div
                                                id="w-node-a718c211-62db-5d62-f6c6-dfcd2f35c380-d79d1d2a"
                                                data-w-id="a718c211-62db-5d62-f6c6-dfcd2f35c380"
                                                className="fast-outer-wrap _1"
                                            >
                                                <img
                                                    src="https://cdn.prod.website-files.com/642ed403044d8378fabb82a6/644f5895442c99b19bc90273_BG.svg"
                                                    loading="lazy"
                                                    id="w-node-_2a180fa3-6680-c368-8a77-1ea88bcdcc5b-d79d1d2a"
                                                    alt=""
                                                    className="fast-bg-image"
                                                />
                                                <div
                                                    id="w-node-_3653cb2c-8d27-4613-344f-5c3f8b547992-d79d1d2a"
                                                    className="relative-index-2"
                                                >
                                                    <div className="margin-bottom margin-regular">
                                                        <h2>Interactive Sports Trivia</h2>
                                                    </div>
                                                    <p
                                                        data-w-id="d74753f6-aba3-e120-4ff6-5ed94803cb34"
                                                        className="text-size-18 text-color-easya_light"
                                                    >
                                                        No time? No problem! Play a 2-3 Mins Game to Earn Crypto!
                                                    </p>
                                                </div>
                                                <div
                                                    id="w-node-_77da0e28-dfde-c3f0-cdf5-ead4bd7ab3d8-d79d1d2a"
                                                    className="fast-list-wrap relative-index-2"
                                                >
                                                    <div
                                                        data-w-id="009b5715-bd4e-54bf-2a82-ff6537579056"
                                                        className="image-gradient-border border-12px fast-1"
                                                    >
                                                        <div className="fast-list-item _1">
                                                            <div className="text-size-tiny">
                                                                <div className="blog-tag is-green is-10">
                                                                    In Development
                                                                </div>
                                                                <div className="text-weight-medium text-size-small is-13">
                                                                    Sport Trivia Frenzy
                                                                </div>
                                                                <div className="text-color-easya_light is-11">
                                                                    Engage with trivia questions on a variety of sports.
                                                                </div>
                                                            </div>
                                                            <div className="icon-embed-fast w-embed">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="100%"
                                                                    height="100%"
                                                                    viewBox="0 0 40 40"
                                                                    fill="none"
                                                                    preserveAspectRatio="xMidYMid meet"
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                >
                                                                    <path
                                                                        d="M39.0749 20.1841C39.0749 30.8916 30.3947 39.5717 19.6872 39.5717C8.97971 39.5717 0.299561 30.8916 0.299561 20.1841C0.299561 9.47654 8.97971 0.796387 19.6872 0.796387C30.3947 0.796387 39.0749 9.47654 39.0749 20.1841ZM4.17709 20.1841C4.17709 28.7501 11.1212 35.6942 19.6872 35.6942C28.2532 35.6942 35.1974 28.7501 35.1974 20.1841C35.1974 11.618 28.2532 4.67392 19.6872 4.67392C11.1212 4.67392 4.17709 11.618 4.17709 20.1841Z"
                                                                        fill="white"
                                                                        fillOpacity="0.1"
                                                                    />
                                                                    <path
                                                                        d="M14.2214 21.0877L11.1792 23.6775V24.6841H16.7887V23.5871H12.9661L15.0696 21.8341C15.6238 21.3704 16.0422 20.9406 16.325 20.5335C16.5964 20.1264 16.7434 19.6627 16.7434 19.1198C16.7434 18.3847 16.4946 17.7966 16.0083 17.3555C15.5107 16.9145 14.8321 16.6883 13.95 16.6883C13.3958 16.6883 12.9095 16.8014 12.5024 17.0276C12.0839 17.2538 11.7559 17.5704 11.5298 17.9549C11.3036 18.3508 11.1905 18.7918 11.1905 19.2895V19.5043H12.4458V19.3573C12.4458 18.8823 12.5815 18.4978 12.853 18.2038C13.1244 17.9097 13.4976 17.7627 13.95 17.7627C14.4137 17.7627 14.7869 17.8871 15.0583 18.1359C15.3297 18.3847 15.4654 18.7353 15.4654 19.1764C15.4654 19.527 15.3524 19.8436 15.1488 20.1377C14.9452 20.4317 14.6285 20.7484 14.2214 21.0877Z"
                                                                        fill="white"
                                                                    />
                                                                    <path
                                                                        opacity="0.5"
                                                                        d="M18.2713 26.6228H19.2698L22.11 17.8984H21.1116L18.2713 26.6228ZM21.9118 22.2025V23.1137H25.3822V24.6841H26.4388V23.1137H27.4663V22.1831H26.4388V17.8984H25.1398L21.9118 22.2025ZM22.9878 22.1831L25.3822 19.0035V22.1831H22.9878Z"
                                                                        fill="white"
                                                                    />
                                                                    <path
                                                                        d="M19.6872 0.796387C22.2332 0.796387 24.7543 1.29786 27.1066 2.27219C29.4588 3.24651 31.5961 4.67459 33.3964 6.4749C35.1967 8.27522 36.6248 10.4125 37.5991 12.7647C38.5734 15.1169 39.0749 17.638 39.0749 20.1841L35.1974 20.1841C35.1974 18.1472 34.7962 16.1304 34.0167 14.2486C33.2373 12.3668 32.0948 10.657 30.6545 9.21673C29.2143 7.77648 27.5045 6.63402 25.6227 5.85456C23.7409 5.0751 21.724 4.67392 19.6872 4.67392V0.796387Z"
                                                                        fill="#52FFA1"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image-gradient-border border-12px fast-2">
                                                        <div className="fast-list-item _2">
                                                            <div className="text-size-tiny">
                                                                <div className="blog-tag is-purple is-10">
                                                                    Active
                                                                </div>
                                                                <div className="text-weight-medium text-size-small is-13">
                                                                    Challenge All Levels
                                                                </div>
                                                                <div className="text-color-easya_light is-11">
                                                                    Adaptive difficulty levels to challenge all users.
                                                                </div>
                                                            </div>
                                                            <div className="icon-embed-fast w-embed">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="100%"
                                                                    height="100%"
                                                                    viewBox="0 0 40 39"
                                                                    fill="none"
                                                                    preserveAspectRatio="xMidYMid meet"
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                >
                                                                    <path
                                                                        d="M39.0749 19.497C39.0749 30.2046 30.3947 38.8847 19.6872 38.8847C8.97971 38.8847 0.299561 30.2046 0.299561 19.497C0.299561 8.78953 8.97971 0.109375 19.6872 0.109375C30.3947 0.109375 39.0749 8.78953 39.0749 19.497ZM4.17709 19.497C4.17709 28.063 11.1212 35.0072 19.6872 35.0072C28.2532 35.0072 35.1974 28.063 35.1974 19.497C35.1974 10.931 28.2532 3.98691 19.6872 3.98691C11.1212 3.98691 4.17709 10.931 4.17709 19.497Z"
                                                                        fill="#8465FF"
                                                                    />
                                                                    <path
                                                                        d="M12.2358 21.5768C12.3489 22.0405 12.5073 22.4477 12.7334 22.787C12.9936 23.1941 13.3328 23.5108 13.7513 23.737C14.1584 23.9631 14.6334 24.0649 15.1763 24.0649C15.7191 24.0649 16.2168 23.9518 16.6465 23.7256C17.0763 23.4995 17.4156 23.1828 17.6531 22.7756C17.8906 22.3685 18.015 21.9161 18.015 21.3959C18.015 20.8757 17.9019 20.412 17.6757 20.0048C17.4495 19.5977 17.1441 19.2923 16.737 19.0661C16.3299 18.84 15.8662 18.7269 15.3459 18.7269C14.8709 18.7269 14.4638 18.8286 14.1019 19.0322C13.74 19.2358 13.4799 19.5185 13.2989 19.8691C13.265 19.9144 13.2424 19.9596 13.2311 19.9935C13.2198 20.0274 13.2084 20.0501 13.2084 20.0614V19.756C13.2084 18.9304 13.3668 18.2745 13.7061 17.7882C14.034 17.3019 14.4977 17.0531 15.0971 17.0531C15.5043 17.0531 15.8435 17.1661 16.115 17.3697C16.3864 17.5846 16.556 17.8786 16.6465 18.2519H17.8906C17.7888 17.562 17.4947 17.0191 17.0084 16.612C16.5221 16.2162 15.9114 16.0126 15.1876 16.0126C14.5316 16.0126 13.9775 16.1822 13.5138 16.4989C13.0388 16.8269 12.6882 17.2906 12.4394 17.9013C12.1906 18.512 12.0662 19.2471 12.0662 20.0953C12.0662 20.6268 12.1227 21.1245 12.2358 21.5768ZM16.3412 20.2197C16.6239 20.5251 16.7709 20.9209 16.7709 21.3959C16.7709 21.8822 16.6239 22.278 16.3299 22.5834C16.0358 22.8887 15.64 23.0358 15.165 23.0358C14.69 23.0358 14.3055 22.8887 14.0114 22.5834C13.7174 22.2893 13.5703 21.8935 13.5703 21.4072C13.5703 20.9209 13.7174 20.5251 14.0227 20.2197C14.3168 19.9144 14.7126 19.756 15.1989 19.756C15.6739 19.756 16.0471 19.9144 16.3412 20.2197Z"
                                                                        fill="white"
                                                                    />
                                                                    <path
                                                                        opacity="0.5"
                                                                        d="M18.2713 25.9358H19.2698L22.11 17.2114H21.1116L18.2713 25.9358ZM22.4404 21.9226C22.5373 22.32 22.673 22.669 22.8669 22.9598C23.0899 23.3088 23.3807 23.5802 23.7394 23.7741C24.0883 23.968 24.4955 24.0552 24.9608 24.0552C25.4261 24.0552 25.8526 23.9583 26.221 23.7644C26.5894 23.5705 26.8802 23.2991 27.0837 22.9501C27.2873 22.6012 27.3939 22.2134 27.3939 21.7675C27.3939 21.3216 27.297 20.9241 27.1031 20.5751C26.9093 20.2262 26.6475 19.9644 26.2985 19.7706C25.9496 19.5767 25.5521 19.4797 25.1062 19.4797C24.6991 19.4797 24.3501 19.567 24.0399 19.7415C23.7297 19.916 23.5067 20.1583 23.3516 20.4588C23.3225 20.4976 23.3031 20.5364 23.2935 20.5655C23.2838 20.5945 23.2741 20.6139 23.2741 20.6236V20.3619C23.2741 19.6542 23.4098 19.092 23.7006 18.6752C23.9817 18.2583 24.3792 18.0451 24.8929 18.0451C25.2419 18.0451 25.5327 18.142 25.7654 18.3165C25.998 18.5007 26.1434 18.7527 26.221 19.0726H27.2873C27.2001 18.4813 26.948 18.016 26.5312 17.667C26.1144 17.3277 25.5909 17.1532 24.9705 17.1532C24.4082 17.1532 23.9332 17.2986 23.5358 17.5701C23.1287 17.8512 22.8281 18.2486 22.6149 18.7721C22.4016 19.2956 22.295 19.9257 22.295 20.6527C22.295 21.1083 22.3435 21.5348 22.4404 21.9226ZM25.9593 20.7593C26.2016 21.0211 26.3276 21.3603 26.3276 21.7675C26.3276 22.1843 26.2016 22.5236 25.9496 22.7853C25.6975 23.0471 25.3582 23.1731 24.9511 23.1731C24.544 23.1731 24.2144 23.0471 23.9623 22.7853C23.7103 22.5333 23.5843 22.194 23.5843 21.7772C23.5843 21.3603 23.7103 21.0211 23.972 20.7593C24.2241 20.4976 24.5633 20.3619 24.9802 20.3619C25.3873 20.3619 25.7072 20.4976 25.9593 20.7593Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        data-w-id="12ca0a40-b667-1f91-1e29-ec50dd16a2f9"
                                                        className="image-gradient-border border-12px fast-3"
                                                    >
                                                        <div className="fast-list-item _3">
                                                            <div className="text-size-tiny text-style-muted">
                                                                <div className="text-weight-medium text-size-small is-13">
                                                                    Future of Web3 Games
                                                                </div>
                                                                <div className="text-style-muted is-11">
                                                                    Real-time multiplayer mode for competitive play & Rewards.

                                                                </div>
                                                            </div>
                                                            <div className="icon-embed-fast w-embed">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="100%"
                                                                    height="100%"
                                                                    viewBox="0 0 40 40"
                                                                    fill="none"
                                                                    preserveAspectRatio="xMidYMid meet"
                                                                    aria-hidden="true"
                                                                    role="img"
                                                                >
                                                                    <g opacity="0.5" clipPath="url(#clip0_2711_5814)">
                                                                        <circle
                                                                            cx="19.6872"
                                                                            cy="20.0783"
                                                                            r="19.3877"
                                                                            fill="#52FFA1"
                                                                            fillOpacity="0.2"
                                                                        />
                                                                        <path
                                                                            d="M16.9397 12.1608C16.8197 12.0708 16.677 12.016 16.5276 12.0025C16.3782 11.9891 16.228 12.0175 16.0938 12.0846C15.9596 12.1516 15.8467 12.2548 15.7679 12.3824C15.689 12.51 15.6472 12.6571 15.6472 12.8071V27.3478C15.6472 27.4979 15.689 27.6449 15.7679 27.7725C15.8467 27.9001 15.9596 28.0033 16.0938 28.0704C16.228 28.1375 16.3782 28.1659 16.5276 28.1524C16.677 28.1389 16.8197 28.0841 16.9397 27.9941L26.6336 20.7237C26.7339 20.6485 26.8153 20.5509 26.8714 20.4387C26.9275 20.3266 26.9567 20.2029 26.9567 20.0775C26.9567 19.9521 26.9275 19.8284 26.8714 19.7162C26.8153 19.604 26.7339 19.5065 26.6336 19.4312L16.9397 12.1608Z"
                                                                            fill="#52FFA1"
                                                                        />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_2711_5814">
                                                                            <rect
                                                                                width="38.7753"
                                                                                height="38.7753"
                                                                                fill="white"
                                                                                transform="translate(0.299561 0.690674)"
                                                                            />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_9f305429-46d2-65ae-adbd-2cbdc132ddad-d79d1d2a"
                                            data-w-id="9f305429-46d2-65ae-adbd-2cbdc132ddad"
                                            className="image-gradient-border"
                                        >
                                            <div
                                                id="w-node-_9b161c0b-8531-0735-011e-00481110f55e-d79d1d2a"
                                                data-w-id="9b161c0b-8531-0735-011e-00481110f55e"
                                                className="fast-outer-wrap _3"
                                            >
                                                <img
                                                    src="/Crypt.png"
                                                    loading="lazy"
                                                    alt="Learn on the go, right from the place you spend most of your time!"
                                                    className="fast-mobile-image hide-tablet"
                                                />
                                                <img
                                                    src="/Crypt.png"
                                                    loading="lazy"
                                                    alt="Learn on the go, right from the place you spend most of your time!"
                                                    className="fast-mobile-image show-tablet"
                                                />
                                                <div

                                                    className="relative-index-2"
                                                >
                                                    <div className="margin-bottom margin-regular">
                                                        <h3>Crypto Rewards System</h3>
                                                    </div>
                                                    <p className="text-size-18 text-color-easya_light">
                                                        Earn cryptocurrency for correct answers and achievements.
                                                        Instant and secure transactions using the Polygon blockchain.
                                                        Track and manage your earnings directly within the game.
                                                    </p>
                                                </div>
                                                <div className="blurry-bg p-4 absolute -top-8 right-5 -mt-1 pt-10">
                                                    <Badge />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-d1b92291-c456-45e6-d5f4-1d0254889caa-d79d1d2a"
                                            data-w-id="d1b92291-c456-45e6-d5f4-1d0254889caa"
                                            className="image-gradient-border"
                                        >
                                            <div
                                                id="w-node-_1feaef55-1166-0580-65a4-4cad24415cb8-d79d1d2a"
                                                data-w-id="1feaef55-1166-0580-65a4-4cad24415cb8"
                                                className="fast-outer-wrap _2"
                                            >
                                                <div
                                                    id="w-node-_236ceb04-cfde-690d-4685-9298e904e4f7-d79d1d2a"
                                                    className="indepth-wrap"
                                                >
                                                    <img
                                                        src="NFT.jpg"
                                                        loading="lazy"
                                                        alt=""
                                                        className="indepth-image"
                                                        style={{ borderRadius: 30 }}
                                                    />
                                                    <div className="indept-list">
                                                        <div className="indepth-item active">
                                                            <img
                                                                src="https://cdn.prod.website-files.com/642ed403044d8378fabb82a6/646a17479edfdb7aed5ca8d8_Vector.svg"
                                                                loading="lazy"
                                                                alt=""
                                                                className="icon-indepth"
                                                            />
                                                            <div>Unique Avatars NFT's                                                            </div>
                                                        </div>
                                                        <div className="indepth-item">
                                                            <img
                                                                src="https://cdn.prod.website-files.com/642ed403044d8378fabb82a6/646a1787492ea69c34fbfc9a_Vector%20(1).svg"
                                                                loading="lazy"
                                                                alt=""
                                                                className="icon-indepth"
                                                            />
                                                            <div>Trade Limited Editions
                                                            </div>
                                                        </div>
                                                        <div className="indepth-item">
                                                            <img
                                                                src="https://cdn.prod.website-files.com/642ed403044d8378fabb82a6/646a1787492ea69c34fbfc9a_Vector%20(1).svg"
                                                                loading="lazy"
                                                                alt=""
                                                                className="icon-indepth"
                                                            />
                                                            <div>Showcase Digital Achievements
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="w-node-_1feaef55-1166-0580-65a4-4cad24415cba-d79d1d2a"
                                                    data-w-id="1feaef55-1166-0580-65a4-4cad24415cba"
                                                    className="relative-index-2"
                                                >
                                                    <div className="margin-bottom margin-regular">
                                                        <h2>Exclusive NFT Ownership
                                                            !</h2>
                                                    </div>
                                                    <p className="text-size-18 text-color-easya_light">
                                                        Customize and own unique avatars and items as NFTs.
                                                        Trade and collect rare, limited-edition items on our marketplace.
                                                        Showcase your gaming achievements with exclusive digital assets.
                                                    </p>
                                                </div>


                                            </div>
                                        </div>
                                        <img
                                            src="https://cdn.prod.website-files.com/642ed403044d8378fabb82a6/644f5f73edcce44c4a0bcd6e_Frame%201597879877.svg"
                                            loading="lazy"
                                            id="w-node-ec1e843a-2b75-a3ec-33e4-afe189ecd52c-d79d1d2a"
                                            alt=""
                                            className="fast-check-icon"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </section>
    );
};

export default Features;