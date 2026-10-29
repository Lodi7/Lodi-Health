import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Send, CheckCircle2 } from "lucide-react";

function FormKontak() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subjek: "",
    pesan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(
        "https://686e7ba691e85fac429df13f.mockapi.io/Kontak",
        formData
      );

      toast.success("Terima kasih! Pesan Anda telah diterima oleh tim kami.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subjek: "",
        pesan: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Gagal mengirim pesan. Silakan coba kembali sesaat lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 text-left">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Kirim Pesan Langsung
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Isi formulir di bawah ini, tim kami akan merespons dalam waktu &lt; 2 jam kerja.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-1">
            <label className="block text-slate-800 font-semibold text-xs sm:text-sm mb-1.5">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Contoh: Budi Santoso"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-slate-800 font-semibold text-xs sm:text-sm mb-1.5">
              Alamat Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-1">
            <label className="block text-slate-800 font-semibold text-xs sm:text-sm mb-1.5">
              Nomor Telepon / WhatsApp <span className="text-xs text-slate-400 font-normal">(Opsional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+62 812-3456-7890"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-slate-800 font-semibold text-xs sm:text-sm mb-1.5">
              Subjek Keperluan <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subjek"
              value={formData.subjek}
              onChange={handleChange}
              placeholder="Contoh: Jadwal Dokter Spesialis"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-800 font-semibold text-xs sm:text-sm mb-1.5">
            Pesan / Pertanyaan Anda <span className="text-red-500">*</span>
          </label>
          <textarea
            name="pesan"
            value={formData.pesan}
            onChange={handleChange}
            placeholder="Tuliskan pesan atau pertanyaan Anda secara rinci..."
            required
            rows={4}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all resize-y"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all duration-200 disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Mengirim Pesan...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Kirim Pesan Sekarang</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormKontak;
