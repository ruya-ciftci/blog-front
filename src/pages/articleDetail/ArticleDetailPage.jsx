import React from 'react'
import { Link } from "react-router-dom";
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants';
import SuggestedPosts from './container/SuggestedPosts';
import CommentsContainer from '../../components/comments/CommentsContainer';
import SocialShareButtons from '../../components/SocialShareButtons';

const breadCrumbsData = [
    {name: "Home", link:'/'},
    {name: "Blog", link:'/blog'},
    {name: "Article title", link:'/blog/1'},
];

const postsData = [
    {
        _id: "1",
        image:images.PostImage,
        title:"Help children get better education",
        createdAt:"2024-05-28t15:35:53.607+0000"

    },   {
        _id: "2",
        image:images.PostImage,
        title:"Help children get better education",
        createdAt:"2024-05-28t15:35:53.607+0000"

    },   {
        _id: "3",
        image:images.PostImage,
        title:"Help children get better education",
        createdAt:"2024-05-28t15:35:53.607+0000"

    },   {
        _id: "4",
        image:images.PostImage,
        title:"Help children get better education",
        createdAt:"2024-05-28t15:35:53.607+0000"

    }
]
const tagsData = [
    "Medical",
    "Lifestyle",
    "Learn",
    "Healthy",
    "Food",
    "Diet",
    "Education",
];


const ArticleDetailPage = () => {
  return (
 <MainLayout>
    <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start"> 
       <article className="flex-1">
        <BreadCrumbs data={breadCrumbsData} />
        <img 
        className="rounded-xl w-full" 
        src={images.PostImage}
         alt="laptop"
         />
         <Link to="/blog?category=selectedCategory"
          className="text-primary text-sm font-roboto inline-block mt-4 md:text-base">
            EDUCATION
         </Link>
         <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
           
Computers İn The Future
            </h1>
            <div className="mt-4 text-dark-soft">
<p className="leading-7">Computers continue to play a significant role in every aspect of our lives. Rapid advancements in technology are making computer usage more diverse and effective. So, what can we expect in the future of computer usage? Here are some key trends and expectations:

1. Artificial Intelligence and Machine Learning
Artificial intelligence (AI) and machine learning are making computers smarter and more user-friendly. In the future, AI-powered computers will automate daily tasks, help us solve more complex problems, and act as personal assistants. These technologies will revolutionize sectors such as healthcare, finance, education, and entertainment.

2. Quantum Computers
Quantum computers will far exceed traditional computers, allowing us to perform complex calculations much faster. Although still in the development stage, this technology will dramatically increase data processing capacities and speeds. This will lead to significant advancements in fields ranging from scientific research to cryptography.

3. Cloud Computing and Distributed Systems
Cloud computing offers flexibility and accessibility by providing data storage and processing power over the internet. In the future, more users will store their data in the cloud and use cloud-based applications. Additionally, distributed systems and edge computing will process data on local devices rather than central servers, reducing latency and improving performance.

4. Wearable Technologies and Augmented Reality
Wearable devices and augmented reality (AR) are making computer usage more personal and integrated. In the future, AR glasses and other wearable devices will bring computer screens into our physical world, providing instant access to information and enriching the user experience. These technologies will be used in fields ranging from education to healthcare, industrial design to entertainment.

5. Security and Privacy
Security and privacy are becoming more critical in the digital world. In the future, advanced security protocols and encryption techniques will become standard for computer users. Additionally, stricter regulations and technologies will be developed to protect personal data and ensure privacy.

6. Sustainable Technologies
Technology companies will develop more sustainable and energy-efficient computer solutions to reduce their environmental impact. Data centers powered by renewable energy, devices made from recyclable materials, and software that minimizes energy consumption will make future computer usage more eco-friendly.

Conclusion
Future computer usage will be shaped by emerging technologies and changing user habits. Developments in artificial intelligence, quantum computing, cloud computing, wearable technologies, security, and sustainability will make computers even more crucial. These innovations will offer significant opportunities for both individual users and industries, fundamentally transforming our lives.

</p>
            </div>      
            <CommentsContainer className="mt-10" logginedUserId="a"/>
       </article>
       <div>
     <SuggestedPosts 
       header="Latest Article" 
       posts={postsData}
        tags={tagsData}
        className="mt-8 lg:mt-0 lg:max-w-xs"
        />
        <div className="mt-7">
            <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                Share on:</h2>
                <SocialShareButtons 
            url={encodeURI(
                "https://moonfo.com/post/client_side-and-server-side-explantation"
            )}
            title={encodeURIComponent(
                "Client-side and server-side explantation"
            )}
                />
        </div>
       </div>
    </section>
 </MainLayout>
  );
};

export default ArticleDetailPage
