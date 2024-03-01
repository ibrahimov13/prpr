import React from 'react';

const Firma = () => {
  return (
    <div className="p-8">
      <table className='table table-bordered w-full dark:text-white text-black'>
        <tbody class="flex-1 sm:flex-none">
          <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td class="border-grey-light border hover:bg-slate-900 p-3 w-2/5">Firma Adı:</td>
            <td class="border-grey-light border hover:bg-slate-900 p-3 truncate w-3/5">Propm</td>
          </tr>
          <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td class="border-grey-light border hover:bg-slate-900 p-3 w-2/5">Firma Sahibi:</td>
            <td class="border-grey-light border hover:bg-slate-900 p-3 truncate w-3/5"></td>
          </tr>
          <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 w-2/5">
            <td class="border-grey-light border hover:bg-slate-900 p-3">Program Kullanım Süresi:</td>
            <td class="border-grey-light border hover:bg-slate-900 p-3 truncate w-3/5">12 Ay</td>
          </tr>
          <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td class="border-grey-light border hover:bg-slate-900 p-3 w-2/5">Çalışan Sayısı:</td>
            <td class="border-grey-light border hover:bg-slate-900 p-3 truncate w-3/5">0</td>
          </tr>
        </tbody>
      </table>
      <div className='p-4 mt-4 bg-slate-800 rounded-sm'>
      <button
        type="button"
        style={{ backgroundColor: "#28968C", color: "white", borderRadius: "2px", display: "flex" }}
        className={` text-md p-3 w-full hover:drop-shadow-xl hover:bg-[#28968de3] items-center justify-center`}
      >
        <span>Firma Verisi Düzenle</span>
      </button>
      </div>
    </div>
)
};

export default Firma;