import { useState } from 'react';

import { findPrime } from '../../common/utils/findPrime';

const DemoWithoutMemo = () => {
  const [inputValue, setInputValue] = useState(0);
  const [theme, setTheme] = useState(false);

  const prime = findPrime(inputValue);

  return (
    <div className='flex flex-col w-96 h-96'>
      <div
        className={
          'border border-black w-96 p-4 m-4 h-96 ' + (theme && 'bg-black ')
        }
      >
        <h1 className={'font-bold mb-4 ' + (theme && 'text-white')}>
          Intensive computation without useMemo
        </h1>

        <div className='text-center mb-2'>
          <button
            className='bg-green-100 py-2 px-1 m-1'
            onClick={() => setTheme(!theme)}
          >
            Toggle Theme
          </button>
        </div>
        <input
          className='border border-black'
          type='text'
          placeholder='Enter a number'
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
        />
        <h6 className={'font-bold ' + (theme && 'text-white')}>
          nth prime: {prime}
        </h6>
      </div>
      <div className='m-4'>
        <p>Enter any six digit in input and try toggling theme to see delay</p>
      </div>
    </div>
  );
};

export default DemoWithoutMemo;
