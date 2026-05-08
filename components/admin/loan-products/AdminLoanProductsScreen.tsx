// "use client";

// import { useState } from "react";


// import LoanProductForm from "./LoanProductForm";
// import {
//   createLoanProduct,
//   getLoanProducts,
// } from '@/src/lib/api';

// import {
//   useEffect,
// } from 'react';

// import { usePathname } from 'next/navigation';

// export default function AdminLoanProductsScreen() {
//   const [products, setProducts] = useState<any[]>(
//     []
//   );
//   const pathname = usePathname();



// const handleAddProduct =
//   async (data: any) => {

//     try {

//       await createLoanProduct(data);

//       alert('Loan product created');

//       fetchProducts();

//     } catch (error) {

//       console.log(error);

//       alert('Failed to create product');

//     }

// };

// useEffect(() => {
//   fetchProducts();
// }, [pathname]);


// const fetchProducts =
//   async () => {

//     try {

//       const data =
//         await getLoanProducts();

//       setProducts(
//         data.products || []
//       );

//     } catch (error) {

//       console.log(error);

//     }

// };

//   return (
//     <div>
//       {/* HEADER */}
//       <div className="mb-8">
//         <h1 className="text-[34px] font-bold text-[#111827]">
//           Loan Products
//         </h1>

//         <p className="text-gray-500 mt-2">
//           Create and manage loan schemes
//         </p>
//       </div>

//       {/* FORM */}
//       <LoanProductForm
//         onSubmit={handleAddProduct}
//       />

//       {/* PRODUCT LIST */}
//       <div className="mt-10 bg-white rounded-[28px] border border-[#E9EDF5] shadow-sm">
//         <div className="p-6 border-b border-[#EEF2F7]">
//           <h2 className="text-lg font-semibold text-[#111827]">
//             Created Products
//           </h2>
//         </div>

//         {products.length === 0 ? (
//           <div className="p-10 text-center text-gray-500">
//             No loan products created
//           </div>
//         ) : (
//           <div className="divide-y divide-[#EEF2F7]">
//             {products.map((item) => (
//               <div
//                 key={item.id}
//                 className="p-6 flex items-center justify-between"
//               >
//                 <div>
//                   <h3 className="font-semibold text-[#111827]">
//                     {item.name}
//                   </h3>

//                   <p className="text-sm text-gray-500 mt-1">
//                     {item.interest_rate} Interest •
//                     {item.max_amount}
//                   </p>
//                 </div>

//                 <span className="px-3 py-1 rounded-full text-xs bg-[#EEF2FF] text-[#4F46E5]">
//                   Active
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Plus, X, Trash2 } from 'lucide-react';

import LoanProductForm from './LoanProductForm';
import {
  createLoanProduct,
  getLoanProducts,
  getEligibilityFields,
  addEligibilityField,
  deleteEligibilityField,
  getEligibilityRules,
  addEligibilityRule,
  deleteEligibilityRule,
} from '@/src/lib/api';

// ─── Types ───────────────────────────────────────────────
interface EligibilityField {
  id?: number;
  field_name: string;
  field_label: string;
  field_type: string;
  placeholder: string;
  is_required: boolean;
}

interface EligibilityRule {
  id?: number;
  field_name: string;
  operator: string;
  value: string;
}

const emptyField = {
  fieldName: '',
  fieldLabel: '',
  fieldType: 'number',
  placeholder: '',
  isRequired: true,
};

const emptyRule = {
  fieldName: '',
  operator: '>=',
  value: '',
};

