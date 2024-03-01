import React from 'react';
import Button from '../components/Button';
import { FaRegArrowAltCircleLeft, FaRegUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Calisan = () => {
  return (
    <div className="">
      <div className="flex items-center dark:text-white gap-3 ml-3">
        <Link to="/" ><span><FaRegArrowAltCircleLeft /></span></Link> <span className='dark:text-white text-lg'>Yeni Çalışan Kaydı oluştur</span>
      </div>
      <div className='flex  justify-end mt-20 mr-6'>
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
      <div className='w-full p-3 bg-[#F6E7DE] text-[#754525] mt-6'>
        Henüz Eklenmiş Bir Çalışan Kaydı Yok
      </div>
    </div>
  );
}

export default Calisan;
