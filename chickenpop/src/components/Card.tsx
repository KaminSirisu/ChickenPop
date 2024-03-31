import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs text-orange-500">Menu</span>
            <h2 className="text-3xl font-semibold mt-2">Chicken Pop Menu</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Meal Cards */}
            <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="overflow-hidden h-56">
                <Image
                  src="/menu_chicken.jpg"
                  alt="menu chicken"
                  width={500}
                  height={500}
                  className="w-full meal-img"
                ></Image>
              </div>
              <div className="p-6">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  Fried Chicken Pop
                </p>
                <ul>
                  <li className="mb-5">
                    <span>
                      Bite-sized pieces of fried chicken coated in a crispy
                      seasoned batter
                    </span>
                  </li>
                  <li className="">
                    <span>
                      <strong>$ 12.99</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="overflow-hidden h-56">
                <Image
                  src="/menu_tokbokki.jpg"
                  alt="Cheese tokbokki"
                  width={300}
                  height={200}
                  className="w-full meal-img"
                ></Image>
              </div>
              <div className="p-6">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  Cheese tokbokki
                </p>
                <ul>
                  <li className="mb-5">
                    <span>
                      Chewy rice cakes in a spicy-sweet sauce and topped with
                      melted cheese
                    </span>
                  </li>
                  <li className="">
                    <span>
                      <strong>$ 12.99</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="overflow-hidden h-56">
                <Image
                  src="/menu_ramyeon.jpg"
                  alt="ramyeon"
                  width={350}
                  height={200}
                  className="h-full meal-img"
                ></Image>
              </div>
              <div className="p-6">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  Ramyeon
                </p>
                <ul>
                  <li className="mb-5">
                    <span>
                      Chewy noodles in a savory broth flavored with spices,
                      vegetables, meat, and seafood
                    </span>
                  </li>
                  <li className="">
                    <span>
                      <strong>$ 12.99</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-44">
            {/* Meal Cards */}
            <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="overflow-hidden h-56">
                <Image
                  src="/menu_churros.jpg"
                  alt="menu churros"
                  width={320}
                  height={300}
                  className="h-full"
                ></Image>
              </div>
              <div className="p-6">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  Churros
                </p>
                <ul>
                  <li className="mb-5">
                    <span>
                      Spanish fried dough pastries coated in cinnamon sugar,
                      with chocolate sauce for dipping
                    </span>
                  </li>
                  <li className="">
                    <span>
                      <strong>$ 5.50</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="overflow-hidden h-56">
                <Image
                  src="/menu_honeyLime.jpg"
                  alt="honey lime soda"
                  width={300}
                  height={200}
                  className="w-full"
                ></Image>
              </div>
              <div className="p-6">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  Honey lime soda
                </p>
                <ul>
                  <li className="mb-5">
                    <span>
                      Refreshing beverage of lime with the sweetness of honey,
                      drink perfect for thirst on a hot day
                    </span>
                  </li>
                  <li className="">
                    <span>
                      <strong>$ 3.99</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
