import Hero from "./_components/Hero";
import Ingredients from "./_components/Ingredients";
import Instructions from "./_components/Instructions";
import Nutrition from "./_components/Nutrition";
import Recipe from "./_components/Recipe";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans p-4 md:p-6">
      <div className="max-w-150 w-full mx-auto my-5 md:my-10 p-3 md:p-6 bg-white rounded-md">
        <Hero />
        <Recipe />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </div>
  );
}
