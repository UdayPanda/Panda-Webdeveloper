import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { GenerateText } from "../../genAI/GenerateText";

const Experiences = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { experience, setExperience } = useContext(ProfileContext);

  const [formData, setFormData] = useState(experience);

  const [loading, setLoading] = useState(false);

  const handleEditClick = (e) => {
    e.preventDefault();
    setFormData(experience);
    setIsEditable(true);
  };

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;

    if (Array.isArray(formData)) {
      const updatedArray = [...formData];
      updatedArray[index] = { ...updatedArray[index], [name]: value };
      setFormData(updatedArray);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setExperience(formData);
    setIsEditable(false);
  };

  const handleAddExperience = () => {
    const newExperience = {
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
      technologies: [],
    };
    setFormData([...formData, newExperience]);
    setIsEditable(true);
  };

  const handleDeleteExperience = (e, index) => {
    e.preventDefault();
    const updatedArray = [...formData];
    updatedArray.splice(index, 1);
    setFormData(updatedArray);
  };

  const handleGenerateWithAI = async (e, context) => {
    setLoading(true);
    const index = e.target.id;

    e.preventDefault();
    const responseFromGenAI = await GenerateText(
      ` ${context} for ${formData[index]?.role} role at ${formData[index]?.company}`,
      experience
    );

    if (Array.isArray(formData)) {
      const updatedArray = [...formData];
      updatedArray[index] = {
        ...updatedArray[index],
        [context]: responseFromGenAI,
      };
      setFormData(updatedArray);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!isEditable) setFormData(experience);
  }, [experience, isEditable]);

  return (
    <section id="about" className="sm:px-6 lg:px-8">
      <div className="w-[90%] mx-auto">
        {/* <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
              Experience
            </h2> */}

        <form onSubmit={handleSubmit} className="space-y-8">
          {formData?.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 border border-gray-700 rounded-lg bg-slate-800"
            >
              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                />
              </div>

              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={exp.role}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                />
              </div>

              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Start Date
                </label>
                <input
                  type="text"
                  name="startDate"
                  value={exp.startDate}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                />
              </div>

              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  End Date
                </label>
                <input
                  type="text"
                  name="endDate"
                  value={exp.endDate}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                />
              </div>

              <div className="relative col-span-2">
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={exp.description}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                ></textarea>
                <div
                  title="Edit with AI"
                  id={index}
                  className={`${
                    isEditable ? "" : "hidden"
                  } absolute top-0 right-0 text-xl cursor-pointer`}
                  onClick={(e) => handleGenerateWithAI(e, "description")}
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    "✨"
                  )}
                </div>
              </div>

              <div className="col-span-2">
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  name="technologies"
                  value={exp.technologies.join(", ")}
                  onChange={(e) => {
                    const techs = e.target.value
                      .split(",")
                      .map((t) => t.trim());
                    const updatedExperience = [...formData];
                    updatedExperience[index].technologies = techs;
                    setFormData(updatedExperience);
                  }}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                />
              </div>

              <div className="flex justify-center gap-5">
                <button
                  className={`${
                    isEditable ? "" : "hidden"
                  } flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white h-[40px] mt-6 py-2 px-4 rounded w-[100px]`}
                  onClick={(e) => handleDeleteExperience(e, index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-7 0h10"
                    />
                  </svg>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}

          <button
            type="submit"
            className={`${
              isEditable ? "" : "hidden"
            } bg-purple-400 hover:bg-purple-500 text-white py-2 px-4 rounded`}
          >
            Save
          </button>
        </form>

        <div className="flex justify-end gap-5">
          <button
            className="bg-purple-400 hover:bg-purple-500 text-white py-2 px-4 rounded w-[150px]"
            onClick={handleAddExperience}
          >
            Add Experience
          </button>
        </div>

        <div className="flex justify-center gap-5">
          <button
            className="bg-purple-400 hover:bg-purple-500 text-white py-2 px-4 rounded w-[100px]"
            onClick={
              isEditable
                ? (e) => {
                    e.preventDefault();
                    setIsEditable(false);
                  }
                : handleEditClick
            }
          >
            {isEditable ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
