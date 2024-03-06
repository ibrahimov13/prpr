import React, { useState, useEffect } from 'react';

const energyTypes = [
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Taşkömürü',
    Katsayi: 0.61,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Kok Kömürü',
    Katsayi: 0.72,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Briket',
    Katsayi: 0.5,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Linyit teshin ve sanayi',
    Katsayi: 0.3,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Linyit santral',
    Katsayi: 0.2,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Elbistan Linyiti',
    Katsayi: 0.11,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Petrokok',
    Katsayi: 0.76,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Prina',
    Katsayi: 0.43,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Talaş',
    Katsayi: 0.3,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Kabuk',
    Katsayi: 0.225,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Grafit',
    Katsayi: 0.8,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Kok tozu',
    Katsayi: 0.6,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Maden',
    Katsayi: 0.55,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Elbistan Linyiti',
    Katsayi: 0.11,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Asfaltit',
    Katsayi: 0.43,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Odun',
    Katsayi: 0.3,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Hayvan ve Bitki Artığı',
    Katsayi: 0.23,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Ham Petrol',
    Katsayi: 1.05,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Fuel Oil No: 4',
    Katsayi: 0.96,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Fuel Oil No: 5',
    Katsayi: 1.003,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Fuel Oil No: 6',
    Katsayi: 0.986,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Motorin',
    Katsayi: 1.02,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Benzin',
    Katsayi: 1.04,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Gazyağı',
    Katsayi: 0.829,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Siyah Likör',
    Katsayi: 0.3,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Nafta',
    Katsayi: 1.04,
  },
  {
    Birim: 'm3',
    'Enerji Kaynağı': 'Doğal Gaz',
    Katsayi: 0.825,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Kok Gazı',
    Katsayi: 0.82,
  },
  {
    Birim: 'm3',
    'Enerji Kaynağı': 'Kok Gazı',
    Katsayi: 0.403,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'Yüksek Fırın Gazı ',
    Katsayi: 0.054,
  },
  {
    Birim: 'm3',
    'Enerji Kaynağı': 'Yüksek Fırın Gazı',
    Katsayi: 0.069,
  },
  {
    Birim: 'm3',
    'Enerji Kaynağı': 'Çelikhane Gazı',
    Katsayi: 0.15,
  },
  {
    Birim: 'm3',
    'Enerji Kaynağı': 'Rafineri Gazı',
    Katsayi: 0.878,
  },
  {
    Birim: 'm3',
    'Enerji Kaynağı': 'Asetilen',
    Katsayi: 1.423,
  },
  {
    Birim: 'm3',
    'Enerji Kaynağı': 'Propan',
    Katsayi: 1.02,
  },
  {
    Birim: 'ton',
    'Enerji Kaynağı': 'LPG',
    Katsayi: 1.09,
  },
  {
    Birim: 'm3',
    'Enerji Kaynağı': 'LPG',
    Katsayi: 2.7,
  },
  {
    Birim: 'kWh',
    'Enerji Kaynağı': 'Elektrik',
    Katsayi: 0.086,
  },
  {
    Birim: 'kWh',
    'Enerji Kaynağı': 'Hidrolik',
    Katsayi: 0.086,
  },
  {
    Birim: 'kWh',
    'Enerji Kaynağı': 'Jeotermal',
    Katsayi: 0.86,
  },
];

