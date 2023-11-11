import { Chapter, Course, UserProgress } from "@prisma/client";

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

const CourseSidebar = ({course, progressCount}:CourseSidebarProps) => {
  return <aside>Course Sidebar</aside>;
};

export default CourseSidebar;
