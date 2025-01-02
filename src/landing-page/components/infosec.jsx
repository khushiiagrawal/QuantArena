import PropTypes from 'prop-types';

export default function InfoSection({ title, content, imageUrl, isImageLeft = true }) {
  const ContentSection = () => (
    <div className="flex flex-col mt-11 text-black max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-medium max-md:max-w-full">{title}</h2>
      <p className="mt-6 text-2xl font-light leading-9 max-md:max-w-full">
        {content}
      </p>
    </div>
  );

  const ImageSection = () => (
    <div className="flex shrink-0 mx-auto max-w-full bg-zinc-300 h-[406px] w-[740px] max-md:mt-10">
      <img src={imageUrl} alt={title} className="object-cover h-full w-full" />
    </div>
  );

  return (
    <div className="flex gap-5 max-md:flex-col">
      {isImageLeft ? (
        <>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <ImageSection />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ContentSection />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <ContentSection />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ImageSection />
          </div>
        </>
      )}
    </div>
  );
}

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  isImageLeft: PropTypes.bool
};