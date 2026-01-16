import { useState } from "react";
import { Play, Home as HomeIcon, Plane } from 'lucide-react';
import { Card } from '../../components/UI/Cards/Cards';
import { BtnAddCategory, BtnDeleteAccount } from "../../components/UI/Buttons/Buttons";
import { DeleteAccountModal } from "../../components/modals/DeleteAccountModal";
import { AddCategoryModal } from "../../components/modals/AddCategoryModal";

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <main className="flex-1 w-full h-223 bg-(--color-neutral-100) p-10 overflow-y-auto">
      <div className="flex justify-between items-start mb-10">
        <h1 className="text-5xl font-bold text-(--color-primary-300)">
          Categorias
        </h1>

        <BtnAddCategory onClick={() => setIsModalOpen(true)} />
          
        <AddCategoryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        <Card title="Streaming" icon={<Play size={24} className="text-blue-500" />} />
        <Card title="Construção" icon={<HomeIcon size={24} className="text-orange-500" />} isActive />
        <Card title="Viagem" icon={<Plane size={24} className="text-green-500" />} />
      </div>




    </main>
  );
};

export default Categories;
