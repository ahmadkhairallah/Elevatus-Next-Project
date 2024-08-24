import { fetchJobByURI } from "@/apis/fetchJobByURI";
import Container from "@/components/shared/Container";
import Socials from "@/components/shared/Socials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StarFilledIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

const proficiencyDescriptions: { [key: string]: string } = {
  en: "Native or Bilingual Proficiency",
  ar: "Professional Working Proficiency",
};

const JobPage = async ({ params }: { params: Record<string, string> }) => {
  const { results } = await fetchJobByURI(params?.id);
  return (
    <Container>
      <Card className="p-6">
        <CardTitle>
          <div className="flex items-center gap-2 ">
            <span>{results?.title}</span>
            {results?.is_top && (
              <StarFilledIcon color="#f9e780" width={22} height={22} />
            )}
            <Badge variant="outline">{results?.job_type}</Badge>
          </div>
          <span className="font-normal text-sm">
            Posted On:{" "}
            {dayjs(results?.posted_at)
              .format("dddd, MMMM  Do, YYYY ")
              .toString()}
          </span>
        </CardTitle>
        <br />
        <CardDescription className="space-y-2">
          <h4 className="text-lg font-semibold">Description</h4>
          <div
            dangerouslySetInnerHTML={{ __html: results?.description as string }}
            className="prose"
          />
        </CardDescription>
        <CardContent className="space-y-4">
          <h4 className="text-lg font-semibold">Requirements</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: results?.requirements as string,
            }}
            className="prose"
          />
          <h4 className="text-lg font-semibold">Summary</h4>
          <Card className="p-4 flex items-center justify-between [&_span]:text-sm [&_span]:my-1 [&_div]:flex [&_div]:flex-col  ">
            <div>
              <span>
                Salary range: {results?.salary.min} - {results?.salary.max}
              </span>
              <span>Industry: {results?.industry}</span>
              <span>
                Experience Required:: {results?.years_of_experience}year(s)
                minimum
              </span>
            </div>
            <Separator orientation={"vertical"} className="h-full" />
            <div>
              <span>Major: {results?.major}</span>
              <span>Career Level:: {results?.career_level}</span>

              <span>Minimum GPA:: {results?.gpa}</span>
            </div>
          </Card>
          <div className="space-x-4">
            <h4 className="text-lg font-semibold">Required Skills</h4>
            {results?.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
          <div className="space-x-4">
            <h4 className="text-lg font-semibold">Languages</h4>
            {results?.languages.map((langObj) => {
              const [lang] = Object.entries(langObj)[0];
              const proficiency = proficiencyDescriptions[lang];
              return (
                <Badge key={lang}>
                  {" "}
                  {lang} - {proficiency}
                </Badge>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between ">
          <div className="space-y-2">
            <span>Share</span>
            <Socials />
          </div>
          <Button>Apply</Button>
        </CardFooter>
      </Card>
    </Container>
  );
};
export default JobPage;
