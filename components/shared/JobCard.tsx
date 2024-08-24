import { StarFilledIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type JobCardType = {
  uri: string;
  title: string;
  city: string;
  careerLevel: string[];
  isTop: boolean;
};
const JobCard = (props: JobCardType) => {
  const { uri, title, city, careerLevel, isTop } = props;
  return (
    <Card className="h-72 md:max-w-72 w-full shadow-lg rounded-xl flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          {title}{" "}
          {isTop && <StarFilledIcon color="#f9e780" width={22} height={22} />}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {city}
        <Separator className="my-4" />
        {careerLevel.map((level) => (
          <span key={level}>{level}</span>
        ))}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="outline" asChild>
          <Link href={`/jobs/${uri}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default JobCard;
