"use client";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/switch";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<SunFilledIcon size={22} />}
      endContent={<MoonFilledIcon size={22} />}
      onChange={onChange}
    />
  );
};
