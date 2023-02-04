import Container from "components/Container";
import LinkButton from "components/LinkButton";

const NotFound = () => {
  return (
    <Container title="404 - Lance Arevalo">
      <div
        className="mx-auto my-20 mb-16 flex w-11/12
        max-w-2xl flex-col items-start justify-center lg:w-[1000px]"
      >
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
          404 - Page not found
        </h1>
        <p className="mb-8 text-gray-600 dark:text-text-secondary">
          Whoops! It looks like you&apos;ve stumbled upon a dead end. Before you
          go, double check the URL and make sure everything is correct. In the
          meantime, take a moment to explore some of my other pages and see what
          exciting things you can discover.
        </p>
        <LinkButton label={"Return Home"} link={"/"} />
      </div>
    </Container>
  );
};

export default NotFound;
