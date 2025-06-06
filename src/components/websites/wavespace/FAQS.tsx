"use client";
import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import ceoImage from "/public/websites/wavespace/faqs/ceoImage.webp";
import whatsAppIcon from "/public/websites/wavespace/faqs/whatsAppIcon.webp";
import blackRightTopArrow from "/public/websites/wavespace/blackRightTopArrow.webp";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type Question = {
  question: string;
  answer: string[];
};

const questions: Question[] = [
  {
    question: "What are your focus areas as a UI/UX design agency?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
  {
    question: "Why is UI/UX design important for your business growth?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
  {
    question:
      "My website isn't generating enough leads. How can your design help?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
  {
    question: "What separates Wavespace from other top UI/UX design agencies?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
  {
    question:
      "How could you help us redesign our app, website, or enterprise/B2B software?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
  {
    question:
      "Do you work with startups or only with B2B/enterprise companies?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
  {
    question: "Can a redesign boost more traffic and enhance user experience?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
  {
    question: "How can your UI UX design agency help my startup?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
  {
    question: "Do you offer design services in your agency?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
  {
    question:
      "What digital design tools and technologies do you use for UI UX design?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
  {
    question: "How long does the entire design process take?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
  {
    question: "How much do you charge for design services?",
    answer: [
      "Back in 2021, Wavespace started with one simple goal: to create great user experiences that leave a mark. Over the years, we've grown from a small team to a trusted UI UX design agency for startups, SaaS brands, and forward-thinking businesses around the world.",

      "Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new tech like AI and Web3, building easy-to-use answers for tricky problems. Whether it's a mobile app for a startup or a SaaS tool built to grow, we make sure every screen is both good-looking and easy to use.",

      "At Wavespace, we take time to know your brand and your users. From planning to testing, we tweak every part to make smooth and fun user paths. Our skills include UI UX design, web building, branding, and more, but we love turning ideas into designs that work.",

      "What makes us a top UI UX agency is our love for fresh ideas and teamwork. We don't just make designs; we work with you to bring your idea to life. Each project is a chance to build something amazing—and we can't wait to do it for you.",
    ],
  },
];

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Container className="py-24 max-lg:py-8">
        <h1
          className={`text-black text-[50px] max-lg:text-4xl max-md:text-3xl font-extrabold lg:leading-16`}
        >
          Frequently asked
          <br />
          questions
        </h1>
        <div className="flex items-start justify-between mt-16 max-lg:mt-8">
          <section className="lg:basis-5/6 max-lg:w-full">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index === questions.length - 1
                    ? ""
                    : "border-b border-[#f0f0f0]"
                }`}
              >
                <div
                  onClick={() => toggleQuestion(index)}
                  className="flex justify-between items-center py-7 max-md:py-4 pr-3 cursor-pointer"
                >
                  <p className="text-lg max-md:text-sm font-semibold">
                    {question.question}
                  </p>
                  <motion.div
                    className="w-[11px]"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={blackRightTopArrow}
                      alt="blackRightTopArrow"
                      className="w-[11px] mr-5"
                    />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden w-11/12"
                    >
                      <div className="pb-7 max-md:pb-4 space-y-5">
                        {question.answer.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-[15px] max-md:text-xs text-black font-normal"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </section>
          <section className="basis-1/3 max-lg:hidden flex justify-end sticky top-24">
            <div className="bg-[#1b1b1b] p-7 max-w-[305px]">
              <Image src={ceoImage} alt="ceoImage" className="w-14 mb-3" />
              <p className="text-white text-[16.5px] font-medium mb-5">
                Hi, I'm Shahid, the CEO and Founder of Wavespace. Don't hesitate
                to reach out to me anytime – I'm here to answer all your
                questions!
              </p>
              <Button
                btnStyle="bg-[#ebfe5b] py-2"
                text="Ask Questions"
                textSize="text-base text-black"
                hoverColor="bg-white"
                arrowAnimation={false}
                children={
                  <div className="relative box-content p-2 rounded-full w-6 h-6 max-md:w-3 max-md:h-3 overflow-hidden">
                    <div className="relative flex justify-center items-center overflow-hidden w-full h-full">
                      <motion.div
                        initial={{ y: 0 }}
                        variants={{
                          hover: {
                            y: -28,
                            transition: {
                              duration: 0.3,
                              ease: "linear",
                            },
                          },
                        }}
                        className="flex flex-col space-y-1 w-6 h-6"
                      >
                        <Image
                          src={whatsAppIcon}
                          alt="whatsAppIcon"
                          className="w-6 box-content shrink-0"
                        />
                        <Image
                          src={whatsAppIcon}
                          alt="whatsAppIcon"
                          className="w-6 box-content shrink-0"
                        />
                      </motion.div>
                    </div>
                  </div>
                }
              />
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default FAQS;
