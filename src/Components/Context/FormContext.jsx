import { createContext, useContext, useState, useEffect } from "react";
import Masuk from "../../pages/Masuk";
import Daftar from "../../pages/Daftar";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formAktif, setFormAktif] = useState(null); // 'masuk' | 'daftar' | null

  // Cegah scroll saat modal form aktif
  useEffect(() => {
    if (formAktif) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [formAktif]);

  // Handle tombol ESC untuk menutup form
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setFormAktif(null);
      }
    };
    if (formAktif) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [formAktif]);

  let kontenForm = null;
  if (formAktif === "masuk" || formAktif === "daftar") {
    kontenForm = (
      <div
        className="fixed inset-0 z-[100] flex justify-center items-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto transition-opacity duration-200"
        onClick={(e) => {
          if (e.target === e.currentTarget) setFormAktif(null);
        }}
      >
        <div
          className={`relative w-full my-auto transition-all duration-200 ${
            formAktif === "masuk" ? "max-w-md" : "max-w-3xl"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {formAktif === "masuk" ? (
            <Masuk
              onClose={() => setFormAktif(null)}
              onFormChange={setFormAktif}
            />
          ) : (
            <Daftar
              onClose={() => setFormAktif(null)}
              onFormChange={setFormAktif}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <FormContext.Provider value={{ formAktif, setFormAktif }}>
      {children}
      {kontenForm}
    </FormContext.Provider>
  );
}

export function useFormModal() {
  return useContext(FormContext);
}

export default FormProvider;
