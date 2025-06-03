import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { AvatarGroup, Button, Column, Heading, HeadingNav, Icon, Row, Text } from "@/once-ui/components";
import { about, blog, person, baseURL } from "@/app/resources";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";
import { Metadata } from 'next';
import { Meta, Schema } from "@/once-ui/modules";

// ✅ Optional: Use nodejs runtime explicitly
export const runtime = 'nodejs';

// ✅ Fixed: no more Promise in param type
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const posts = getPosts(["src", "app", "blog", "posts"]);
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (e) {
    console.error("Error in generateStaticParams:", e);
    return [];
  }
}

export async function generateMetadata({
                                         params,
                                       }: {
  params: { slug: string | string[] };
}): Promise<Metadata> {
  const slugPath = Array.isArray(params.slug) ? params.slug.join('/') : params.slug || '';

  const posts = getPosts(["src", "app", "blog", "posts"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image
        ? `${baseURL}${post.metadata.image}`
        : `${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`,
    path: `${blog.path}/${post.slug}`,
  });
}

// ✅ Fixed: no more Promise in param type
export default async function Blog({
                                     params
                                   }: { params: { slug: string | string[] } }) {
  const slugPath = Array.isArray(params.slug) ? params.slug.join('/') : params.slug || '';

  const post = getPosts(["src", "app", "blog", "posts"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
      post.metadata.team?.map((person) => ({
        src: person.avatar,
      })) || [];

  return (
      <Row fillWidth>
        <Row maxWidth={12} hide="m" />
        <Row fillWidth horizontal="center">
          <Column as="section" maxWidth="xs" gap="l">
            <Schema
                as="blogPosting"
                baseURL={baseURL}
                path={`${blog.path}/${post.slug}`}
                title={post.metadata.title}
                description={post.metadata.summary}
                datePublished={post.metadata.publishedAt}
                dateModified={post.metadata.publishedAt}
                image={`${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`}
            />
            <Button
                data-border="rounded"
                href="/blog"
                weight="default"
                variant="tertiary"
                size="s"
                prefixIcon="chevronLeft"
            >
              Posts
            </Button>
            <Heading variant="display-strong-s">{post.metadata.title}</Heading>
            <Row gap="12" vertical="center">
              {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
              <Text variant="body-default-s" onBackground="neutral-weak">
                {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
              </Text>
            </Row>
            <Column as="article" fillWidth>
              <CustomMDX source={post.content} />
            </Column>
            <ScrollToHash />
          </Column>
        </Row>
        <Column
            maxWidth={12}
            paddingLeft="40"
            fitHeight
            position="sticky"
            top="80"
            gap="16"
            hide="m"
        >
          <Row
              gap="12"
              paddingLeft="2"
              vertical="center"
              onBackground="neutral-medium"
              textVariant="label-default-s"
          >
            <Icon name="document" size="xs" />
            On this page
          </Row>
          <HeadingNav fitHeight />
        </Column>
      </Row>
  );
}
