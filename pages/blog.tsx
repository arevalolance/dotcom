import { Inter } from '@next/font/google';
import BlogLink from 'components/BlogLink';
import Navbar from 'components/Navbar';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });

const Blog = () => {
  return (
    <>
      <Navbar />

      <div className="mx-auto w-8/12">
        <input
          className={`${inter.className} w-full mx-auto focus:border-gray-500 border-gray-400 rounded-md p-2 border-[1px] focus:outline-none text-sm`}
          placeholder="What do you want to read?"
        />

        <div className="mt-8">
          <span className={`${inter.className} font-medium text-xl`}>
            Most Popular
          </span>
          <div className="mx-auto">
            <BlogLink
              title={'A quick brown fox jumps over the lazy dog'}
              publishedAt={'09-09-2000'}
              slug={'test-slug'}
              summary={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit ac mi nec facilisis. Cras non metus tincidunt arcu lacinia maximus. Etiam ac ipsum consectetur, condimentum lectus nec, vehicula nulla. Aenean feugiat vulputate gravida.'
              }
              tag={'Essay'}
            />
            <BlogLink
              title={'A quick brown fox jumps over the lazy dog'}
              publishedAt={'09-09-2000'}
              slug={'test-slug'}
              summary={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit ac mi nec facilisis. Cras non metus tincidunt arcu lacinia maximus. Etiam ac ipsum consectetur, condimentum lectus nec, vehicula nulla. Aenean feugiat vulputate gravida.'
              }
            />
            <BlogLink
              title={'A quick brown fox jumps over the lazy dog'}
              publishedAt={'09-09-2000'}
              slug={'test-slug'}
              summary={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit ac mi nec facilisis. Cras non metus tincidunt arcu lacinia maximus. Etiam ac ipsum consectetur, condimentum lectus nec, vehicula nulla. Aenean feugiat vulputate gravida.'
              }
            />
          </div>
        </div>

        <div className="mt-8">
          <span className={`${inter.className} font-medium text-xl`}>
            Most Recent
          </span>
          <div className="mx-auto">
            <BlogLink
              title={'A quick brown fox jumps over the lazy dog'}
              publishedAt={'09-09-2000'}
              slug={'test-slug'}
              summary={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit ac mi nec facilisis. Cras non metus tincidunt arcu lacinia maximus. Etiam ac ipsum consectetur, condimentum lectus nec, vehicula nulla. Aenean feugiat vulputate gravida.'
              }
              embed={{
                slug: '_rRFDDfXiFE',
                tag: 'Video',
              }}
            />
            <BlogLink
              title={'A quick brown fox jumps over the lazy dog'}
              publishedAt={'09-09-2000'}
              slug={'test-slug'}
              summary={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit ac mi nec facilisis. Cras non metus tincidunt arcu lacinia maximus. Etiam ac ipsum consectetur, condimentum lectus nec, vehicula nulla. Aenean feugiat vulputate gravida.'
              }
            />
            <BlogLink
              title={'A quick brown fox jumps over the lazy dog'}
              publishedAt={'09-09-2000'}
              slug={'test-slug'}
              summary={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit ac mi nec facilisis. Cras non metus tincidunt arcu lacinia maximus. Etiam ac ipsum consectetur, condimentum lectus nec, vehicula nulla. Aenean feugiat vulputate gravida.'
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
