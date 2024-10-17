import React from "react";
const img = "https://picsum.photos/100";

function List() {
  return (
    <div>
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb96eBh-XrTyKzUfDc_5mnkbqJeHZ5X30RiR_YHOTJxZO-gJzYDhLOQ7d2fJC2Gwnw7jY&usqp=CAU"
        alt="bekon"
      />
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq917_SaDfGCr367jk8VYpRgImYYjKMB5fXg&s"
        alt="Jamon"
      />
      <img
        className="food-img"
        src="https://www.allrecipes.com/thmb/2rPJp4sRMmSa-5MgBRuHz8XDxlc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/233446-lo-mein-noodles-dmfs-2x1-1356-1490-62771eb9cd6840fdb75f332303fff7b1.jpg"
        alt="noodles"
      />
      <img
        className="food-img"
        src={img + "?grayscale"}
        alt="grayscale image"
      />
    </div>
  );
}
export default List;
