import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";

const BasicDetails = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { profile, setProfile } = useContext(ProfileContext);

  const [formData, setFormData] = useState(profile);

  const handleEditClick = (e) => {
    e.preventDefault();
    setFormData(profile);
    setIsEditable(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setProfile(formData);
    setIsEditable(false);
  };

  useEffect(() => {
        if(!isEditable) setFormData(profile);
      }, [profile, isEditable]);

  return (
    <section
      id="home"
      className="flex flex-col justify-center relative overflow-hidden"
    >
      {/* <p className="text-xl sm:text-3xl text-center font-bold text-white mb-4">
        Basic Information
      </p> */}

      <form className="w-[90%] mx-auto grid p-5 grid-cols-4 gap-4 border border-gray-700 rounded-lg bg-slate-800">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.name : profile.name}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.title : profile.title}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="experience"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Experience in Years:
          </label>
          <input
            type="text"
            name="experienceInYears"
            id="experience"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={
              isEditable
                ? formData.experienceInYears
                : profile.experienceInYears
            }
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="noofprojects"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            No of projects:
          </label>
          <input
            type="text"
            name="noofProjects"
            id="noofprojects"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.noofProjects : profile.noofProjects}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="techstack"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Tech stack:
          </label>
          <input
            type="text"
            name="techStack"
            id="techstack"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.techStack : profile.techStack}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="uniqueness"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Uniqueness:
          </label>
          <input
            type="text"
            name="uniqueness"
            id="uniqueness"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.uniqueness : profile.uniqueness}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="resumeUrl"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            ResumeUrl:
          </label>
          <input
            type="text"
            name="resumeUrl"
            id="resumeUrl"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.resumeUrl : profile.resumeUrl}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            ImageUrl:
          </label>
          <input
            type="text"
            name="image"
            id="image"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.image : profile.image}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="github"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            GithubUrl:
          </label>
          <input
            type="text"
            name="githubUrl"
            id="githubUrl"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.githubUrl : profile.githubUrl}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="linkedin"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            LinkedinUrl:
          </label>
          <input
            type="text"
            name="linkedinUrl"
            id="linkedinUrl"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.linkedinUrl : profile.linkedinUrl}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4 col-span-2">
          <label
            htmlFor="description"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.description : profile.description}
            onChange={handleChange}
            disabled={!isEditable}
          ></textarea>
        </div>

        <div className="col-span-2">
          <label
            htmlFor="about"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            About:
          </label>
          <textarea
            name="about"
            id="about"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.about : profile.about}
            onChange={handleChange}
            disabled={!isEditable}
          ></textarea>
        </div>

        <button
          type="submit"
          className={`${
            isEditable ? "" : "hidden"
          } bg-purple-400 hover:bg-purple-500 h-[40px] mt-[25px] text-white py-2 px-4 rounded w-[100px]`}
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>

      <div className="flex justify-center gap-5">
        <button
          className="bg-purple-400 hover:bg-purple-500 text-white mt-10 py-2 px-4 rounded w-[100px]"
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
    </section>
  );
};

export default BasicDetails;
