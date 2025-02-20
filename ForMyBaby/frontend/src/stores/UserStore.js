import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useUserStore = create(persist((set) => ({
    id: 0,
    email: null,
    profileImg: null,
    name: null,
    jwt: null,
    fcm: null,
    family: null,
    babySelected: null, 
    babyList: [],
    uncheckedCnt: 0,
    stopCnt: null,
    setUncheckedCnt: (uncheckedCnt) => set({ uncheckedCnt: uncheckedCnt }),
    setId: (id) => set({ id: id}),
    setName: (name) => set({ name: name}),  
    setEmail: (email) => set({ email: email}),
    setProfileImg: (profileImage) => set({ profileImg: profileImage }),
    setJwt: (jwt) => set({ jwt: jwt }),
    setFcm: (fcm) => set({ fcm: fcm }),
    setFamily: (family) => set({ family: family}),
    setBabySelected: (babySelected) => set({ babySelected: babySelected }),
    setBabyList: (list) => set({ babyList: list }),
    setStopCnt: (status) => set({ status: status })
}), {
    name: "user",
    storage: createJSONStorage(() => localStorage)
}));

// export const useLocationStore = create(
//     persist(
//       (set) => ({
//         isExist: false,
//         setIsExist : (isExist) => set({isExist: isExist}),
//       }),
//       {
//         name: "location",
//         storage: createJSONStorage(() => sessionStorage)
//       }
//     )
//   )
