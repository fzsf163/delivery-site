function MapOfLocation() {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* <img
        src={"map2.webp"}
        alt=""
        className="mx-auto w-fit scale-150 rounded sm:scale-100"
      /> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.922066538291!2d90.4024368!3d23.856901000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84e23248dce50ad%3A0xc060ec15c31933f8!2sUpEx%20World%20(BD)%20Ltd.!5e0!3m2!1sen!2sbd!4v1747077083033!5m2!1sen!2sbd"
        width="1342"
        height="600"
        style={{ border: 0, margin: "auto" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapOfLocation;
