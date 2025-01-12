import React, { useCallback, useEffect, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { CategorizedHackathonDataType } from "@/util/categorizeHackathonData";
import HackathonCard from "@/components/HackathonCard";
import classNames from "classnames";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface TabSwitchType {
  data: CategorizedHackathonDataType;
}

const TabSwitch = ({ data }: TabSwitchType) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(data)[0]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    handleTabChange(currentTab);
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleTabChange = (value: string) => {
    console.log("Current Tab:", value);
    setCurrentTab(value);
    // Example: Update the URL with the selected tab
    const queryString = createQueryString("tab", value);
    router.push(`${pathname}?${queryString}`);
  };

  console.log("DATATA", data);

  const tabs = Object.keys(data);
  console.log("TABS", tabs);

  return (
    <Tabs.Root
      className="flex flex-col shadow-[0_2px_10px] shadow-blackA2"
      defaultValue={tabs[0]}
      value={currentTab}
      onValueChange={handleTabChange}
    >
      <div className="w-fit">
        <Tabs.List
          className="flex shrink-0 border-b border-mauve6"
          aria-label="Manage your account"
        >
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab}
              className="flex capitalize h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-primary-1 data-[state=active]:text-primary-1  data-[state=active]:font-semibold"
              value={tab}
            >
              {tab}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>
      <div className="w-full">
        {Object.entries(data)?.map(([key, values]) => {
          return (
            <Tabs.Content
              key={`${key + "content"}`}
              className={classNames(
                "grow rounded-b-md bg-white p-5 outline-none",
                key === "previous" && "opacity-70"
              )}
              value={key}
            >
              <div className="grid grid-cols-3 gap-4">
                {values.map((item) => (
                  <div key={item.title}>
                    <HackathonCard item={item} />
                  </div>
                ))}
              </div>
            </Tabs.Content>
          );
        })}
      </div>
    </Tabs.Root>
  );
};

export default TabSwitch;
