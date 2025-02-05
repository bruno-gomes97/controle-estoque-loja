'use client'

import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";

interface Product {
    descricao: string;
    tamanho: string;
    fornecedor: string;
    precoCusto: string;
    precoVenda: string;
    quantidade: number;
} 

export default function TelaInicial() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
        setProducts(storedProducts)
    }, [])

    return (
        <section className="flex flex-col justify-center items-center">
            <Navbar isClient={false}/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-full px-4">
                {products.map((product, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">{product.descricao}</h3>
                        <p className="text-sm text-gray-600">Tamanho: {product.tamanho}</p>
                        <p className="text-sm text-gray-600">Quantidade: {product.quantidade}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}