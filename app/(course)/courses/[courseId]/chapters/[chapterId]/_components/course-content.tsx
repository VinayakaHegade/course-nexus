"use client";

interface CourseContentProps {
  courseId: string;
  chapterId: string;
  nextChapterId?: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
  description: string;
}

const CourseContent = ({
  courseId,
  chapterId,
  nextChapterId,
  isLocked,
  completeOnEnd,
  title,
  description,
}: CourseContentProps) => {
  return !isLocked ? (
    <p className="mt-2  text-sm">{description}</p>
  ) : (
    <p className="mt-2  text-sm">This chapter is locked.</p>
  );
};

export default CourseContent;
