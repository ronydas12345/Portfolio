'use client';

export default function About() {
  return (
    <section className="w-full min-h-screen bg-slate-950 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold text-white mb-8">About Me</h2>
        
        <div className="space-y-6 text-lg text-gray-300">
          <p>
            I'm Raunak Das, a full-stack developer with a passion for creating elegant solutions 
            to complex problems. With expertise in modern web technologies, I build responsive and 
            performant applications that users love.
          </p>
          
          <p>
            My journey in technology started with a curiosity about how things work. Over the years, 
            I've honed my skills in JavaScript, React, Next.js, and various backend technologies. 
            I believe in writing clean, maintainable code and following best practices.
          </p>

          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or sharing knowledge with the development community. I'm always eager to learn and 
            grow in this ever-evolving field.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 bg-slate-900 p-8 rounded-lg border border-slate-700">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Skills</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• JavaScript / TypeScript</li>
                <li>• React & Next.js</li>
                <li>• Tailwind CSS</li>
                <li>• Node.js & Express</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Experience</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• 5+ Years Development</li>
                <li>• 20+ Projects Completed</li>
                <li>• Remote Collaboration</li>
                <li>• Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
