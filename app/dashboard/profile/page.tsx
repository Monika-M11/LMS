'use client';

import { useState } from 'react';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    employmentType: '',
    companyName: '',
    monthlyIncome: '',
    workExperience: '',
    aadhaar: '',
    pan: '',
  });

  const handleChange = (
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log(formData);

    alert('Profile Saved');
  };

  return (
    <div className="max-w-5xl">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">
          My Profile
        </h1>

        <p className="text-[var(--text-muted)] mt-2">
          Manage your personal and KYC details
        </p>
      </div>

      {/* PROFILE CARD */}
      <div className="bg-white rounded-[28px] border border-[var(--border-default)] p-8 shadow-sm mb-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-[var(--color-sand)] flex items-center justify-center text-3xl">
            👤
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              {formData.fullName || 'User Name'}
            </h2>

            <p className="text-[var(--text-muted)]">
              {formData.email || 'user@email.com'}
            </p>
          </div>
        </div>
      </div>

      {/* PERSONAL INFO */}
      <div className="bg-white rounded-[28px] border border-[var(--border-default)] p-8 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <Input
            label="Full Name"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={(e) =>
              handleChange('fullName', e.target.value)
            }
          />

          <Input
            label="Mobile Number"
            placeholder="Enter mobile number"
            value={formData.phone}
            onChange={(e) =>
              handleChange('phone', e.target.value)
            }
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) =>
              handleChange('email', e.target.value)
            }
          />

          <Input
            label="Date of Birth"
            type="date"
            value={formData.dob}
            onChange={(e) =>
              handleChange('dob', e.target.value)
            }
          />

          <Input
            label="Gender"
            placeholder="Male / Female"
            value={formData.gender}
            onChange={(e) =>
              handleChange('gender', e.target.value)
            }
          />

          <Input
            label="Marital Status"
            placeholder="Single / Married"
            value={formData.maritalStatus}
            onChange={(e) =>
              handleChange(
                'maritalStatus',
                e.target.value
              )
            }
          />
        </div>
      </div>

      {/* ADDRESS */}
      <div className="bg-white rounded-[28px] border border-[var(--border-default)] p-8 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
          Address Information
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <Input
            label="Address"
            placeholder="Enter address"
            value={formData.address}
            onChange={(e) =>
              handleChange('address', e.target.value)
            }
          />

          <Input
            label="City"
            placeholder="Enter city"
            value={formData.city}
            onChange={(e) =>
              handleChange('city', e.target.value)
            }
          />

          <Input
            label="State"
            placeholder="Enter state"
            value={formData.state}
            onChange={(e) =>
              handleChange('state', e.target.value)
            }
          />

          <Input
            label="Pincode"
            placeholder="Enter pincode"
            value={formData.pincode}
            onChange={(e) =>
              handleChange('pincode', e.target.value)
            }
          />
        </div>
      </div>

      {/* EMPLOYMENT */}
      <div className="bg-white rounded-[28px] border border-[var(--border-default)] p-8 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
          Employment Information
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <Input
            label="Employment Type"
            placeholder="Salaried / Business"
            value={formData.employmentType}
            onChange={(e) =>
              handleChange(
                'employmentType',
                e.target.value
              )
            }
          />

          <Input
            label="Company Name"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={(e) =>
              handleChange(
                'companyName',
                e.target.value
              )
            }
          />

          <Input
            label="Monthly Income"
            placeholder="Enter monthly income"
            value={formData.monthlyIncome}
            onChange={(e) =>
              handleChange(
                'monthlyIncome',
                e.target.value
              )
            }
          />

          <Input
            label="Work Experience"
            placeholder="Enter experience"
            value={formData.workExperience}
            onChange={(e) =>
              handleChange(
                'workExperience',
                e.target.value
              )
            }
          />
        </div>
      </div>

      {/* KYC */}
      <div className="bg-white rounded-[28px] border border-[var(--border-default)] p-8 shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
          KYC Information
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <Input
            label="Aadhaar Number"
            placeholder="Enter Aadhaar number"
            value={formData.aadhaar}
            onChange={(e) =>
              handleChange('aadhaar', e.target.value)
            }
          />

          <Input
            label="PAN Number"
            placeholder="Enter PAN number"
            value={formData.pan}
            onChange={(e) =>
              handleChange('pan', e.target.value)
            }
          />
        </div>
      </div>

      {/* SAVE */}
      <div className="max-w-xs">
        <Button onClick={handleSave}>
          Save Profile
        </Button>
      </div>
    </div>
  );
}