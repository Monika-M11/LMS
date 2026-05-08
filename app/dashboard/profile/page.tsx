// 'use client';

// import { useState } from 'react';

// import Input from '@/components/common/Input';
// import Button from '@/components/common/Button';

// import {
//   updateProfile,
// } from '@/src/lib/api';

// import {
//   storage,
// } from '@/src/lib/storage';
// import { useRouter } from 'next/navigation';

// export default function ProfilePage() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     email: '',
//     dob: '',
//     gender: '',
//     maritalStatus: '',
//     address: '',
//     city: '',
//     state: '',
//     pincode: '',
//     employmentType: '',
//     companyName: '',
//     monthlyIncome: '',
//     workExperience: '',
//     aadhaar: '',
//     pan: '',
//   });

//   const router = useRouter();

//   const handleChange = (
//     field: string,
//     value: string
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   // const handleSave = () => {
//   //   console.log(formData);

//   //   alert('Profile Saved');
//   // };

//   const handleSave = async () => {

//   try {

//     const user =
//       storage.getUser();

//     await updateProfile({
//       userId: user.id,
//       ...formData,
//     });

//     storage.setUser({
//       ...user,
//       ...formData,
//       profileCompleted: 1,
//     });

//     alert(
//   'Profile Saved Successfully'
// );

// router.push('/dashboard');

//   } catch (error) {

//     console.log(error);

//     alert(
//       'Failed to save profile'
//     );

//   }

// };

//   return (
//     <div className="max-w-5xl">
//       {/* HEADER */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-[var(--text-primary)]">
//           My Profile
//         </h1>

//         <p className="text-[var(--text-muted)] mt-2">
//           Manage your personal and KYC details
//         </p>
//       </div>

//       {/* PROFILE CARD */}
//       <div className="bg-white rounded-[28px] border border-[var(--border-default)] p-8 shadow-sm mb-6">
//         <div className="flex items-center gap-5">
//           <div className="w-20 h-20 rounded-full bg-[var(--color-sand)] flex items-center justify-center text-3xl">
//             👤
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold text-[var(--text-primary)]">
//               {formData.fullName || 'User Name'}
//             </h2>

//             <p className="text-[var(--text-muted)]">
//               {formData.email || 'user@email.com'}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* PERSONAL INFO */}
//       <div className="bg-white rounded-[28px] border border-[var(--border-default)] p-8 shadow-sm mb-6">
//         <h2 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
//           Personal Information
//         </h2>

//         <div className="grid md:grid-cols-2 gap-5">
//           <Input
//             label="Full Name"
//             placeholder="Enter full name"
//             value={formData.fullName}
//             onChange={(e) =>
//               handleChange('fullName', e.target.value)
//             }
//           />

//           <Input
//             label="Mobile Number"
//             placeholder="Enter mobile number"
//             value={formData.phone}
//             onChange={(e) =>
//               handleChange('phone', e.target.value)
//             }
//           />

//           <Input
//             label="Email"
//             type="email"
//             placeholder="Enter email"
//             value={formData.email}
//             onChange={(e) =>
//               handleChange('email', e.target.value)
//             }
//           />

//           <Input
//             label="Date of Birth"
//             type="date"
//             value={formData.dob}
//             onChange={(e) =>
//               handleChange('dob', e.target.value)
//             }
//           />

//           <Input
//             label="Gender"
//             placeholder="Male / Female"
//             value={formData.gender}
//             onChange={(e) =>
//               handleChange('gender', e.target.value)
//             }
//           />

//           <Input
//             label="Marital Status"
//             placeholder="Single / Married"
//             value={formData.maritalStatus}
//             onChange={(e) =>
//               handleChange(
//                 'maritalStatus',
//                 e.target.value
//               )
//             }
//           />
//         </div>
//       </div>

//       {/* ADDRESS */}
//       <div className="bg-white rounded-[28px] border border-[var(--border-default)] p-8 shadow-sm mb-6">
//         <h2 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
//           Address Information
//         </h2>

//         <div className="grid md:grid-cols-2 gap-5">
//           <Input
//             label="Address"
//             placeholder="Enter address"
//             value={formData.address}
//             onChange={(e) =>
//               handleChange('address', e.target.value)
//             }
//           />

//           <Input
//             label="City"
//             placeholder="Enter city"
//             value={formData.city}
//             onChange={(e) =>
//               handleChange('city', e.target.value)
//             }
//           />

//           <Input
//             label="State"
//             placeholder="Enter state"
//             value={formData.state}
//             onChange={(e) =>
//               handleChange('state', e.target.value)
//             }
//           />

//           <Input
//             label="Pincode"
//             placeholder="Enter pincode"
//             value={formData.pincode}
//             onChange={(e) =>
//               handleChange('pincode', e.target.value)
//             }
//           />
//         </div>
//       </div>

//       {/* EMPLOYMENT */}
//       <div className="bg-white rounded-[28px] border border-[var(--border-default)] p-8 shadow-sm mb-6">
//         <h2 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
//           Employment Information
//         </h2>

//         <div className="grid md:grid-cols-2 gap-5">
//           <Input
//             label="Employment Type"
//             placeholder="Salaried / Business"
//             value={formData.employmentType}
//             onChange={(e) =>
//               handleChange(
//                 'employmentType',
//                 e.target.value
//               )
//             }
//           />

//           <Input
//             label="Company Name"
//             placeholder="Enter company name"
//             value={formData.companyName}
//             onChange={(e) =>
//               handleChange(
//                 'companyName',
//                 e.target.value
//               )
//             }
//           />

