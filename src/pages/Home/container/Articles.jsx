import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import ArticleCard from '../../../components/ArticleCard'
import img from '../../../constants/images.js'

const Articles = () => {
  return (
    <section className="flex flex-col container mx-auto  px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticleCard h1="Future Of Work" text="Majority of peole will in jobs that don't exist today." imgSrc={img.PostImage} className="w-full md:w-[calc(50%-20px)] lg:w[calc(33.33%-21px)]" />
         <ArticleCard h1="Keeping Up with Current Technology" text="Majority of peole will in jobs that don't exist today." imgSrc={img.RobotImage} className="w-full md:w-[calc(50%-20px)] lg:w[calc(33.33%-21px)]" />
          <ArticleCard h1="Future State Of Artificial İntelligence" text="Majority of peole will in jobs that don't exist today." imgSrc={img.YapayZeka} className="w-full md:w-[calc(50%-20px)] lg:w[calc(33.33%-21px)]" />
          <ArticleCard h1="Becoming a Designer..." text="Majority of peole will in jobs that don't exist today." imgSrc={img.Design} className="w-full md:w-[calc(50%-20px)] lg:w[calc(33.33%-21px)]" />
          <ArticleCard h1="Working with Full Stack" text="Majority of peole will in jobs that don't exist today." imgSrc={img.Full} className="w-full md:w-[calc(50%-20px)] lg:w[calc(33.33%-21px)]" />
          <ArticleCard h1="Can a software developer be antisocial?" text="Majority of peole will in jobs that don't exist today." imgSrc={img.Sosyal}className="w-full md:w-[calc(50%-20px)] lg:w[calc(33.33%-21px)]" />

    
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 px-6 py-3 border-primary ">
        <span>More articles</span>
        <FaArrowRight className="w-3 h-3"/>
      </button>
    </section>
  )
}

export default Articles
