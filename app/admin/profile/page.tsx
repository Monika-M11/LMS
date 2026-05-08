// 'use client';

// import { useState, useEffect } from 'react';
// import Input from '@/components/common/Input';
// import Button from '@/components/common/Button';
// import { getProfile, updateProfile } from '@/src/lib/api';   // Adjust path if needed

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

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [message, setMessage] = useState('');

//   // Fetch existing profile
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         // Assuming you get userId from auth context or localStorage
//         const userId = 1; // ← Replace with real userId from auth

//         const response = await getProfile(userId);
        
//         if (response.success && response.profile) {
//           const p = response.profile;
//           setFormData({
//             fullName: p.full_name || '',
//             phone: p.phone || '',
//             email: p.email || '',
//             dob: p.dob || '',
//             gender: p.gender || '',
//             maritalStatus: p.marital_status || '',
//             address: p.address || '',
//             city: p.city || '',
//             state: p.state || '',
//             pincode: p.pincode || '',
//             employmentType: p.employment_type || '',
//             companyName: p.company_name || '',
//             monthlyIncome: p.monthly_income || '',
//             workExperience: p.work_experience || '',
//             aadhaar: p.aadhaar || '',
//             pan: p.pan || '',
//           });
//         }
//       } catch (err) {
//         console.error("Failed to load profile", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const isProfileComplete = () => {
//     const requiredFields = [
//       'fullName', 'phone', 'email', 'dob', 'gender',
//       'address', 'city', 'state', 'pincode', 'aadhaar', 'pan'
//     ];
//     return requiredFields.every(field => 
//       formData[field as keyof typeof formData]?.trim() !== ''
//     );
//   };

//   const handleSave = async () => {
//     setSaving(true);
//     setMessage('');

//     try {
//       const userId = 1; // ← Get from auth context / token

//       const payload = {
//         userId,
//         fullName: formData.fullName,
//         phone: formData.phone,
//         email: formData.email,
//         dob: formData.dob,
//         gender: formData.gender,
//         maritalStatus: formData.maritalStatus,
//         address: formData.address,
//         city: formData.city,
//         state: formData.state,
//         pincode: formData.pincode,
//         employmentType: formData.employmentType,
//         companyName: formData.companyName,
//         monthlyIncome: formData.monthlyIncome,
//         workExperience: formData.workExperience,
//         aadhaar: formData.aadhaar,
//         pan: formData.pan,
//       };

//       const response = await updateProfile(payload);

//       if (response.success) {
//         const completed = isProfileComplete() ? 1 : 0;
//         setMessage(completed 
//           ? "✅ Profile saved & marked as complete!" 
//           : "✅ Profile saved successfully"
//         );
//       }
//     } catch (err) {
//       setMessage("❌ Failed to save profile");
//       console.error(err);
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) return <div className="p-8 text-center">Loading profile...</div>;

//   return (
//     <div className="max-w-5xl">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-[var(--text-primary)]">My Profile</h1>
//         <p className="text-[var(--text-muted)] mt-2">Manage your personal and KYC details</p>
//       </div>

//       {/* Rest of your UI remains almost same */}
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
//             <p className="text-[var(--text-muted)]">{formData.email || 'user@email.com'}</p>
//           </div>
//         </div>
//       </div>

//       {/* Personal Info, Address, Employment, KYC sections remain the same */}
//       {/* ... (your existing sections) ... */}

//       {/* SAVE BUTTON */}
//       <div className="max-w-xs">
//         <Button onClick={handleSave} disabled={saving}>
//           {saving ? 'Saving...' : 'Save Profile'}
//         </Button>
//         {message && (
//           <p className="mt-3 text-sm font-medium text-center">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

import { getProfile,updateProfile } from '@/src/lib/api'; // adjust path to your api service

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

  const [loading, setLoading] = useState(true);

  // Adjust this to wherever you store the logged-in userId
  // e.g. from localStorage, a context, or a cookie
  const userId = Number(localStorage.getItem('userId'));

  useEffect(() => {
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
            // dob from DB may be a full ISO string like "2000-01-01T00:00:00.000Z"
            // slice to "YYYY-MM-DD" so the date input renders correctly
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

    if (userId) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [userId]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
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