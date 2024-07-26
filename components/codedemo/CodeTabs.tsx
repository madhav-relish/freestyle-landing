'use client'
import { CodeHighlight } from "@mantine/code-highlight";
import { Tabs } from "@mantine/core";

interface tabsData {
  tabName: string;
  heading: string;
  description: string;
  code: string;
}

interface tabsProps {
  data: tabsData[];
}
const CodeTabs = ({ data }: tabsProps) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Tabs defaultValue={data && data[0].tabName}>
      <Tabs.List>
        {data.map((item, index) => (
          <Tabs.Tab value={item.tabName} key={index}>
            {item.tabName}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {data.map((item, index) => (
        <Tabs.Panel key={index} value={item.tabName}>
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-3xl font-semibold">{item.heading}</h3>
            <p>{item.description}</p>
            <CodeHighlight
            classNames={{
                pre: 'h-72 w-10',
                copy: '!ml-2'
            }}
              code={item.code}
              copyLabel="Copy code"
              copiedLabel="Copied!"
            />
          </div>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default CodeTabs;
