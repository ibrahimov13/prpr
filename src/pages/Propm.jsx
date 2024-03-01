import React from 'react';
import { Stacked } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Propm = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div>
              <Stacked currentMode={currentMode} width="420px" height="460px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propm;
