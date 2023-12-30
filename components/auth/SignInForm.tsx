import { useTransition } from "react";
import { signInWithEmailAndPassword } from "../../app/auth/actions";

function SignInForm() {
  const [isPending, startTransition] = useTransition();

  function onSubmit(data: any) {
    startTransition(async () => {
      const result = await signInWithEmailAndPassword(data);

      const { error } = JSON.parse(result);

      if (error?.message) {
        // toast
      } else {
        // toast
      }
    });
  }

  return <form onSubmit={onSubmit}></form>;
}

export default SignInForm;
