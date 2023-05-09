import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  username: string;
  isCoach: Boolean;
};

const createUser = async (
  email: string,
  password: string,
  username: string,
  isCoach: Boolean
) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, username, isCoach }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};

const SignupForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    try {
      const result = await createUser(
        data.email,
        data.password,
        data.username,
        data.isCoach
      );
      console.log(result);
      router.replace("/");
    } catch (error) {
      console.log(error);
      throw new Error("Cannot create user");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            type="password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "min length is 6",
              },
            })}
          />
        </div>
        {errors.password && (
          <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Username
        </label>
        <div className="mt-2">
          <input
            id="username"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("username", {
              required: true,
              minLength: {
                value: 4,
                message: "min length is 4",
              },
            })}
          />
        </div>
        {errors.username && (
          <p className="mt-2 text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label
          className="relative inline-flex items-center cursor-pointer"
          htmlFor="isCoach"
        >
          <input
            id="isCoach"
            type="checkbox"
            className="sr-only peer"
            {...register("isCoach")}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            I'm a coach
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in
      </button>
    </form>
  );
};

export default SignupForm;
