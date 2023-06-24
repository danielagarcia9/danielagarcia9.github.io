import personalwebMain from "../images/projects/personalwebsite/main.jpg";
import personalweb1 from "../images/projects/personalwebsite/1.jpg";

import shakeitMain from "../images/projects/shakeit/main.jpg";
import shakeit1 from "../images/projects/shakeit/1.jpg";
import shakeit2 from "../images/projects/shakeit/2.jpg";
import shakeit3 from "../images/projects/shakeit/3.jpg";
import shakeit4 from "../images/projects/shakeit/4.jpg";
import shakeit5 from "../images/projects/shakeit/5.jpg";
import shakeit6 from "../images/projects/shakeit/6.jpg";
import shakeit7 from "../images/projects/shakeit/7.jpg";

import sdohMain from "../images/projects/sdoh/main.jpg";

import myucMain from "../images/projects/myuc/main.jpg";
import myuc1 from "../images/projects/myuc/1.jpg";
import myuc2 from "../images/projects/myuc/2.jpg";
import myuc3 from "../images/projects/myuc/3.jpg";
import myuc4 from "../images/projects/myuc/4.jpg";
import myuc5 from "../images/projects/myuc/5.jpg";
import myuc6 from "../images/projects/myuc/6.jpg";
import myuc7 from "../images/projects/myuc/7.jpg";
import myuc8 from "../images/projects/myuc/8.jpg";
import myuc9 from "../images/projects/myuc/9.jpg";
import myuc10 from "../images/projects/myuc/10.jpg";
import myuc11 from "../images/projects/myuc/11.jpg";
import myuc12 from "../images/projects/myuc/12.jpg";
import myuc13 from "../images/projects/myuc/13.jpg";
import myuc14 from "../images/projects/myuc/14.jpg";
import myuc15 from "../images/projects/myuc/15.jpg";
import myuc16 from "../images/projects/myuc/16.jpg";

export const DESCRIPTION = "Discover the projects that showcase my problem-solving skills and expertise. Here, I present a collection of challenges I've tackled and the solutions I've crafted. From building intuitive user interfaces to developing specific programs, these projects demonstrate my ability to overcome obstacles and deliver exceptional results. You can utilize the filters to narrow down projects based on the specific programming language or tool employed.";

