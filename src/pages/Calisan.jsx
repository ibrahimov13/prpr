import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft, FaRegUser } from 'react-icons/fa';
import Button from '../components/Button';

const Calisan = () => (
  <div>
    <div className="flex items-center dark:text-white gap-3 ml-3">
      <Link to="/"><span><FaRegArrowAltCircleLeft /></span></Link> <span className="dark:text-white text-lg">Yeni Çalışan Kaydıoluştur</span>
    </div>
    <div className="flex  justify-end mt-20 mr-6">
      <Button
        icon={<FaRegUser />}
        bgColor="#C76932"
        color="white"
        bgHoverColor="#C76932"
        size="md"
        text="Yeni Çalışan Kaydı oluştur"
        borderRadius="8px"
        width="auto"
        display="flex"
        gap="3"
        secondColor="#A9592B"
      />
    </div>
    <div className="w-full p-3 bg-[#F6E7DE] text-[#754525] mt-6">
      Henüz Eklenmiş Bir Çalışan Kaydı Yok
    </div>
  </div>
);

export default Calisan;
