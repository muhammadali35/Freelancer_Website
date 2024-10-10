import { IoLocationOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { MdPhoneMissed } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
const Products = [
    {
      id: 1,
      category: "FaceBook Marketer",
      title: "I will create short facebook video ads or instagram ads",
      price: "$199",
      deliveryTime: "3 days",
      rating: 4.5,
      reviews: 1,

      user: {
        name: "Ali",
        avatar: require('./../images/about.png') ,
        locationicon: <IoLocationOutline className="w-5 h-5 text-[#1F72F2]" />,
        languageicon: <MdLanguage className="w-5 h-5 text-[#1F72F2]" />,
        city: "Khanwal",
        languages: ["English"],
        phoneicon: <MdPhoneMissed className="w-5 h-5 text-[#1F72F2]" />,
        phone: "0946576765987978",
        emailicon: <AiTwotoneMail className="w-5 h-5 text-[#1F72F2]" />,
        email: "Ali@gmail.com",
        skills: ["React.js", "Node.js", "Tailwind CSS"],
        totalProjects: 120,
        totalEarnings: "$5000",
        description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem...",
      services: ["Recruitment", "Software"],
      price: "$60/day",
      servicesCount: 6,
      },
      featured: true,
      image: require('./../images/about.png'), 

      workExperience:  
       {
        company: "ABC Company",
        role: "Software Engineer",
        years: "2020 - Present",
        description: "Worked on full-stack development using MERN stack."
    },
    education: 
      {
          degree: "Bachelor's in Computer Science",
          institution: "Islamia University of Bahawalpur",
          years: "2015 - 2019"
      },
      whatsapp: "https://wa.me/123456789",
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourprofile",
      twitter: "https://twitter.com/yourprofile",
    },
    {
      id: 2,
      category: "Google Markter",
      title: "I will create short facebook video ads or instagram ads",
      price: "$199",
      deliveryTime: "3 days",
      rating: 4.5,
      reviews: 1,
      user: {
        name: "Wali haider",
        avatar: require('./../images/about.png'), // Add the correct avatar image link
        locationicon: <IoLocationOutline className="w-5 h-5 text-[#1F72F2]" />,
        languageicon: <MdLanguage className="w-5 h-5 text-[#1F72F2]" />,
        city: "Khanwal",
        languages: ["English"],
        phoneicon: <MdPhoneMissed className="w-5 h-5 text-[#1F72F2]" />,
        phone: "0946576765987978",
        emailicon: <AiTwotoneMail className="w-5 h-5 text-[#1F72F2]" />,
        email: "Ali@gmail.com",
        skills: ["React.js", "Node.js", "Tailwind CSS"],
        totalProjects: 120,
        totalEarnings: "$5000",
        description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem...",
      services: ["Recruitment", "Software"],
      price: "$60/day",
      servicesCount: 6,
      },
      featured: true,
      image: require('./../images/about.png'), // Add the correct product image link
      workExperience:  
      {
       company: "ABC Company",
       role: "Software Engineer",
       years: "2020 - Present",
       description: "Worked on full-stack development using MERN stack."
   },
   education: 
     {
         degree: "Bachelor's in Computer Science",
         institution: "Islamia University of Bahawalpur",
         years: "2015 - 2019"
     },
     whatsapp: "https://wa.me/123456789",
     linkedin: "https://linkedin.com/in/yourprofile",
     github: "https://github.com/yourprofile",
     twitter: "https://twitter.com/yourprofile",
    },
    {
      id: 3,
      category: "Human Resources",
      title: "I will create short facebook video ads or instagram ads",
      price: "$199",
      deliveryTime: "3 days",
      rating: 4.5,
      reviews: 1,
      user: {
        name: "Lucy Haley",
        avatar: require('./../images/about.png'), // Add the correct avatar image link
        locationicon: <IoLocationOutline className="w-5 h-5 text-[#1F72F2]" />,
        languageicon: <MdLanguage className="w-5 h-5 text-[#1F72F2]" />,
        city: "Khanwal",
        languages: ["English"],
        phoneicon: <MdPhoneMissed className="w-5 h-5 text-[#1F72F2]" />,
        phone: "0946576765987978",
        emailicon: <AiTwotoneMail className="w-5 h-5 text-[#1F72F2]" />,
        email: "Ali@gmail.com",
        skills: ["React.js", "Node.js", "Tailwind CSS"],
        totalProjects: 120,
        totalEarnings: "$5000",
        description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem...",
      services: ["Recruitment", "Software"],
      price: "$60/day",
      servicesCount: 6,

      },
      featured: true,
      image: require('./../images/about.png'),
      workExperience:  
      {
       company: "ABC Company",
       role: "Software Engineer",
       years: "2020 - Present",
       description: "Worked on full-stack development using MERN stack."
   },
   education: 
     {
         degree: "Bachelor's in Computer Science",
         institution: "Islamia University of Bahawalpur",
         years: "2015 - 2019"
     },
     whatsapp: "https://wa.me/123456789",
     linkedin: "https://linkedin.com/in/yourprofile",
     github: "https://github.com/yourprofile",
     twitter: "https://twitter.com/yourprofile",
    },
]
export default Products;