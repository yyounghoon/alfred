import path, { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { TPost } from '../../app/posts/[slug]';

const BASE_PATH = 'src';
const POSTS_PATH = path.join(process.cwd(), 'src/_posts');

export function getPostSlugs() {
  return fs.readdirSync(POSTS_PATH);
}

// 각각 파일을 읽어서,객체 형태로 정보를 담는다
export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
    slug: realSlug,
  } as TPost;
};

export const getAllPosts = () => {
  const slugs = getPostSlugs();

  const posts = slugs.map((slug) => {
    return getPostBySlug(slug);
  });
  return posts;
};
