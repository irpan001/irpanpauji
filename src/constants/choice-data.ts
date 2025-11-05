type Choice = {
  id: string,
  title: string,
  isLine: boolean,
}

const workingWithMeData: Choice[] = [
  {
    id: '01',
    title: 'React Expert',
    isLine: true,
  },
  {
    id: '02',
    title: 'Precise Website Implementation',
    isLine: true,
  },
  {
    id: '03',
    title: 'TypeScript Proficiency',
    isLine: true,
  },
  {
    id: '04',
    title: 'Clean, Maintainable Code',
    isLine: true,
  },
  {
    id: '05',
    title: 'Responsive Website Development',
    isLine: true,
  },
  {
    id: '06',
    title: 'UI Design Proficiency (Figma)',
    isLine: false, // terakhir biasanya ga ada garis bawah
  },
]

const anotherTalentData: Choice[] = [
  {
    id: '01',
    title: 'Basic React Knowledge',
    isLine: true,
  },
  {
    id: '02',
    title: 'Inconsistent Design Translation',
    isLine: true,
  },
  {
    id: '03',
    title: 'Little to No TypeScript Knowledge',
    isLine: true,
  },
  {
    id: '04',
    title: 'Unstructured Code',
    isLine: true,
  },
  {
    id: '05',
    title: 'Inconsistent Responsiveness',
    isLine: true,
  },
  {
    id: '06',
    title: 'No Design Skills',
    isLine: false, // terakhir ga ada garis
  },
]

export { workingWithMeData, anotherTalentData }

