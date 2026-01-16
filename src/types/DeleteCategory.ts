
export interface DeleteCategory {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  categoryName?: string;
}