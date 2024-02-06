import { useEffect, useRef, useState } from 'react';

export interface SelectProps {
  items: string[];
  value: string;
  onValueChange(value: string): void;
}

function Select({ items, value, onValueChange }: Readonly<SelectProps>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  function handleItemClick(newItem: string) {
    // lift newItem to the parent
    onValueChange(newItem);
    setMenuOpen(false);
  }

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!hostRef.current?.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    };
    window.addEventListener('click', listener);
    return () => {
      window.removeEventListener('click', listener);
    };
  }, []);

  return (
    <div ref={hostRef}>
      <div onClick={() => setMenuOpen(!menuOpen)}>{value}</div>
      {menuOpen && (
        <div>
          {items.map((item) => (
            <div key={item} onClick={() => handleItemClick(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
