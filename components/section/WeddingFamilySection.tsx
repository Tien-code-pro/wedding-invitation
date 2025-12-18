'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import { weddingFamilyData } from '@/components/data/wedding';

export default function WeddingFamilySection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const { background, groom, bride } = weddingFamilyData;

  const people = [
    {
      role: 'groom',
      ...groom,
    },
    {
      role: 'bride',
      ...bride,
    },
  ];

  return (
    <>
      <section className="w-full py-32 bg-[#fffaf5] flex justify-center">
        <div className="relative w-[92%] max-w-[900px] min-h-[85vh] rounded-[56px] overflow-hidden shadow-2xl">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <Image
              src={background}
              alt="Wedding background"
              fill
              className="object-cover blur-[5px] scale-110"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 px-10 md:px-14 py-20 h-full flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-white w-full">
              {/* GROOM */}
              <PersonCard data={groom} onClickImage={setActiveImage} />

              {/* FAMILY INFO */}
              <div className="flex flex-col items-center text-center space-y-12">
                {[groom.family, bride.family].map((family, index) => (
                  <div key={index}>
                    <p className="uppercase text-[11px] tracking-[0.35em] text-white/70 mb-4">
                      {family.title}
                    </p>
                    <p className=" text-lg">Ông: {family.father}</p>
                    <p className=" text-lg">Bà: {family.mother}</p>
                  </div>
                ))}

                <div className="flex items-center justify-center">
                  <div className="w-16 h-[1px] bg-white/30" />
                  <span className="mx-4 text-2xl">💍</span>
                  <div className="w-16 h-[1px] bg-white/30" />
                </div>
              </div>

              {/* BRIDE */}
              <PersonCard data={bride} onClickImage={setActiveImage} />
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/70 hover:text-white"
            onClick={() => setActiveImage(null)}
          >
            <X size={36} />
          </button>

          <div className="relative w-full max-w-5xl h-[85vh]">
            <Image
              src={activeImage}
              alt="Full image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

/* ================= SUB COMPONENT ================= */

type PersonCardProps = {
  data: {
    name: string;
    image: string;
    quote: string;
  };
  onClickImage: (src: string) => void;
};

function PersonCard({ data, onClickImage }: PersonCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        onClick={() => onClickImage(data.image)}
        className="relative w-52 h-72 rounded-xl overflow-hidden shadow-xl cursor-zoom-in shake-on-hover"
      >
        <Image src={data.image} alt={data.name} fill className="object-cover" />
      </div>

      <h3 className="mt-8 font-[var(--font-great-vibes)] text-5xl">
        {data.name}
      </h3>

      <p className="mt-4 max-w-xs  italic text-white/90 leading-relaxed vn-text">
        “{data.quote}”
      </p>
    </div>
  );
}
