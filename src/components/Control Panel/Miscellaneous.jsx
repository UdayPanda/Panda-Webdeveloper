import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";

const Miscellaneous = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { miscellaneous, setMiscellaneous } = useContext(ProfileContext);

  const [formData, setFormData] = useState(miscellaneous);

  const handleEditClick = (e) => {
    e.preventDefault();
    setFormData(miscellaneous);
    setIsEditable(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setMiscellaneous(formData);
    setIsEditable(false);
  };

  const handleArrayChange = (e, field) => {
  const values = e.target.value.split(",").map((item) => item.trim());
  setFormData({ ...formData, [field]: values });
};

useEffect(() => {
      if(!isEditable) setFormData(miscellaneous);
    }, [miscellaneous, isEditable]);

  return (
    <section className="flex flex-col justify-center relative overflow-hidden">
      <form
        className="w-[90%] mx-auto grid p-5 grid-cols-4 gap-4 border border-gray-700 rounded-lg bg-slate-800"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 col-span-4">
          <label
            htmlFor="bio"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Bio:
          </label>
          <textarea
            name="bio"
            id="bio"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.bio : miscellaneous.bio}
            onChange={handleChange}
            disabled={!isEditable}
          ></textarea>
        </div>

        <div className="mb-4 col-span-2">
          <label
            htmlFor="languages"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Languages (comma-separated):
          </label>
          <input
            type="text"
            name="languages"
            id="languages"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={
              isEditable
                ? formData.languages?.join(", ")
                : miscellaneous.languages.join(", ")
            }
            onChange={(e) => handleArrayChange(e, "languages")}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4 col-span-2">
          <label
            htmlFor="currentlyLearning"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Currently Learning (comma-separated):
          </label>
          <input
            type="text"
            name="currentlyLearning"
            id="currentlyLearning"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={
              isEditable
                ? formData.currentlyLearning?.join(", ")
                : miscellaneous.currentlyLearning.join(", ")
            }
            onChange={(e) => handleArrayChange(e, "currentlyLearning")}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mission"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Mission:
          </label>
          <input
            type="text"
            name="mission"
            id="mission"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.mission : miscellaneous.mission}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="missionDeadline"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Mission Deadline:
          </label>
          <input
            type="text"
            name="missionDeadline"
            id="missionDeadline"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={
              isEditable
                ? formData.missionDeadline
                : miscellaneous.missionDeadline
            }
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4 col-span-2">
          <label
            htmlFor="hobbies"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Hobbies (comma-separated):
          </label>
          <input
            type="text"
            name="hobbies"
            id="hobbies"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={
              isEditable
                ? formData.hobbies?.join(", ")
                : miscellaneous.hobbies.join(", ")
            }
            onChange={(e) => handleArrayChange(e, "hobbies")}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4 col-span-2">
          <label
            htmlFor="interests"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Interests (comma-separated):
          </label>
          <input
            type="text"
            name="interests"
            id="interests"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={
              isEditable
                ? formData.interests?.join(", ")
                : miscellaneous.interests.join(", ")
            }
            onChange={(e) => handleArrayChange(e, "interests")}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4 col-span-4">
          <label
            htmlFor="certifications"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Certifications (comma-separated):
          </label>
          <input
            type="text"
            name="certifications"
            id="certifications"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={
              isEditable
                ? formData.certifications?.join(", ")
                : miscellaneous.certifications.join(", ")
            }
            onChange={(e) => handleArrayChange(e, "certifications")}
            disabled={!isEditable}
          />
        </div>

        <button
          type="submit"
          className={`${
            isEditable ? "" : "hidden"
          } bg-purple-400 hover:bg-purple-500 h-[40px] mt-[25px] text-white py-2 px-4 rounded w-[100px]`}
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

export default Miscellaneous;
