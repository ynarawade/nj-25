"use client";
import { Button } from "@/components/ui/button";
import { IconBrightness } from "@tabler/icons-react";
import { useTheme } from "next-themes";

function ToogleMode() {
  const { setTheme } = useTheme();
  return (
    <Button
      variant={"ghost"}
      onClick={() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
      }}
    >
      {" "}
      <IconBrightness />{" "}
    </Button>
  );
}

export default ToogleMode;
