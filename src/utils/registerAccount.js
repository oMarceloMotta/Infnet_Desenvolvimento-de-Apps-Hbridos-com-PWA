import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const registerAccount = (email, password) => {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuário registrado com sucesso.
      const user = userCredential.user;
      console.log("Usuário registrado com sucesso:", user.uid);
    })
    .catch((error) => {
      // Erro ao registrar o usuário.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erro ao registrar:", errorCode, errorMessage);
    });
};
