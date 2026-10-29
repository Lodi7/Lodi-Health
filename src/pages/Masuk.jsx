import { useState } from "react";
import FormMasuk from "../Components/Form/FormMasuk";
import { useAuthContext } from "../Components/Context/AuthContext";
import { toast } from "react-toastify";
import { getUserByEmail, getUserByName } from "../Api/userApi";

function Masuk(props) {
  const { login } = useAuthContext();
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = (formData.identifier || "").trim();

    if (!query) {
      toast.error("Silakan masukkan email atau nama pengguna.");
      return;
    }
    if (!formData.password) {
      toast.error("Silakan masukkan kata sandi.");
      return;
    }

    setLoading(true);
    try {
      let foundUser = null;

      if (query.includes("@")) {
        foundUser = await getUserByEmail(query);
      } else {
        const byName = await getUserByName(query);
        if (byName && byName.length > 0) {
          foundUser = byName[0];
        } else {
          foundUser = await getUserByEmail(query);
        }
      }

      if (!foundUser || foundUser.password !== formData.password) {
        toast.error("Email/nama pengguna atau kata sandi salah.");
        setLoading(false);
        return;
      }

      login(foundUser);
      toast.success(`Selamat datang kembali, ${foundUser.nama || "Pengguna"}!`);
      props.onClose?.();
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Gagal menghubungkan ke server. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full border border-slate-100 text-left"
      >
        {/* Tombol Tutup pojok kanan */}
        <button
          type="button"
          onClick={props.onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center text-xl font-bold transition-colors cursor-pointer"
          aria-label="Tutup form"
          title="Tutup"
        >
          ×
        </button>

        <h2 className="text-center text-emerald-700 font-extrabold text-2xl sm:text-3xl mb-6">
          Masuk Akun
        </h2>

        <FormMasuk formData={formData} handleChange={handleChange} />

        <div className="mt-4 text-right text-xs sm:text-sm text-emerald-600 hover:underline cursor-pointer select-none font-medium">
          Lupa kata sandi?
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl text-sm sm:text-base shadow-md shadow-emerald-600/20 transition-all cursor-pointer disabled:opacity-50"
        >
          {loading ? "Memproses..." : "Masuk"}
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Belum mempunyai akun?{" "}
          <span
            className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline cursor-pointer"
            onClick={() => props.onFormChange?.("daftar")}
          >
            Daftar Sekarang
          </span>
        </p>
      </form>
    </div>
  );
}

export default Masuk;
