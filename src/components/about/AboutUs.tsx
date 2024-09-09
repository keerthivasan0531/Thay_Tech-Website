import AboutFeatures from "./AboutFeatures";
import AboutHeader from "./AboutHeader";
import AboutSection from "./AboutSection";
import "./About.css";

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
      <AboutHeader/>
      <AboutSection/>
      <AboutFeatures/>
      <div className="container mx-auto py-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {team.map((member, index) => (
            <div key={index} className="group relative flex flex-col items-center">
              <div className="-top-20 left-[35%] absolute" >
                <img
                  src={member.imgSrc}
                  className="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]"
                  alt={member.name}
                />
              </div>
              <div className="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-4 px-4 pb-8 text-center">
                <h2 className="group-hover:text-white transition delay-200 text-[#001f2e] text-2xl font-semibold">
                  {member.name}
                </h2>
                <p className="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-base">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
