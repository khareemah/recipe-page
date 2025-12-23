export default function Nutrition() {
  return (
    <div className="pb-5 mb-5">
      <h3 className="text-[hsl(332,51%,32%)] text-[20px] font-young-serif mb-3">
        Nutrition
      </h3>

      <table className="w-full font-outfit text-[14px]">
        <tr className="border-b border-[hsl(30,18%,87%)]">
          <td className="py-2 px-6 text-[hsl(30,10%,34%)]">Calories</td>
          <td className="py-2 px-6 text-[hsl(332,51%,32%)] font-semibold">
            277kcal
          </td>
        </tr>

        <tr className="border-b border-[hsl(30,18%,87%)]">
          <td className="py-2 px-6 text-[hsl(30,10%,34%)]">Carbs</td>
          <td className="py-2 px-6 text-[hsl(332,51%,32%)] font-semibold">
            0g
          </td>
        </tr>

        <tr className="border-b border-[hsl(30,18%,87%)]">
          <td className="py-2 px-6 text-[hsl(30,10%,34%)]">Protein</td>
          <td className="py-2 px-6 text-[hsl(332,51%,32%)] font-semibold">
            20g
          </td>
        </tr>

        <tr>
          <td className="py-2 px-6 text-[hsl(30,10%,34%)]">Fat</td>
          <td className="py-2 px-6 text-[hsl(332,51%,32%)] font-semibold">
            22g
          </td>
        </tr>
      </table>
    </div>
  );
}
