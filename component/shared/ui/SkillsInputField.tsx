"use client";
import { useState } from "react";
import { IoAdd, IoClose } from "react-icons/io5";

interface SkillsInputFieldProps {
  defaultSkills: string[];
}

export default function SkillsInputField({
  defaultSkills,
  setSelectedSkills,
  selectedSkills,
  moreButtonText,
}: SkillsInputFieldProps) {
  const [customSkills, setCustomSkills] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleAddCustomSkill = () => {
    if (newSkill && !customSkills.includes(newSkill)) {
      setCustomSkills([...customSkills, newSkill]);
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill("");
      setIsModalOpen(false);
    }
  };

  const allSkills = [...defaultSkills, ...customSkills];

  console.log("Selected Skills: 34", selectedSkills);

  return (
    <div className="">
      <div className="flex flex-wrap gap-3">
        {allSkills.map((skill, index) => (
          <button
            key={index}
            onClick={() => toggleSkill(skill)}
            className={`flex items-center gap-1 rounded-full px-4 py-2 border transition 
              ${
                selectedSkills.includes(skill)
                  ? "bg-[#1C1833] text-white border-[#1C1833]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
              }`}
          >
            {skill}
            {selectedSkills.includes(skill) ? <IoClose /> : <IoAdd />}
          </button>
        ))}

        {/* Add Other Skills Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-full px-4 py-2 border border-gray-800 text-gray-800 hover:bg-gray-100"
        >
          <IoAdd />
          {moreButtonText}
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white px-6 rounded-lg w-full max-w-xl shadow-lg py-16">
            <h3 className="text-lg font-semibold mb-4">Add New Skill</h3>
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter skill name"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustomSkill}
                className="px-4 py-2 bg-[#1C1833] text-white rounded hover:bg-primary/90"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
