import type { Metadata } from "next";
import { Link2 } from "lucide-react";

import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30">
            <Link2 className="h-7 w-7 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">MasterLink</h1>
            <p className="mt-1 text-sm text-slate-500">
              Sign in to manage your messaging links
            </p>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
