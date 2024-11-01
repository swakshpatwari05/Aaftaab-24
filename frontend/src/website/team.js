import AnimationRevealPage from "helpers/AnimationRevealPage";
import React, { Component } from "react";
import Header from "components/headers/light.js";
import TeamCard from "components/cards/Team-Teams-Card";
import Footer from "components/footers/Home-Footer";
 
import { ReactComponent as EmailIcon } from "images/email-envelope.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import { ReactComponent as InstagramIcon } from "images/icons8-instagram.svg";
import Ayush from "../images/team/Ayush - Ayush Didel (B20ME019).jpg"
import ShyanPal from '../images/team/1CFD3BE5-A542-4501-BC09-E710A524AAF8 - Shyan Pal (M22SL009).jpeg'
import Yawer from '../images/team/yxwerabbas-13092022-0001 - Yawer Abbas (B20CI050).webp'
import SayanSanyal from '../images/team/1662833916599-01 - Sayan Sanyal (M21DH014).jpeg'
import MahendraJakhar from '../images/team/IMG_6632-4 - Mahendra Jakhar (B20CI021).jpg'
import VandanMoonat from '../images/team/IMG_20220130_211252_339 - Vandan Moonat (B20CI046).jpg'
import Prabodh from '../images/team/WhatsApp Image 2022-09-11 at 15.45.33 - Prabodh Sharma (M22DH009).jpeg' 
 
import Tanay from '../images/team/WhatsApp Image 2022-08-22 at 10.40.45 PM - Tanay Anand (B20AI046).jpeg'
import Yash from '../images/team/profile_pic (2) - Yash Anand (B20ES010).jpg'
import Ishita from '../images/team/PICTURE - Ishita (M21MS034).jpg'
import ArunSahu from '../images/team/Arun sahu.jpg'
import KaranThakur from '../images/team/IMG_1285 - Karan Thakur (B20CH021).JPG'
 
