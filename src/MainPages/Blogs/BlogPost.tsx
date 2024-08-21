import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { useParams } from 'react-router-dom';

interface Asset {
    sys: {
        id: string;
    };
    fields: {
        file: {
            url: string;
        };
    };
}

interface PostFields {
    headline: string;
    content: any; // RichText content
    date: string;
    image: {
        sys: {
            id: string;
        };
    };
}

interface ContentfulPost {
    sys: {
        id: string;
    };
    fields: PostFields;
}

interface FetchResponse {
    items: ContentfulPost[];
    includes?: {
        Asset?: Asset[];
    };
}

interface Post {
    headline: string;
    content: any;
    date: string;
    imageUrl: string;
}

const BlogContent: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const accessToken = 'QG1NAgWPrQw6ReAr3oeLzAhh3NsHxVdS0-6Fv8oF2e4';
        const spaceId = '18q0bnjllo71';
        const environmentId = 'master';
        const contentTypeId = 'blog';
        const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=${contentTypeId}&include=10`;

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data: FetchResponse) => {
                const assets = data.includes?.Asset?.reduce((acc: { [key: string]: string }, asset) => {
                    acc[asset.sys.id] = asset.fields?.file?.url || '';
                    return acc;
                }, {});

                const postData = data.items.find(item => item.sys.id === id);

                if (postData && assets && postData.fields.image?.sys.id) {
                    setPost({
                        headline: postData.fields.headline,
                        content: postData.fields.content,
                        date: postData.fields.date,
                        imageUrl: assets[postData.fields.image.sys.id],
                    });
                } else {
                    setError('Post not found or missing image');
                }
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const Bold = ({ children }: any) => <strong>{children}</strong>;
    const Text = ({ children }: any) => <p className="mb-8 text-lg leading-7 text-gray-700">{children}</p>;
    const Heading = ({ children, level }: { children: React.ReactNode; level: 'h2' | 'h3' | 'h4' }) => {
        const sizeClasses = {
            h2: 'text-3xl mt-12 mb-6 font-bold text-gray-900',
            h3: 'text-2xl mt-10 mb-5 font-semibold text-gray-800',
            h4: 'text-xl mt-8 mb-4 font-medium text-gray-700',
        };
        return <div className={sizeClasses[level]}>{children}</div>;
    };

    const options = {
        renderMark: {
            [MARKS.BOLD]: (text: React.ReactNode) => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <Text>{children}</Text>,
            [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => <Heading level="h2">{children}</Heading>,
            [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => <Heading level="h3">{children}</Heading>,
            [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => <Heading level="h4">{children}</Heading>,
            // Add custom rendering for other block types as needed
        },
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post?.headline}</h1>
            <img
                className="w-full h-56 object-cover rounded-lg mb-6"
                src={post?.imageUrl}
                alt={post?.headline}
            />
            <p className="text-gray-500 mb-4">{post?.date ? new Date(post.date).toLocaleDateString() : ''}</p>
            <div className="prose prose-lg max-w-none text-gray-700">
                {post?.content && documentToReactComponents(post.content, options)}
            </div>
        </div>
    );
};

export default BlogContent;