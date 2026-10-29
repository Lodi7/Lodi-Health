import { useState, useEffect } from "react";
import { useAuthContext } from "../Components/Context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { updateUser } from "../Api/userApi";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  ShieldCheck,
  ArrowLeft,
  LogOut,
  Pencil,
  Check,
  X,
  Eye,
  EyeOff,
  Building,
  KeyRound,
  CheckCircle2,
} from "lucide-react";

function Setting() {
  const { user, logout, updateUserContext } = useAuthContext();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("profile"); // 'profile' | 'security'
  const [editMode, setEditMode] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);

  // Visibility toggles for passwords
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    nomorHp: "",
    alamatRumah: "",
    kota: "",
    provinsi: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nama: user.nama || "",
        email: user.email || "",
        nomorHp: user.nomorHp || "",
        alamatRumah: user.alamatRumah || "",
        kota: user.kota || "",
        provinsi: user.provinsi || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelEdit = () => {
    if (user) {
      setFormData({
        nama: user.nama || "",
        email: user.email || "",
        nomorHp: user.nomorHp || "",
        alamatRumah: user.alamatRumah || "",
        kota: user.kota || "",
        provinsi: user.provinsi || "",
      });
    }
    setEditMode(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (
      formData.nama === user?.nama &&
      formData.nomorHp === user?.nomorHp &&
      formData.alamatRumah === user?.alamatRumah
    ) {
      toast.info("Tidak ada perubahan yang dilakukan.");
      setEditMode(false);
      return;
    }

    setIsSavingProfile(true);
    try {
      const updatedUser = await updateUser(user.id, formData);
      updateUserContext(updatedUser);
      toast.success("Profil berhasil diperbarui!");
      setEditMode(false);
    } catch {
      toast.error("Gagal memperbarui profil. Periksa koneksi Anda.");
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!passwordData.currentPassword) {
      toast.error("Silakan masukkan kata sandi saat ini.");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast.error("Kata sandi baru minimal 6 karakter.");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      toast.error("Konfirmasi kata sandi baru tidak cocok.");
      return;
    }

    if (user?.password && passwordData.currentPassword !== user.password) {
      toast.error("Kata sandi saat ini salah.");
      return;
    }

    setIsSavingPassword(true);
    try {
      const updatedUser = await updateUser(user.id, {
        ...formData,
        password: passwordData.newPassword,
      });
      updateUserContext(updatedUser);
      toast.success("Kata sandi berhasil diperbarui!");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch {
      toast.error("Gagal mengganti kata sandi. Silakan coba lagi.");
    } finally {
      setIsSavingPassword(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.info("Berhasil keluar dari akun.");
    navigate("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
          <User className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Akses Terbatas</h2>
        <p className="text-slate-600 max-w-md mb-6 text-sm leading-relaxed">
          Silakan masuk ke akun Lodi Health Anda terlebih dahulu untuk mengelola pengaturan profil dan keamanan.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  const avatarSrc =
    localStorage.getItem("avatarHealth") ||
    `https://api.dicebear.com/7.x/adventurer/svg?seed=${user?.nama || "User"}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Header Bar */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Kembali ke Beranda</span>
            </Link>
            <div className="h-5 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-lg tracking-tight">
                Pengaturan Akun
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Pasien Terverifikasi
            </span>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Profile Card & Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden text-center">
              {/* Card Banner */}
              <div className="h-24 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800" />
              
              {/* Avatar & User Summary */}
              <div className="px-6 pb-6 pt-0 relative">
                <div className="w-20 h-20 rounded-full border-4 border-white bg-slate-100 shadow-md mx-auto -mt-10 overflow-hidden flex items-center justify-center">
                  <img
                    src={avatarSrc}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="mt-3 text-lg font-bold text-slate-900 truncate">
                  {user.nama || "Pengguna Lodi Health"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 truncate">
                  {user.email || "email@lodihealth.id"}
                </p>

                {/* Quick Info Badges */}
                <div className="mt-5 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3 text-left">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Kontak
                    </span>
                    <span className="text-xs font-semibold text-slate-700 truncate block mt-0.5">
                      {user.nomorHp || "Belum ada"}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Wilayah
                    </span>
                    <span className="text-xs font-semibold text-slate-700 truncate block mt-0.5">
                      {user.kota || "Indonesia"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-2 flex flex-col gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("profile")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "profile"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeTab === "profile"
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <User className="w-4 h-4" />
                </div>
                <span>Informasi Profil</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("security")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "security"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeTab === "security"
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <KeyRound className="w-4 h-4" />
                </div>
                <span>Keamanan &amp; Kata Sandi</span>
              </button>
            </nav>
          </div>

          {/* Right Column: Active Form Section */}
          <div className="lg:col-span-8">
            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Informasi Profil
                    </h2>
                    <p className="text-sm text-slate-500 mt-0.5">
                      Kelola identitas dan kontak domisili untuk keperluan resep dan reservasi medis.
                    </p>
                  </div>
                  
                  {!editMode ? (
                    <button
                      type="button"
                      onClick={() => setEditMode(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 transition-colors cursor-pointer self-start sm:self-auto"
                    >
                      <Pencil className="w-4 h-4" />
                      <span>Ubah Profil</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer self-start sm:self-auto"
                    >
                      <X className="w-4 h-4" />
                      <span>Batal</span>
                    </button>
                  )}
                </div>

                {/* Profile Form */}
                <form onSubmit={handleUpdate} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nama Lengkap */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Nama Lengkap
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="nama"
                          value={formData.nama}
                          onChange={handleChange}
                          disabled={!editMode}
                          required
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all ${
                            editMode
                              ? "border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 bg-white"
                              : "border-slate-200 bg-slate-50/80 text-slate-700 cursor-not-allowed"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Email (Read-Only) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                          Alamat Email
                        </label>
                        <span className="text-[11px] text-slate-400">Terkunci</span>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          disabled
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/80 text-slate-500 text-sm cursor-not-allowed"
                        />
                      </div>
                    </div>

                    {/* Nomor HP */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Nomor Handphone / WhatsApp
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="nomorHp"
                          value={formData.nomorHp}
                          onChange={handleChange}
                          disabled={!editMode}
                          placeholder="contoh: 08123456789"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all ${
                            editMode
                              ? "border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 bg-white"
                              : "border-slate-200 bg-slate-50/80 text-slate-700 cursor-not-allowed"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Wilayah / Kota */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                        Kota / Kabupaten
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Building className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={formData.kota || formData.provinsi || "Indonesia"}
                          disabled
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/80 text-slate-500 text-sm cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Alamat Lengkap */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Alamat Domisili Lengkap
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <textarea
                        name="alamatRumah"
                        rows="3"
                        value={formData.alamatRumah}
                        onChange={handleChange}
                        disabled={!editMode}
                        placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all ${
                          editMode
                            ? "border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 bg-white"
                            : "border-slate-200 bg-slate-50/80 text-slate-700 cursor-not-allowed"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Actions Bar */}
                  {editMode && (
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        disabled={isSavingProfile}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all cursor-pointer disabled:opacity-50"
                      >
                        <Check className="w-4 h-4" />
                        <span>{isSavingProfile ? "Menyimpan..." : "Simpan Perubahan"}</span>
                      </button>
                    </div>
                  )}
                </form>
              </div>
            )}

            {activeTab === "security" && (
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
                {/* Header */}
                <div className="pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        Keamanan &amp; Kata Sandi
                      </h2>
                      <p className="text-sm text-slate-500 mt-0.5">
                        Perbarui kata sandi akun secara berkala untuk menjaga keamanan data medis Anda.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Password Form */}
                <form onSubmit={handleChangePassword} className="mt-6 space-y-5 max-w-lg">
                  {/* Current Password */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Kata Sandi Saat Ini
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showCurrentPass ? "text" : "password"}
                        name="currentPassword"
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                        placeholder="Masukkan kata sandi saat ini"
                        required
                        className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 text-sm transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPass(!showCurrentPass)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        {showCurrentPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* New Password */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Kata Sandi Baru
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <KeyRound className="w-4 h-4" />
                      </div>
                      <input
                        type={showNewPass ? "text" : "password"}
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        placeholder="Minimal 6 karakter"
                        required
                        className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 text-sm transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPass(!showNewPass)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        {showNewPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-[12px] text-slate-400 mt-1">
                      Gunakan kombinasi minimal 6 karakter dengan huruf dan angka.
                    </p>
                  </div>

                  {/* Confirm New Password */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Konfirmasi Kata Sandi Baru
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <KeyRound className="w-4 h-4" />
                      </div>
                      <input
                        type={showConfirmPass ? "text" : "password"}
                        name="confirmNewPassword"
                        value={passwordData.confirmNewPassword}
                        onChange={handlePasswordChange}
                        placeholder="Ulangi kata sandi baru"
                        required
                        className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 text-sm transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPass(!showConfirmPass)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        {showConfirmPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSavingPassword}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all cursor-pointer disabled:opacity-50"
                    >
                      <Lock className="w-4 h-4" />
                      <span>{isSavingPassword ? "Memperbarui..." : "Perbarui Kata Sandi"}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

export default Setting;
