import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";

const EditContact = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { contact, setContact } = useContext(ProfileContext);

  const [formData, setFormData] = useState(contact);

  const handleEditClick = (e) => {
    e.preventDefault();
    setFormData(contact);
    setIsEditable(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setContact(formData);
    setIsEditable(false);
  };

  useEffect(() => {
        if(!isEditable) setFormData(contact);
      }, [contact, isEditable]);

  return (
    <section
      id="contact"
      className="flex flex-col justify-center relative overflow-hidden"
    >
      <form
        className="w-[90%] mx-auto grid p-5 grid-cols-4 gap-4 border border-gray-700 rounded-lg bg-slate-800"
        onSubmit={handleSubmit}
      >
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
            value={isEditable ? formData.name : contact.name}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.email : contact.email}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Location:
          </label>
          <input
            type="text"
            name="location"
            id="location"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.location : contact.location}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.phone : contact.phone}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4 col-span-2">
          <label
            htmlFor="linkedinUrl"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            LinkedIn URL:
          </label>
          <input
            type="text"
            name="linkedinUrl"
            id="linkedinUrl"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.linkedinUrl : contact.linkedinUrl}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4 col-span-2">
          <label
            htmlFor="githubUrl"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            GitHub URL:
          </label>
          <input
            type="text"
            name="githubUrl"
            id="githubUrl"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.githubUrl : contact.githubUrl}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4 col-span-2">
          <label
            htmlFor="resumeUrl"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Resume URL:
          </label>
          <input
            type="text"
            name="resumeUrl"
            id="resumeUrl"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.resumeUrl : contact.resumeUrl}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="instagramUrl"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Instagram URL:
          </label>
          <input
            type="text"
            name="instagramUrl"
            id="instagramUrl"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.instagramUrl : contact.instagramUrl}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="twitterUrl"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Twitter URL:
          </label>
          <input
            type="text"
            name="twitterUrl"
            id="twitterUrl"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.twitterUrl : contact.twitterUrl}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>

        <div className="mb-4 col-span-2">
          <label
            htmlFor="available"
            className="block text-orange-500 text-sm font-bold mb-2"
          >
            Availability:
          </label>
          <input
            type="text"
            name="available"
            id="available"
            className="w-full p-2 border text-white border-gray-300 rounded"
            value={isEditable ? formData.available : contact.available}
            onChange={handleChange}
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

export default EditContact;
