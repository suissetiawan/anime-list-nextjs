import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";

const SectionTitle = ({
  linkHref = "#",
  linkTitle = "View all",
  isShowButton = true,
  children,
}) => {
  const showButton = isShowButton ? "" : "hidden";
  return (
    <>
      <div className="flex flex-row justify-between">
        <p className="text-2xl font-bold">{children}</p>
        <Button color="secondary" className={showButton}>
          <Link href={linkHref}>{linkTitle}</Link>
        </Button>
      </div>
      <Divider />
    </>
  );
};

export default SectionTitle;
