import { useState } from "react";
// import { BtnCreateCategory } from "../UI/Buttons/Buttons";

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddCategoryModal({ isOpen, onClose }: AddCategoryModalProps) {
  const [image, setImage] = useState<File | null>(null);

  if (!isOpen) return null;

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />

      <div className="relative z-10 w-full max-w-md rounded-2xl bg-(--color-neutral-200) p-6">
        <h2 className="text-xl text-(--color-primary-300) font-semibold mb-6 text-center">
          Adicionando categoria
        </h2>

        <label
          htmlFor="category-image"
          className="
            mx-auto mb-6 flex items-center justify-center
            w-28 h-28 rounded-full
            border-2 border-(--color-primary-300)
            cursor-pointer
            overflow-hidden
          "
        >
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-(--color-primary-300) text-sm text-center px-2">
              Adicionar imagem
            </span>
          )}
        </label>

        <input
          id="category-image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />

        <input
          type="text"
          placeholder="Nome da categoria"
          className="
            w-full mb-6 p-2 rounded-lg
            border border-(--color-primary-300)
            bg-transparent
            text-(--color-primary-400)
            outline-none
          "
        />

        <div className="flex gap-10 justify-center">
          <button
            onClick={onClose}
            className="
              border border-(--color-primary-300)
              text-(--color-primary-300)
              hover:bg-(--color-primary-300)
              hover:text-white
              rounded-lg px-4 py-2
              cursor-pointer duration-300
            "
          >
            Cancelar
          </button>

          {/* <BtnCreateCategory /> */}
        </div>
      </div>
    </div>
  );
}
