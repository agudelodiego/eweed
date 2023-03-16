import Commerce from "@chec/commerce.js"


const KEY = String(process.env.NEXT_PUBLIC_PUBLIC_KEY)
export const commerce = new Commerce(KEY,true)