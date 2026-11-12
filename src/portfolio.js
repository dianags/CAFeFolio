/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/CoffeeLoveAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "CAFe project",
  title: "Welcome to the CAFe project!",
  subTitle: emoji([
    "CAFe (Criteria-based Assessment of Feedback quality) is a joint ongoing research project between the University of Cambridge and the University of Exeter investigating what makes ",
    <em key="1">good</em>,
    " feedback.",
    <br key="2" />,
    <br key="3" />,
    "We are currently recruiting focus group participants!"
  ]),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section --> About the project

const skillsSection = {
  title: "What is CAFe",
  subTitle: "GROUNDING FEEDBACK QUALITY IN AI SYSTEMS THROUGH RIGOROUS, HUMAN-CENTERED EVALUATION",
  skills: 
    [emoji([
      "We are inviting participants to take part in an upcoming focus group study to explore what makes ",
      <em key="1">good</em>,
      " feedback. We want to understand what is universal, and what changes depending on the student, the task or the context. Your insights will help us build a rubric for evaluating feedback quality, including feedback written by AI tools."
    ]),
    emoji([
      "💡 ",
      <strong key="1">Why take part?</strong>,
      " This is a chance to reflect on your own feedback practice, compare approaches with teachers from other subjects and schools, and see how feedback research is being applied to AI in education. You will also receive a certificate of participation, which you can use as evidence of professional development."
    ]),
    emoji([
      "⚡ ",
      <strong key="2">What is involved:</strong>,
      " A single 3-hour online session built around three activities."
    ]),
    emoji([
      "💰 ",
      <strong key="3">Compensation:</strong>,
      " To thank you for your time and expertise, you will receive £45 (£15/hour) after the session. You can choose an Amazon voucher or a bank transfer."
    ]),
    emoji([
      "📅 ",
      <strong key="3">When and Where:</strong>,
      " Online, on Microsoft Teams, on [date(s) and time(s) TBC]. We ask your availabilities in the sign-up form and will do our best to accommodate you."
    ]),
    emoji([
      "👥 ",
      <strong key="3">Who Can Take Part?:</strong>,
      " Current or retired teachers working in the UK, of any subject and any age group."
    ])
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section --> Focus Group details

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Activity 1",
      logo: require("./assets/images/act1_focus-group.png"),
      subHeader: "How do YOU do feedback",
      desc: "You will either write feedback on real student essays or review comments that teachers wrote on real essays. A group discussion follows.",
    },
    {
      schoolName: "Activity 2",
      logo: require("./assets/images/act2_noticeboard.png"),
      subHeader: "Post-it board",
      desc: "In small groups, you will sort your ideas from the first activity into the parts of feedback practice that are shared across teachers and the parts that vary.",
    },
    {
      schoolName: "Activity 3",
      logo: require("./assets/images/act3_clipboard.png"),
      subHeader: "Build-a-rubric",
      desc: "Your group will use these ideas to draft a rubric for evaluating feedback quality, with our guidance at each step.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section --> Team profiles

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Gabrielle Gaudeau",
      company: "Co-Lead",
      companylogo: require("./assets/images/gjg34_pic.jpeg"),
      date: "",
      desc: "PhD Student @ Cambridge"
    },
    {
      role: "Diana Galván Sosa",
      company: "Co-lead",
      companylogo: require("./assets/images/cambridge_handball_Pic.png"),
      date: "",
      desc: "Research Associate @ Cambridge"
    },
    {
      role: "Lily Goulder",
      company: "Researcher",
      companylogo: require("./assets/images/lg684_pic.jpeg"),
      date: "",
      desc: "Research Assistant @ Cambridge"
    },
    {
      role: "Aoife O'Driscoll",
      company: "Researcher",
      companylogo: require("./assets/images/ao514_pic.jpeg"),
      date: "",
      desc: "Research Assistant @ Cambridge"
    },
    {
      role: "Letícia Guedes Guimarães",
      company: "Researcher",
      companylogo: require("./assets/images/leticia_pic.jpeg"),
      date: "",
      desc: "PhD Student @ Exeter",
    },
    {
      role: "Aline Villavicencio",
      company: "Advisor",
      companylogo: require("./assets/images/a.villavicencio_pic.jpeg"),
      date: "",
      desc: "Professor @ Exeter"
    },
    {
      role: "Paula Buttery",
      company: "Advisor",
      companylogo: require("./assets/images/pjb48_pic.jpeg"),
      date: "",
      desc: "Professor @ Cambridge"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section --> Research

const blogSection = {
  title: "Research",
  subtitle:
    "Relevant research (including ours!)",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://aclanthology.org/2025.acl-long.1160/",
      title: "Rubrik’s Cube: Testing a New Rubric for Evaluating Explanations on the CUBE dataset (Galvan-Sosa, Gaudeau, et al., 2025)",
      description:
        "Introduces the educationally inspired evaluation framework for AI explanation quality that CAFe adapts and extends to assess feedback."
    },
    {
      url: "https://journals.sagepub.com/doi/full/10.3102/003465430298487",
      title: "The Power of Feedback (Hattie and Timperley, 2007)",
      description:
        "Establishes the foundational model of effective feedback for learning, serving as the theoretical inspiration behind CAFe."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Us 💬"),
  subtitle:
    "Learn more about the project",
  email_address: "{gjg34,dg693}(at)cam.ac.uk"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
