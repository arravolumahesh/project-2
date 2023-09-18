"use client";

import React, { useState } from "react";

interface Tab {
  title: string;
  options: string[];
}

interface DropdownProps {
  tabs: Tab[];
}

const Dropdown: React.FC<DropdownProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveTab(index);
  };

  const handleMouseLeave = () => {
    setActiveTab(null);
  };

  return (
    <div className="dropdown" onMouseLeave={handleMouseLeave}>
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className="tab"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {tab.title} &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
            >
              <path
                d="M1.27325 0H8.72658C8.85843 0.00055282 8.98715 0.0401893 9.09648 0.113898C9.2058 0.187606 9.29081 0.292077 9.34076 0.414098C9.39071 0.536119 9.40336 0.670212 9.3771 0.799421C9.35084 0.928629 9.28686 1.04715 9.19325 1.14L5.47325 4.85999C5.41127 4.92248 5.33754 4.97207 5.2563 5.00592C5.17506 5.03976 5.08792 5.05719 4.99991 5.05719C4.91191 5.05719 4.82477 5.03976 4.74353 5.00592C4.66229 4.97207 4.58856 4.92248 4.52658 4.85999L0.80658 1.14C0.712966 1.04715 0.648985 0.928629 0.622728 0.799421C0.596471 0.670212 0.609118 0.536119 0.659068 0.414098C0.709018 0.292077 0.79403 0.187606 0.903352 0.113898C1.01267 0.0401893 1.1414 0.00055282 1.27325 0Z"
                fill="#374957"
              />
            </svg>
            {activeTab === index && (
              <ul className="options">
                {tab.options.map((option, optionIndex) => (
                  <li key={optionIndex} className="option navbar-selete-option">
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
