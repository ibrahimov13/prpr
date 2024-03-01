import React from 'react';

const FirmaTesis = () => {
  return (
    <div className="p-8">
      <div className='p-4 mt-4 bg-slate-800 rounded-sm'>
        <button
          type="button"
          style={{ backgroundColor: "#28968C", color: "white", borderRadius: "2px", display: "flex" }}
          className={` text-md p-3 w-full hover:drop-shadow-xl hover:bg-[#28968dd9] items-center justify-center`}
        >
          <span>Tesisler</span>
        </button>
        <div className='flex justify-center'>
          <div className='w-1/2 m-8 p-8 dark:bg-white bg-slate-600 rounded-sm'>
            <p className='dark:text-black white text-center'>Örnek</p>
            <p className='dark:text-black white mt-3 text-center'>Örnek</p>
        </div>
        </div>
      </div>
      <div className='p-4 mt-4 bg-slate-800 rounded-sm'>
        <button
          type="button"
          style={{ backgroundColor: "#C76932", color: "white", borderRadius: "2px", display: "flex" }}
          className={` text-md p-3 w-full hover:drop-shadow-xl hover:bg-[#c76932df] items-center justify-center`}
        >
          <span>Tesis Ekle</span>
        </button>
        <div className='flex justify-center'>
          <div className='w-1/2 m-8 dark:bg-slate-900 bg-white rounded-sm'>
            <p className='dark:text-black white text-center flex justify-between items-center p-6'>
              <span className='dark:text-white text-black'>MERKEZ</span>
              <button
                type="button"
                style={{ backgroundColor: "transparent", color: "#28968C", borderRadius: "3px", display: "flex", border: "2px solid #28968C" }}
                className={`font-semibold text-md p-3 w-auto hover:drop-shadow-xl hover:bg-[#c76932df] items-center justify-center`}
              >
                <span>Tesis Ekle</span>
              </button>
            </p>
            <div className="dark:bg-slate-700 bg-white h-1"></div>
            <p className='dark:text-white black text-center p-6'>YENİ TESİS</p>
          </div>
        </div>
      </div>
    </div>
)
};

export default FirmaTesis;