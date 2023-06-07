import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import path from "path";

import { MDXRemote } from "next-mdx-remote/rsc";

const content = "";

export default function Home() {
  // const fullPath = join(postsDir || defaultPostsDir, filename);

  const fileContents = fs.readFileSync("./posts/my-post.mdx", "utf8");

  const { content, data } = matter(fileContents);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* @ts-expect-error */}
      <MDXRemote
        source={content}
        options={{
          mdxOptions: { remarkPlugins: [require("remark-prism")] },
        }}
      />
    </main>
  );
}
