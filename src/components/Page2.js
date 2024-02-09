import React from 'react'
import "./Page2.css"
import { Card } from './Card';
import focus from "../assets/target.svg"
import practical from "../assets/practical.svg"
import filter from "../assets/filter.svg";
import roadmap from "../assets/roadmap.svg";
import resources from "../assets/resources.svg";
import updates from "../assets/updates.svg";

export const Page2 = () => {
    
  return (
    <div id='Services' className='Page2'>
        <div className="Con2">
            <p className="Head2">Here Is What You Get Out Of <span className='brnd' >Veecsha</span></p>
            <div className='SubHead' >
                <Card value={1} logo={focus} SubContent={"Focused Learning Paths"} Content={"Simplify your tech journey with curated paths. Dive into programming, web development, or DSA, ensuring a grasp of core concepts without overwhelming details."}/>
                <Card value={2} logo={practical} SubContent={"Practical Micro Learning"} Content={" Break free from lengthy lectures. Veecsha offers bite-sized, practical micro-learning experiences, providing hands-on, applicable knowledge that seamlessly fits into your schedule."}/>
                <Card value={3} logo={filter} SubContent={"Filtered Content"} Content={"Explore tailored content filters for a personalized learning journey. Refine your experience based on preferences, ensuring targeted and relevant material that aligns with your unique tech interests."}/>
                <Card value={4} logo={roadmap} SubContent={"Guided Roadmaps"} Content={"Navigate the tech landscape with clear roadmaps. Progress logically from basics to advanced concepts, building a strong foundation before tackling more complex ideas in step-by-step guides."} />
                <Card value={5} logo={resources} SubContent={"Additional Resources"} Content={"Beyond Veecsha, explore supplementary resources, recommended readings, and community forums. Enrich your learning experience both within and outside the platform."} />
                <Card value={6} logo={updates} SubContent={"Continuous Updates"} Content={"Tech evolves, and so do we. Veecsha stays current with industry trends, regularly updating content to keep you in sync with the latest advancements. Your learning experience is always fresh and relevant."}/>
            </div>
        </div>
    </div>
  )
}
