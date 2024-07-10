import { atom } from "recoil";

export const rankState = atom<string>({
    key: "rankState",
    default: '0'
})

export const percentileState = atom<string>({
    key: "percentileState",
    default: '0'
})

export const scoreState = atom<string>({
    key: "scoreState",
    default: '0'
})