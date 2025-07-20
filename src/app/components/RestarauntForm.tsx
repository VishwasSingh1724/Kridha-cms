'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import {QRCodeCanvas } from 'qrcode.react';
import { Button } from '@/components/ui/button';

interface RestaurantFormData {
  name: string;
  address: string;
  contact: string;
  menuUrl: string;
}

interface SubmittedData extends RestaurantFormData {
  id: string;
  qrUrl: string;
}

export default function RestaurantForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<RestaurantFormData>({
    name: '',
    address: '',
    contact: '',
    menuUrl: '',
  });
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const uniqueId = Date.now().toString(); // temporary ID
    const url = `https://your-ar-site.com/menu?id=${uniqueId}`;
    setSubmittedData({ ...formData, id: uniqueId, qrUrl: url });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6">Register Restaurant</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700">Restaurant Name</span>
          <input
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="mt-1 block w-full rounded border px-3 py-2"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Address</span>
          <input
            name="address"
            onChange={handleChange}
            value={formData.address}
            className="mt-1 block w-full rounded border px-3 py-2"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Contact</span>
          <input
            name="contact"
            onChange={handleChange}
            value={formData.contact}
            className="mt-1 block w-full rounded border px-3 py-2"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Menu URL</span>
          <input
            name="menuUrl"
            onChange={handleChange}
            value={formData.menuUrl}
            className="mt-1 block w-full rounded border px-3 py-2"
            required
          />
        </label>
        <Button
          type="submit"
          className='hover:cursor-pointer'
        >
          Generate QR Code
        </Button>
      </form>

      {submittedData && (
        <div className="mt-10 bg-white p-6 rounded shadow-md text-center">
          <h2 className="text-lg font-semibold mb-2">QR Code for Menu</h2>
          <QRCodeCanvas  value={submittedData.qrUrl} size={200} />
          <p className="mt-4 text-sm text-gray-600">Scan this QR to view the AR menu.</p>
        </div>
      )}
    </div>
  );
}
