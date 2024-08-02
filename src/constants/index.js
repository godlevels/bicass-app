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

export const benefitsData = [
    "Free Consulting With Expert Saving Money",
    "Online Banking",
    "Investment Report Every Month",
    "Saving Money For The Future",
    "Online Transaction"
];

export const pricingData = {
    monthly: [
      {
        title: "Free",
        description: "Have a go and test your superpowers",
        price: "$0",
        features: [
          "2 Users",
          "2 Files",
          "Public Share & Comments",
          "Chat Support",
          "New income apps"
        ],
        buttonText: "Signup for free",
        buttonClass: "bg-white text-green-500"
      },
      {
        title: "Pro",
        description: "Experiment the power of infinite possibilities",
        price: "$8",
        features: [
          "4 Users",
          "All apps",
          "Unlimited editable exports",
          "Folders and collaboration",
          "All incoming apps"
        ],
        bgStyle: "w-[374px] h-[583px] top-[3819px] left-[544px] bg-green md:w-1/3",
        textStyle: "text-[#fff]",
        buttonText: "Go to pro",
        buttonClass: "bg-green-500 text-white"
      },
      {
        title: "Business",
        description: "Unveil new superpowers and join the Design League",
        price: "$16",
        features: [
          "All the features of pro plan",
          "Account success Manager",
          "Single Sign-On (SSO)",
          "Co-conception program",
          "Collaboration - Soon"
        ],
        buttonText: "Goto Business",
        buttonClass: "bg-white text-green-500"
      }
    ],
    yearly: [
      {
        title: "Free",
        description: "Have a go and test your superpowers",
        price: "$0",
        features: [
          "2 Users",
          "2 Files",
          "Public Share & Comments",
          "Chat Support",
          "New income apps"
        ],
        buttonText: "Signup for free",
        buttonClass: "bg-white text-green-500"
      },
      {
        title: "Pro",
        description: "Experiment the power of infinite possibilities",
        price: "$80",
        save: "Save $50 a year",
        features: [
          "4 Users",
          "All apps",
          "Unlimited editable exports",
          "Folders and collaboration",
          "All incoming apps"
        ],
        buttonText: "Go to pro",
        buttonClass: "bg-green-500 text-white"
      },
      {
        title: "Business",
        description: "Unveil new superpowers and join the Design League",
        price: "$160",
        features: [
          "All the features of pro plan",
          "Account success Manager",
          "Single Sign-On (SSO)",
          "Co-conception program",
          "Collaboration - Soon"
        ],
        buttonText: "Goto Business",
        buttonClass: "bg-white text-green-500"
      }
    ]
  };

export const testimonialData = {
    title: "People are Saying About DoWhith",
    description: "Everything you need to accept to payment and grow your money of manage anywhere on planet",
    testimonials: [
      {
        quote: "I am very helped by this E-wallet application, my days are very easy to use this application and its very helpful in my life, even I can pay a short time 😍",
        author: "Aria Zinarino",
        avatar: notion
      },
      {
        quote: "This app has completely changed the way I handle my finances. It's so easy and convenient!",
        author: "John Doe",
        avatar: notion
      },
      {
        quote: "A fantastic tool for managing money on the go. I love the features and the interface.",
        author: "Jane Smith",
        avatar: notion
      },
      {
        quote: "Highly recommend this app to anyone looking for an easy way to manage their finances.",
        author: "Michael Brown",
        avatar: notion
      },
    ]
  };