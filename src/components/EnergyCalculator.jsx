import React, { useState, useEffect } from 'react';

const energyenerjiTypes = [
  {
    unit: 'ton',
    'Power Supply': 'Taşkömürü',
    fixed: 0.61,
  },
  {
    unit: 'ton',
    'Power Supply': 'Kok Kömürü',
    fixed: 0.72,
  },
  {
    unit: 'ton',
    'Power Supply': 'Briket',
    fixed: 0.5,
  },
  {
    unit: 'ton',
    'Power Supply': 'Linyit teshin ve sanayi',
    fixed: 0.3,
  },
  {
    unit: 'ton',
    'Power Supply': 'Linyit santral',
    fixed: 0.2,
  },
  {
    unit: 'ton',
    'Power Supply': 'Elbistan Linyiti',
    fixed: 0.11,
  },
  {
    unit: 'ton',
    'Power Supply': 'Petrokok',
    fixed: 0.76,
  },
  {
    unit: 'ton',
    'Power Supply': 'Prina',
    fixed: 0.43,
  },
  {
    unit: 'ton',
    'Power Supply': 'Talaş',
    fixed: 0.3,
  },
  {
    unit: 'ton',
    'Power Supply': 'Kabuk',
    fixed: 0.225,
  },
  {
    unit: 'ton',
    'Power Supply': 'Grafit',
    fixed: 0.8,
  },
  {
    unit: 'ton',
    'Power Supply': 'Kok tozu',
    fixed: 0.6,
  },
  {
    unit: 'ton',
    'Power Supply': 'Maden',
    fixed: 0.55,
  },
  {
    unit: 'ton',
    'Power Supply': 'Elbistan Linyiti',
    fixed: 0.11,
  },
  {
    unit: 'ton',
    'Power Supply': 'Asfaltit',
    fixed: 0.43,
  },
  {
    unit: 'ton',
    'Power Supply': 'Odun',
    fixed: 0.3,
  },
  {
    unit: 'ton',
    'Power Supply': 'Hayvan ve Bitki Artığı',
    fixed: 0.23,
  },
  {
    unit: 'ton',
    'Power Supply': 'Ham Petrol',
    fixed: 1.05,
  },
  {
    unit: 'ton',
    'Power Supply': 'Fuel Oil No: 4',
    fixed: 0.96,
  },
  {
    unit: 'ton',
    'Power Supply': 'Fuel Oil No: 5',
    fixed: 1.003,
  },
  {
    unit: 'ton',
    'Power Supply': 'Fuel Oil No: 6',
    fixed: 0.986,
  },
  {
    unit: 'ton',
    'Power Supply': 'Motorin',
    fixed: 1.02,
  },
  {
    unit: 'ton',
    'Power Supply': 'Benzin',
    fixed: 1.04,
  },
  {
    unit: 'ton',
    'Power Supply': 'Gazyağı',
    fixed: 0.829,
  },
  {
    unit: 'ton',
    'Power Supply': 'Siyah Likör',
    fixed: 0.3,
  },
  {
    unit: 'ton',
    'Power Supply': 'Nafta',
    fixed: 1.04,
  },
  {
    unit: 'm3',
    'Power Supply': 'Doğal Gaz',
    fixed: 0.825,
  },
  {
    unit: 'ton',
    'Power Supply': 'Kok Gazı',
    fixed: 0.82,
  },
  {
    unit: 'm3',
    'Power Supply': 'Kok Gazı',
    fixed: 0.403,
  },
  {
    unit: 'ton',
    'Power Supply': 'Yüksek Fırın Gazı ',
    fixed: 0.054,
  },
  {
    unit: 'm3',
    'Power Supply': 'Yüksek Fırın Gazı',
    fixed: 0.069,
  },
  {
    unit: 'm3',
    'Power Supply': 'Çelikhane Gazı',
    fixed: 0.15,
  },
  {
    unit: 'm3',
    'Power Supply': 'Rafineri Gazı',
    fixed: 0.878,
  },
  {
    unit: 'm3',
    'Power Supply': 'Asetilen',
    fixed: 1.423,
  },
  {
    unit: 'm3',
    'Power Supply': 'Propan',
    fixed: 1.02,
  },
  {
    unit: 'ton',
    'Power Supply': 'LPG',
    fixed: 1.09,
  },
  {
    unit: 'm3',
    'Power Supply': 'LPG',
    fixed: 2.7,
  },
  {
    unit: 'kWh',
    'Power Supply': 'Elektrik',
    fixed: 0.086,
  },
  {
    unit: 'kWh',
    'Power Supply': 'Hidrolik',
    fixed: 0.086,
  },
  {
    unit: 'kWh',
    'Power Supply': 'Jeotermal',
    fixed: 0.86,
  },
];

// const years = [];
// for (let year = 2000; year <= 2030; ++year) {
//   years.push(year);
// }

const years = Array.from({ length: 31 }, (_, i) => 2000 + i);

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

const EnergyCalculator = () => {
  const [energyData, setEnergyData] = useState(energyenerjiTypes.map((enerjiType) => ({ ...enerjiType, amount: 0 })));

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [totals, setTotals] = useState(0);
  const [selectedData, setSelectedData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveModalData = () => {
    setIsModalOpen(true);
  };

  const handleCloseModalData = () => {
    setIsModalOpen(false);
  };

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
      total: totals,
    };
    setSelectedData([...selectedData, newData]);
    setIsModalOpen(false);
  };

  // Local Storage'dan verileri al
  useEffect(() => {
    const storedSelectedData = JSON.parse(localStorage.getItem('selectedData'));

    if (storedSelectedData) {
      setSelectedData(storedSelectedData);
    }
  }, []);

  // Miktar değiştiğinde hesaplamaları yap
  useEffect(() => {
    const newTotals = energyData.reduce((total, enerjiType) => total + enerjiType.amount * enerjiType.fixed, 0);
    setTotals(newTotals);

    // Local Storage'a verileri kaydet
    localStorage.setItem('selectedData', JSON.stringify(selectedData));
  }, [energyData, selectedData]);

  const handleAmountChange = (index, amount) => {
    const updatedEnergyData = [...energyData];
    updatedEnergyData[index].amount = parseFloat(amount);
    setEnergyData(updatedEnergyData);
  };

  const totalTEP = energyData.reduce((total, enerjiType) => total + enerjiType.amount * enerjiType.fixed, 0);

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
            {energyData.map((enerjiType, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{enerjiType['Power Supply']}</td>
                <td className="px-6 py-3">
                  <input
                    enerjiType="number"
                    value={enerjiType.amount}
                    onChange={(e) => handleAmountChange(index, e.target.value)}
                    className="bg-gray-50 w-6/8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0"
                    min={0}
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{`(${enerjiType.unit})`}</td>
                <td className="px-6 py-3 text-center">{(enerjiType.amount * enerjiType.fixed).toFixed(3)}</td>
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
                    Toplam TEP: <strong>{data.total.toFixed(2)}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <!-- Main modal --> */}
        {isModalOpen && (
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
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5">
                  <ol className="relative border-s border-gray-200 dark:border-gray-600 ms-3.5 mb-4 md:mb-5">
                    <li className="mb-10 ms-8">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -start-3.5 ring-8 ring-white dark:ring-gray-700 dark:bg-gray-600">
                        svg
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
                        svg
                      </span>
                      <h3 className="mb-3 ml-8 text-lg font-semibold text-gray-900 dark:text-white">Ayı Seçin</h3>
                      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedMonth} onChange={handleMonthChange} required>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default EnergyCalculator;
