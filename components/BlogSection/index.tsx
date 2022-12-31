import ArticleCard from 'components/ArticleCard';
import CardContainer from 'components/CardContainer';
import CardHeader from 'components/CardHeader';

const BlogSection = () => {
  return (
    <CardContainer className="max-w-[710px]">
      <CardHeader
        title={'Latest thoughts'}
        desc={
          'below is where you can see my latest thoughts through my blog.'
        }
      />
      {/* TODO: turn into a carousel of recent articles (max: 5 articles only) */}
      <div className="flex flex-row w-full gap-6 py-4 pb-9 scroll-smooth snap-mandatory snap-x overflow-scroll">
        <div className="snap-center">
          <div className="w-[135px]" />
        </div>
        <div className="snap-center">
          <ArticleCard
            title={'a quick brown fox jumps over the lazy dog'}
            publishedAt={'08/10/2022'}
            summary={
              'publishedAt publishedAtpublishedAt publishedAt publishedAt publishedAtpublishedAtpublishedAtpublishedAt publishedAt publishedAt'
            }
          />
        </div>
        <div className="snap-center">
          <ArticleCard
            title={'a quick brown fox jumps over the lazy dog'}
            publishedAt={'08/10/2022'}
            summary={
              'publishedAt publishedAtpublishedAt publishedAt publishedAt publishedAtpublishedAtpublishedAtpublishedAt publishedAt publishedAt'
            }
          />
        </div>
        <div className="snap-center">
          <ArticleCard
            title={'a quick brown fox jumps over the lazy dog'}
            publishedAt={'08/10/2022'}
            summary={
              'publishedAt publishedAtpublishedAt publishedAt publishedAt publishedAtpublishedAtpublishedAtpublishedAt publishedAt publishedAt'
            }
          />
        </div>
        <div className="snap-center">
          <ArticleCard
            title={'a quick brown fox jumps over the lazy dog'}
            publishedAt={'08/10/2022'}
            summary={
              'publishedAt publishedAtpublishedAt publishedAt publishedAt publishedAtpublishedAtpublishedAtpublishedAt publishedAt publishedAt'
            }
          />
        </div>
        <div className="snap-center">
          <div className="w-[135px]" />
        </div>
      </div>
    </CardContainer>
  );
};

export default BlogSection;
