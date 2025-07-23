"use client";
import { useState } from "react";
import { IoAdd, IoClose } from "react-icons/io5";

interface SelectedInputFieldProps {
  defaultItems: string[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  moreButtonText: string;
  newTitleItem: string;
}

export default function SelectedInputField({
  defaultItems,
  setSelectedItems,
  selectedItems,
  moreButtonText,
  newTitleItem,
}: SelectedInputFieldProps) {
  const [customItems, setCustomItems] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState("");

  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  const handleAddCustomItem = () => {
    if (newItem && !customItems.includes(newItem)) {
      const updatedCustomItems = [...customItems, newItem];
      setCustomItems(updatedCustomItems);
      setSelectedItems([...selectedItems, newItem]);
      setNewItem("");
      setIsModalOpen(false);
    }
  };

  const allItems = [...defaultItems, ...customItems];

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {allItems.map((item, index) => (
          <button
            key={index}
            onClick={() => toggleItem(item)}
            className={`flex items-center gap-1 rounded-full px-4 py-2 border transition 
              ${
                selectedItems.includes(item)
                  ? "bg-[#1C1833] text-white border-[#1C1833]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
              }`}
          >
            {item}
            {selectedItems.includes(item) ? <IoClose /> : <IoAdd />}
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
            <h3 className="text-lg font-semibold mb-6">{newTitleItem}</h3>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Enter..."
              className="w-full p-2 border border-gray-300 rounded mb-6"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-[#1C1833] text-white rounded hover:bg-[#1c1833de] w-[100px] "
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustomItem}
                className="px-4 py-2 bg-[#1C1833] text-white rounded hover:bg-[#1c1833de] w-[100px] cursor-pointer"
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
