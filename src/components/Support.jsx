import { motion } from "framer-motion";
import { supportData } from "../constants";

const Support = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4 lg:py-4 md:py-4 sm:py-7 py-7 sticky top-0 font-[inter] bg-supBg"
    >
      <div className="flex flex-col lg:flex-row lg:w-[90rem] gap-x-10">
        <motion.div
          className="lg:w-[40.2rem] w-full mb-8 lg:mb-0"
          variants={itemVariants}
        >
          <div className="text-left mb-8 mt-8">
            <motion.h2
              className="text-[2rem] lg:text-[3.1rem] text-left text-textSec font-semibold leading-tight lg:leading-[3.8rem]"
              variants={itemVariants}
            >
              {supportData.title}
            </motion.h2>
            <motion.p
              className="text-[1rem] text-left text-textPri font-medium leading-relaxed lg:leading-[1.88rem] my-8"
              variants={itemVariants}
            >
              {supportData.description}
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col gap-x-16 md:flex-row items-center"
            variants={containerVariants}
          >
            {supportData.ratings.map((rating, index) => (
              <motion.div key={index} className="mb-4 md:mb-0" variants={itemVariants}>
                <div className="text-yellow-500 text-xl mb-2">
                  {"★".repeat(Math.floor(rating.stars))}{"☆".repeat(5 - Math.floor(rating.stars))}
                </div>
                <p className="text-[1.13rem] text-textSec text-left font-bold leading-[1.36rem]">
                  {rating.rating}{" "}
                  <span className="text-[1.13rem] text-textSec text-left font-normal leading-[1.36rem]">
                    {rating.rate}
                  </span>
                </p>
                <p className="text-textPri text-[1.13rem] text-left font-bold leading-[1.36rem] my-3">
                  {rating.company}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:w-[509px] w-full h-auto flex flex-col gap-y-7 mt-5"
          variants={containerVariants}
        >
          {supportData.features.map((feature, index) => (
            <motion.div
              key={index}
              className="md:mb-0 md:mr-4 flex gap-x-4"
              variants={itemVariants}
            >
              <img
                src={feature.icon}
                alt=""
                className="w-[60px] h-[60px] flex items-center"
              />
              <div>
                <h3 className="text-[1.5rem] lg:text-[1.75rem] text-textSec text-left font-bold mb-2 leading-tight lg:leading-[2.12rem]">
                  {feature.title}
                </h3>
                <p className="text-textPri text-[1rem] lg:text-[1.13rem] font-medium leading-relaxed lg:leading-[1.90rem]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Support;
