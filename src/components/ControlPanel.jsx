import Navbar from "./Navbar";
import BasicDetails from "./Control Panel/BasicDetails";
import Experiences from "./Control Panel/Experiences";
import EditProjects from "./Control Panel/EditProjects";
import { useState } from "react";
import EditSkills from "./Control Panel/EditSkills";
import EditContact from "./Control Panel/EditContact";
import Miscellaneous from "./Control Panel/Miscellaneous";

const ControlPanel = () => {
  const [openSection, setOpenSection] = useState("basic");

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <Navbar />

      <main>
        <h2 className="responsive-text text-3xl sm:text-4xl text-center font-bold text-white pt-16 mb-4">
          Control Panel
        </h2>

        {/* Accordion Tabs */}
        <div className="w-[80%] mx-auto space-y-6 mt-12">
          {/* Basic Details */}
          <div>
            <button
            id="home"
              className="w-full text-left px-4 py-5 text-2xl border border-gray-700 rounded-lg bg-slate-800 text-white font-semibold rounded-t focus:outline-none"
              onClick={() => handleToggle("basic")}
            >
              Basic Information
              <span
                className={`float-right text-orange-500 transition-transform duration-200 text-2xl ${
                  openSection === "basic" ? "rotate-180" : ""
                }`}
              >^</span>
            </button>
            {openSection === "basic" && (
              <div className="bg-slate-800 rounded-b px-4 py-4">
                <BasicDetails />
              </div>
            )}
          </div>

          {/* Experience */}

          <div>
            <button
              id="about"
              className="w-full text-left px-4 py-5 text-2xl border border-gray-700 rounded-lg bg-slate-800 text-white font-semibold rounded-t focus:outline-none"
              onClick={() => handleToggle("experience")}
            >
              Experience
              <span
                className={`float-right text-orange-500 transition-transform duration-200 text-2xl ${
                  openSection === "experience" ? "rotate-180" : ""
                }`}
              >^</span>
            </button>
            {openSection === "experience" && (
              <div className="bg-slate-800 rounded-b px-4 py-4">
                <Experiences />
              </div>
            )}
          </div>

          {/* Skills */}

          <div>
            <button
              id="skills"
              className="w-full text-left px-4 py-5 text-2xl border border-gray-700 rounded-lg bg-slate-800 text-white font-semibold rounded-t focus:outline-none"
              onClick={() => handleToggle("skills")}
            >
              Skills
              <span
                className={`float-right text-orange-500 transition-transform duration-200 text-2xl ${
                  openSection === "skills" ? "rotate-180" : ""
                }`}
              >^</span>
            </button>
            {openSection === "skills" && (
              <div className="bg-slate-800 rounded-b px-4 py-4">
                <EditSkills />
              </div>
            )}
          </div>

          {/* Projects */}

          <div>
            <button
              id="projects"
              className="w-full text-left px-4 py-5 text-2xl border border-gray-700 rounded-lg bg-slate-800 text-white font-semibold rounded-t focus:outline-none"
              onClick={() => handleToggle("projects")}
            >
              Projects
              <span
                className={`float-right text-orange-500 transition-transform duration-200 text-2xl ${
                  openSection === "projects" ? "rotate-180" : ""
                }`}
              >^</span>
            </button>
            {openSection === "projects" && (
              <div className="bg-slate-800 rounded-b px-4 py-4">
                <EditProjects />
              </div>
            )}
          </div>

          {/* Contact Details */}

          <div>
            <button
              id="contact"
              className="w-full text-left px-4 py-5 text-2xl border border-gray-700 rounded-lg bg-slate-800 text-white font-semibold rounded-t focus:outline-none"
              onClick={() => handleToggle("contact")}
            >
              Contact Details
              <span
                className={`float-right text-orange-500 transition-transform duration-200 text-2xl ${
                  openSection === "contact" ? "rotate-180" : ""
                }`}
              >^</span>
            </button>
            {openSection === "contact" && (
              <div className="bg-slate-800 rounded-b px-4 py-4">
                <EditContact />
              </div>
            )}
          </div>

          {/* Miscellaneous */}

          <div>
            <button
              className="w-full text-left px-4 py-5 text-2xl border border-gray-700 rounded-lg bg-slate-800 text-white font-semibold rounded-t focus:outline-none"
              onClick={() => handleToggle("miscellaneous")}
            >
              Miscellaneous
              <span
                className={`float-right text-orange-500 transition-transform duration-200 text-2xl ${
                  openSection === "miscellaneous" ? "rotate-180" : ""
                }`}
              >^</span>
            </button>
            {openSection === "miscellaneous" && (
              <div className="bg-slate-800 rounded-b px-4 py-4">
                <Miscellaneous />
              </div>
            )}
          </div>
          
        </div>

      </main>
    </div>
  );
};

export default ControlPanel;
