function FormMasuk({ formData, handleChange }) {
  const inputs = [
    {
      id: "identifier",
      name: "identifier",
      type: "text",
      label: "Email atau Nama Pengguna",
      placeholder: "contoh: user@gmail.com atau Lodi",
      autoComplete: "username",
      required: true,
    },
    {
      id: "password",
      name: "password",
      type: "password",
      label: "Kata Sandi",
      placeholder: "Masukkan kata sandi",
      autoComplete: "current-password",
      required: true,
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full text-left">
      {inputs.map(
        ({ id, name, type, label, placeholder, autoComplete, required }) => (
          <div key={id}>
            <label
              htmlFor={id}
              className="block text-sm font-semibold text-slate-700 mb-1"
            >
              {label}
            </label>
            <input
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              required={required}
              value={formData[name] || ""}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm sm:text-base"
            />
          </div>
        )
      )}
    </div>
  );
}

export default FormMasuk;
