"use client";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Group, UnstyledButton, Button, AppShell } from "@mantine/core";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { homePageUrl } from "@/lib/utils";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      classNames={{
        navbar: ""
      }}
      padding="md"
    >
      <Group h="100%" px="md">
        <Burger className="!py-8" opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Group justify="space-between" style={{ flex: 1 }}>
          <Link href={homePageUrl}>
            {" "}
            <h3 className="font-semibold hover:underline">Freestyle</h3>
          </Link>
          <Group ml="xl" p={"md"} gap={16} visibleFrom="sm">
            <Link href={"https://docs.freestyle.dev/getting-started/astro"}>
              <UnstyledButton className="flex gap-2 hover:underline ">
                Docs <ArrowTopRightOnSquareIcon className="size-6" />
              </UnstyledButton>
            </Link>
            <Link href={homePageUrl + "/pricing"}>
              <UnstyledButton className="hover:underline">
                Pricing
              </UnstyledButton>
            </Link>
            <Link href={homePageUrl + "/demo"}>
              <Button variant="outline">Get a Demo</Button>
            </Link>
            <Link href={homePageUrl + "/get-started"}>
              <Button variant="light">Start Building</Button>
            </Link>
            {/* <ThemeButton/> */}
          </Group>
        </Group>
      </Group>

      <AppShell.Navbar className="flex flex-col gap-4 " px={8}>
        <Link href="https://www.freestyle.sh/get-started">
          <UnstyledButton>Docs</UnstyledButton>
        </Link>
        <Link href="https://www.freestyle.sh/demo">
          <UnstyledButton>Pricing</UnstyledButton>
        </Link>
        <Link href="https://www.freestyle.sh/demo">
          <Button variant="outline">Get a Demo</Button>
        </Link>
        <Link href="https://www.freestyle.sh/get-started">
          <Button variant="light">Start Building</Button>
        </Link>
      </AppShell.Navbar>
    </AppShell>
  );
};

export default Navbar;
