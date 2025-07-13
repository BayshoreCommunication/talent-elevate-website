import React from "react";

const GoogleMap = () => {
  return (
    <div className=" bg-[#1E2538]">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4414.335872319565!2d-80.13997069999999!3d25.950857799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe80f49167caac77%3A0x3e9d7324573f86cc!2sMelamed%20Law%2C%20PLLC!5e1!3m2!1sen!2sbd!4v1737892199901!5m2!1sen!2sbd"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
