// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';
import Logo from './assets/Logo.png';
import img1 from './assets/images1.jpg';
import img2 from './assets/image2.jpg';
import img3 from './assets/image3.jpg';
import img4 from './assets/image4.jpg';
import img5 from './assets/image5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';

const teamMembers = [
  {
    name: 'Ayagamage M.T',
    id: 'IT21887376',
    department: 'Dept. Faculty of Computing',
    photo: img7,
  },
  {
    name: 'Nazeem A.J.M',
    id: 'IT20469900',
    department: 'Dept. Faculty of Computing',
    photo: img7,
  },
  {
    name: 'A.M Karunanayake',
    id: 'It19235448 ',
    department: 'Dept. Faculty of Computing',
    photo: img7,
  },
  {
    name: 'Sendanayaka D.C.I',
    id: 'IT21112164',
    department: 'Dept. Faculty of Computing',
    photo: img7,
  },
  {
    name: 'Ms.Suranjini Silva',
    id: 'Supervisor',
    department: 'Dept. Faculty of Computing',
    photo: img7,
  },
  {
    name: 'Diana Prince',
    id: 'Co-Supervisor',
    department: 'Dept. Faculty of Computing',
    photo: img7,
  },
];

const contacts = [
  {
    name: 'Ayagamage M.T',
    phone: '+123456789',
    email: 'it21887376@my.sliit.lk',
  },
  {
    name: 'Nazeem A.J.M',
    phone: '+987654321',
    email: 'it20469900@my.sliit.lk',
  },
  {
    name: 'A.M Karunanayake',
    phone: '+555555555',
    email: 'it19235448@my.sliit.lk',
  },
  {
    name: 'Sendanayaka D.C.I',
    phone: '+444444444',
    email: 'it21112164@my.sliit.lk',
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <div className="hero">
            <img src={Logo} alt="Logo" className="logo" />
            <h1>Welcome to ZooTech.!</h1>
            <p>Enhancing Visitor Experiences and Supporting Conservation Efforts..</p>
          </div>
          <Section
            title="Introduction"
            content="ZooTech is an innovative mobile app designed to enhance visitor experiences and support conservation efforts in zoos through advanced technologies. It features an Animal Recognition System that uses machine learning to identify animals instantly, providing users with detailed species information. Additionally, the app includes an Interactive Map with Augmented Reality navigation, which enriches exploration by guiding visitors through exhibits and delivering real-time information for an immersive experience. For zoo staff, ZooTech offers an Animal Health Monitoring System that allows for continuous tracking of health metrics, facilitating timely care and welfare decisions, as well as a Habitat Monitoring System that ensures optimal environmental conditions for animal wellbeing and conservation. By integrating these features, ZooTech revolutionizes zoo management and visitor engagement, offering educational benefits for visitors while equipping staff with effective tools for proactive conservation."
            smallImage={img1}
            className="white-section"
          />
          <Section
            title="Research Gap"
            content="Current zoo infrastructure relies on static signage, failing to meet modern visitors' expectations for interactive experiences. While some digital aids exist, they often lack real-time animal recognition and immersive navigation, limiting engagement. Additionally, zoo staff face inefficiencies due to fragmented tools for monitoring animal health and habitats. The ZooTech app addresses these gaps by providing a unified platform that integrates visitor engagement features like animal recognition and AR navigation with staff tools for health monitoring and habitat management, enhancing both visitor experience and conservation efforts."
            smallImage={img2}
            className="black-section"
          />
          <Section
            title="Research Problem"
            content="Zoos encounter challenges in providing engaging visitor experiences while managing animal welfare and habitat conditions. Traditional methods, like static information boards and paper maps, lack interactivity, making it hard to engage tech-savvy visitors. Furthermore, staff often use fragmented tools for monitoring animal health and habitats, which do not provide real-time data or a centralized view. This research aims to develop the ZooTech app, an integrated mobile solution designed to enhance visitor engagement and support conservation efforts. By combining real-time animal recognition and AR navigation for visitors with comprehensive health monitoring and habitat tracking for staff, ZooTech leverages machine learning and IoT to create an immersive experience while ensuring high standards of animal welfare."
            smallImage={img4}
            className="white-section"
          />
          <Section
            title="Main Objective"
            content="The ZooTech mobile application aims to enhance visitor engagement and support conservation efforts in zoos through machine learning and IoT technology. It offers an integrated platform that improves the visitor experience with an interactive animal recognition system, allowing users to identify species and subspecies using smartphone cameras or image uploads. Additionally, ZooTech uses augmented reality (AR) for dynamic navigation, providing educational insights about exhibits."
            SubContent="For zoo staff, the app enhances operational efficiency by incorporating IoT devices for real-time health and habitat monitoring. This proactive approach ensures timely animal care and optimal living conditions, supporting effective conservation strategies. Overall, ZooTech bridges the gap between visitor engagement and zoo operations, enriching the educational experience and advancing conservation efforts."
            smallImage={img3}
            className="black-section"
          />
          <Section
            title="Sub Objective"
            listItem1="Animal Recognition System ( component 1 ): To accurately identify species and subspecies using machine learning, providing visitors with real-time recognition through a smartphone camera or an image-upload feature."
            listItem2="Animal Health Monitoring System ( component 2 ): To monitor animal health metrics using IoT devices, including temperature sensors, to gather data for proactive care and well-being."
            listItem3="Habitat Monitoring System ( component 3 ): To maintain optimal habitat conditions using IoT devices such as motion-sensor cameras to detect activity and environmental factors, supporting conservation and animal welfare."
            listItem4="Interactive and Informative Map with AR Navigation ( component 4 ): To design an AR-based interactive map that allows visitors to easily navigate the zoo and access informative content about each exhibit."
            className="white-section"
          />
          <Section
            title="Methodology"
            content="The development of the ZooTech app follows a structured approach starting with Requirements Analysis to gather insights from zoo visitors and staff, ensuring the app addresses user needs. Next, the System Design phase outlines the architecture for four main components: animal recognition, health monitoring, habitat monitoring, and an AR map, along with UI mockups and database planning. Technology Selection involves choosing machine learning libraries, IoT platforms, and AR tools suitable for each feature. During Implementation, agile methods allow iterative progress and user feedback, while Testing and Evaluation with zoo visitors and staff help refine usability and effectiveness. Finally, the app is deployed in a selected zoo for pilot testing, gathering performance data to optimize user satisfaction."
            smallImage={img5}
            className="black-section"
          />
          <Section
            title="Results"
            content="The pilot deployment of the ZooTech app produced promising outcomes. User Engagement saw a boost, with over 75% of visitors using the animal recognition feature, enhancing their educational experience. Health and Habitat Monitoring improved as IoT systems enabled zoo staff to access real-time data and respond swiftly to any alerts, such as unusual temperature changes. The AR-based Map was appreciated by 80% of users for aiding navigation and enriching their experience, leading to increased interest in conservation. Additionally, the app’s Data Collection capabilities provided insights into animal health and visitor behaviors to support future conservation and educational efforts."
            smallImage={img6}
            className="white-section"
          />
          <Section
            title="Conclusion"
            content="The ZooTech app showcases the transformative impact of integrating advanced technology into zoo environments, enhancing both conservation efforts and visitor engagement. Through features like interactive animal recognition, an AR-powered map, and streamlined health and habitat monitoring, ZooTech addresses critical needs in visitor experience and zoo operations. Positive user feedback reflects the app’s success in fostering wildlife appreciation and supporting conservation awareness. With staff empowered by real-time data to uphold high standards of animal welfare, ZooTech significantly enriches educational value and operational efficiency. Future enhancements will aim to broaden the app’s role in conservation and visitor engagement, creating a more sustainable and interactive zoo experience."
            smallImage={img7}
            className="black-section"
          />
          <Section
            title="About Us"
            content="ZooTech demonstrated improved visitor engagement and zoo staff operations through the use of technology. Our team is dedicated to enhancing the zoo experience for everyone."
            teamMembers={teamMembers} // Pass team members
            className="white-section"
          />
          <Section
            title="Contact"
            content="For inquiries, please contact us."
            contacts={contacts} // Pass contacts
            className="black-section"
          />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