//           <Input
//             label="Monthly Income"
//             placeholder="Enter monthly income"
//             value={formData.monthlyIncome}
//             onChange={(e) =>
//               handleChange(
//                 'monthlyIncome',
//                 e.target.value
//               )
//             }
//           />

//           <Input
//             label="Work Experience"
//             placeholder="Enter experience"
//             value={formData.workExperience}
//             onChange={(e) =>
//               handleChange(
//                 'workExperience',
//                 e.target.value
//               )
//             }
//           />
//         </div>
//       </div>

//       {/* KYC */}
//       <div className="bg-white rounded-[28px] border border-[var(--border-default)] p-8 shadow-sm mb-8">
//         <h2 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
//           KYC Information
//         </h2>

//         <div className="grid md:grid-cols-2 gap-5">
//           <Input
//             label="Aadhaar Number"
//             placeholder="Enter Aadhaar number"
//             value={formData.aadhaar}
//             onChange={(e) =>
//               handleChange('aadhaar', e.target.value)
//             }
//           />

//           <Input
//             label="PAN Number"
//             placeholder="Enter PAN number"
//             value={formData.pan}
//             onChange={(e) =>
//               handleChange('pan', e.target.value)
//             }
//           />
//         </div>
//       </div>

//       {/* SAVE */}
//       <div className="max-w-xs">
//         <Button onClick={handleSave}>
//           Save Profile
//         </Button>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { getProfile, updateProfile } from '@/src/lib/api';
import { storage } from '@/src/lib/storage';

export default function ProfilePage() {
  const [userId, setUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

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

  // STEP 1 — read userId from localStorage (client only, never runs on server)
  useEffect(() => {
    const user = storage.getUser();
    if (user?.id) {
      setUserId(user.id);
    } else {
      setLoading(false); // no user in storage, stop spinner
    }
  }, []);

  // STEP 2 — fetch profile once userId is set
  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const res = await getProfile(userId);

        if (res.success && res.profile) {
          const p = res.profile;
          setFormData({
            fullName:       p.full_name       ?? '',
            phone:          p.phone           ?? '',
            email:          p.email           ?? '',
            // DB returns full ISO string e.g. "1995-06-15T00:00:00.000Z"
            // slice to "YYYY-MM-DD" so <input type="date"> renders correctly
            dob:            p.dob ? p.dob.slice(0, 10) : '',
            gender:         p.gender          ?? '',
            maritalStatus:  p.marital_status  ?? '',
            address:        p.address         ?? '',
            city:           p.city            ?? '',
            state:          p.state           ?? '',
            pincode:        p.pincode         ?? '',
            employmentType: p.employment_type ?? '',
            companyName:    p.company_name    ?? '',
            monthlyIncome:  p.monthly_income  ?? '',
            workExperience: p.work_experience ?? '',
            aadhaar:        p.aadhaar         ?? '',
            pan:            p.pan             ?? '',
          });
        }
      } catch (err) {
        console.error('Failed to load profile', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]); // only runs when userId becomes available

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!userId) {
      alert('User not found. Please login again.');
      return;
    }

    try {
      const res = await updateProfile({ userId, ...formData });

      if (res.success) {
        alert('Profile Saved');
      } else {
        alert('Failed to save profile');
      }
    } catch (err) {
      console.error('Failed to save profile', err);
      alert('Failed to save profile');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <p className="text-[var(--text-muted)]">Loading profile...</p>
      </div>
    );
  }

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
            onChange={(e) => handleChange('fullName', e.target.value)}
          />

          <Input
            label="Mobile Number"
            placeholder="Enter mobile number"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />

          <Input
            label="Date of Birth"
            type="date"
            value={formData.dob}
            onChange={(e) => handleChange('dob', e.target.value)}
          />

          <Input
            label="Gender"
            placeholder="Male / Female"
            value={formData.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
          />

          <Input
            label="Marital Status"
            placeholder="Single / Married"
            value={formData.maritalStatus}
            onChange={(e) => handleChange('maritalStatus', e.target.value)}
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
            onChange={(e) => handleChange('address', e.target.value)}
          />

          <Input
            label="City"
            placeholder="Enter city"
            value={formData.city}
            onChange={(e) => handleChange('city', e.target.value)}
          />

          <Input
            label="State"
            placeholder="Enter state"
            value={formData.state}
            onChange={(e) => handleChange('state', e.target.value)}
          />

          <Input
            label="Pincode"
            placeholder="Enter pincode"
            value={formData.pincode}
            onChange={(e) => handleChange('pincode', e.target.value)}
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
            onChange={(e) => handleChange('employmentType', e.target.value)}
          />

          <Input
            label="Company Name"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
          />

          <Input
            label="Monthly Income"
            placeholder="Enter monthly income"
            value={formData.monthlyIncome}
            onChange={(e) => handleChange('monthlyIncome', e.target.value)}
          />

          <Input
            label="Work Experience"
            placeholder="Enter experience"
            value={formData.workExperience}
            onChange={(e) => handleChange('workExperience', e.target.value)}
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
            onChange={(e) => handleChange('aadhaar', e.target.value)}
          />

          <Input
            label="PAN Number"
            placeholder="Enter PAN number"
            value={formData.pan}
            onChange={(e) => handleChange('pan', e.target.value)}
          />
        </div>
      </div>

      {/* SAVE */}
      <div className="max-w-xs">
        <Button onClick={handleSave}>Save Profile</Button>
      </div>
    </div>
  );
}