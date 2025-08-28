import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";

const EditSkills = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { skills, setSkills } = useContext(ProfileContext);

  const [formData, setFormData] = useState(skills);

  const handleEditClick = (e) => {
    e.preventDefault();
    setFormData(skills);
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
    await setSkills(formData);
    setIsEditable(false);
  };

  const handleAddSkill = () => {
    const newSkill = {
      name: "",
      level: "",
      stack: "",
    };
    setFormData([...formData, newSkill]);
    setIsEditable(true);
  };

  const handleDeleteSkill = (e, index) => {
    e.preventDefault();
    const updatedArray = [...formData];
    updatedArray.splice(index, 1);
    setFormData(updatedArray);
  };

  useEffect(() => {
      if(!isEditable) setFormData(skills);
    }, [skills, isEditable]);

  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8">
      <div className="w-[90%] mx-auto">
        {/* <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
      Skills
    </h2> */}

        <form onSubmit={handleSubmit} className="space-y-8">
          {formData?.map((skill, index) => (
            <div
              key={index}
              className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 border border-gray-700 rounded-lg bg-slate-800"
            >
              {/* Skill Name */}
              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Skill Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={skill.name}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                />
              </div>

              {/* Skill Level */}
              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Level
                </label>
                <select
                  name="level"
                  value={skill.level}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditable}
                  className="w-full p-2 border text-orange-500 border-gray-300 rounded bg-transparent"
                >
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              {/* Stack */}
              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Stack
                </label>
                <input
                  type="text"
                  name="stack"
                  value={skill.stack}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                />
              </div>

              <div className="col-span-full flex justify-end">
                <button
                  className={`${
                    isEditable ? "" : "hidden"
                  } absolute top-4 right-4 hover:text-red-500 text-red-400 cursor-pointer`}
                  onClick={(e) => handleDeleteSkill(e, index)}
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
            className="bg-purple-400 hover:bg-purple-500 text-white py-2 px-4 rounded w-[100px]"
            onClick={handleAddSkill}
          >
            Add Skill
          </button>
        </div>

        <div className="flex justify-center gap-5 mt-5">
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

export default EditSkills;
