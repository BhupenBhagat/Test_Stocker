import React, { useEffect, useState } from "react";
import "./ImageSlider.css"; // Import CSS for styling


const ImageSlider = () => {
  // Array of image URLs (replace these with your actual image paths or URLs)
  const images = [
    "https://cdn152.picsart.com/220994622003202.jpg?to=crop&type=webp&r=1456x910&q=85",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
  ];

  // State to keep track of the currently displayed image index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to update the currentIndex every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      // (prevIndex + 1) % images.length ensures the index wraps around
      // When the index reaches the last image, it goes back to 0
    }, 3000); // Change image every 3000ms (3 seconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]); // Dependency ensures the effect runs when the number of images changes

  return (
    <div className="image-slider">
      {/* 
        The container for all images. 
        Translate the container horizontally based on the currentIndex 
      */}
      <div
        className="images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Map through the images array and render each image */}
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} />
          // key={index} is used to uniquely identify each image in the list
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
