import { create } from "zustand";
import { postRequest } from "../services/api";

const useApiStore = create((set) => ({
  loading: false,
  successMessage: null,
  errorMessage: null,

  submitContactForm: async (formValues) => {
    try {
      set({ loading: true, successMessage: null, errorMessage: null });

      const result = await postRequest("contact-submissions", formValues);

      set({
        loading: false,
        successMessage: result?.message || "Message sent successfully!",
      });
    } catch (error) {
      set({
        loading: false,
        errorMessage: error.message || "Something went wrong!",
      });
    }
  },

  resetStatus: () => set({ successMessage: null, errorMessage: null }),
}));

export default useApiStore;
