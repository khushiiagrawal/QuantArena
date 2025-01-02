
import PropTypes from 'prop-types';

export default function FeatureCard({ title, description, iconUrl, hasCustomIcon }) {
  return (
    <div className="flex flex-col grow items-center px-8 pt-11 pb-44 w-full text-center bg-white shadow-[0px_8px_41px_rgba(0,0,0,0.07)] max-md:px-5 max-md:pb-24 max-md:mt-10">
      {hasCustomIcon ? (
        <div className="flex shrink-0 rounded-full bg-violet-500 bg-opacity-10 h-[136px] w-[136px]" />
      ) : (
        <img
          loading="lazy"
          src={iconUrl}
          alt=""
          className="object-contain max-w-full aspect-square w-[136px]"
        />
      )}
      <h3 className="mt-14 text-2xl font-semibold text-neutral-700 max-md:mt-10">
        {title}
      </h3>
      <p className="self-stretch mt-4 text-xl leading-8 text-zinc-600">
        {description}
      </p>
    </div>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  hasCustomIcon: PropTypes.bool
};