import { useContext } from "react";
import { ProfileContext } from "../../context/ProfileContext";

const About = () => {
  const { profile, experience } = useContext(ProfileContext);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 bg-cover rounded-full bg-gradient-to-br from-[#052776] via-purple-600 to-slate-900 flex items-center justify-center">
                {profile.image ? (
                  <img
                    src={profile.image}
                    alt="profile"
                    className="w-80 h-80 bg-cover rounded-full"
                  />
                ) : (
                  <div className="text-white text-6xl font-bold"> 
                    {profile.name
                      .split(" ")
                      .map((word) => word.charAt(0))
                      .join("")}
                  </div>
                )}
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-80 h-80 border-2 border-purple-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-80 h-80 border-2 border-pink-400 rounded-full opacity-20"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              {profile.title}
            </h3>

            <p className="text-gray-100 leading-relaxed">
              {profile.description}
            </p>

            <p className="text-gray-100 leading-relaxed">{profile.about}</p>

            <p className="text-gray-100 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-100">
                  {profile.experienceInYears}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-100">{profile.noofProjects}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-100">{profile.techStack}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-100">{profile.uniqueness}</span>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            My Journey
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white"></div>

            <div className="space-y-12">
              {/* Timeline Item 1 */}
              {experience?.map((exp, index) => {
                const isLeft = index % 2 === 0; // Alternate left/right
                return (
                  <div key={index} className="relative flex items-center">
                    {/* Dot */}
                    <div className="w-6 h-6 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>

                    {/* Card */}
                    <div
                      className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pl-8"}`}
                    >
                      <h4 className="text-lg font-semibold text-white">
                        {exp.role}
                      </h4>
                      <p className="text-purple-300 font-bold">
                        {exp.company} • {exp.startDate} - {exp.endDate}
                      </p>
                      <p className="text-gray-200 mt-2">{exp.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-3 justify-end">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-purple-400/40 text-white rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
