export default function Ingredients() {
  return (
    <div className="pb-5 mb-5 border-b-2 border-b-[hsl(30,10%,90%)] ">
      <h3 className="text-[hsl(332,51%,32%)] text-[20px] mb-4 font-young-serif">
        Ingredients
      </h3>

      <div className="text-[hsl(30,10%,34%)] flex flex-col text-[14px] space-y-1 font-medium">
        <div className="flex gap-3 items-center">
          <div className="size-1.25 rounded-full bg-[hsl(30,10%,34%)]"></div>
          <span>2-3 large eggs</span>
        </div>

        <div className="flex gap-3 items-center">
          <div className="size-1.25 rounded-full bg-[hsl(30,10%,34%)]"></div>
          <span>Salt, to taste</span>
        </div>

        <div className="flex gap-3 items-center">
          <div className="size-1.25 rounded-full bg-[hsl(30,10%,34%)]"></div>
          <span>Pepper, to taste</span>
        </div>

        <div className="flex gap-3 items-center">
          <div className="size-1.25 rounded-full bg-[hsl(30,10%,34%)]"></div>
          <span>1 tablespoon of butter or oil</span>
        </div>

        <div className="flex gap-3 items-center">
          <div className="size-1.25 rounded-full bg-[hsl(30,10%,34%)]"></div>
          <span>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </span>
        </div>
      </div>
    </div>
  );
}
