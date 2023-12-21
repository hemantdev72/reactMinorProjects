import React, { useEffect, useState } from "react";
import "./style.css";

function Image() {
  const [image, setImages] = useState([]);
  const [slide, setSlide] = useState(0);

  async function fetchImage() {
    try {
      let response = await fetch("https://picsum.photos/v2/list?limit=5");
      let data = await response.json();
      setImages(data);
    } catch (e) {
      console.log(e);
    }
  }

  function handlePre() {
    setSlide(slide === 0 ? image.length - 1 : slide - 1);
  }

  function handleNext() {
    setSlide(slide === image.length - 1 ? 0 : slide + 1);
  }

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="container">
      <button className="arrow left" onClick={handlePre}>
        {"<"}
      </button>
      {image.length > 0 ? (
        image.map((img, index) => (
          <img
            className={
              slide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
            key={img.id}
            alt={img.download_url}
            src={img.download_url}
          />
        ))
      ) : (
        <div>Nothing to show</div>
      )}
      <button className="arrow right" onClick={handleNext}>
        {">"}
      </button>
      <span className="circle-indicator">
        {image.length > 0 &&
          image.map((img, index) => (
            <button
              onClick={() => setSlide(index)}
              className={
                slide === index
                  ? "current-indicator"
                  : "current-indicator hide-current-indicator"
              }
              key={index}
            >
              .
            </button>
          ))}
      </span>
    </div>
  );
}

export default Image;