export default function AdminLoanProductsScreen() {
  const pathname = usePathname();

  // ── Products ──────────────────────────────────────────
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ── Modal ─────────────────────────────────────────────
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  // ── Eligibility data ──────────────────────────────────
  const [fields, setFields] = useState<EligibilityField[]>([]);
  const [rules, setRules] = useState<EligibilityRule[]>([]);

  // ── Add field form ────────────────────────────────────
  const [showAddField, setShowAddField] = useState(false);
  const [newField, setNewField] = useState(emptyField);
  const [savingField, setSavingField] = useState(false);

  // ── Add rule form ─────────────────────────────────────
  const [showAddRule, setShowAddRule] = useState(false);
  const [newRule, setNewRule] = useState(emptyRule);
  const [savingRule, setSavingRule] = useState(false);

  // ─────────────────────────────────────────────────────
  useEffect(() => {
    fetchProducts();
  }, [pathname]);

  const fetchProducts = async () => {
    try {
      const data = await getLoanProducts();
      setProducts(data.products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (data: any) => {
    try {
      await createLoanProduct(data);
      alert('Loan product created');
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert('Failed to create product');
    }
  };

  // ── Open modal — fetch fields + rules from DB ─────────
  const handleOpenEligibility = async (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
    setShowAddField(false);
    setShowAddRule(false);
    setNewField(emptyField);
    setNewRule(emptyRule);
    setFields([]);
    setRules([]);

    try {
      setModalLoading(true);
      const [fieldsRes, rulesRes] = await Promise.all([
        getEligibilityFields(product.id),
        getEligibilityRules(product.id),
      ]);
      setFields(fieldsRes.fields || []);
      setRules(rulesRes.rules || []);
    } catch (error) {
      console.error('Failed to load eligibility data', error);
    } finally {
      setModalLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setFields([]);
    setRules([]);
  };

  // ── Add field ─────────────────────────────────────────
  const handleAddField = async () => {
    if (!newField.fieldName || !newField.fieldLabel) {
      alert('Field name and label are required');
      return;
    }

    try {
      setSavingField(true);
      await addEligibilityField({
        loanId: selectedProduct.id,
        ...newField,
      });

      // Refresh fields from DB
      const res = await getEligibilityFields(selectedProduct.id);
      setFields(res.fields || []);
      setNewField(emptyField);
      setShowAddField(false);
    } catch (error) {
      console.error(error);
      alert('Failed to add field');
    } finally {
      setSavingField(false);
    }
  };

  // ── Delete field ──────────────────────────────────────
  const handleDeleteField = async (id: number) => {
    if (!confirm('Delete this field?')) return;

    try {
      await deleteEligibilityField(id);
      setFields((prev) => prev.filter((f: any) => f.id !== id));
    } catch (error) {
      console.error(error);
      alert('Failed to delete field');
    }
  };

  // ── Add rule ──────────────────────────────────────────
  const handleAddRule = async () => {
    if (!newRule.fieldName || !newRule.value) {
      alert('Field name and value are required');
      return;
    }

    try {
      setSavingRule(true);
      await addEligibilityRule({
        loanId: selectedProduct.id,
        ...newRule,
      });

      // Refresh rules from DB
      const res = await getEligibilityRules(selectedProduct.id);
      setRules(res.rules || []);
      setNewRule(emptyRule);
      setShowAddRule(false);
    } catch (error) {
      console.error(error);
      alert('Failed to add rule');
    } finally {
      setSavingRule(false);
    }
  };

  // ── Delete rule ───────────────────────────────────────
  const handleDeleteRule = async (id: number) => {
    if (!confirm('Delete this rule?')) return;

    try {
      await deleteEligibilityRule(id);
      setRules((prev) => prev.filter((r: any) => r.id !== id));
    } catch (error) {
      console.error(error);
      alert('Failed to delete rule');
    }
  };

  // ─────────────────────────────────────────────────────
  if (loading) {
    return <div className="p-10 text-gray-500">Loading...</div>;
  }

  return (
    <div>
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-[34px] font-bold text-[#111827]">Loan Products</h1>
        <p className="text-gray-500 mt-2">Create and manage loan schemes</p>
      </div>

      {/* CREATE FORM */}
      <LoanProductForm onSubmit={handleAddProduct} />

      {/* PRODUCT LIST */}
      <div className="mt-10 bg-white rounded-[28px] border border-[#E9EDF5] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[#EEF2F7]">
          <h2 className="text-lg font-semibold text-[#111827]">Created Products</h2>
        </div>

        {products.length === 0 ? (
          <div className="p-10 text-center text-gray-500">No loan products created</div>
        ) : (
          <div className="divide-y divide-[#EEF2F7]">
            {products.map((item) => (
              <div key={item.id} className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[#111827] text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.interest_rate} Interest • Max {item.max_amount}
                  </p>
                </div>

                <button
                  onClick={() => handleOpenEligibility(item)}
                  className="px-5 py-2.5 rounded-2xl bg-[#4F46E5] text-white text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2"
                >
                  <Plus size={16} />
                  Add Eligibility
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── ELIGIBILITY MODAL ─────────────────────────── */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-5xl rounded-[32px] p-8 relative max-h-[90vh] overflow-y-auto">

            {/* Close */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-all"
            >
              <X size={18} />
            </button>

            <h2 className="text-3xl font-bold text-[#111827]">{selectedProduct.name}</h2>
            <p className="text-gray-500 mt-1">Manage eligibility fields and rules</p>

            {modalLoading ? (
              <div className="py-20 text-center text-gray-400">Loading eligibility data...</div>
            ) : (
              <>
                {/* ── ELIGIBILITY FIELDS ─────────────────── */}
                <div className="mt-10">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-semibold text-[#111827]">Eligibility Fields</h3>
                    <button
                      onClick={() => { setShowAddField(true); setShowAddRule(false); }}
                      className="px-4 py-2 rounded-xl bg-[#EEF2FF] text-[#4F46E5] text-sm font-medium hover:bg-[#E0E7FF] transition-all"
                    >
                      + Add Field
                    </button>
                  </div>

                  {/* Add field form */}
                  {showAddField && (
                    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5 mb-4">
                      <h4 className="font-semibold text-[#111827] mb-4">New Field</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">Field Name *</label>
                          <input
                            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5]"
                            placeholder="e.g. monthlyIncome"
                            value={newField.fieldName}
                            onChange={(e) => setNewField((p) => ({ ...p, fieldName: e.target.value }))}
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">Field Label *</label>
                          <input
                            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5]"
                            placeholder="e.g. Monthly Income"
                            value={newField.fieldLabel}
                            onChange={(e) => setNewField((p) => ({ ...p, fieldLabel: e.target.value }))}
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">Field Type</label>
                          <select
                            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] bg-white"
                            value={newField.fieldType}
                            onChange={(e) => setNewField((p) => ({ ...p, fieldType: e.target.value }))}
                          >
                            <option value="number">Number</option>
                            <option value="text">Text</option>
                            <option value="date">Date</option>
                            <option value="boolean">Boolean</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">Placeholder</label>
                          <input
                            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5]"
                            placeholder="e.g. Enter monthly income"
                            value={newField.placeholder}
                            onChange={(e) => setNewField((p) => ({ ...p, placeholder: e.target.value }))}
                          />
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <input
                            type="checkbox"
                            id="is_required"
                            checked={newField.isRequired}
                            onChange={(e) => setNewField((p) => ({ ...p, isRequired: e.target.checked }))}
                            className="w-4 h-4 accent-[#4F46E5]"
                          />
                          <label htmlFor="is_required" className="text-sm text-gray-600">Required field</label>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-5">
                        <button
                          onClick={handleAddField}
                          disabled={savingField}
                          className="px-5 py-2.5 rounded-xl bg-[#4F46E5] text-white text-sm font-medium hover:opacity-90 transition-all disabled:opacity-60"
                        >
                          {savingField ? 'Saving...' : 'Save Field'}
                        </button>
                        <button
                          onClick={() => { setShowAddField(false); setNewField(emptyField); }}
                          className="px-5 py-2.5 rounded-xl bg-[#F3F4F6] text-gray-600 text-sm font-medium hover:bg-[#E5E7EB] transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Fields list */}
                  {fields.length === 0 && !showAddField ? (
                    <div className="text-center text-gray-400 py-8 border border-dashed border-[#E5E7EB] rounded-2xl">
                      No eligibility fields added yet
                    </div>
                  ) : (
                    <div className="grid gap-3">
                      {fields.map((field: any) => (
                        <div key={field.id} className="border border-[#E5E7EB] rounded-2xl p-5 flex items-center justify-between">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                            <div>
                              <p className="text-xs text-gray-400">Field Name</p>
                              <p className="font-medium text-sm mt-0.5">{field.field_name}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400">Label</p>
                              <p className="font-medium text-sm mt-0.5">{field.field_label}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400">Type</p>
                              <p className="font-medium text-sm mt-0.5">{field.field_type}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400">Required</p>
                              <p className="font-medium text-sm mt-0.5">{field.is_required ? 'Yes' : 'No'}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDeleteField(field.id)}
                            className="ml-4 w-9 h-9 rounded-xl bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center hover:bg-[#FEE2E2] transition-all flex-shrink-0"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* ── ELIGIBILITY RULES ──────────────────── */}
                <div className="mt-10">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-semibold text-[#111827]">Eligibility Rules</h3>
                    <button
                      onClick={() => { setShowAddRule(true); setShowAddField(false); }}
                      className="px-4 py-2 rounded-xl bg-[#EEF2FF] text-[#4F46E5] text-sm font-medium hover:bg-[#E0E7FF] transition-all"
                    >
                      + Add Rule
                    </button>
                  </div>

                  {/* Add rule form */}
                  {showAddRule && (
                    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5 mb-4">
                      <h4 className="font-semibold text-[#111827] mb-4">New Rule</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">Field Name *</label>
                          <input
                            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5]"
                            placeholder="e.g. monthlyIncome"
                            value={newRule.fieldName}
                            onChange={(e) => setNewRule((p) => ({ ...p, fieldName: e.target.value }))}
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">Operator</label>
                          <select
                            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5] bg-white"
                            value={newRule.operator}
                            onChange={(e) => setNewRule((p) => ({ ...p, operator: e.target.value }))}
                          >
                            <option value=">=">≥ (greater than or equal)</option>
                            <option value="<=">≤ (less than or equal)</option>
                            <option value=">">&gt; (greater than)</option>
                            <option value="<">&lt; (less than)</option>
                            <option value="==">== (equal to)</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 mb-1 block">Value *</label>
                          <input
                            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#4F46E5]"
                            placeholder="e.g. 30000"
                            value={newRule.value}
                            onChange={(e) => setNewRule((p) => ({ ...p, value: e.target.value }))}
                          />
                        </div>
                      </div>
                      <div className="flex gap-3 mt-5">
                        <button
                          onClick={handleAddRule}
                          disabled={savingRule}
                          className="px-5 py-2.5 rounded-xl bg-[#4F46E5] text-white text-sm font-medium hover:opacity-90 transition-all disabled:opacity-60"
                        >
                          {savingRule ? 'Saving...' : 'Save Rule'}
                        </button>
                        <button
                          onClick={() => { setShowAddRule(false); setNewRule(emptyRule); }}
                          className="px-5 py-2.5 rounded-xl bg-[#F3F4F6] text-gray-600 text-sm font-medium hover:bg-[#E5E7EB] transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Rules list */}
                  {rules.length === 0 && !showAddRule ? (
                    <div className="text-center text-gray-400 py-8 border border-dashed border-[#E5E7EB] rounded-2xl">
                      No eligibility rules added yet
                    </div>
                  ) : (
                    <div className="grid gap-3">
                      {rules.map((rule: any) => (
                        <div key={rule.id} className="border border-[#E5E7EB] rounded-2xl p-5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-[#111827]">{rule.field_name}</span>
                            <span className="px-2.5 py-1 rounded-lg bg-[#EEF2FF] text-[#4F46E5] font-bold text-sm">{rule.operator}</span>
                            <span className="font-semibold text-[#111827]">{rule.value}</span>
                          </div>
                          <button
                            onClick={() => handleDeleteRule(rule.id)}
                            className="w-9 h-9 rounded-xl bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center hover:bg-[#FEE2E2] transition-all flex-shrink-0"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}