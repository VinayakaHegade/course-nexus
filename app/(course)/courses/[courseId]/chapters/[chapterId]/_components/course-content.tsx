"use client";

interface CourseContentProps {
  courseId: string;
  chapterId: string;
  nextChapterId?: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
}

const CourseContent = ({
  courseId,
  chapterId,
  nextChapterId,
  isLocked,
  completeOnEnd,
  title,
}: CourseContentProps) => {
  return <div>Course Content</div>;
};

export default CourseContent;
