import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type CollapseItem = {
  key: string;
  label: string;
  children: React.ReactNode;
};

type CollapseProps = {
  items: CollapseItem[];
  defaultActiveKey?: string;
  className?: string;
};

export const Collapse = ({
  items,
  defaultActiveKey,
  className = "",
}: CollapseProps) => {
  const [activeKey, setActiveKey] = useState<string | undefined>(
    defaultActiveKey
  );

  const toggleCollapse = (key: string) => {
    setActiveKey(activeKey === key ? undefined : key);
  };

  return (
    <div className={className}>
      {items.map((item) => {
        const isActive = activeKey === item.key;
        return (
          <div key={item.key} suppressHydrationWarning>
            <button
              onClick={() => toggleCollapse(item.key)}
              className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="text-sm font-medium">{item.label}</span>
              {isActive ? (
                <ChevronDown className="w-4 h-4 transition-transform" />
              ) : (
                <ChevronRight className="w-4 h-4 transition-transform" />
              )}
            </button>
            {isActive && (
              <div className="pb-3 pt-1 px-2 animate-in fade-in slide-in-from-top-1 duration-200">
                {item.children}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
