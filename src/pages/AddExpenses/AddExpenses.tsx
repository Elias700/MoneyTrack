
import { InputNameExpense } from "../../components/UI/Inputs/Inputs";
import { InputTotalAmount } from "../../components/UI/Inputs/Inputs";
import { InputDate } from "../../components/UI/Inputs/Inputs";
import { InputInstallments } from "../../components/UI/Inputs/Inputs";
import { InputPaymentMethod } from "../../components/UI/Inputs/Inputs";
import { InputCategory } from "../../components/UI/Inputs/Inputs";
import { BtnAddExpense } from "../../components/UI/Buttons/Buttons";

const AddExpenses = () => {
  return (
    <main className="flex-1 bg-(--color-primary-50) p-10">
      
      {/* TÍTULO (fora do card) */}
      <h1 className="text-4xl font-bold text-(--color-primary-300) mb-10">
        Adicionar Gasto
      </h1>

      {/* CARD DO FORMULÁRIO */}
      <section className="flex justify-center">
        <div
          className="
            w-full max-w-4xl
            bg-(--color-neutral-200)
            rounded-xl
            shadow-md
            p-10
          "
        >
          <form
            className="
              grid grid-cols-1 md:grid-cols-2
              gap-x-12 gap-y-8
            "
          >
            <InputNameExpense />
            <InputTotalAmount />
            <InputDate />
            <InputInstallments />
            <InputPaymentMethod />
            <InputCategory />

            {/* BOTÃO CENTRALIZADO */}
            <div className="md:col-span-2 flex justify-center mt-8">
                <BtnAddExpense />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddExpenses;
