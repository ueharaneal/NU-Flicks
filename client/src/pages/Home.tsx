import Categories from "@/components/Feed/Categories";
function Home() {
  return (
    <div className="mt-20">
      <div className=" flex flex-col justify-center items-center text primary gap-y-2">
        <h1 className="text-7xl">
          Welcome to <span className="text-primary">NU Flicks</span>
        </h1>
        <h2 className="text-xl">The best movie review website</h2>
        <h3 className="text-muted-foreground">Made by Neal Uehara</h3>
        
        <ul className="flex mt-7 text-4xl gap-x-40 text-primary">
          <li>•</li>
          <li>•</li>
          <li>•</li>
        </ul>
        <div className="mt-5 w-5/6 text-left flex ">
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default Home;
