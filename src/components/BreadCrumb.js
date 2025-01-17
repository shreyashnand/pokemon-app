import Link from "next/link";

const BreadCrumb = ({ path }) => {
  return (
    <nav className=" text-md font-semibold">
      {path.map((segment, index) => (
        <span key={segment}>
          {index > 0 && " -> "}
          {index === path.length - 1 ? (
            <span>{segment}</span>
          ) : (
            <Link href={index === 0 ? "/" : `/${segment.toLowerCase()}`}>
              {segment}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
};

export default BreadCrumb;
