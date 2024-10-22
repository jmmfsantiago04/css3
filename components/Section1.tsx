// components/Banner.tsx

import React from 'react';
import Image from 'next/image';
import Man1 from '../public/Man1.png';

const Section1 = () => {
  return (
    <div
      className="relative flex items-center justify-center lg:pl-[50px] bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('/TopBannerBG.png')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 "></div>

      <div className="container relative md:p mx-auto flex lg:flex-row items-center flex-col-reverse w-full h-full">
        {/* Left Section - Form */}
        <div
          className="bg-white rounded-[30px] sm:pb-5 sm:pr-2 sm:mb-4  md:pt-[60px] shadow-lg flex flex-col items-center pl-[30px] md:pb-4 pr-[30px] md:pl-[50px] md:pr-[75px] text-center w-full lg:w-auto"
        >
          <h2 className="text-custom-red text-[24px] md:text-[30px] font-bold mb-[10px]">
            실시간 차량 수출 무료 상담
          </h2>
          <p className="text-gray-700 text-[18px] md:text-[20px] mb-[30px] md:mb-[50px] lg:flex-nowrap md:flex-nowrap sm:flex-nowrap">
            연식, 주행거리, 사고 유무 상관없이 최고가 매입
          </p>

          <form className="w-full max-w-lg">
            {/* Car Name Input with Label on the Side */}
            <div className="mb-[30px] md:mb-[50px] flex items-center justify-start">
              <label className="text-gray-700 text-sm font-bold w-1/4">
                차량명
              </label>
              <input
                type="text"
                placeholder="차량을 모델명을 입력해 주세요"
                className="w-3/4 p-2 border border-gray-300 rounded max-w-[446px]"
              />
            </div>

            {/* Phone Number Input with Label on the Side */}
            <div className="mb-4 flex items-center justify-between">
              <label className="text-gray-700 text-sm font-bold w-1/4">
                핸드폰
              </label>
              <input
                type="text"
                placeholder="010"
                className="w-3/4 p-2 border border-gray-300 rounded max-w-[446px]"
              />
            </div>

            {/* Checkbox Section */}
            <div className="mb-[40px] md:mb-[60px]">
              <div className="flex items-center">
                {/* Checkbox and Label */}
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-custom-red"
                  />
                  <span className="ml-2 text-gray-700">
                    개인정보 수집/이용 동의
                  </span>
                </label>
                <span className="ml-10 text-gray-700 cursor-pointer">
                  내용보기
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-custom-red text-white py-3 px-6 rounded-[10px] text-lg font-bold hover:bg-red-600 max-w-[354px]"
            >
              30초만에 내차 최고가 시세 조회 Click
            </button>
          </form>
        </div>

        {/* Right Section - Image and Text */}
        <div className="flex  md:ml-[120px] flex-col justify-between lg:w-1/2 text-center lg:text-left h-full">
          {/* Text Section */}
          <div>
            <h2 className="text-custom-red lg:mt-[140px] text-[24px] md:text-[30px] font-bold">
              투명한 가격과 프로세스로
            </h2>
            <p className="text-white lg:mt-[50px] lg:ml-[155px] text-[24px] md:text-[30px]">
              신뢰할 수 있는 중고차 수출 솔루션
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-auto lg:ml-[70px] hidden xl:block">
            <Image
              src={Man1}
              alt="Man"
              width={203}
              height={314}
              className="hidden xl:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;