import UsecaseHeading from "./UsecaseHeading";
import UsecasePara from "./UsecasePara";

const BusinessLeaders = () => {
  return (
    <div className=" bg-[#f7f7f7] max-sm:p-2 p-8 w-full h-full col-span-2 max-lg:col-span-6 rounded-3xl ">
      <UsecaseHeading text="For Business Leaders" />
      <UsecasePara
        text={[
          "Identify trends & opportunities in real-",
          "time to make data-driven desicions and ",
          "stay ahead of competition.",
        ]}
      />
      <div className="bg-white rounded-3xl max-xl:p-2 p-4 mt-10 ">
        <p className="text-xl text-black font-medium">Trend Insights</p>
        <div className="flex pt-3 max-lg:flex-row max-xl:flex-col">
          <div className="grid grid-cols-4 gap-2 mr-2">
            {[...Array(16)].map((_, index) => {
              return (
                <p
                  key={index}
                  className={`${
                    [0, 2, 3, 6, 7].includes(index)
                      ? "bg-[#ffeae2]"
                      : "bg-[#f27418]"
                  } max-sm:w-7 w-8 max-sm:h-6 h-7 rounded-lg`}
                >
                  &nbsp;
                </p>
              );
            })}
            <p className="col-span-2 text-lg text-black font-semibold">84%</p>
            <p className="col-span-2 text-lg font-regular text-stone-400 place-self-end">
              Fashion
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2 ml-2">
            {[...Array(16)].map((_, index) => {
              return (
                <p
                  key={index}
                  className={`${
                    [10, 11, 12, 13, 14, 15].includes(index)
                      ? "bg-[#f27418]"
                      : "bg-[#ffeae2]"
                  } max-sm:w-7 w-8 max-sm:h-6 h-7 rounded-lg`}
                >
                  &nbsp;
                </p>
              );
            })}

            <p className="col-span-2 text-lg text-black font-semibold">43%</p>
            <p className="col-span-2 text-lg font-regular text-stone-400 place-self-end">
              Tech
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLeaders;
