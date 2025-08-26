import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";


const Experiences = () => {

const [isEditable, setIsEditable] = useState(false);

  const { experience, setExperience } = useContext(ProfileContext);

  const [formData, setFormData] = useState(experience);

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

  useEffect(() => {
    if(!isEditable) setFormData(experience);
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

                  <div className="col-span-2">
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
  )
}

export default Experiences