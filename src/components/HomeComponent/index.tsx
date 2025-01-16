"use client";

import { HackathonEventType, hackathonsDummyData } from "@/constants/data";
import {
  CategorizedHackathonDataType,
  categorizeHackathonData,
} from "@/util/categorizeHackathonData";
import Filters from "../Filters";
import TabSwitch from "../UI/TabSwitch";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { firebaseAuth } from "../../../firebase.config";
import { signOut } from "firebase/auth";

export interface FiltersType {
  name: string;
  checked: boolean;
}

const HomeComponent = () => {
  const [modifiedHackathonData, setModifiedHackathonData] = useState(
    categorizeHackathonData(hackathonsDummyData) || {
      live: [],
      previous: [],
      upcoming: [],
    }
  );
  const [filters, setFilters] = useState<FiltersType[]>([]);
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab");

  useEffect(() => {
    if (currentTab && filters.length > 0) {
      const updatedData: CategorizedHackathonDataType = Object.entries(
        categorizeHackathonData(hackathonsDummyData)
      ).reduce((acc, [key, value]) => {
        if (currentTab === key) {
          acc[key as keyof CategorizedHackathonDataType] = (
            value as HackathonEventType[]
          ).filter((item) =>
            filters.some(
              (filter) =>
                filter.checked &&
                item.type.toLowerCase() === filter.name.toLowerCase()
            )
          );
        } else {
          acc[key as keyof CategorizedHackathonDataType] = value;
        }
        return acc;
      }, {} as CategorizedHackathonDataType);

      console.log("UPDATED", updatedData);

      setModifiedHackathonData(updatedData);
    } else {
      setModifiedHackathonData(categorizeHackathonData(hackathonsDummyData));
    }
  }, [currentTab, filters]);

  console.log("FILTERS", filters);
  console.log("modifiedHackathonData", modifiedHackathonData);

  return (
    <>
      <div>
        <div>
          <button
            className="border border-black p-2"
            onClick={() => {
              signOut(firebaseAuth);
            }}
          >
            Logout
          </button>
        </div>
        <Filters setFilters={setFilters} />
        <TabSwitch data={modifiedHackathonData} />
      </div>
    </>
  );
};

export default HomeComponent;
