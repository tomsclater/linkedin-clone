import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import Image from "next/image";
import TimeAgo from "timeago-react";

function Widgets({ articles }) {
  return (
  <div classNAme="hidden xl:inline space-y-2">
      {/* {News} */}
      <div className="bg-white dark:bg-[#1d2226] py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border border-gray-300 dark:border-none">
        <div>
            <h4>LinkedIn News</h4>
            <InfoRoundedIcon className="h-5 w-5" />
        </div>
      </div>
      {/* {Ads} */}
  </div>
  );
}

export default Widgets;