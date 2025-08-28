import { useState, useMemo, useContext } from "react";
import {ProfileContext} from "../../context/ProfileContext";



const Skills = () => {
  const { skills } = useContext(ProfileContext);
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Group skills by stack
  const groupedSkills = useMemo(() => {
    return skills.reduce((acc, skill) => {
      if (!acc[skill.stack]) acc[skill.stack] = [];
      acc[skill.stack].push(skill);
      return acc;
    }, {});
  }, [skills]);

  const stacks = Object.keys(groupedSkills);

  // Filter skills based on search term
  const filteredSkills = useMemo(() => {
    const categorySkills = groupedSkills[activeCategory] || [];
    if (!searchTerm) return categorySkills;
    
    return categorySkills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [groupedSkills, activeCategory, searchTerm]);

  // Get skill level color
  const getSkillLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'expert': return 'text-emerald-400 bg-emerald-500/10';
      case 'advanced': return 'text-blue-400 bg-blue-500/10';
      case 'intermediate': return 'text-yellow-400 bg-yellow-500/10';
      case 'beginner': return 'text-gray-400 bg-gray-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  // Get skill count for each stack
  const getStackCount = (stack) => {
    return groupedSkills[stack]?.length || 0;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8  min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Animation */}
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto">
            Explore my technical expertise across different domains with interactive filtering
          </p>
        </div>

        {/* Category Tabs with Counts */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
          {stacks.map((stack, index) => (
            <button
              key={stack}
              onClick={() => {
                setActiveCategory(stack);
                setSearchTerm("");
              }}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === stack
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-slate-800/70 text-gray-300 hover:bg-slate-700 hover:text-white border border-slate-600 hover:border-slate-500"
              }`}
              style={{
                animationDelay: `${0.6 + index * 0.1}s`
              }}
            >
              <span className="relative z-10">{stack}</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                activeCategory === stack
                  ? "bg-white/20 text-white"
                  : "bg-slate-700 text-gray-400 group-hover:bg-slate-600 group-hover:text-gray-300"
              }`}>
                {getStackCount(stack)}
              </span>
              {activeCategory === stack && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-20 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid with Stagger Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
              style={{
                animationDelay: `${0.8 + index * 0.05}s`
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1 overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px] rounded-xl">
                  <div className="w-full h-full bg-slate-800 rounded-xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {skill.name}
                  </h3>
                  
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${getSkillLevelColor(skill.level)}`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      skill.level.toLowerCase() === 'expert' ? 'bg-emerald-400' :
                      skill.level.toLowerCase() === 'advanced' ? 'bg-blue-400' :
                      skill.level.toLowerCase() === 'intermediate' ? 'bg-yellow-400' : 'bg-gray-400'
                    }`} />
                    {skill.level}
                  </div>

                  {/* Hover Tooltip */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg border border-slate-700 animate-[fadeInUp_0.2s_ease-out]">
                      {skill.level} level
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900" />
                    </div>
                  )}
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-16 text-center opacity-0 animate-[fadeInUp_0.6s_ease-out_1.2s_forwards]">
          <div className="inline-flex items-center space-x-8 bg-slate-800 backdrop-blur-sm rounded-xl px-8 py-4 border border-slate-700/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{skills.length}</div>
              <div className="text-sm text-gray-400">Total Skills</div>
            </div>
            <div className="w-px h-8 bg-slate-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">{stacks.length}</div>
              <div className="text-sm text-gray-400">Tech Stacks</div>
            </div>
            <div className="w-px h-8 bg-slate-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {skills.filter(s => s.level.toLowerCase() === 'expert').length}
              </div>
              <div className="text-sm text-gray-400">Expert Level</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;