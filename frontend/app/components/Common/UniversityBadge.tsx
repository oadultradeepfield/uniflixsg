import Image from "next/image";

interface UniversityBadgeProps {
  university: string;
}

export default function UniversityBadge({ university }: UniversityBadgeProps) {
  const badgeSrc =
    university.toLowerCase().split(" ").at(-1)?.replace(/[()']/g, "") || "";

  return (
    <div className="avatar">
      <div className="h-10 w-10 overflow-hidden rounded-full border p-1 text-neutral-content">
        <Image
          src={`/${badgeSrc}.webp`}
          alt={`${university}`}
          width={40}
          height={40}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
