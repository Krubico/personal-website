import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

interface TabData {
  label: string;
  icon: JSX.Element;
  child: JSX.Element;
}

export function BaseTabs({
  startValue,
  data,
}: {
  startValue: string;
  data: Array<TabData>;
}) {
  return (
    <Tabs value={startValue}>
      <TabsHeader className="m-auto w-80">
        {data.map(({ label, icon }) => (
          <Tab key={label} value={label}>
            <div className="flex items-center gap-2">
              {icon}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ label, child }) => (
          <TabPanel key={label} value={label}>
            {child}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
