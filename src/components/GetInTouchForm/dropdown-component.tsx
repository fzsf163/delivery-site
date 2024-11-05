import { useState } from "react";
import IconDown from "./iconDown";

interface DropdownProps {
  options?: string[];
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Dropdown = ({
  options = [], // Provide default empty array
  defaultValue = "",
  placeholder = "Select an option",
  onChange,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div className="relative w-64">
      <input
        type="hidden"
        name={"freightForm"}
        value={selectedValue}
        required
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md border bg-[#D9D9D94A]/20 px-4 py-2 text-left shadow-sm hover:bg-[#D9D9D94A] focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span
          className={`${!selectedValue ? "text-gray-300" : "text-gray-100"}`}
        >
          {selectedValue || placeholder}
        </span>
        <IconDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && Array.isArray(options) && options.length > 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-lg">
          <ul className="max-h-60 overflow-auto py-1">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-[#D9D9D94A]"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Example usage with default export
export default function DropdownInput() {
  const options = ["Door To Door", "Freight"];

  return (
    <div className="h-[40px] rounded-[10px] px-2 lg:w-[250px]">
      <Dropdown
        options={options}
        placeholder="Select"
        // onChange={(value) => console.log(value)}
      />
    </div>
  );
}
