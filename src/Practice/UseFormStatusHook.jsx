import { useFormStatus } from "react-dom";
const UseFormStatushook = () => {
  async function handleForm() {
    await new Promise((res) => setTimeout(res, 5000));
  }

  function CustomForm() {
    const { pending } = useFormStatus();

    return (
      <>
        <input type="text" className="border px-2 py-1" />
        <br />
        <br />
        <input type="text" className="border px-2 py-1" />
        <br />
        <br />
        <button
          disabled={pending}
          className={`border px-2 py-1 transition-all duration-200 ${
            pending ? "opacity-80" : "opacity-100"
          }`}
        >
          {pending ? "submiting..." : "submit"}
        </button>
      </>
    );
  }

  return (
    <div>
      <h1 className="mb-10 text-4xl">Use Form Status Hook</h1>
      <form action={handleForm}>
        <CustomForm />
      </form>
    </div>
  );
};

export default UseFormStatushook;
