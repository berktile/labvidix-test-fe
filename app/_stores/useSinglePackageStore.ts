import { create } from 'zustand'
import { SinglePackageData } from '../(routes)/results/[id]/page'

const useSinglePackageStore = create<{
    singlePackage: SinglePackageData | null
    setSinglePackage: (singlePackage: SinglePackageData) => void
}>(set => ({
    singlePackage: null,
    setSinglePackage: (singlePackage) => set({ singlePackage })
}))

export default useSinglePackageStore

