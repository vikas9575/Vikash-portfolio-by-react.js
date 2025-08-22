import { Dice1, Key } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    {name: "HTML/CSS", category: "frontend"},
     {name: "JavaScript", category: "frontend"},
      {name: "React", category: "frontend"},
       {name: "tailwindcss", category: "frontend"},
        {name: "python", category: "frontend"},
         {name: "C++", category: "frontend"},
          {name: "C", category: "frontend"},
          {name: "SQL", category: "backend"},
              {name: "mySQL", category: "backend"},
                {name: "PostgreSQL", category: "backend"},
                  {name: "Git/GitHub", category: "tools"},
                  {name: "VS Code", category: "tools"},
                
];
const category = ["frontend", "backend", "tools"];
export const SkillsSection = () => {
    
    return <section id="skills" className="py-24 px-4 bg-secondry/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, key) => (
                    <div key={Key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="skill text-left mb-4">
                            <h3 className="font-bold  text-xl">
                                {skill.name}
                            </h3>
                        </div>
                      
                        
                    </div>
                    
                ))}

            </div>

        </div>
    </section>
}