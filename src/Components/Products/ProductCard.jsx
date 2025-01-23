import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {data.map((data) => (
          <div key={data.id}>
            {/* Images */}
            <div>
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
            </div>
          {/* Tile , Price */}
          <div className="leading-7">
            <h2 className="font-semibold">{data.title}</h2>
            <h2 className="font-bold">{data.price}</h2>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
