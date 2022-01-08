import type { ActionFunction } from "remix";
import { Form, redirect, useTransition } from "remix";
import invariant from "tiny-invariant";

import { Navbar } from "~/components/navbar";

type PostError = {
  message?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const message = formData.get("message");

  const errors: PostError = {};

  if (!message) errors.message = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof message === "string");

  await sendMessage(message);

  return redirect("/terima-kasih");
};

export default function Saran() {
  const transition = useTransition();

  return (
    <div className="min-h-screen px-6 md:px-11 lg:px-16 py-7 md:py-14 from-white via-white to-[#EBF0FE] bg-gradient-to-br">
      <body>
        <nav>
          <Navbar />
        </nav>
        <main className="mt-10">
          <div className="max-w-3xl mx-auto">
            <Form method="post">
              <p>
                <textarea
                  rows={10}
                  name="message"
                  className="block  w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-[#002884] focus:ring-[#002884] focus:ring-1 sm:text-sm"
                  placeholder="Masukkan saran di sini..."
                />
              </p>
              <p>
                <button
                  type="submit"
                  className="duration-500 w-full py-3 mt-6 font-semibold text-base md:text-lg hover:text-white hover:bg-[#002884] ring-[#002884] text-[#002884] transition-all ease-in-out ring-1 rounded-xl"
                >
                  {transition.submission
                    ? "Sedang mengirim..."
                    : "KIRIM SARAN 🚀"}
                </button>
              </p>
            </Form>
          </div>
        </main>
      </body>
    </div>
  );
}

export async function sendMessage(message: string) {
  const response = await fetch(
    "https://api-zakiego.vercel.app/api/telegram/murottal",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    },
  );
  return response.json();
}
