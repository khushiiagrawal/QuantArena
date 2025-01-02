export default function Hero() {
  return (
    <div className="flex flex-wrap items-center justify-between px-20 py-18 bg-black text-white">
     
      <div className="max-w-lg mt-24 ml-6">
        <h1 className="text-5xl font-bold uppercase leading-tight font-bebas-neue ">
          Advanced Analytics & Risk Management Solutions
        </h1>
        <p className="mt-8 text-xl font-light leading-relaxed">
          Identify, assess, and mitigate risks in real-time with data-driven
          insights tailored to your business needs.
        </p>
        <button className="flex items-center gap-2 px-6 py-2 mt-6 bg-green-300 text-black rounded-md shadow hover:bg-green-500 transition">
          <span>Get In Touch</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/192f3b2d699a273c665bf60310f3cb2cf3b3992509fd278e60369b421f9ef038?apiKey=49da03168f27461ca59f3dd580a07fb1&"
            alt="Arrow icon"
            className="w-5 h-5"
          />
        </button>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/0dd9a1ec23b967bc0683ef6a4e358a6b2cfc881e532cb332e8a26c65c535382b?apiKey=49da03168f27461ca59f3dd580a07fb1&"
          alt="Decorative element"
          className="object-contain mt-12 aspect-square w-[68px] max-md:mt-10"
        />
      </div>
        <div className="flex-1 ml-30 max-w-xl">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/49da03168f27461ca59f3dd580a07fb1/535f906c05d9d3ce1bcbc19837a3d3cc02d374afaac2315d8d1369cfe3c85590?apiKey=49da03168f27461ca59f3dd580a07fb1&"
          alt="Hero illustration"
          className="w-full h-auto max-w-4xl mt-24 py-12" 
        />
      </div>
    </div>
  );
}