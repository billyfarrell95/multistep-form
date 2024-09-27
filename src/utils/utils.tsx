export const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
export  const validatePhone = (phone: string) => /^\(\d{3}\) \d{3}-\d{4}$/.test(phone);