export const PROJECTS = [
    {
      id: 1,
      title: "My personal website",
      tags: ["Git/GitHub", "HTML/CSS", "JavaScript", "Programming", "React"],
      preview: "I have personally designed and programmed this website from scratch, utilizing React, as a platform to demonstrate my proficiency in UX/UI design and web development.",
      description: [
        "Welcome to my personal website, a project born out of my interest in web development. From the very beginning, I was driven by the desire to create a platform that authentically represents who I am and demonstrates my proficiency in UX/UI design and web development, all while avoiding the use of pre-made templates. I took it upon myself to meticulously design and program this website from scratch, harnessing the power of React. Every aspect of this website has been carefully crafted to reflect my personal touch and unwavering commitment to detail. ",
      ],
      link: "https://github.com/dgarciaromani/dgarciaromani.github.io",
      image: personalwebMain,
      photos: [
        {
          label: 'Main',
          image: personalwebMain,
        },
        {
          label: 'Mobile',
          image: personalweb1,
        },
      ],
    },
    {
      id: 2,
      title: "Social Health Insights",
      tags: ["Git/GitHub", "HTML/CSS", "JavaScript", "MySQL", "Nodejs", "Programming", "React"],
      preview: "This collaborative project focused on synthesize Social Determinants of Health data and health outcomes into an easily accessible website, showing disparities in opportunities across different areas of the United States.",
      description: [
        "Social Determinants of Health encompass the conditions under which individuals are born, grow, live, work, and age, and the impact of these conditions on their overall health and well-being. These determinants include various factors such as income, education, employment, housing, and social support. Extensive research has consistently shown that social determinants of health significantly influence individuals' health outcomes, with those experiencing disadvantage in these areas being at a higher risk of poor health and chronic diseases. Understanding and addressing social determinants of health is crucial for improving population health overall and achieving health equity.",
        "This project was collaboratively developed with colleagues from my master's degree program, aiming to synthesize this data into an easily accessible website. Our objective was to demonstrate the disparities in opportunities across different areas of the United States.",
        "For this project, we selected two primary datasets: one focusing on Social Determinants of Health and the other on health outcomes. Both datasets were collected at the census tract level, which represents statistical subdivisions of a county and can be updated by local participants before each decennial census. Census tracts offer a smaller level of granularity compared to zip codes, enabling us to highlight significant differences even within relatively close geographical areas. We joined the data based on the census tract to establish correlations between Social Determinants of Health and health outcomes.",
        "To build the project, we utilized MySQL as our SQL database. The front end was developed using React, while the back end was constructed with Nodejs. We incorporated the MUI JavaScript library, as well as Leaflet and Leaflet-react, which allowed us to visualize GeoJSON data on a map. These tools and technologies formed the foundation of our project, enabling us to present the information effectively and create meaningful visualizations.",
        "I'm currently working on the base code to be able to showcase it in my portfolio. Please check back at a later time to see the latest changes and updates.",
      ],
      link: "",
      image: sdohMain,
      photos: [
        {
          label: 'Main',
          image: sdohMain,
        },
      ],
    },
    {
      id: 3,
      title: "Data Analyzer Program",
      tags: ["Programming", "Java"],
      preview: "As part of my coursework, I designed and developed a Java application that could identify flu-related tweets, determine their origin, and analyze the data using specific criteria. This project provided me with valuable experience in software design, utilizing a modular N-tier architecture and design patterns, data analysis, and working with real-world datasets.",
      description: [
        "As part of my Data Structures and Software Design course, I had the opportunity to work on a project that involved designing and developing a Java application for analyzing Twitter data related to the spread of infectious diseases, specifically the flu.",
        "The objective was to create an application that could analyze a collection of tweets, identify flu-related tweets based on specific criteria, and determine the States in which these tweets originated. The input data consisted of two formats: tab-separated text files (CSV) and JSON files. The program needed to automatically select the appropriate parser based on the file type. Additionally, a file containing the latitude and longitude of each State was provided to help determine the State of origin for each tweet.",
        "I designed a modular program by using a 3-tier architecture, splitting up the program into three subsystems: the data tier, which handles functionality related to storing and retrieving data; the logic tier, where the necessary calculations are performed; and the user interface tier, which interacts with the user. Additionally, I created different utility classes to bundle information to be passed between different tiers and a main class to create objects in the other tiers and establish their relationships, such as passing one object to the constructor of another and initiallize te application through the user interface.",
        "Overall, this project provided me valuable experience in software design, data analysis, and working with real-world data sets.",
      ],
      link: "",
      image: "https://fakeimg.pl/200x100?text=Image+not+available",
      photos: [],
    },
    {
      id: 4,
      title: "Shake it!",
      tags: ["HTML/CSS", "JavaScript", "Nodejs", "Programming", "React"],
      preview: "This project showcases my web development skills and passion for mixology. It's a dedicated website featuring a variety of cocktail recipes, ingredients, and food pairings.",
      description: [
        "This application serves as the culmination of my efforts in CS50's Introduction to Computer Science course, where I demonstrate my expertise in web development while showcasing my passion for mixology.",
        "This is a dedicated website that revolves around cocktails and drinks. Here, you can explore a wide variety of drink recipes and the necessary ingredients to make them. Alongside an extensive collection of cocktail recipes, I provide food pairing ideas to enhance the drinking experience.",
        "The development of this website involved the utilization of React for the frontend and Nodejs for the backend. To populate the content, I incorporated two different APIs: The Cocktail DB and The Meal DB, which offer free access at their basic level.",
      ],
      link: "https://github.com/dgarciaromani/Shake-it",
      image: shakeitMain,
      photos: [
        {
          label: 'Main',
          image: shakeitMain,
        },
        {
          label: 'Cocktail of the day page',
          image: shakeit1,
        }, 
        {
          label: 'Cocktail of the day page - Recipe',
          image: shakeit2,
        }, 
        {
          label: 'Find cocktail by name page',
          image: shakeit3,
        }, 
        {
          label: 'Find cocktail by name page - Details',
          image: shakeit4,
        }, 
        {
          label: 'Find cocktail by ingredient page',
          image: shakeit5,
        }, 
        {
          label: 'Find cocktail by ingredient page - Results',
          image: shakeit6,
        }, 
        {
          label: 'Pair it with food page',
          image: shakeit7,
        }
      ],
    },
    {
      id: 5,
      title: "Battleship Game",
      tags: ["Programming", "Java"],
      preview: "As part of my master's coursework, I created a Java version of Battleship. Players face off against the computer, aiming to sink ten randomly placed ships on a 10x10 ocean. This project helped me enhance my skills in object-oriented programming.",
      description: [
        'As part of my Introduction to Software Development course, I had to create a Java version of the classic game Battleship using Eclipse. In this version, the player is up against the computer, which randomly places ten ships on a 10x10 "ocean." The goal is to sink all the ships using as few shots as possible. The game follows familiar rules, starting with a grid of dots representing the ocean and providing feedback on each shot, whether the player hits or misses. Different types of ships are included, such as battleships, cruisers, destroyers, and submarines, each with its own length and characteristics.',
        "The program utilizes the console to display instructions, the game board, and prompts the user for input (row and column to shoot). Once submitted, the computer provides feedback (hit or miss). When a ship is hit and sunk, the program provides information about the type of ship it was. After each shot, the computer redisplays the ocean with updated information.",
        "To build this project, I divided it into several classes, including a main class for controlling the gameplay (creating instances), a class called Ocean, and an abstract class called Ship, with subclasses representing specific ship types. Additionally, I implemented methods for ship placement, shooting, sinking, and displaying the ocean. I also created JUnit test classes to ensure that the Ship and Ocean classes function correctly.",
        "Through this project, I gained valuable experience in object-oriented programming, including inheritance and overriding, access modifiers, abstract classes, 2-dimensional array manipulation, and game logic implementation.",
      ],
      link: "",
      image: "https://fakeimg.pl/200x100?text=Image+not+available",
      photos: [],
    },
    {
      id: 6,
      title: "Tower Blaster Game",
      tags: ["Programming", "Python"],
      preview: "As part of my master's coursework, I implemented a Python version of Tower Blaster,  a game where bricks are rearranged to form an increasing sequence. This project enhanced my Python skills and game development expertise.",
      description: [
        "As part of my Introduction to Software Development course, I implemented a Python version of the game Tower Blaster using PyCharm. Tower Blaster is a game where the player rearranges a group of bricks to create an increasing sequence. In this project, my task was to develop the game for a user versus computer scenario.",
        "The game starts with a main pile of 60 bricks, numbered from 1 to 60, represented as a list. The objective is to arrange 10 bricks in ascending order in your own tower. At the beginning of the game, both the user and the computer are dealt 10 bricks from the main pile, following the convention of placing the bricks on top of each other. During the game, players take turns choosing a brick either from the discard pile (which is face up) or from the main pile (which is face down). The chosen brick is then placed in the player's tower, replacing an existing brick. If a brick is taken from the main pile and rejected, it is placed in the discard pile without affecting the player's tower.",
        "Another part of the project was to design the computer's strategy. In my case, I programmed the computer to take the top brick from the discard pile and place it in a specific section of the tower. The goal was to develop a strategy that ensures the computer doesn't always lose to a human player.",
        "To implement this project, I utilized different functions to create the main and discard piles, shuffle the bricks at the beginning of the game, check the availability of bricks in the main pile, and handle shuffling if necessary. I also implemented functions to determine if stability has been achieved in a tower, remove and return the top brick from a given pile, deal initial bricks to the user and the computer, add a brick to the discard pile, find and replace a brick in a tower, and implement the computer's decision-making process.",
        "Completing this project provided me with a deeper understanding of working with lists and tuples in Python, as well as enhanced my problem-solving skills and logical thinking in game development scenarios.",
      ],
      link: "",
      image: "https://fakeimg.pl/200x100?text=Image+not+available",
      photos: [],
    },
    {
      id: 7,
      title: "My UC",
      tags: ["Figma", "UX/UI Design"],
      preview: "This project showcases my UX/UI skills applied to a tangible problem space. The app I designed is specifically tailored to address the everyday questions and concerns of university students by providing them with comprehensive information.",
      description: [
        "As a student who personally experienced the challenges of finding information quickly and effectively at my university, I felt compelled to address these issues for future students. It was clear that many of us struggled to navigate through various webpages, social networks, and other resources just to access the information we needed. The lack of a centralized platform that could accommodate our mobile needs was a major pain point. That's why I embarked on the development of the 'My UC' app as my final project for the User Experience Design Certificate Course I did at Brainstation.",
        "This app aims to provide a solution by offering a user-friendly interface where students can easily access their class schedules, obtain information about their classes and fellow students, navigate campus using maps and directions, utilize library services, stay informed about events and news, and find information about safety and emergencies. Through extensive research, including user interviews and surveys, I gained valuable insights into the needs and preferences of university students. I used this information to create user personas, design the app's information architecture, and develop user flows and sketches. Rigorous testing and feedback allowed me to refine the wireframes and design a polished user interface using Figma.",
      ],
      link: "https://www.figma.com/proto/Mv8AHwTpqufKteyIiDmAe0/Project-%231?page-id=0%3A1&type=design&node-id=4-434&viewport=339%2C489%2C0.13&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1",
      image: myucMain,
      photos: [
        {
          label: 'Main',
          image: myucMain,
        },
        {
          label: 'Figma preview',
          image: myuc16,
        },
        {
          label: 'User Persona 1',
          image: myuc1,
        },
        {
          label: 'User Persona 2',
          image: myuc2,
        },
        {
          label: 'Card sorting',
          image: myuc3,
        },
        {
          label: 'Information architecture',
          image: myuc4,
        },
        {
          label: 'User flow 1',
          image: myuc5,
        },
        {
          label: 'User flow 2',
          image: myuc6,
        },
        {
          label: 'Sketches task 1.1',
          image: myuc7,
        },
        {
          label: 'Sketches task 1.2',
          image: myuc8,
        },
        {
          label: 'Sketches task 2.1',
          image: myuc9,
        },
        {
          label: 'Sketches task 2.2',
          image: myuc10,
        },
        {
          label: 'Wireframes task 1.1',
          image: myuc11,
        },
        {
          label: 'Wireframes task 1.2',
          image: myuc12,
        },
        {
          label: 'Wireframes task 2.1',
          image: myuc13,
        },
        {
          label: 'Wireframes task 2.2',
          image: myuc14,
        },
        {
          label: 'UI design',
          image: myuc15,
        },
        
      ],
      prototype: '<iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMv8AHwTpqufKteyIiDmAe0%2FProject-%25231%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D4-434%26viewport%3D339%252C489%252C0.13%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26show-proto-sidebar%3D1" allowfullscreen />',
    },
];

export const TAGS = PROJECTS.reduce((tags, project) => {
  project.tags.forEach((tag) => {
    if (!Object.values(tags).includes(tag)) {
      const nextKey = Object.keys(tags).length + 1;
      tags[nextKey] = tag;
    }
  });
  return tags;
}, {});