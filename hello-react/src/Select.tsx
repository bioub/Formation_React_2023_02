import { useState } from 'react';

export interface SelectProps {
  items: string[];
  value: string;
  onValueChange(value: string): void;
}

function Select({ items, value, onValueChange }: Readonly<SelectProps>) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleItemClick(newItem: string) {
    // lift newItem to the parent
    onValueChange(newItem);
    setMenuOpen(false);
  }

  return (
    <div>
      <div onClick={() => setMenuOpen(!menuOpen)}>{value}</div>
      {menuOpen && (
        <div>
          {items.map((item) => (
            <div key={item} onClick={() => handleItemClick(item)}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