const EnergyCalculator = () => {
  const [energyData, setEnergyData] = useState(energyTypes.map((type) => ({ ...type, amount: 0 })));

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [totalTEPs, setTotalTEPs] = useState(0);
  const [selectedData, setSelectedData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const years = [];
  for (let year = 2000; year <= 2030; ++year) {
    years.push(year);
  }

  const months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];

  // Local Storage'dan verileri al
  useEffect(() => {
    const storedSelectedData = JSON.parse(localStorage.getItem('selectedData'));

    if (storedSelectedData) {
      setSelectedData(storedSelectedData);
    }
  }, []);

  // Miktar değiştiğinde hesaplamaları yap
  useEffect(() => {
    const newTotalTEP = energyData.reduce((total, type) => total + type.amount * type[Katsayi], 0);
    setTotalTEPs(newTotalTEP);

    // Local Storage'a verileri kaydet
    localStorage.setItem('selectedData', JSON.stringify(selectedData));
  }, [energyData, selectedData]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleSaveData = () => {
    const newData = {
      year: selectedYear,
      month: selectedMonth,
      totalTEPs: totalTEPs,
    };
    setSelectedData([...selectedData, newData]);
    setIsModalOpen(false);
  };

  const handleSaveModalData = () => {
    setIsModalOpen(true);
  };

  const handleCloseModalData = () => {
    setIsModalOpen(false);
  };

  const handleAmountChange = (index, amount) => {
    const updatedEnergyData = [...energyData];
    updatedEnergyData[index].amount = parseFloat(amount);
    setEnergyData(updatedEnergyData);
  };

  const totalTEP = energyData.reduce((total, type) => total + type.amount * type[Katsayi], 0);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center flex-col w-full max-w-3xl relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ENERJİ KAYNAĞI</th>
              <th className="px-6 py-3">MİKTAR</th>
              <th className="px-6 py-3">BİRİM</th>
              <th className="px-6 py-3 text-center">TEP DEĞERİ</th>
            </tr>
          </thead>
          <tbody>
            {energyData.map((type, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{type['Enerji Kaynağı']}</td>
                <td className="px-6 py-3">
                  <input
                    type="number"
                    value={type.amount}
                    onChange={e => handleAmountChange(index, e.target.value)}
                    className="bg-gray-50 w-6/8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0"
                    min={0}
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{`(${type[Birim]})`}</td>
                <td className="px-6 py-3 text-center">{(type.amount * type[Katsayi]).toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="w-full text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-3 text-center">Toplam TEP: <strong className="text-lg">{totalTEP.toFixed(2)}</strong></p>
      </div>
      <div className="w-full max-w-3xl">
        {/* <!-- Modal toggle --> */}
        <button data-modal-target="timeline-modal" data-modal-toggle="timeline-modal" className="block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base px-5 py-5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800 w-full mt-3 mb-8 uppercase" type="button" onClick={handleSaveModalData}>
          VERİYİ KAYDET
        </button>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-md text-left rtl:text-right text-blue-100 dark:text-blue-100">
            <thead className="text-sm text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Yıl
                </th>
                <th scope="col" className="px-6 py-3">
                  Ay
                </th>
                <th scope="col" className="px-6 py-3">
                  Toplam TEP
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedData && selectedData.slice().reverse().map((data, index) => (
                <tr key={index} className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                  <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Yıl: <strong>{data.year}</strong>
                  </th>
                  <td className="px-6 py-4">
                    Ay: <strong>{data.month}</strong>
                  </td>
                  <td className="px-6 py-4">
                    Toplam TEP: <strong>{data.totalTEPs.toFixed(2)}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <!-- Main modal --> */}
        {isModalOpen &&
          <div
            id="timeline-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="overflow-y-hidden overflow-x-hidden fixed flex z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-black bg-opacity-80"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    TEP Kaydı
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="timeline-modal" onClick={handleCloseModalData}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5">
                  <ol className="relative border-s border-gray-200 dark:border-gray-600 ms-3.5 mb-4 md:mb-5">
                    <li className="mb-10 ms-8">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -start-3.5 ring-8 ring-white dark:ring-gray-700 dark:bg-gray-600">
                        <svg
                          className="w-2.5 h-2.5 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none" viewBox="0 0 20 20"
                        >
                          <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"/>
                        </svg>
                      </span>
                      <h3 className="mb-3 ml-8 text-lg font-semibold text-gray-900 dark:text-white">Yılı Seçin</h3>
                      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedYear} onChange={handleYearChange} required>
                        <option value="">Seçiniz</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </li>
                    <li className="ms-8">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -start-3.5 ring-8 ring-white dark:ring-gray-700 dark:bg-gray-600">
                        <svg className="w-2.5 h-2.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z" /></svg>
                      </span>
                      <h3 className="mb-3 ml-8 text-lg font-semibold text-gray-900 dark:text-white">Ayı Seçin</h3>
                      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedMonth} onChange={handleMonthChange} required={true}>
                        <option value="">Seçiniz</option>
                        {months.map((month, index) => (
                          <option key={index} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                    </li>
                  </ol>
                  <button className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSaveData} type="submit">
                    Veriyi Kaydını tamamla
                  </button>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default EnergyCalculator;
