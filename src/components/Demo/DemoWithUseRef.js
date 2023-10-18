import { useState, useRef } from 'react';

const DemoWithUseRef = () => {
  const [a, setA] = useState(0);
  const b = useRef(0);
  let c = 0;

  return (
    <div className='flex flex-col w-96 h-96'>
      <div className='border border-black w-96 p-4 m-4 h-auto'>
        <h1 className='font-bold mb-4'>
          Difference between State vs Ref vs Let
        </h1>
        <div className='flex flex-row items-center justify-between my-4'>
          <h6 className='font-bold'>State: {a}</h6>
          <button
            className='bg-green-100 py-2 px-2'
            onClick={() => setA(a + 1)}
          >
            Increment
          </button>
        </div>
        <div className='flex flex-row items-center justify-between my-4'>
          <h6 className='font-bold'>Ref: {b.current}</h6>
          <button
            className='bg-green-100 py-2 px-2'
            onClick={() => b.current++}
          >
            Increment
          </button>
        </div>
        <div className='flex flex-row items-center justify-between my-4'>
          <h6 className='font-bold'>Let: {c}</h6>
          <button
            className='bg-green-100 py-2 px-2'
            onClick={() => {
              c++;
              console.log(c);
            }}
          >
            Increment
          </button>
        </div>
      </div>

      <div className='m-4'>
        <p className='my-4'> When State is updated it rerender component</p>
        <p className='my-4'>
          When Ref is updated it doesn't rerender component but keep track of
          updated value
        </p>
        <p className='my-4'>
          So Ref need to be used when we need the updated value. But, it doesn't
          have any impact on the content
        </p>
        <p className='my-4'>
          When state variable is updated the updated Ref is also displayed
        </p>
        <p className='my-4'>
          Although let is incremented it is not displayed on screen as it
          doesn't cause rerender. But, when the state is updated the let
          variable is newly created and loses it's value
        </p>
      </div>
    </div>
  );
};

export default DemoWithUseRef;
