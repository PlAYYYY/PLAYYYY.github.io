import Link from 'next/link'

import type {GetStaticProps } from "next";
import { getSortedPostsData } from "../../utils/posts";


export const getStaticProps: GetStaticProps = async () => {
    // 获取文章列表
    const allPostsData = getSortedPostsData();
    console.log(allPostsData,'getSortedPostsData')
    return {
        props: {
            allPostsData,
        },
    };
};


export default function Tsx({allPostsData}) {
    return (
        <div>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <span>Back to home</span>
                    {JSON.stringify(allPostsData)}
                </Link>
            </h2>
        </div>
    )
}
