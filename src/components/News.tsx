export const News = () => {
  return (
    <div className="w-full py-16 text-white px-4 ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            What is new. Get updates here! 😂
          </h1>
          <p className="font-bold my-3 text-[#00df9a]">
            tutapata taarifa nyingi kupitia email
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Type your email here"
              className="text-black flex p-4 w-full rounded-md"
            />
            <button className="bg-[#00df9a]  w-[200px] p-4 rounded-md text-black ml-4 my-3">
              Subscribe
            </button>
            
          </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              labore
            </p>
            <span className="text-[#00df9a]">Privacy policy</span>
        </div>
      </div>
    </div>
  );
};

export default News;
