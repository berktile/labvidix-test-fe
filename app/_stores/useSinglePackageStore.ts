import { create } from 'zustand'
import { SinglePackageData } from '../(routes)/results/[id]/page'

const useSinglePackageStore = create<{
    isSuccess: boolean
    singlePackage: SinglePackageData | null
    setSinglePackage: (singlePackage: SinglePackageData) => void
    setIsSuccess: (isSuccess: boolean) => void
}>(set => ({
    isSuccess: false,
    singlePackage: null,
    setIsSuccess:  (isSuccess) => set({ isSuccess }),
    setSinglePackage: (singlePackage) => set({ singlePackage })
}))

export default useSinglePackageStore

