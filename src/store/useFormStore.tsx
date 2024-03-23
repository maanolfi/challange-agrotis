import { create } from 'zustand'

export const useFormStore = create((set) => ({
    name: '',
    observation: '',
    date_start: null,
    date_end: null,
    error_fields: {},
    properties: { id: "", nome: "", cnpj: null },
    laboratory: { id: "", nome: "" },
    onChangeState: (action: any) => set((state: any) => ({
        ...state,
        [action.name]: action.value
    })),
    onChangeError: (action: any) => set((state: any) => ({
        ...state,
        error_fields: { ...state.error_fields, ...action }
    })),
    resetSelectState: (name: any) => set((state: any) => ({
        ...state,
        [name]: { id: "", nome: "" }
    })),
}))