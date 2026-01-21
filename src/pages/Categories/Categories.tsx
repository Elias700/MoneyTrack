import { useState } from "react";
import { CategoryCard } from "../../components/UI/CategoryCard/CategoryCard";
import type { InformationCardProps } from "../../types/InformationCard";
import { Button } from "../../components/UI/Buttons/Buttons";
import { AddCategoryModal } from "../../components/modals/AddCategoryModal";

const mockCategories: InformationCardProps[] = [
  {
    id: 1,
    title: "Cartão de Crédito",
    name: "Netflix",
    installments: 3,
    purchaseDate: "10/01/2026",
    totalValue: 59.90,
  },
  {
    id: 2,
    title: "Compra Parcelada",
    name: "Notebook",
    installments: 12,
    purchaseDate: "05/01/2026",
    totalValue: 4500,
  },
  {
    id: 3,
    title: "Assinatura Mensal",
    name: "Spotify",
    installments: 1,
    purchaseDate: "15/01/2026",
    totalValue: 19.90,
  },
  {
    id: 4,
    title: "Cartão de Crédito",
    name: "Amazon Prime",
    installments: 1,
    purchaseDate: "20/01/2026",
    totalValue: 14.90,
  },
  {
    id: 5,
    title: "Compra Parcelada",
    name: "Smartphone",
    installments: 10,
    purchaseDate: "25/01/2026",
    totalValue: 3200,
  },
  {
    id: 6,
    title: "Assinatura Anual",
    name: "Adobe Creative Cloud",
    installments: 1,
    purchaseDate: "30/01/2026",
    totalValue: 239.88,
  },
  {
    id: 7,
    title: "Assinatura Mensal",
    name: "Adobe Creative",
    installments: 1,
    purchaseDate: "15/01/2026",
    totalValue: 150.00,
  },
  {
    id: 8,
    title: "Assinatura Mensal",
    name: "Adobe Creative",
    installments: 1,
    purchaseDate: "15/01/2026",
    totalValue: 150.00,
  },
  {
    id: 9,
    title: "Assinatura Mensal",
    name: "Adobe Creative",
    installments: 1,
    purchaseDate: "15/01/2026",
    totalValue: 150.00,
  },
  {
    id: 10,
    title: "Assinatura Mensal",
    name: "Adobe Creative",
    installments: 1,
    purchaseDate: "15/01/2026",
    totalValue: 150.00,
  }
];

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    console.log("Excluir categoria:", id);
  };

  return (
    <main
      className="
          
          w-full
          bg-(--color-neutral-100)
        "
    >
      <div
        className="
          flex 
          flex-col 
          gap-4 mb-8
          sm:flex-row 
          sm:items-center 
          sm:justify-between
        "
      >
        <h1
          className="
            text-3xl 
            font-bold 
            text-(--color-primary-300)
          "
        >
          Categorias
        </h1>

        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Adicionar Categoria
        </Button>
      </div>


      <div
        className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6
          "
      >
        {mockCategories.map((category) => (
          <CategoryCard
            key={category.id}
            data={category}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <AddCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

export default Categories;
