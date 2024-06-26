import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const user = useUser();

  const { data } = api.post.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <p>Something popped up</p>
        <div>
          {!user.isSignedIn && <SignInButton />}
          {!!user.isSignedIn && <SignOutButton />}
        </div>
        <div>
          {data?.map((post) => <div key={post.id}>{post.content}</div>)}
        </div>
      </main>
    </>
  );
}
