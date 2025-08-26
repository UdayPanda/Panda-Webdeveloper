import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";

const EditProjects = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { projects, setProjects } = useContext(ProfileContext);

  const [formData, setFormData] = useState(projects);

  const handleEditClick = (e) => {
    e.preventDefault();
    setFormData(projects);
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
    await setProjects(formData);
    setIsEditable(false);
  };

  useEffect(() => {
        if(!isEditable) setFormData(projects);
      }, [projects, isEditable]);

  return (
    <section id="projects" className="sm:px-6 lg:px-8">
      <div className="w-[90%] mx-auto">
        {/* <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
      Projects
    </h2> */}

        <form onSubmit={handleSubmit} className="relative space-y-8">
          <div className="flex justify-end gap-5 mt-4">
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

          {formData?.map((proj, index) => (
            <div
              key={proj.id || index}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 border border-gray-700 rounded-lg bg-slate-800"
            >
              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={proj.title}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                />
              </div>

              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={proj.category}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                />
              </div>

              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Live URL
                </label>
                <input
                  type="text"
                  name="liveUrl"
                  value={proj.liveUrl}
                  onChange={(e) => handleChange(e, index)}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                />
              </div>

              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Github URL
                </label>
                <input
                  type="text"
                  name="githubUrl"
                  value={proj.githubUrl}
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
                  value={proj.description}
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
                  value={proj.technologies.join(", ")}
                  onChange={(e) => {
                    const techs = e.target.value
                      .split(",")
                      .map((t) => t.trim());
                    const updatedProjects = [...formData];
                    updatedProjects[index].technologies = techs;
                    setFormData(updatedProjects);
                  }}
                  disabled={!isEditable}
                  className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
                />
              </div>

              <div>
                <label className="block text-orange-500 text-sm font-bold mb-2">
                  Image
                </label>
                <input
                  type="text"
                  name="image"
                  value={proj.image}
                  onChange={(e) => handleChange(e, index)}
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
            } absolute top-0 right-32 bg-purple-400 hover:bg-purple-500 text-white py-2 px-4 rounded`}
          >
            Save
          </button>
        </form>

      </div>
    </section>
  );
};

export default EditProjects;
