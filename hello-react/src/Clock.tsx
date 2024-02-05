import { useState } from 'react';

function Clock() {
  console.log('Clock renders');
  
  const [now, setNow] = useState(new Date());

  setTimeout(() => {
    setNow(new Date());
  }, 1000);

  return <div className="Clock">Il est {now.toLocaleTimeString()}</div>;
}

export default Clock;
