import { useState, useEffect } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const [animateSkills, setAnimateSkills] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSkills(true)
        }
      },
      { threshold: 0.3 }
    )

    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'Tailwind CSS', level: 88, icon: '💨' },
        { name: 'Next.js', level: 80, icon: '⚡' },
        { name: 'Vue.js', level: 75, icon: '💚' }
      ]
    },
    backend: {
      title: 'Backend & Full-Stack',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Express.js', level: 75, icon: '🚂' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'PostgreSQL', level: 65, icon: '🐘' },
        { name: 'Firebase', level: 75, icon: '🔥' },
        { name: 'REST APIs', level: 85, icon: '🔗' },
        { name: 'GraphQL', level: 60, icon: '📊' },
        { name: 'Docker', level: 55, icon: '🐳' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: '📚' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Figma', level: 70, icon: '🎨' },
        { name: 'Webpack', level: 75, icon: '📦' },
        { name: 'Vite', level: 85, icon: '⚡' },
        { name: 'Jest', level: 70, icon: '🧪' },
        { name: 'Postman', level: 80, icon: '📮' },
        { name: 'AWS', level: 60, icon: '☁️' }
      ]
    }
  }

  const currentSkills = skillCategories[activeCategory]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentSkills.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-purple-400 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
                <span className="text-purple-400 font-semibold">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out ${
                    animateSkills ? 'w-full' : 'w-0'
                  }`}
                  style={{ width: animateSkills ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Other Skills & Interests
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[
              'Responsive Design', 'Progressive Web Apps', 'Performance Optimization',
              'SEO', 'Accessibility', 'Cross-browser Compatibility', 'State Management',
              'Testing', 'CI/CD', 'Agile Methodologies', 'UI/UX Design', 'Mobile Development'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700 hover:border-purple-400 transition-all duration-300 group"
              >
                <span className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300 text-sm">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-8 border border-purple-400/20">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'Machine Learning', icon: '🤖' },
              { name: 'Three.js', icon: '🎮' },
              { name: 'Rust', icon: '🦀' }
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-4 py-2 border border-purple-400/30"
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
