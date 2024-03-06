import EnergyCalculator from '../components/EnergyCalculator';

import React from 'react';

const TepHesapla = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full max-w-6xl flex flex-col items-center justify-center mb-6">
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-[38px] dark:text-white">Enerji <span class="text-blue-600 dark:text-blue-500">TEP</span> Hesaplayıcı</h1>
                <p class="text-md font-normal text-gray-500 lg:text-md dark:text-gray-400 text-justify">Ton eşdeğer petrol (TEP), bir ton ham petrolün yanmasıyla elde edilen enerjiye karşılık gelen enerji birimidir. Yaklaşık olarak 10 milyon kcal enerjiyi ifade eder. Tüm enerji kaynaklarının TEP'e dönüşüm katsayıları 25 Ekim 2008 tarihli Enerji Kaynaklarının ve Enerjinin Kullanımında Verimliliğin Artırılmasına Dair Yönetmelik ile belirlenmiştir. Yapılan hesaplarda bu değerler dikkate alınmalıdır</p>
            </div>
            <EnergyCalculator />
        </div>
    );
}

export default TepHesapla;
