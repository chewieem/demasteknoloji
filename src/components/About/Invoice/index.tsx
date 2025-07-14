import React from 'react';
import Header from '../../Header';
import Banner from '../Banner';
import Footer from '../../Footer';

const Invoice: React.FC = () => {
  return (
    <div>
      <Header language="tr" setLanguage={() => {}} />
      <Banner
        title="Fatura Bilgileri"
        description="Resmi fatura ve ödeme bilgilerimiz"
        image={process.env.PUBLIC_URL + '/banner.png'}
      />
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Fatura Bilgileri</h2>
        <div className="space-y-3 text-gray-800 text-base">
          <div><span className="font-semibold">Firma adı:</span> Demaş Teknoloji A.Ş.</div>
          <div><span className="font-semibold">Merkez adres:</span> Yenibosna Merkez Mah. Kuyumcukent Sok. Kuyumcukent AVM Zemin Kat No:4M/Z265 - İstanbul</div>
          <div><span className="font-semibold">Telefon:</span> +90 (212) 603 33 88</div>
          <div><span className="font-semibold">Vergi Dairesi:</span> Yenibosna Vergi Dairesi</div>
          <div><span className="font-semibold">Vergi Numarası:</span> 274 226 17 55</div>
          <div><span className="font-semibold">Ticaret sicil numarası:</span> 1067485</div>
        </div>
      </div>
      <Footer language="tr" />
    </div>
  );
};

export default Invoice; 