import Image from "next/image"

interface ExperienceCardProps {
  jobTitle: string
  employmentType: string
  duration: string
  company: string
  desc: string[]
  image: string
  companyLink?: string
}

const ExperienceCard = ({jobTitle, employmentType, duration, company, desc, image, companyLink}: ExperienceCardProps) => {
  return (
    <div className="p-4 shadow  rounded bg-opacity-60 grid dark:shadow-slate hover:shadow-md transition-all">
<h3>{jobTitle}</h3>
<div>{employmentType}</div>
<div>{duration}</div>
<div>{company}</div>
<ul>
  {desc.map((li, i) => (
    <li key={i}>{li}</li>
  )) }
</ul>
<div>
  <img src={image} height={28} width={28} alt={`${company} image`} />
    </div>
    </div>

  )
}

export default ExperienceCard