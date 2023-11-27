import { Skeleton, Card, CardBody, CardFooter } from "@nextui-org/react";

const AnimeSkeleton = () => {
  return (
    <Card className="py-2" radius="sm">
      <CardBody>
        <Skeleton className="rounded-lg">
          <div className="h-40 rounded-lg bg-default-300"></div>
        </Skeleton>
      </CardBody>
      <CardFooter className="mt-[-10px] flex-col items-start space-y-2">
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </CardFooter>
    </Card>
  );
};

export default AnimeSkeleton;
