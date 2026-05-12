// 'use client';

// import { useRouter, useParams } from 'next/navigation';
// import { useState, useEffect } from 'react';

// import Button from '@/components/common/Button';
// import Input from '@/components/common/Input';

// import {
//   getLoanProduct,
//   getEligibilityFields,
//   checkEligibility,
// } from '@/src/lib/api';

// export default function EligibilityScreen() {
//   const router = useRouter();
//   const params = useParams();

//   const id = params?.id as string;
//   const loanId = Number(id);

//   const [product, setProduct] = useState<any>(null);

//   const [fields, setFields] = useState<any[]>([]);
//   const [formData, setFormData] = useState<Record<string, string>>({});
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);

//   // Debug log
//   console.log("Eligibility Page Loaded with ID:", id);

//   useEffect(() => {
//     if (!id) return;

//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const [productRes, fieldsRes] = await Promise.all([
//           getLoanProduct(id),
//           getEligibilityFields(loanId)

//         ]);

//         console.log("Product API Response:", productRes);
//         console.log("Fields API Response:", fieldsRes);

//         const productData = productRes?.product || productRes?.data?.product || null;
//         const normalizedFields = fieldsRes?.fields ?? fieldsRes?.data?.fields ?? [];

//         setProduct(productData);
//         setFields(normalizedFields);

//       } catch (err) {
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handleChange = (name: string, value: string) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleCheck = async () => {
//     if (!id) return;

//     setSubmitting(true);
//     try {
//       const data = await checkEligibility({
//         loanId: id,
//         ...formData,
//       });
//       console.log("FORM DATA SENT:", formData);

//       const query = new URLSearchParams({
//   eligible: String(data.eligible),
//   amount: String(data.result?.eligibleAmount || ''),
//   interest: String(data.result?.interestRate || ''),
//   tenure: String(data.result?.tenure || ''),
// });

// router.push(`/dashboard/eligibility-result/${id}?${query.toString()}`);


     
//     } catch (err) {
//       console.error(err);
//       alert("Failed to check eligibility. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return <div className="text-center py-20">Loading eligibility form...</div>;
//   }

//   if (!product) {
//     return <div className="text-center py-20 text-red-600">Product not found (ID: {id})</div>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <div className="bg-white rounded-[28px] border border-[#E9EDF5] p-8 shadow-sm">
//         <h1 className="text-3xl font-bold text-[var(--color-navy)]">
//           Eligibility Check
//         </h1>
//         <p className="text-[var(--text-muted)] mt-2">{product.name}</p>

//         <div className="grid md:grid-cols-2 gap-5 mt-8">
//           {fields.map((field) => (
//             <Input
//               key={field.field_name}
//               label={field.field_label}
//               type={field.field_type || "text"}
//               placeholder={field.placeholder}
//               value={formData[field.field_name] || ''}
//               onChange={(e) => handleChange(field.field_name, e.target.value)}
//             />
//           ))}
//         </div>

//         <div className="mt-8">
//           <Button 
//             onClick={handleCheck} 
//             loading={submitting}
//             disabled={submitting}
//           >
//             Check Eligibility
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

import {
  getLoanProduct,
  getEligibilityFields,
  checkEligibility,
} from '@/src/lib/api';

export default function EligibilityScreen() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<any>(null);
  const [fields, setFields] = useState<any[]>([]);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const [productRes, fieldsRes] = await Promise.all([
          getLoanProduct(id),
          getEligibilityFields(Number(id)),
        ]);

        const productData = productRes?.product || productRes?.data?.product || null;
        const normalizedFields = fieldsRes?.fields ?? fieldsRes?.data?.fields ?? [];

        setProduct(productData);
        setFields(normalizedFields);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleCheck = async () => {
  //   if (!id) return;

  //   setSubmitting(true);
  //   try {
  //     const data = await checkEligibility({
  //       loanId: id,
  //       ...formData,
  //     });

  //     const query = new URLSearchParams({
  //       eligible: String(data.eligible),
  //       amount: String(data.result?.eligibleAmount || ''),
  //       interest: String(data.result?.interestRate || ''),
  //       tenure: String(data.result?.tenure || ''),
  //     });

  //     router.push(`/dashboard/eligibility-result/${id}?${query.toString()}`);
  //   } catch (err) {
  //     console.error(err);
  //     alert("Failed to check eligibility. Please try again.");
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

const handleCheck = async () => {
  if (!id) return;

  setSubmitting(true);
  try {
    const data = await checkEligibility({
      loanId: id,
      ...formData,
    });

    console.log("✅ Full Data Received:", JSON.stringify(data, null, 2));

    const query = new URLSearchParams({
      eligible: String(data.eligible ?? false),
      amount: String(data.result?.eligibleAmount ?? 0),
      interest: String(data.result?.interestRate ?? 0),
      tenure: String(data.result?.tenure ?? 0),
    });

    console.log("🔗 Final URL:", `/dashboard/eligibility-result/${id}?${query.toString()}`);

    router.push(`/dashboard/eligibility-result/${id}?${query.toString()}`);
  } catch (err) {
    console.error("Error:", err);
    alert("Failed to check eligibility. Please try again.");
  } finally {
    setSubmitting(false);
  }
};



  if (loading) return <div className="text-center py-20">Loading eligibility form...</div>;
  if (!product) return <div className="text-center py-20 text-red-600">Product not found (ID: {id})</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-[28px] border border-[#E9EDF5] p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[var(--color-navy)]">Eligibility Check</h1>
        <p className="text-[var(--text-muted)] mt-2">{product.name}</p>

        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {fields.map((field) => (
            <Input
              key={field.field_name}
              label={field.field_label}
              type={field.field_type || "text"}
              placeholder={field.placeholder}
              value={formData[field.field_name] || ''}
              onChange={(e) => handleChange(field.field_name, e.target.value)}
            />
          ))}
        </div>

        <div className="mt-8">
          <Button onClick={handleCheck} loading={submitting} disabled={submitting}>
            Check Eligibility
          </Button>
        </div>
      </div>
    </div>
  );
}