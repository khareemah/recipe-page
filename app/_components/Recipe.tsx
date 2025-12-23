export default function Recipe() {
  return (
    <>
      <h2 className="text-[18px] md:text-[24px] font-young-serif mb-2 ">
        Simple Omelette Recipe
      </h2>
      <p className="text-[14px] font-outfit text-[hsl(30,10%,34%)] mb-4">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <div className="bg-[hsl(330,100%,98%)] p-3 rounded-md mb-5">
        <h3 className="text-[hsl(332,51%,32%)] font-outfit font-semibold text-[18px] mb-2">
          Preparation time
        </h3>

        <div className="text-[hsl(30,10%,34%)] flex flex-col text-[14px] space-y-1 font-medium">
          <div className="flex gap-5 items-center">
            <div className="size-1.25 rounded-full bg-[hsl(30,10%,34%)]"></div>
            <p>
              <span className="font-bold">Total:</span> Approximately 10 minutes
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <div className="size-1.25 rounded-full bg-[hsl(30,10%,34%)]"></div>
            <p>
              <span className="font-bold">Preparation:</span> 5 minutes
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <div className="size-1.25 rounded-full bg-[hsl(30,10%,34%)]"></div>
            <p>
              <span className="font-bold">Cooking:</span> 5 minutes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
