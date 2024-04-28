export default function checkNewUser(obj) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const username = !!obj.username && obj.username.length >= 6;
    const email = !!obj.email && emailRegex.test(obj.email);
    const age = !!obj.age && obj.age >= 18 && obj.age.length <= 2;
    const language = !!obj.langague
    const term1 = !!obj.term1
    const term2 = !!obj.term2

    return {
        username,
        email,
        age,
        language,
        term1,
        term2
    }
}
  