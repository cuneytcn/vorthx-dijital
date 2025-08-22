type Category = {
    name: string;
    count: number;
    active: boolean;
};

interface CategoriesProps {
    data: Category[];
}

export default function Categories({ data }: CategoriesProps) {
    return (
        <>
            {data?.map((category, index) => (
                <button
                    key={index}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                        category.active
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                    }`}>
                    <span className="font-medium">{category.name}</span>
                    <span
                        className={`rounded-full px-2 py-1 text-xs ${
                            category.active ? 'bg-white/20' : 'bg-gray-200'
                        }`}>
                        {category.count}
                    </span>
                </button>
            ))}
        </>
    );
}
