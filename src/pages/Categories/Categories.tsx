
import { BtnConfirm } from "../../components/UI/Buttons/Buttons";
import { Play, Home as HomeIcon, Plane } from 'lucide-react';
import { Card } from '../../components/UI/Cards/Cards'

// 1. Defina os DADOS para CADA CARD separadamente
const streamingData = {
    title: "Streaming",
    icon: <Play size={24} className="text-blue-500" />,
    total: "R$ 150,00",
    items: [
        { label: "Netflix", value: "R$ 75,00", details: "- 5x" },
        { label: "HBO MAX", value: "R$ 75,00", details: "- 5x" },
    ],
    isActive: false,
};

const construcaoData = {
    title: "Construção",
    icon: <HomeIcon size={24} className="text-orange-500" />,
    total: "R$ 1.270,99",
    items: [
        { label: "Piso", value: "R$ 895,99", details: "- 8x" },
        { label: "Tinta", value: "R$ 375,00", details: "- 5x" },
    ],
    isActive: true, // Este card estará azul
};

// Você pode usar um array para mapear muitos cards!
const cardsData = [streamingData, construcaoData, /* mais dados... */];

const Categories = () => {

    return (
        <main className="flex-1 w-full bg-(--color-primary-50) p-10 overflow-y-auto">
            <div className="flex justify-between items-start mb-10">
                <h1 className="text-4xl font-bold text-(--color-primary-500)">
                    Gerenciamento de Categorias
                </h1>
                <BtnConfirm />

            </div>

            <div className="p-6 bg-white rounded-xl shadow">
                <p>Aqui você pode listar e gerenciar suas categorias de gastos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">

                {/* 2. Mapeie o Array de dados para renderizar múltiplos Cards */}
                {cardsData.map((data, index) => (
                    <Card
                        key={index} // Chave única para o React
                        title={data.title}
                        icon={data.icon}
                        items={data.items}
                        total={data.total}
                        isActive={data.isActive}
                        onClose={() => console.log(`Fechou ${data.title}`)}
                    />
                ))}

                {/* Você também pode usar individualmente */}
                <Card
                    title={"Viagem"}
                    icon={<Plane size={24} className="text-green-500" />}
                    items={[
                        { label: "Passagem", value: "R$ 1.490,00", details: "- 3x" },
                        { label: "Passaporte", value: "R$ 445,50", details: "- 2x" }
                    ]}
                    total={"R$ 1.935,50"}
                />
            </div>
        </main>
    );
};

export default Categories;