import AboutFeatures from "./AboutFeatures";
import AboutHeader from "./AboutHeader";
import AboutSection from "./AboutSection";

const About = () => {
  console.log('AboutUs component rendered');
  const team = [
    {
      name: 'David Ngu',
      imgSrc: 'https://makecomponents.com/Image/teams/Team001/person1.webp',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
    },
    {
      name: 'Michael Thompson',
      imgSrc: 'https://makecomponents.com/Image/teams/Team001/person2.webp',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
    },
    {
      name: 'Emily Parker',
      imgSrc: 'https://makecomponents.com/Image/teams/Team001/person3.webp',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
    },
    {
      name: 'James Anderson',
      imgSrc: 'https://makecomponents.com/Image/teams/Team001/person4.webp',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
    },
  ];

  return (
    <div>
      <AboutHeader />
      <AboutSection />
      <AboutFeatures />
      <div className="container mx-auto py-12 px-4 font-family">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-[#001f2e]  p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-blue-500" // Add hover:bg-blue-500 for background color change
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="rounded-full border-4 border-[#001f2e] object-cover h-24 w-24 mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="text-center">
                <div className="text-white text-xl font-semibold duration-300 group-hover:text-black"> {/* Change text color on hover */}
                  {member.name}
                </div>
                <div className="text-white text-base pt-2 leading-6 duration-300 group-hover:text-black"> {/* Change text color on hover */}
                  {member.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
