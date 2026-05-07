'use client';

import {
  useEffect,
  useState,
} from 'react';

import LoanProductCard
from './LoanProductCard';

import {
  getLoanProducts,
} from '@/src/lib/api';

export default function
LoanProductsScreen() {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH PRODUCTS
  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts =
    async () => {

      try {

        const data =
          await getLoanProducts();

        setProducts(
          data.products
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

  };

  // LOADING
  if (loading) {

    return (
      <div>
        Loading...
      </div>
    );

  }

  return (
    <div>

      {/* HEADER */}
      <div className="mb-10">

        <h1
          className="
            text-[34px]
            font-bold
            text-[#111827]
          "
        >
          Loan Products
        </h1>

        <p className="text-gray-500 mt-2">
          Explore all available
          loan schemes
        </p>

      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >

        {products.map(
          (product: any) => (

          <LoanProductCard
            key={product.id}
            product={{
              id: product.id,

              name:
                product.name,

              interestRate:
                product.interest_rate,

              maxAmount:
                product.max_amount,

              tenure:
                product.tenure,
            }}
          />

        ))}

      </div>
    </div>
  );
}