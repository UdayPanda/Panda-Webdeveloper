import { useContext, useMemo } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const PointSphere = () => {
  const points = useMemo(() => {
    const temp = [];
    const radius = 3;
    const numPoints = 1500;

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(1 - 2 * Math.random());
      const theta = Math.random() * Math.PI * 2;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  }, []);

  const geom = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  useFrame((state) => {
    state.scene.rotation.y += 0.002;
  });

  return (
    <points geometry={geom}>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
};

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
          {/* Left - Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 bg-cover rounded-full bg-gradient-to-br from-[#052776] via-purple-600 to-slate-900 border-3 border-pink-400 hover:border-pink-500 flex items-center justify-center">
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
            <div className="absolute -top-4 -left-4 w-80 h-80 border-2 border-purple-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-80 h-80 border-2 border-pink-400 rounded-full opacity-20"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              {profile.title}
            </h3>
            <p className="text-gray-100 leading-relaxed">{profile.description}</p>
            <p className="text-gray-100 leading-relaxed">{profile.about}</p>
            <p className="text-gray-100 leading-relaxed">
              When I'm not coding, I explore new tech, contribute to open-source,
              and share knowledge with the dev community.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-100">{profile.experienceInYears}</span>
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

            {/* CV Button */}
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

          <div className="relative flex flex-col lg:flex-row items-stretch">
            <div className="w-full lg:w-2/3 z-10">
              {/* Timeline */}
              <div className="relative">
                <div className="absolute right-0 transform -translate-x-2.5 w-0.5 h-full bg-white"></div>
                <div className="space-y-12">
                  {experience?.map((exp, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                      <div key={index} className="relative flex items-center">
                        <div className="w-6 h-6 bg-white rounded-full absolute right-0 transform -translate-x-1/12 z-10"></div>
                        <div
                          className={`w-full px-8 ${
                            isLeft ? "text-right" : "text-left"
                          }`}
                        >
                          <h4 className="text-lg font-semibold text-white">
                            {exp.role}
                          </h4>
                          <p className="text-purple-300 font-bold">
                            {exp.company} • {exp.startDate} - {exp.endDate}
                          </p>
                          <p className="text-gray-200 mt-2">{exp.description}</p>
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

            {/* Point Cloud Sphere */}
            <div title="Spin Me🤪" className="relative w-full lg:w-1/3 flex items-center justify-center mt-12 lg:mt-0">
              <div className="hidden lg:block w-full h-96">
                <Canvas camera={{ position: [0, 0, 6] }}>
                  <ambientLight intensity={0.5} />
                  <PointSphere />
                  <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
                </Canvas>
              </div>
              <div className="block lg:hidden absolute inset-0 w-full h-full opacity-20 pointer-events-none -z-10">
                <Canvas camera={{ position: [0, 0, 6] }}>
                  <ambientLight intensity={0.5} />
                  <PointSphere />
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
