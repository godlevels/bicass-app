import unsplash from "../assets/unsp.png"
import notion from "../assets/noti.png"
import intercom from "../assets/int.png"
import descript from "../assets/des.png"
import grammarly from "../assets/gram.png"
import analyIcon  from "../assets/analy.png"
import engIcon  from "../assets/eng.png"
import pubIcon  from "../assets/pub.png"
import collabCard  from "../assets/collab.png"
import cloudCard  from "../assets/cloud.png"
import dailyCard  from "../assets/daily.png"
export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "products",
      title: "Products",
    },
    {
      id: "faq",
      title: "FAQ",
    },
    {
      id: "blog",
      title: "Blog",
    },
    {
      id: "about us",
      title: "About Us",
    },
  ];
  
  export const navBtns = [
    {
      id: "login",
      title: "Login",
      style: "text-[16px] text-textPri font-medium"
    },
    {
      id: "sign up",
      title: "Sign Up",
      style: "text-white text-[16px] font-medium h-[40px] w-[80px] rounded-lg bg-green px-2 py-2"
    },
  ]

export const heroData = {
    heading: "We’re here to Increase your Productivity",
    subtext: "Let’s make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work everyday.",
    buttons: [
      { text: "Try free trial"},
      { text: "View Demo"}
    ],
  };

  export const collabsData = [
    {
      id: "collab-1",
      logo: unsplash,
    },
    {
      id: "collab-2",
      logo: notion,
    },
    {
      id: "collab-3",
      logo: intercom,
    },
    {
      id: "collab-4",
      logo: descript,
    },
    {
        id: "collab-5",
        logo: grammarly,
      },
  ];

 export const supportData = {
    title: "How we support our partner all over the world",
    description: "SaaS become a common delivery model for many business applications, including office software, messaging software, payroll processing software, DBMS software, management software",
    ratings: [
      {
        stars: 4.9,
        rating: "4.9",
        rate: "/ 5 rating",
        company: "Databricks"
      },
      {
        stars: 4.8,
        rating: "4.8",
        rate: "/ 5 rating",
        company: "Chainalysis"
      }
    ],
    features: [
      {
        icon: pubIcon,
        title: "Publishing",
        description: "Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand"
      },
      {
        icon: analyIcon,
        title: "Analytics",
        description: "Analyze your performance and create gorgeous report"
      },
      {
        icon: engIcon,
        title: "Engagement",
        description: "Quickly navigate you and engage with your audience"
      }
    ]
  };
  
export const featuresData = [
    {
      title: "Collaboration Teams",
      description: "Here you can handle projects together with team virtually",
      image: collabCard
    },
    {
      title: "Cloud Storage",
      description: "No need to worry about storage because we provide storage up to 2 TB",
      image: cloudCard
    },
    {
      title: "Daily Analytics",
      description: "We always provide useful information to make it easier for you every day",
      image: dailyCard
    }
  ];