import { Button, Link, Avatar } from "@nextui-org/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { authUserSession } from "@/libraries/auth_libs";
const LoginButton = async () => {
  const user = await authUserSession();

  const ActionContent = () => {
    return user ? (
      <>
        <div className="flex flex-col items-end">
          <p className="text-sm">Hi, {user.name}</p>
          <Link
            className="text-tiny text-secondary-600"
            href="/api/auth/signout">
            Sign Out
          </Link>
        </div>
        <Avatar
          isBordered
          className="transition-transform"
          color="secondary"
          size="sm"
          src={user.image}
        />
      </>
    ) : (
      <Button
        as={Link}
        href="/api/auth/signin"
        color="secondary"
        variant="flat"
        size="lg">
        Sign in
        <UserCircleIcon className="h-6 w-6 text-secondary-600" />
      </Button>
    );
  };

  return <ActionContent />;
};

export default LoginButton;
