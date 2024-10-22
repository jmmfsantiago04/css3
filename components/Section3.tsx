import React from 'react';
import Image from 'next/image';

// Car data for demonstration
const cars = [
  {
    image: '/Car1.png', // Make sure the image paths are correct
    title: '올 뉴 모닝 디럭스 스페셜',
    year: '2013년식',
    domesticPrice: '499 만 원',
    exportPrice: '699 만 원',
    markup: '200만 원 UP',
  },
  {
    image: '/Car2.png',
    title: '아반떼 MD M16 GDI',
    year: '2013년식',
    domesticPrice: '490 만 원',
    exportPrice: '640 만 원',
    markup: '150만 원 UP',
  },
  {
    image: '/Car3.png',
    title: 'K3 1.6 GDI 프레스티지',
    year: '2015년식',
    domesticPrice: '630 만 원',
    exportPrice: '750 만 원',
    markup: '120만 원 UP',
  },
  {
    image: '/Car4.png',
    title: '더 뉴 레이',
    year: '2015년식',
    domesticPrice: '759 만 원',
    exportPrice: '929 만 원',
    markup: '170만 원 mark up',
  },
];

const Section3 = () => {
  return (
    <div className="container p-4 lg:pt-[140px] mx-auto">
      {/* Flex container adjusted for centering */}
      <div className="flex flex-wrap justify-center gap-4 items-center">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md w-[312px] h-[456px] flex flex-col"
          >
            {/* Car Image */}
            <div className="h-52 relative">
              <Image
                src={car.image}
                alt={car.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Car Info */}
            <div className="p-4 flex-grow">
              <div className="flex items-center justify-between mb-[25px]">
                <h3 className="text-[16px] font-semibold">{car.title}</h3>
                <span className="bg-custom-red text-white px-2 py-1 text-[16px] rounded">
                  {car.year}
                </span>
              </div>

              {/* Domestic and Export price as rows */}
              <div className="mb-32px">
                <div className="flex justify-between items-center mb-[25px]">
                  <p className="text-[16px]">국내 매매상사</p>
                  <p className="text-[16px] font-bold">{car.domesticPrice}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[20px]">중고차 수출</p>
                  <p className="text-[20px] font-bold">{car.exportPrice}</p>
                </div>
              </div>
            </div>

            {/* Markup Info */}
            <div className="bg-custom-red text-white text-center py-2 rounded-b-lg font-bold">
              {car.markup}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
