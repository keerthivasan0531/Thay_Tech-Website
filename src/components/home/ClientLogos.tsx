import Marquee from 'react-fast-marquee';


const imageUrls = [
  "https://www.thaytech.com/images/client/1.jpg",
  "https://www.thaytech.com/images/client/2.jpg",
  "https://www.thaytech.com/images/client/3.jpg",
  "https://www.thaytech.com/images/client/4.jpg",
  "https://www.thaytech.com/images/client/5.jpg",
  "https://www.thaytech.com/images/client/6.jpg",
  "https://www.thaytech.com/images/client/7.jpg",
  "https://www.thaytech.com/images/client/8.jpg",
  "https://www.thaytech.com/images/client/9.jpg",
  "https://www.thaytech.com/images/client/10.jpg",
  "https://www.thaytech.com/images/client/11.jpg",
  "https://www.thaytech.com/images/client/12.jpg",
  "https://www.thaytech.com/images/client/13.jpg",
  "https://www.thaytech.com/images/client/14.jpg",
  "https://www.thaytech.com/images/client/15.jpg",
  "https://www.thaytech.com/images/client/16.jpg",
  "https://www.thaytech.com/images/client/17.jpg",
  "https://www.thaytech.com/images/client/18.jpg",
  "https://www.thaytech.com/images/client/19.jpg",
  "https://www.thaytech.com/images/client/20.jpg",
  "https://www.thaytech.com/images/client/21.jpg",
  "https://www.thaytech.com/images/client/22.jpg",
  "https://www.thaytech.com/images/client/23.jpg",
  "https://www.thaytech.com/images/client/24.jpg",
];

function ClientLogos() {
  return (
    <div className="ClientLogos mt-8">
      <div className="title">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Our Clients
        </h2>
      </div>

      <div>
        <Marquee direction="left" speed={100}>
          {imageUrls.map((url, index) => (
            <div className="image_wrapper" key={index}>
              <img src={url} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default ClientLogos;
