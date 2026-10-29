import { useState } from "react";
import { useAuthContext } from "../Components/Context/AuthContext";
import FormDaftar from "../Components/Form/FormDaftar";
import { toast } from "react-toastify";
import { createUser, getUserByEmail } from "../Api/userApi";

function Daftar(props) {
  const { login } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    konfirmasiPassword: "",
    nomorHp: "",
    provinsiId: "",
    provinsi: "",
    kota: "",
    alamatRumah: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nama.trim() || !formData.email.trim() || !formData.password) {
      toast.error("Nama, email, dan kata sandi wajib diisi!");
      return;
    }

    if (formData.password !== formData.konfirmasiPassword) {
      toast.error("Password dan konfirmasi password tidak cocok!");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Kata sandi minimal 6 karakter!");
      return;
    }

    setLoading(true);
    try {
      const existingUser = await getUserByEmail(formData.email.trim());
      if (existingUser) {
        toast.warning("Email ini sudah terdaftar. Silakan langsung Masuk.");
        setLoading(false);
        return;
      }

      const newUser = {
        nama: formData.nama.trim(),
        email: formData.email.trim(),
        password: formData.password,
        nomorHp: formData.nomorHp.trim(),
        provinsiId: formData.provinsiId,
        provinsi: formData.provinsi,
        kota: formData.kota,
        alamatRumah: formData.alamatRumah.trim(),
      };

      const created = await createUser(newUser);

      toast.success("Pendaftaran berhasil! Selamat datang.");
      login(created || { nama: newUser.nama, email: newUser.email });
      props.onClose?.();
    } catch (err) {
      console.error("Daftar error:", err);
      toast.error("Gagal mendaftar. Silakan periksa koneksi atau coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 w-full border border-slate-100 text-left max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={props.onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center text-xl font-bold transition-colors cursor-pointer"
          aria-label="Tutup form"
          title="Tutup"
        >
          ×
        </button>

        <h2 className="text-center text-emerald-700 font-extrabold text-2xl sm:text-3xl mb-6 sm:mb-8">
          Daftar Akun Baru
        </h2>

        <FormDaftar formData={formData} handleChange={handleChange} />

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 sm:py-3.5 rounded-xl text-sm sm:text-base shadow-md shadow-emerald-600/20 transition-all cursor-pointer disabled:opacity-50"
        >
          {loading ? "Memproses Pendaftaran..." : "Daftar Sekarang"}
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Sudah punya akun?{" "}
          <span
            className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline cursor-pointer"
            onClick={() => props.onFormChange?.("masuk")}
          >
            Masuk ke Akun
          </span>
        </p>
      </form>
    </div>
  );
}

export default Daftar;
