
import { Button } from "../../components/UI/Buttons/Buttons";
import {InputCategory, InputDate, InputInstallments, InputNameExpense, InputPaymentMethod, InputTotalAmount} from "../../components/UI/Inputs/index";

const AddExpenses = () => {
  return (
    <main className="flex-1 bg-(--color-primary-50) p-10">

      <h1 className="text-4xl font-bold text-(--color-primary-300) mb-10">
        Adicionar Gasto
      </h1>

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
            <label className="text-(--color-primary-400)"> Informe o nome do gasto
              <InputNameExpense />
            </label>

            <label className="text-(--color-primary-400)"> Informe do valor total
              <InputTotalAmount />
            </label>
            
            <label className="text-(--color-primary-400)"> Informe a data da compra
              <InputDate />
            </label>

            <label className="text-(--color-primary-400)"> Informe as parcelas
              <InputInstallments />
            </label>
            
            <label className="text-(--color-primary-400)"> Informe o método de pagamento 
              <InputPaymentMethod />
            </label>
            
            <label className="text-(--color-primary-400)"> Informe a categoria da compra
              <InputCategory />
            </label>

            <div className="md:col-span-2 flex justify-center mt-8">
              <Button variant="primary">
                Adicionar Gasto
              </Button>
            </div>

          </form>
        </div>
      </section>
    </main>
  );
};

export default AddExpenses;
