import { useForm } from "react-hook-form";

export function FormSubmit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.target.submit();
  };

  const thanksUrl = window.location.origin + '/Thanks';

  return (
    <section class="flex justify-center justify-items-center">
      <form
        action="https://formsubmit.co/potofcode8@gmail.com"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        class="bg-gray-900/60 p-8 rounded-lg shadow-lg border border-gray-600 mt-4 mb-4"
      >
        <p class="text-white font-bold text-xl">Nombre</p>
        <input
          type="text"
          name="Nombre"
          placeholder="Jose Andres Da-Silva"
          {...register("Nombre", {
            required: {
              value: true,
              message: "Rellene este campo.",
            },
            minLength: {
              value: 2,
              message: "El nombre debe tener al menos 2 caracteres.",
            },
            maxLength: {
              value: 50,
              message: "El nombre no puede exceder los 50 caracteres.",
            },
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/i,
              message: "El nombre solo puede contener letras y espacios.",
            },
          })}
          class="block w-full sm:w-96 md:w-96 max-w-md p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.Nombre && (
          <p class="text-red-500 mb-2">{errors.Nombre.message}</p>
        )}
        <p class="text-white font-bold text-xl">Correo Electrónico</p>
        <input
          type="email"
          name="CorreoElectronico"
          placeholder="josesilva@gmail.com"
          {...register("CorreoElectronico", {
            required: {
              value: true,
              message: "El correo es obligatorio.",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Introduzca un correo electrónico válido.",
            },
          })}
          class="block w-full max-w-md p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.CorreoElectronico && (
          <p class="text-red-500 mb-2">{errors.CorreoElectronico.message}</p>
        )}
        <p class="text-white font-bold text-xl">Mensaje</p>
        <textarea
          name="Mensaje"
          title="Tu mensaje debe tener entre 20 y 500 caracteres."
          {...register("Mensaje", {
            required: {
              value: true,
              message: "El mensaje es obligatorio.",
            },
            minLength: {
              value: 20,
              message: "El mensaje debe tener al menos 20 caracteres.",
            },
            maxLength: {
              value: 500,
              message: "El mensaje no puede exceder los 500 caracteres.",
            },
          })}
          class="block w-full max-w-md h-96 p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-le resize-none"
          placeholder="Escribe tu mensaje aquí..."
        ></textarea>
        {errors.Mensaje && (
          <p class="text-red-500 mb-2">{errors.Mensaje.message}</p>
        )}
        <input
          type="hidden"
          name="_next"
          value={thanksUrl}
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <button
          type="submit"
          class="block w-full max-w-md p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
