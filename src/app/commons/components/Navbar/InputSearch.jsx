"use client";
import { Input, Button } from "@nextui-org/react";
import { SearchIcon } from "@/app/commons/icons/myicons";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    if (e.key === "Enter" || e.type === "click") {
      if (keyword !== "") {
        e.preventDefault();
        router.push(`/search/${keyword}`);
      } else {
        alert("kosong bro isi dulu dong !");
      }
    }
  };

  return (
    <Input
      onKeyDown={handleSearch}
      ref={searchRef}
      classNames={{
        base: "max-w-full sm:max-w-md",
        inputWrapper: "bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Type to search..."
      size="md"
      startContent={
        <Button
          isIconOnly
          color="secondary"
          variant="light"
          enter
          onClick={handleSearch}>
          <SearchIcon />
        </Button>
      }
      type="search"
    />
  );
};

export default InputSearch;