import Gaurav from '../images/team/B20AI062(SG) - Gaurav Sangwan (B20AI062).jpg'
import Suyash from '../images/team/Suyash Surana.jpg'
import AnkushGupta from '../images/team/IMG_20220520_204750 - Ankush Gupta (B20CH006).jpg'
import Vikash from '../images/team/Vikas Yadav.jpeg'
import Vishal from '../images/team/Vishal Yadav.jpg'
import Jahnab from '../images/team/Jahnab Dutta.jpeg'
import YashB from '../images/team/Yash Bhargava.jpg'
import DefaultUser from '../images/team/User.jpg'
import Stuti from '../images/team/Stuti Pradeep Aswani.jpg'
import Shreya from '../images/team/Shreya Pagaria.jpg'
import Akshat from '../images/team/Akshat Jain.jpeg'
import UdayBhanu from '../images/team/Uday Bhanu.jpg'
 
 
function Team() {
  const team4 = {
    heading: "Web Development Team",
    description: "Meet our passionate team dedicated to web development.",
    cards: [
      // Head Members
      {
        imageSrc: Jahnab,
        position: "Head",
        name: "Jahnab Dutta",
        links: [
          {
            url: "https://instagram.com/jahnab.dutta",
            icon: InstagramIcon,
          },
 
          {
            mail: "dutta.4@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://linkedin.com/in/jahnab-dutta",
            icon: LinkedinIcon,
          },
          
        ],
      },
      {
        imageSrc: YashB,
        position: "Head",
        name: "Yash Bhargava",
        links: [
          {
            url: "https://instagram.com/cyan_tarantula",
            icon: InstagramIcon,
          },
 
          {
            mail: "bhargava.3@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://linkedin.com/in/yashbhargava02",
            icon: LinkedinIcon,
          },
          
        ],
      },
      {
        imageSrc: MahendraJakhar,
        position: "Assistant Head",
        name: "Mahendra Jakhar",
        links: [
          {
            url: "https://instagram.com/mahendra8p",
            icon: InstagramIcon,
          },
 
          {
            mail: "jakhar.4@iitj.ac.in",
            icon: EmailIcon
          }
        ]
            
      },      
      {
        imageSrc: Tanay,
        position: "Assistant Head",
        name: "Tanay Anand",
        links: [
          {
            url: "https://instagram.com/tanay.anand12",
            icon: InstagramIcon,
          },
 
          {
            mail: "anand.6@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
 
      {
        imageSrc: Vishal,
        position: "Assistant Head",
        name: "Vishal Kumar Yadav",
        links: [
          {
            url: "https://instagram.com/vishal_yadav._._",
            icon: InstagramIcon,
          },
 
          {
            mail: "yadav.40@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://linkedin.com/in/vishal-yadav-9871451b0",
            icon: LinkedinIcon,
          },
          
        ],
      },
      {
        imageSrc: Vishal,
        position: "Assistant Head",
        name: "Vishal Kumar Yadav",
        links: [
          {
            url: "https://instagram.com/vishal_yadav._._",
            icon: InstagramIcon,
          },
 
          {
            mail: "yadav.40@iitj.ac.in",
            icon: EmailIcon
          },
          {
            url: "https://linkedin.com/in/vishal-yadav-9871451b0",
            icon: LinkedinIcon,
          },
          
        ],
      },      
      // Add more team members here following the same structure
    ],
  };
  const team1 = {
    heading: "Accomodation and Transport",
    // subheading: "lorem ipsum",
    cards: [
      {
        imageSrc: MahendraJakhar,
        position: "Head",
        name: "Mahendra Jakhar",
        links: [
          {
            url: "https://instagram.com/mahendra8p",
            icon: InstagramIcon,
          },
 
          {
            mail: "jakhar.4@iitj.ac.in",
            icon: EmailIcon
          }
        ]
          
      },
    
      {
        imageSrc: Tanay,
        position: "Head",
        name: "Tanay Anand",
        links: [
          {
            url: "https://instagram.com/tanay.anand12",
            icon: InstagramIcon,
          },
 
          {
            mail: "anand.6@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: KaranThakur,
        position: "Assistant Head",
        name: "Karan Thakur",
        links: [
          {
            url: "https://instagram.com/karan._thakur_",
            icon: InstagramIcon,
          },
 
          {
            mail: "thakur.11@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: KaranThakur,
        position: "Assistant Head",
        name: "Karan Thakur",
        links: [
          {
            url: "https://instagram.com/karan._thakur_",
            icon: InstagramIcon,
          },
 
          {
            mail: "thakur.11@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: KaranThakur,
        position: "Assistant Head",
        name: "Karan Thakur",
        links: [
          {
            url: "https://instagram.com/karan._thakur_",
            icon: InstagramIcon,
          },
 
          {
            mail: "thakur.11@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: KaranThakur,
        position: "Assistant Head",
        name: "Karan Thakur",
        links: [
          {
            url: "https://instagram.com/karan._thakur_",
            icon: InstagramIcon,
          },
 
          {
            mail: "thakur.11@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: KaranThakur,
        position: "Assistant Head",
        name: "Karan Thakur",
        links: [
          {
            url: "https://instagram.com/karan._thakur_",
            icon: InstagramIcon,
          },
 
          {
            mail: "thakur.11@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
    ],
  };
  const team2 = {
    heading: "Design and Creativity",
    // subheading: "Our Team",
    cards: [
      {
        imageSrc: VandanMoonat,
        position: "Head",
        name: "Vandan Moonat",
        links: [
          {
            url: "https://instagram.com/vandan_moonat",
            icon: InstagramIcon,
          },
          {
            mail: "moonat.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Prabodh,
        position: "Assistant Head",
        name: "Prabodh Sharma",
        links: [
          {
            url: "https://instagram.com/",
            icon: InstagramIcon,
          },
          {
            mail: "m22dh009@iitj.ac.in",
            icon: EmailIcon
          }
         
        ],
      },
      {
        imageSrc: Prabodh,
        position: "Assistant Head",
        name: "Prabodh Sharma",
        links: [
          {
            url: "https://instagram.com/",
            icon: InstagramIcon,
          },
          {
            mail: "m22dh009@iitj.ac.in",
            icon: EmailIcon
          }
         
        ],
      },
      {
        imageSrc: Prabodh,
        position: "Assistant Head",
        name: "Prabodh Sharma",
        links: [
          {
            url: "https://instagram.com/",
            icon: InstagramIcon,
          },
          {
            mail: "m22dh009@iitj.ac.in",
            icon: EmailIcon
          }
         
        ],
      },
      {
        imageSrc: Prabodh,
        position: "Assistant Head",
        name: "Prabodh Sharma",
        links: [
          {
            url: "https://instagram.com/",
            icon: InstagramIcon,
          },
          {
            mail: "m22dh009@iitj.ac.in",
            icon: EmailIcon
          }
         
        ],
      },
    ],
  };
  const team3 = {
    heading: "Events and Curation",
    // subheading: "Our Team",
    cards: [
      {
        imageSrc: Shreya,
        position: "Head",
        name: "Shreya Pagaria",
        links: [
          {
            url: "https://instagram.com/shreyapagaria_",
            icon: InstagramIcon,
          },
          {
            mail: "pagaria.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Akshat,
        position: "Head",
        name: "Akshat Jain",
        links: [
          {
            url: "https://instagram.com/akshat_jainxyz",
            icon: InstagramIcon,
          },
          {
            mail: "jain.53@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: DefaultUser,
        position: "Head",
        name: "Navlika Singh",
        links: [
          {
            url: "https://instagram.com/navlikasingh",
            icon: InstagramIcon,
          },
          {
            mail: "singh.119@iitj.ac.in",
            icon: EmailIcon
          }
        ],
      },
      {
        imageSrc: Shreya,
        position: "Head",
        name: "Shreya Pagaria",
        links: [
          {
            url: "https://instagram.com/shreyapagaria_",
            icon: InstagramIcon,
          },
          {
            mail: "pagaria.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Shreya,
        position: "Assistant Head",
        name: "Shreya Pagaria",
        links: [
          {
            url: "https://instagram.com/shreyapagaria_",
            icon: InstagramIcon,
          },
          {
            mail: "pagaria.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Shreya,
        position: "Assistant Head",
        name: "Shreya Pagaria",
        links: [
          {
            url: "https://instagram.com/shreyapagaria_",
            icon: InstagramIcon,
          },
          {
            mail: "pagaria.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Shreya,
        position: "Assistant Head",
        name: "Shreya Pagaria",
        links: [
          {
            url: "https://instagram.com/shreyapagaria_",
            icon: InstagramIcon,
          },
          {
            mail: "pagaria.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Shreya,
        position: "Assistant Head",
        name: "Shreya Pagaria",
        links: [
          {
            url: "https://instagram.com/shreyapagaria_",
            icon: InstagramIcon,
          },
          {
            mail: "pagaria.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Shreya,
        position: "Assistant Head",
        name: "Shreya Pagaria",
        links: [
          {
            url: "https://instagram.com/shreyapagaria_",
            icon: InstagramIcon,
          },
          {
            mail: "pagaria.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      
    ],
    
  };
  
  const team0 = {
    heading: "Festival Chiefs",
    subheading: "Our Team",
    cards: [
      {
        imageSrc: Yawer,     
        name: "Yawer Abbas",
        position: "Head",
        links: [
          {
            url: "https://instagram.com/Yxwerabbas",
            icon: InstagramIcon,
          },
 
          {
            mail: "abbas.1@iitj.ac.in",
            icon: EmailIcon
          }
        
          
        ],
      },
      {
        imageSrc: Stuti,
        name: "Stuti Aswani",
        position: "Head",
        links: [
          {
            url: "https://instagram.com",
            icon: InstagramIcon,
          },
          {
            mail: "aswani.1@iitj.ac.in",
            icon: EmailIcon
          }
          
         
        ],
      },
      {
        imageSrc: SayanSanyal,
        name: "Sayan Sanyal",
        position: "Head",
        links: [
          {
            url: "https://instagram.com/_Xcavist_",
            icon: InstagramIcon,
          },
          {
            mail: "sanyal.3@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
    ],
  };
  const team5 = {
    heading: "PR & Marketing",
    // subheading: "Our Team",
    cards: [
      {
        imageSrc: Ayush,
        position: "Assistant Head",
        name: "Ayush Didel",
        links: [
          {
            url: "https://instagram.com/didelayush2003",
            icon: InstagramIcon,
          },
          {
            mail: "didel.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Ishita,
        position: "Head",
        name: "Ishita",
        links: [
          {
            url: "https://instagram.com/eish_97",
            icon: InstagramIcon,
          },
          {
            mail: "ishita.1@iitj.ac.in",
            icon: EmailIcon
          }
        ],
      },
      {
        imageSrc: Ayush,
        position: "Assistant Head",
        name: "Ayush Didel",
        links: [
          {
            url: "https://instagram.com/didelayush2003",
            icon: InstagramIcon,
          },
          {
            mail: "didel.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Ayush,
        position: "Assistant Head",
        name: "Ayush Didel",
        links: [
          {
            url: "https://instagram.com/didelayush2003",
            icon: InstagramIcon,
          },
          {
            mail: "didel.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Ayush,
        position: "Assistant Head",
        name: "Ayush Didel",
        links: [
          {
            url: "https://instagram.com/didelayush2003",
            icon: InstagramIcon,
          },
          {
            mail: "didel.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Ayush,
        position: "Assistant Head",
        name: "Ayush Didel",
        links: [
          {
            url: "https://instagram.com/didelayush2003",
            icon: InstagramIcon,
          },
          {
            mail: "didel.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: Ayush,
        position: "Assistant Head",
        name: "Ayush Didel",
        links: [
          {
            url: "https://instagram.com/didelayush2003",
            icon: InstagramIcon,
          },
          {
            mail: "didel.1@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      
      
    ],
    
  };
  const team6 = {
    heading: "Resources",
    // subheading: "Our Team",
    cards: [
      {
        imageSrc: Gaurav,
        position: "Head",
        name: "Gaurav Sangwan",
        links: [
          {
            url: "https://instagram.com/sangs_gaurav",
            icon: InstagramIcon,
          },
 
          {
            mail: "sangwan.2@iitj.ac.in",
            icon: EmailIcon
          }
          
        ],
      },
      {
        imageSrc: DefaultUser,
        position: "Assistant Head",
        name: "Divyanshi Singh Bora",
        links: [
          {
            url: "https://instagram.com/bora_divyanshi_",
            icon: InstagramIcon,
          },
 
          {
            mail: "bora.1@iitj.ac.in",
            icon: EmailIcon
          }
        ],
      },
      {
        imageSrc: Yash,
        position: "Assistant Head",
        name: "Yash Anand",
        links: [
          {
            url: "https://instagram.com/yash_09.05",
            icon: InstagramIcon,
          },
 
          {
            mail: "anand.7@iitj.ac.in",
            icon: EmailIcon
          }
 
        ],
      },
      
    ],
    
  };
 
 
  return (
    <AnimationRevealPage>
      <Header />
      <TeamCard
        heading={team0.heading}
        subheading={team0.subheading}
        // description={team0.description}
        cards={team0.cards}
      />
 
      <TeamCard
        heading={team4.heading}
        subheading={team4.subheading}
        // description={team8.description}
        cards={team4.cards}
      />
      
      <TeamCard
        heading={team1.heading}
        subheading={team1.subheading}
        // description={team1.description}
        cards={team1.cards}
      />
      <TeamCard
        heading={team2.heading}
        subheading={team2.subheading}
        // description={team1.description}
        cards={team2.cards}
      />
      <TeamCard
        heading={team3.heading}
        subheading={team3.subheading}
        // description={team1.description}
        cards={team3.cards}
      />
      <TeamCard
        heading={team5.heading}
        subheading={team5.subheading}
        // description={team1.description}
        cards={team5.cards}
      />
      <TeamCard
        heading={team6.heading}
        subheading={team6.subheading}
        // description={team1.description}
        cards={team6.cards}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
 
export default Team;