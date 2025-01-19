const CategoryCard = () => {
  return (
    <div className="flex select-none max-w-lg text-[0.65rem] md:text-sm lg:text-[0.9rem] xl:text-base items-center font-semibold justify-between w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto mt-6 mb-8">
      <div className="bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#cf3903] animate-gradient">
        Develop
      </div>
      <div className="bg-gradient-to-l from-[#a1c4fd] to-[#c2e9fb] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#097360] animate-gradient">
        Design
      </div>
      <div className="bg-gradient-to-l from-[#fbc2eb] to-[#a6c1ee] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#4e0aa2] animate-gradient">
        Anime
      </div>
      <div className="bg-gradient-to-l from-[#fddb92] to-[#d1fdff] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#690c58] animate-gradient">
        Music
      </div>
    </div>
  );
};

export default CategoryCard;
