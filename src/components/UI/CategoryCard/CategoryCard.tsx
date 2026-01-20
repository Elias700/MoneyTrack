import { X } from "lucide-react";
import type { InformationCardProps } from "../../../types/InformationCard";
import { useState } from "react";
import { DeleteCategoryModal } from "../../modals/DeleteCategoryModal";
import { EditCategory, NewExpense } from "../Buttons/Buttons";

interface CategoryCardProps {
  data: InformationCardProps;
  onDelete: (id: number) => void;
}

const DEFAULT_IMAGE = "https://via.placeholder.com/150?text=Categoria";

export function CategoryCard({ data, onDelete }: CategoryCardProps) {

  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const handleConfirmDelete = () => {
    setIsDeleteOpen(false);
  }


  return (
    <div
      className="
        relative rounded-2xl 
        bg-(--color-neutral-200)
        p-6 shadow-sm
        flex flex-col gap-3
      "
    >

      <button
        onClick={() => setIsDeleteOpen(true)}
        className="
          absolute top-4 right-4
          text-(--color-primary-400)
          hover:text-(--color-error)
          transition
          cursor-pointer
        "
      >
        <X size={18} />
      </button>

      <div
        className="
          mx-auto
          w-20 h-20
          md:w-28 
          md:h-28
          lg:w-32 
          lg:h-32
          rounded-full
          overflow-hidden
          border border-(--color-primary-300)
        "
      >
        <img
          src={data.imageUrl || DEFAULT_IMAGE}
          alt={data.name}
          className="
            w-full 
            h-full 
            object-cover
          "
        />
      </div>


      <h3
        className="
            text-lg 
            font-semibold 
            text-(--color-primary-300)
          "
      >
        {data.title}
      </h3>

      <p className="text-(--color-primary-400)">
        {data.name}
      </p>

      <div
        className="
            text-sm 
            text-(--color-primary-500) 
            flex 
            flex-col 
            gap-1
          "
      >
        <span>Parcelas: {data.installments}x</span>
        <span>Data: {data.purchaseDate}</span>
      </div>

      <div
        className="
          mt-2 
          text-lg 
          font-bold 
          text-(--color-primary-300)
        "
      >
        R$ {data.totalValue.toFixed(2)}
      </div>

      <div
        className="
          mt-4
          flex flex-col gap-2
          md:flex-row
        "
      >
        <EditCategory />
        <NewExpense />
      </div>


      <DeleteCategoryModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
        categoryName={data.name}
      />

    </div>
  );
}
