import { useState } from "react";
import { BtnConfirm } from "../../components/UI/Buttons/Buttons";
import { Play, Home as HomeIcon, Plane } from 'lucide-react';
import { Card } from '../../components/UI/Cards/Cards';
import Modal from "../../components/UI/Modal/Modal";

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex-1 w-full bg-(--color-primary-50) p-10 overflow-y-auto">

      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <h1 className="text-4xl font-bold text-(--color-primary-500)">
          Gerenciamento de Categorias
        </h1>

      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        <Card title="Streaming" icon={<Play size={24} className="text-blue-500" />} />
        <Card title="Construção" icon={<HomeIcon size={24} className="text-orange-500" />} isActive />
        <Card title="Viagem" icon={<Plane size={24} className="text-green-500" />} />
      </div>

      {/* Modal reutilizável */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Category"
      >
        {/* Formulário dentro do modal */}
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-(--color-primary-800)">Category Name</label>
            <input 
              type="text"
              placeholder="Enter category name"
              className="p-2 rounded-lg border border-(--color-primary-300) focus:outline-none focus:ring-2 focus:ring-(--color-primary-400)"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-(--color-primary-800)">Description (optional)</label>
            <input 
              type="text"
              placeholder="Enter description"
              className="p-2 rounded-lg border border-(--color-primary-300) focus:outline-none focus:ring-2 focus:ring-(--color-primary-400)"
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-(--color-primary-500) text-white hover:bg-(--color-primary-600) transition"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default Categories;
