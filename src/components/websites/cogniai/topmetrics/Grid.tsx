import ProfileCompletion from "./ProfileCompletion";
import IntegrationTools from "./IntegrationTools";
import UserTrends from "./UserTrends";
import Reminders from "./Reminders";

const Grid = () => {
  return (
    <div className="grid grid-cols-2 xl:items-start place-items-end gap-4 max-xl:px-2 pt-20 pb-5 mb-10 rounded-t-[4rem] bg-[radial-gradient(ellipse_at_bottom,#f46a006d_15%,#e0f2fe_70%,#e0f2fe_100%)]">
      <IntegrationTools />
      <ProfileCompletion />
      <UserTrends />
      <Reminders />
    </div>
  );
};

export default Grid;
