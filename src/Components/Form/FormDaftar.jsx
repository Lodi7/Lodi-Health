import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

function FormDaftar({ formData, handleChange }) {
  const [provinsiList, setProvinsiList] = useState([]);
  const [kotaList, setKotaList] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((res) => {
        const options = res.data.map((prov) => ({
          value: prov.id,
          label: prov.name,
        }));
        setProvinsiList(options);
      })
      .catch((err) => console.error("Gagal ambil provinsi:", err));
  }, []);

  useEffect(() => {
    if (formData.provinsiId) {
      axios
        .get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${formData.provinsiId}.json`
        )
        .then((res) => {
          const options = res.data.map((kota) => ({
            value: kota.name,
            label: kota.name,
          }));
          setKotaList(options);
        })
        .catch((err) => console.error("Gagal ambil kota:", err));
    }
  }, [formData.provinsiId]);

  const inputs = [
    {
      label: "Nama Pengguna",
      name: "nama",
      type: "text",
      placeholder: "Nama Pengguna",
    },
    {
      label: "Alamat Email",
      name: "email",
      type: "email",
      placeholder: "Alamat Email",
    },
    {
      label: "Kata Sandi",
      name: "password",
      type: "password",
      placeholder: "Kata Sandi",
    },
    {
      label: "Konfirmasi Kata Sandi",
      name: "konfirmasiPassword",
      type: "password",
      placeholder: "Konfirmasi Kata Sandi",
    },
    {
      label: "Nomor HP",
      name: "nomorHp",
      type: "tel",
      placeholder: "08xxxxxxxxxx",
    },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "0.75rem",
      borderColor: "#cbd5e1",
      padding: "2px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#10b981",
      },
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: "220px",
      overflowY: "auto",
      zIndex: 9999,
      borderRadius: "0.75rem",
    }),
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
      {inputs.map(({ label, name, type, placeholder }) => (
        <div key={name}>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            {label}
          </label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required
            value={formData[name]}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm sm:text-base"
          />
        </div>
      ))}

      {/* Select Provinsi */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Provinsi
        </label>
        <Select
          options={provinsiList}
          styles={customStyles}
          placeholder="Pilih Provinsi"
          value={provinsiList.find(
            (opt) => opt.value === formData.provinsiId
          )}
          onChange={(selected) => {
            handleChange({
              target: { name: "provinsiId", value: selected ? selected.value : "" },
            });
            handleChange({
              target: { name: "provinsi", value: selected ? selected.label : "" },
            });
          }}
        />
      </div>

      {/* Select Kota */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Kota/Kabupaten
        </label>
        <Select
          options={kotaList}
          styles={customStyles}
          placeholder="Pilih Kota/Kabupaten"
          value={kotaList.find((opt) => opt.value === formData.kota)}
          onChange={(selected) =>
            handleChange({
              target: { name: "kota", value: selected ? selected.value : "" },
            })
          }
          isDisabled={!formData.provinsiId}
        />
      </div>

      {/* Alamat Rumah */}
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Alamat Rumah
        </label>
        <textarea
          name="alamatRumah"
          rows="3"
          placeholder="Jl. Contoh Alamat No.123"
          required
          value={formData.alamatRumah}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm sm:text-base"
        ></textarea>
      </div>
    </div>
  );
}

export default FormDaftar;
