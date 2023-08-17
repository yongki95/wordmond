import React, { useState } from 'react';

const levels: Level[] = ['level1' , 'level2' , 'level3' , 'level4' , 'level5'];

export const DropDownButton: React.FC<DropDownProps> = ({ selectedLevel, onSelectLevel }) => {
  return (
    <select value={selectedLevel} onChange={(e) => onSelectLevel(e.target.value as Level)}>
      {levels.map((level) => (
        <option key={level} value={level}>
          {level}
        </option>
      ))}
    </select>
  );
};
