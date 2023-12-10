import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Courses = () => {
  return (
    <div>
      <Link href={'/teacher/create'}>
      <Button variant={'destructive'}>New Course</Button>
      </Link>
    </div>
  )
}

export default Courses