import { useEffect, useState } from 'react';

function Clock() {
  // console.log('Clock renders');
  
  const [now, setNow] = useState(new Date());
  // const [name, setName] = useState('Romain');

  // useEffect(() => {
  //   console.log('called after each render');
  //   return () => {
  //     console.log('before each effect, except the first one and when the component will destroy')
  //   }
  // })

  // useEffect(() => {
  //   console.log('called after the first render');
  // return () => {
  //   console.log('when the component will destroy')
  // }
  // }, [])

  // useEffect(() => {
  //   console.log('called after the first render + after each render when the value(s) present in the array changes');
  // return () => {
  //   console.log('before each effect, except the first one (only when value in the array changes) and when the component will destroy')
  // }
  // }, [name])

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  

  return <div className="Clock">Il est {now.toLocaleTimeString()}</div>;
}

export default Clock;
